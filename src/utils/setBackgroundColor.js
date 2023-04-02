const setBackgroungColor = ({ value, theme }) => {
  switch (value) {
    case 'good':
      return theme.colors.good;
    case 'bad':
      return theme.colors.bad;
    case 'neutral':
      return theme.colors.neutral;
    default:
      return theme.colors.default;
  }
};
export default setBackgroungColor;
