import React from "react";
import {ColorVariables} from "../helper/AssetHelper";
const defaultSize=20;
const  CustomIcon = ({Icon, fill,overrideFill=true, size, button, active, src,...props}) => {

    if(overrideFill){
        if (active)
            fill = ColorVariables.darkAccent;

        fill=  fill || ColorVariables.iconDefault;

    }

    const style = { defaultSize, height: size || defaultSize, width: size || defaultSize};
    const iconSource=`./images/icons/${src}.svg`;

    return (<div  className={`d-flex align-items-center ${props.className} ${button&& "tde-pointer icon-btn"} ${active&&'active'}`} style={{color:fill}} >
            {src ?<img src={iconSource+'?v=1'}
                       onClick={props?.onClick}
                       style={style}
                       alt={"icon-image"}/>
                       :
                <Icon style={style} onClick={props?.onClick}  />
            }

        </div>
    )
}

export default CustomIcon;
