import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import CustomIcon from "./common/CustomIcon";
import {ColorVariables} from "./helper/AssetHelper";


function EditorPanelBtn({Icon, text, active, onClick, src,className,canvas,overrideFill=true}) {
    const [localActive, setLocalActive] = useState(active);
    useEffect(() => {
        setLocalActive(active);
    }, [active])
    const toggleActive = () => {
        if (active) return;
        setLocalActive(!localActive);
    }
    const handleClick=(e)=>{
        onClick(e)
    }
    return (
        <div onMouseEnter={toggleActive} onMouseLeave={toggleActive} onClick={handleClick}
             className={clsx("tde-editor-panel-btn d-flex flex-column justify-content-center align-items-center",className ,localActive && "active")}>
            <div className={clsx("tde-editor-panel-btn-icon tde-mb-5",className==="tde-colors-editor-panel-btn" && "tde-no-filter")} style={{marginBottom: 5}}>
                <CustomIcon
                    active={localActive}
                            fill ={overrideFill?ColorVariables.subHeadings:''}
                            src={src}
                            Icon={Icon}
                            overrideFill={overrideFill}

                />
            </div>
            <div className={clsx("tde-editor-panel-btn-text")}>{text}</div>
        </div>
    );
}


export default EditorPanelBtn;
