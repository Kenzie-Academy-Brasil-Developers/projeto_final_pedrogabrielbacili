import styled, {css} from "styled-components";

interface IStyledTitleProps {
    $fontSize: 'one' | 'two' | 'three' | 'four';
    textAlign?: 'center' | 'left' | 'right';
    fontColor?:'white' | 'gray' | 'gray600';
  }

export const StyledTitle = styled.div<IStyledTitleProps>`
    font-family: "inter" ;
    line-height: 1.6;
    text-align: ${({ textAlign }) => textAlign};

    ${({ $fontSize})=>{
        switch($fontSize){
            case 'one':
                return css`
                    font-weight:700;
                    font-size: 24px;
                `
            case 'two':
                return css`
                    font-weight:600;
                    font-size:18px;
                `
            case 'three':
                return css`
                    font-size:14px;
                    font-weight:500;
                `
        }

    }}
    ${({ fontColor, theme }) => {
        switch (fontColor) {
          case 'white':
            return css`
              color: ${theme.colors.white};
            `;
            case 'gray':
                return css`
                 color:${theme.colors.gray700}
                `;
            case 'gray600':
                return css`
                    color:${theme.colors.gray600}
                `
        }
      }}

`
