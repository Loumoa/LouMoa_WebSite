import {Button as MUButton} from '@mui/material'
import './Button.css'

interface ButtonProps {
    backColor?: string
    text: String | JSX.Element
    onClick?: any
    type?: 'submit' | 'reset' | 'button',
    height?: number | 'auto',
    width?: number | string,
    border?: string,
    color?: string
}

const Button = ({text, backColor, color, width, border, height, onClick, type}: ButtonProps) => {
    return <MUButton variant="contained" onClick={onClick} style={{
        width: (width !== 'auto' ? `${width}px` : width),
        height: (height !== 'auto' ? `${height}px` : height),
        backgroundColor: backColor, color: color,
        border: border
    }
    } type={type}>{text}</MUButton>
}

export default Button