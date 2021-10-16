import styled from 'styled-components/native';
import { convertWidthInPercent } from '../../utils/dimensions';

export const StyledCategoryItemContainer = styled.TouchableOpacity`
  width: ${props => props.size}px;
  max-width: 150px;
  padding: 10px 5px;
  align-items: center;
  justify-content: center;
`;

export const StyledCategoryItemTextWrapper = styled.View`
  margin-top: 10px;
  text-align: center;
`;

export const StyledCategoryItemImage = styled.Image`
  width: ${convertWidthInPercent(20)}px;
  height: ${convertWidthInPercent(20)}px;
  max-width: 100px;
  max-height: 100px;
  border-radius: 20px;
`;
