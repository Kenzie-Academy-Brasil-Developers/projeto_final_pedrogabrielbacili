import styled from "styled-components";


export const  StyledHeader = styled.header`
  background: ${({theme}) => theme.colors.gray10};
  whith:100%;
  height:80px;
  border-bottom:2px solid ${({theme})=>theme.colors.gray450};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButtonRegisterAndLogin = styled.div`
    display:flex;
    align-items:center;
    margin-right: 2%;
    border-left: 2px solid ${({theme})=>theme.colors.gray400};
    width:300px;
    height:79px;
    .buttonLogin{
      margin-right: 24px;
      margin-left: 65px;
    }
`
export const StyledTextDegrade = styled.div`
  margin-left:5%;
  font-size: 36px;
  font-weight: bold;
  display: inline-block;
  background: linear-gradient(to right, #0B0D0D, #4529E6);
  -webkit-background-clip: text;
  color: transparent;
    .shop{
      font-size:22px;
    }
`;