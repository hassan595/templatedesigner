import React from "react";

import CustomIcon from "../common/CustomIcon";

import {
    VerticalAlignBottom as VerticalAlignBottomIcon,
    VerticalAlignTop as VerticalAlignTopIcon
} from "@material-ui/icons";

const LayeringControl = () => {




        return(
            <>
                <label htmlFor="" className={"mb-0 tde-pr-10"}>Layering</label>
                <div className="tde-btns-holder tde-py-10 tde-px-20 d-flex align-items-center">
                        <CustomIcon button onClick={()=>{}}  className={"icon tde-mr-15"}
                                    Icon={VerticalAlignTopIcon}/>
                        <CustomIcon button onClick={()=>{}}  className={"icon"}
                                    Icon={VerticalAlignBottomIcon}/>

                </div>
            </>
        );

}



export default LayeringControl;
