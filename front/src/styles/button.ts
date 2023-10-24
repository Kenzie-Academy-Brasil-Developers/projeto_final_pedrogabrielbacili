import styled, { css } from "styled-components";

interface IStyledButtonProps {
    $buttonSize: 'big' | 'medium';
    $buttonStyle: 'buttonBigGray' | 'buttonMediumNegative' | 'buttonBigDisable' 
    | 'buttonBigBlueOpacity' | 'buttonBigBlue' | 'buttonBig45' |
    'buttonBigLight' | 'buttonBigOutlineLight' | 'buttonBigOutline1' | 'buttonOutline2'| 
    'buttonBlue1' | 'buttonLink' | 'buttonAlert'| 'buttonSucess'| 'buttonBlueDisable' | 'buttonTipoDeConta';
  }

export const StyledButtonCSS = styled.button<IStyledButtonProps>`
    cursor:pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap:10px;

    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight:600;
    font-size: 1rem;

    border-radius: 4px;
    transition:0.4s;

    ${({$buttonSize})=>{
        switch ($buttonSize){
            case 'medium':
                return css`
                    height:48px;
                    width:150px;
                    padding:12px, 20px, 12px, 20px;
                `;
            case 'big':
                return css`
                    height:48px;
                    width:315px;
                    padding:12px 28px 12px 28px;
                    
                `;
        }
    }}

    ${({theme, $buttonStyle})=>{
        switch ($buttonStyle){
            case 'buttonBigGray':
                return css`
                    color: ${theme.colors.white};
                    background:${theme.colors.gray900};
                    &:hover{
                        background:${theme.colors.gray700};
                    }
                `
            case 'buttonMediumNegative':
                return css`
                    color:${theme.colors.gray600};
                    background: ${theme.colors.gray400};
                    &:hover{
                        color:${theme.colors.gray600};
                        background:${theme.colors.gray450};
                    }
                `
            case 'buttonBigDisable':
                return css`
                    color:${theme.colors.white};
                    background:${theme.colors.gray450};
                `
            case 'buttonBigBlue':
                return css`
                    color:${theme.colors.white};
                    background:${theme.colors.blue900 };
                    &:hover{
                        color:${theme.colors.white};
                        background:${theme.colors.blue800};
                    }
                `
            case 'buttonBigBlueOpacity':
                return css`
                    color:${theme.colors.blue900};
                    background:${theme.colors.blue100};
                `
            case 'buttonBigLight':
                return css`
                    color:${theme.colors.gray700};
                    background:${theme.colors.gray10};
                `
            case 'buttonBigOutlineLight':
                return css`
                    color:${theme.colors.gray10};
                    background:${theme.colors.gray10};
                    &:hover{
                        color:${theme.colors.gray700};
                        background:${theme.colors.gray10};
                    }
                `
            case 'buttonBigOutline1':
                return css`
                    color:${theme.colors.gray900};
                    background:${theme.colors.white};
                    border-color:${theme.colors.gray900};
                    border:1.5px;
                `
            case 'buttonBig45':
                return css`
                    background:${theme.colors.gray700};
                    color:${theme.colors.gray10};
                `
            case 'buttonOutline2':
                return css`
                    background:${theme.colors.white};
                    color:${theme.colors.gray900};
                    border:1.5px solid ${theme.colors.gray500};
                    &:hover{
                        background:${theme.colors.gray700};
                        color:${theme.colors.gray10};
                    }
                `
            case 'buttonTipoDeConta':
                return css`
                    background:${theme.colors.white};
                    color:${theme.colors.gray900};
                    border:1.5px solid ${theme.colors.gray500};
                    &:active{
                        background:${theme.colors.blue900};
                        color:${theme.colors.white};
                        
                    }
                `
            case 'buttonBlue1':
                return css`
                    background:${theme.colors.white};
                    color:${theme.colors.blue900};
                    border-color:${theme.colors.blue900};
                    border:1.5px;
                    &:hover{
                        color:${theme.colors.blue900};
                        background:${theme.colors.white};
                        border:${theme.colors.blue900};
                    }
                `
            case 'buttonLink':
                return css`
                    background:${theme.colors.white};
                    color:${theme.colors.gray900};
                    &:hover{
                        background:${theme.colors.gray100};
                        color:${theme.colors.gray900};
                    }
                `
            case 'buttonAlert':
                return css`
                    background:${theme.colors.feedback.negativeRed500};
                    color:${theme.colors.feedback.negativeRed900};
                    &:hover{
                        background:${theme.colors.feedback.negativeRed600};
                        color:${theme.colors.feedback.negativeRed900};
                    }
                `
            case 'buttonSucess':
                return css`
                    background:${theme.colors.feedback.sucessGreen500};
                    color:${theme.colors.feedback.sucessGreen900};
                    &:hover{
                        background:${theme.colors.feedback.sucessGreen600};
                        color:${theme.colors.feedback.sucessGreen900};
                    }
                `
            case 'buttonBlueDisable':
                return css`
                    background:${theme.colors.blue300};
                    color:${theme.colors.blue100};
                `
            
        }
    }}
`