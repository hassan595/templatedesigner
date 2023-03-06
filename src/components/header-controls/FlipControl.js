import React from "react";
// import {PanelList, ToolsHeaderOptions} from "../helper/AssetHelper";
import CustomIcon from "../common/CustomIcon";


const FlipControl = () => {



    return(
        <>
            <label htmlFor="" className={"mb-0 tde-pr-10"}  >Flip</label>
            <div className="tde-btns-holder tde-py-10 tde-px-20 d-flex align-items-center">
                <CustomIcon button active={false} onClick={()=>{}} className={"icon tde-mr-15"} src={'flip-vertical'}/>
                <CustomIcon button  active={false} onClick={()=>{}} className={"icon "} src={'flip-horizontal'}/>
            </div>
        </>
    );

}

export default FlipControl;
