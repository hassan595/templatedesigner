import React, {useState, useEffect} from "react";
import UnChecked from '@material-ui/icons/ToggleOffOutlined';
import Checked from '@material-ui/icons/ToggleOnOutlined';
import CustomIcon from "./CustomIcon";

const Switch = ({checked: init, onClick, collapse=false,size}) => {
    const [checked, setChecked] = useState(init);
    useEffect(() => {
        setChecked(init);
    }, [init])

    return (
        <div>
            <CustomIcon className={"tde-pointer"} size={size} Icon={checked ? Checked : UnChecked} fill={checked ? "black" : ""}
                        onClick={onClick}/>
        </div>
    );
}

export default Switch;
