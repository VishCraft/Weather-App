import React, { useState } from 'react';
import { Button } from '../../common/Button';

export const LocationPicker = ({ onPick }) => {
  const [city, setCity] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (city.trim()) onPick(city.trim());
  };

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: '.5rem', margin: '1rem 0' }}>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Type a city..." />
      <Button type="submit" size="sm">Pick</Button>
    </form>
  );
};
