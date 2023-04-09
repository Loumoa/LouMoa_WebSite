import {Dialog} from "@mui/material";
import React from "react";

interface PopupProps {
    onClick?: () => void;
    open: boolean;
    children: JSX.Element;
    onClose?:()=>void;
}


const Popup = ({open, children, onClose}: PopupProps ) => {

    return (
        <Dialog open={open} onClose={onClose}>
            {children}
        </Dialog>
    );
}


export default Popup;