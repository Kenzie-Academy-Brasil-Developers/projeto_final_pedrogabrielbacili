import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledInputContainer = styled.div`
  width: 315px;
  height: 48px;

  display: flex;
  flex-direction: column;

  border-radius: 4px;

  font-family: ${({ theme }) => theme.fonts.primary};
  
  @media(max-width:500px){
    width:190px;
  }
  @media(max-width:350px){
        width:150px;
    
  }
  
  label{
    margin-top:-76px;
    color:${({theme})=>theme.colors.gray700};
    font-size:14px;
  }
  input{
    
    height:48px;
    border-radius:4px;
    border:1.5px solid ${({theme})=>theme.colors.gray250};
    color:${({theme})=>theme.colors.gray550};
    font-size:1rem;
    padding:16px;
    font-size:;
    &:hover{
      background:${({theme})=>theme.colors.gray100};
    };
    &:focus{
      outline: none;
      border:1.5px solid ${({theme})=>theme.colors.blue800};
    };
`;
