import React from 'react';

import Card from 'react-bootstrap/Card';

const TradingHistoryCard: React.FC = () => {
  return (
    <>
      <Card.Img variant='top' src='/img/vn-flag.jpg' />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.ImgOverlay>
    </>
  );
};

export default TradingHistoryCard;
