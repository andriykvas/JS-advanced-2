export const getRandomColor = function() {
  return (
    "#" +
    Math.random()
      .toString(16)
      .substr(-6)
  );
};
