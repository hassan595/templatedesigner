import React from 'react';
import Switch from "../common/Switch";

const AlignWithControl = (props) => {
    return (
        <>
            <label htmlFor="" className={"mb-0 tde-mr-10"}>Align with text</label>
            <Switch size={28} checked={false} onClick={props.onClick}/>
        </>
    );
}





export default  AlignWithControl

