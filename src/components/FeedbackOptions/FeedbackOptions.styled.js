import styled from 'styled-components';
import setBackgroungColor from 'utils/setBackgroundColor';

export const Button = styled.button`
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: 1px;
  text-transform: capitalize;

  padding: ${p => p.theme.space[4]}px;
  width: ${p => p.theme.space[7]}px;

  background-color: ${setBackgroungColor};

  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid;
  box-shadow: ${p => p.theme.shadows.normal};
  transform: scale(1);
  transition: transform ${p => p.theme.transitions.ease},
    box-shadow ${p => p.theme.transitions.ease};
  :hover {
    box-shadow: ${p => p.theme.shadows.hover};
  }
  :active {
    transform: scale(0.95);
  }
`;
