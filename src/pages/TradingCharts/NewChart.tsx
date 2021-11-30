import React from 'react';
import { format } from 'd3-format';
import { ChartCanvas, Chart } from 'react-stockcharts';
import {
  BarSeries,
  CandlestickSeries,
  LineSeries
} from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import {
  CrossHairCursor,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  PriceCoordinate
} from 'react-stockcharts/lib/coordinates';
import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale';
import { OHLCTooltip } from 'react-stockcharts/lib/tooltip';
import { tma } from 'react-stockcharts/lib/indicator';
import { fitWidth } from 'react-stockcharts/lib/helper';
import moment from 'moment';
import MyOHLCTooltip from './MyOHLCTooltip';
import { isMobile } from 'react-device-detect';

const mouseEdgeAppearance = {
  textFill: '#FFFFFF',
  stroke: '#05233B',
  strokeOpacity: 1,
  strokeWidth: 3,
  arrowWidth: 5,
  fill: '#05233B'
};

interface IProps {
  data: [];
  width: number;
  ratio: number;
}

const CandleStickChartWithMACDIndicator = React.forwardRef(
  (props: IProps, ref) => {
    const { data: initialData, ratio } = props;
    const tma10 = tma()
      .id(1)
      .options({ windowSize: 12 })
      .merge((d, c) => {
        d.tma10 = c;
      })
      .accessor(d => d.tma10)
      .stroke('#db4931');

    const tma3 = tma()
      .id(2)
      .options({ windowSize: 8 })
      .merge((d, c) => {
        d.tma3 = c;
      })
      .accessor(d => d.tma3)
      .stroke('#2cac40');

    const calculatedData = tma3(tma10(initialData));

    initialData.map((data: any) => {
      data.date = new Date(data.date);
      return data;
    });
    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      d => d.date
    );

    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
      calculatedData
    );

    const xExtents = [isMobile ? 50.3 : 20.3, data.length];

    const margin = { left: 0, right: 80, top: 35, bottom: 30 };
    const height =
      window.innerWidth < 768
        ? window.innerHeight - 270
        : window.innerHeight - 64;
    const width =
      window.innerWidth < 768
        ? window.innerWidth - 20
        : window.innerWidth < 992
          ? window.innerWidth - (window.innerWidth * 40) / 100
          : window.innerWidth - (window.innerWidth * 30) / 100;
    const yGrid = { innerTickSize: -1 * (width - margin.left - margin.right) };
    const closeLast = data[data.length - 1].close;
    const openLast = data[data.length - 1].open;

    return (
      <ChartCanvas
        ref={ref}
        height={height}
        width={width}
        ratio={ratio}
        margin={margin}
        type="hybrid"
        seriesName="TRADING"
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
        panEvent={false}
        zoomEvent={false}
        clamp={false}
      >
        <Chart
          id={1}
          yExtents={[d => [d.high, d.low], tma10.accessor(), tma3.accessor()]}
          padding={{ top: 60, bottom: 120 }}
        >
          <XAxis
            axisAt="bottom"
            orient="bottom"
            tickStroke="#D8D8D8"
            stroke="#2a2f55"
            tickStrokeOpacity={0.1}
            zoomEnabled={false}
            fontFamily="Circular Std"
            fontSize={14}
            ticks={isMobile ? 3 : 10}
          />
          <YAxis
            axisAt="right"
            orient="right"
            tickStroke="#D8D8D8"
            ticks={7}
            stroke="#2a2f55"
            opacity={0}
            tickStrokeOpacity={0.1}
            zoomEnabled={false}
            fontFamily="Circular Std"
            fontSize={14}
            {...yGrid}
          />
          <MouseCoordinateY
            at="right"
            orient="right"
            displayFormat={format('.1f')}
            {...mouseEdgeAppearance}
            fill="transparent"
            textFill="#D8D8D8"
            fontFamily="Circular Std"
            fontSize={14}
            arrowWidth={0}
            strokeOpacity={0}
          />
          <LineSeries yAccessor={tma10.accessor()} stroke={tma10.stroke()} />
          <LineSeries yAccessor={tma3.accessor()} stroke={tma3.stroke()} />
          <CandlestickSeries
            fill={d => (d.close < d.open ? '#db4931' : '#2cac40')}
            wickStroke={d => (d.close < d.open ? '#db4931' : '#2cac40')}
            stroke={d =>
              d.close - d.open <= -1 || d.close - d.open >= 1
                ? '#2a2f55'
                : 
                d.close < d.open
                  ? '#db4931'
                  : '#2cac40'
            }
            opacity={1}
            id={0}
          />
          <PriceCoordinate
            price={closeLast}
            lineOpacity={1}
            lineStroke={closeLast < openLast ? '#db4931' : '#2cac40'}
            displayFormat={format('.2f')}
          />
          <EdgeIndicator
            itemType="last"
            orient="right"
            edgeAt="right"
            yAccessor={d => d.close}
            fill={d => (d.close < d.open ? '#db4931' : '#2cac40')}
            arrowWidth={0}
            lineStroke={closeLast < openLast ? '#db4931' : '#2cac40'}
          />
          {window.innerWidth >= 768 && (
            <OHLCTooltip
              displayTexts={{
                d: '',
                o: 'Open',
                h: 'High',
                l: 'Low',
                c: 'Close',
                v: 'Vol'
              }}
            >
              {(_props, _moreProps, itemsToDisplay) => (
                <MyOHLCTooltip {...itemsToDisplay} />
              )}
            </OHLCTooltip>
          )}
        </Chart>
        <Chart
          id={2}
          height={80}
          yExtents={d => d.volume}
          origin={(w, h) => [0, h - 80]}
        >
          <MouseCoordinateX
            at="bottom"
            orient="bottom"
            displayFormat={date => moment(date).format(`hh:mm:ss A`)}
          />
          <BarSeries
            yAccessor={d => isMobile ? (d.volume + 10) / 2 : d.volume + 10}
            fill={d => !d.is_open ? '#686868' : (d.close < d.open ? '#db4931' : '#2cac40')}
            opacity={1}
          />
        </Chart>
        <CrossHairCursor strokeDasharray="Solid" stroke="#D8D8D8" />
      </ChartCanvas>
    );
  }
);

export default fitWidth(CandleStickChartWithMACDIndicator);
