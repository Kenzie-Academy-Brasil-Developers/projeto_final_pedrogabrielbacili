import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react"
import { StyledInputContainer } from "../../../styles/form"
import { FieldError } from "react-hook-form";
import { StyledTitle } from "../../../styles/typography";

interface IInputsProps extends InputHTMLAttributes<HTMLInputElement>{
    id?:string;
    label?:string;
    error?:FieldError;
}

const Input = forwardRef(
    ({label, error, id, ...rest}:IInputsProps, ref: ForwardedRef<HTMLInputElement>)=>{
        return (
            <div>
                <StyledInputContainer>
                    <input type="text" id={id} ref={ref} {...rest}/>
                    {label ? <label htmlFor={id}>{label}</label> : null}
                </StyledInputContainer>
                <StyledTitle $fontSize="one" fontColor="red">
                    {error ? <p>{error.message}</p>: null}
                </StyledTitle>
            </div>
        )
    }
)
export default Input