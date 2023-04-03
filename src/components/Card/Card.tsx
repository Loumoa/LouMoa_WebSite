

interface CardProps {
    width: number | string;
    height: number | string;
    color : string;
    textColor?: string;
    onClick?: () => void;
    children: JSX.Element;
}

const Card = ({width, height, color, textColor, onClick, children}: CardProps) => {

    return (
        <div className={'card'} style={{
            width: (typeof width !== 'string' ? `${width}px` : width),
            height: (typeof height !== 'string' ? `${height}px` : height),
            backgroundColor: color, color: textColor
        }}
             onClick={onClick}
        >
            {children}
        </div>
    );
}
export default Card;
