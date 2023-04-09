import {InputAdornment,TextField} from '@mui/material'
import {ChangeEventHandler} from "react";

interface Props {
    label: string,
    type?: React.HTMLInputTypeAttribute
    onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    style?: React.CSSProperties
    value?: string
    defaultValue?: string
    name?: string
    disabled?: boolean
    children : JSX.Element | string
}

const Input = ({label, type, onChange, style, name, defaultValue, disabled, children}: Props) => {
    return <TextField
        name={name}
        style={style}
        label={label}
        variant="outlined"
        type={type}
        onChange={onChange}
        color={"primary"}
        defaultValue={defaultValue}
        disabled={disabled}
        InputProps={{
            endAdornment : <InputAdornment position="end">{children}</InputAdornment>
        }}
    />
}

export default Input