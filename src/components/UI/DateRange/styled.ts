import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const StDateRangeWrapper = styled.div`
  position: relative;
  display: inline-block;

  > svg {
    position: absolute;
    top: 22px;
    right: 20px;
    z-index: 1;
  }

  > div {
    position: relative;
    z-index: 0;
  }

  input {
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    box-sizing: border-box;
    border: 1px solid ${theme.colors.border};
    color: ${theme.colorsText.primary};
    font-size: 1em;
    line-height: ${theme.sizesHeight.dateRange};
    height: ${theme.sizesHeight.dateRange};
    outline: 0;
    padding: ${theme.padding.default};
    width: ${theme.sizesWidth.dateRange};
  }
`;
