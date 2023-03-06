import React, {useState} from "react";
import CustomIcon from "./CustomIcon";
import clsx from "clsx";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

const AddTextBtn = (props) => {
    return (
        <div onClick={props.handleAddText} className={clsx("tde-add-text-btn d-flex justify-content-between align-items-center tde-p-10",props.className)}
          >
            <span>{props.title}</span>
            <CustomIcon className={'icon'} Icon={AddOutlinedIcon} size={16}/>
        </div>
    );
}

export default AddTextBtn;
