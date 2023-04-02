import styled from 'styled-components';

export const SectionStyled = styled.section`
  margin: ${p => p.theme.space[0]} auto;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]}
    ${p => p.theme.space[3]}px;
  max-width: ${p => p.theme.space[11]}px;
  background-color: ${p => p.theme.colors.section};
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: 1px;
  padding: ${p => p.theme.space[4]}px;
  text-align: center;
  font-style: italic;
`;
