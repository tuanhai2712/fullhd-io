import React, { useEffect, useState, useContext } from 'react';
import CanvasJSReact from './canvasjs.react';
import SocketContext from '@components/socket_context/context';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const AIChart = () => {
  const [state, setState] = useState<object[]>([]);
  const { aiFirstData } = useContext(SocketContext);

  useEffect(() => {
    setState(aiFirstData);
  }, [aiFirstData]);

  const options = {
    theme: 'light2', // "light1", "dark1", "dark2"
    animationEnabled: true,
    backgroundColor: 'transparent',
    axisY: {
      minimum: 0,
      maximum: 100,
      interval: 25,
      gridThickness: 0.2,
      labelFontSize: 11,
      labelFontColor: '#fff',
    },
    axisX: {
      gridThickness: 0.2,
      labelFontSize: 11,
      labelFontColor: '#fff',
    },
    height: 220,
    data: [
      {
        type: 'area',
        dataPoints: state,
        color: '#1f6149',
      },
    ],
  };
  return (
    <div className="ChartWithZoom" style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          backgroundColor: '#13183d',
          width: '60px',
          height: '15px',
          zIndex: 1,
        }}
      ></div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default React.memo(AIChart);
