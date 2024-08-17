import { ChangeEvent, ComponentPropsWithoutRef, FunctionComponent } from "react";

  
interface InputProps extends ComponentPropsWithoutRef<"input"> {
    type: string,
    value: string,
    placeholder: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const MainInput: FunctionComponent<InputProps> = (props) => {
    const { value, onChange, placeholder, type, ...rest } = props;

    return <input type={type} value={value} onChange={onChange} placeholder={placeholder} {...rest} />

};

export default MainInput;
