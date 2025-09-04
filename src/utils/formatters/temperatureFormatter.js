export const formatTemperature = (temp, unit = 'C') => {
  const rounded = Math.round(temp);
  return `${rounded}°${unit}`;
};

export const convertTemperature = (temp, from, to) => {
  if (from === to) return temp;
  
  if (from === 'C' && to === 'F') {
    return (temp * 9/5) + 32;
  }
  
  if (from === 'F' && to === 'C') {
    return (temp - 32) * 5/9;
  }
  
  return temp;
};
