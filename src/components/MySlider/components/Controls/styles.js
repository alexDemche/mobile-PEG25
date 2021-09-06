import styled from 'styled-components/native';

export const ControlsButtonWrapper = styled.View`
  margin-bottom: 20px;
`;

export const ControlsContainer = styled.SafeAreaView`
  background-color: ${props => props.theme.accentColorTransparent};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: ${props => (props.isShown ? 'flex' : 'none')};
`;

export const ControlsHeader = styled.View`
  margin-bottom: auto;
  width: 100%;
  padding: 0 10px;
  align-items: center;
  display: flex;
`;

export const ControlsHeaderButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

export const ControlsMainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
