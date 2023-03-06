import React from "react";
import {PanelList, ToolsHeaderOptions} from "../helper/AssetHelper";
import CustomIcon from "../common/CustomIcon";
import {
    DeleteOutline as DeleteOutlineIcon,
    FilterNone as FileCopyIcon,
} from '@material-ui/icons';

const ClonedControl = (props) => {

        const {activePanel} = props
        return(
            <>
                <CustomIcon button className={"icon"} onClick={()=>{}}  Icon={DeleteOutlineIcon}/>
                {(activePanel !== PanelList.IconEditorPanel)&&
                    <CustomIcon button className={"icon tde-ml-15"} onClick={()=>{}} Icon={FileCopyIcon}/>
                }
            </>
        );

}

export default ClonedControl;

