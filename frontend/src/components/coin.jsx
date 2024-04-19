import React from 'react';
import { Card, Image } from 'react-bootstrap';

const Coin = ({ id, image, name, symbol, current_price, price_change_percentage_24h }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(current_price);

  const formattedChange = `${price_change_percentage_24h.toFixed(2)}%`;

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Image variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name} ({symbol})</Card.Title>
        <Card.Text>
          Price: {formattedPrice} | Change: {formattedChange}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default {Coin};
