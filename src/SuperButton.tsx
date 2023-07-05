import React from 'react';

type PropsType = {
    callback: () => void
    color: string
    children?: React.ReactNode
}

const SuperButton: React.FC<PropsType> = (props) => {

    const {callback, color, children, ...otherProps} = props

    return (
        <button>{children}</button>
    );
};

export default SuperButton;