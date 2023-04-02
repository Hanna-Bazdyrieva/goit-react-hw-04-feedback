import styled from 'styled-components';
import setBackgroungColor from 'utils/setBackgroundColor';

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  width: 140px;

  background-color: ${setBackgroungColor};

  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const StatType = styled.span`
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;
`;
export const StatNumber = styled.span`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
