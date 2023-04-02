import styled from 'styled-components';

const NotifyHeader = styled.h2`
  margin: ${p => p.theme.space[0]} auto;
  padding: ${p => p.theme.space[5]}px;
  /* width: 300px; */
  text-align: center;

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: underline;
  color: ${p => p.theme.colors.notify};
`;

export default NotifyHeader;
