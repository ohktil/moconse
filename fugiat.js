const directionNumberToDirection = (directionNumber) => {
  const directions = ['North', 'East', 'South', 'West'];
  if (directionNumber >= 0 && directionNumber < directions.length) {
    return directions[directionNumber];
  }
  throw new Error('Invalid direction number');
};
