import React, { useContext } from 'react';
import { TradeBotTabStyled, TableStyled } from './style';
import Table from 'react-bootstrap/Table';
import SocketContext from '@components/socket_context/context';
import * as utils from '@utils/utils';

export default function TradeBotTab() {
  const { botTrade } = useContext(SocketContext);
  const renderContentBotTrade = () => {
    if (botTrade && botTrade.length) {
      return (
        <TableStyled>
          <p className="table-text-instruction">
            Scroll right to see more <span>&gt;&gt;</span>
          </p>
          <div className="table-wrapper">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Market</th>
                  <th>Status</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total (USD)</th>
                </tr>
              </thead>
              <tbody>
                {botTrade.length &&
                  botTrade.map((bot, index) => {
                    const {
                      platform,
                      price,
                      quantity,
                      total,
                      type,
                      symbol,
                    } = bot;
                    return (
                      <tr key={index}>
                        <td>{platform}</td>
                        <td
                          style={{ color: type ? 'green' : 'red' }}
                          className="status-bot-trade"
                        >
                          {type ? 'Buy' : 'Sell'}
                        </td>
                        <td style={{ textTransform: 'uppercase' }}>{symbol}</td>
                        <td>{`$ ${utils.formatter.format(price)}`}</td>
                        <td>{utils.formatter.format(quantity)}</td>
                        <td>{`$ ${utils.formatter.format(total)}`}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </TableStyled>
      );
    }
    return <div />;
  };
  return <TradeBotTabStyled>{renderContentBotTrade()}</TradeBotTabStyled>;
}
