import React, {useState, useEffect} from 'react';
import {
    withStyles,
} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import CustomIcon from "./CustomIcon";
import {InputAdornment} from "@material-ui/core";

const CustomInput = withStyles((theme) => ({
    root: {
        borderRadius: 8,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: "1px solid #ECEEF0",
        fontSize: 12,
        // width: 'auto',
        padding: '15px 12px',
        // transition: theme.transitions.create(['border-color', 'box-shadow']),
        transition: "none",
        height:38

    },
    focused:{
        border: "1px solid #000000",
    },
    underline:{
        "&:before":{
            content:"none"
        },
        "&:after":{
            content:"none"
        },
    }
}))(Input);

export default function CustomSearch({ value, disabled = false, clickOnText, changeTextValue = () => { },showSearch=true }) {
    const [text, setText] = useState(value);
    const [disable, setDisable] = useState(disabled);

    useEffect(() => {
        setText(value);
        setDisable(disabled);
    }, [value, disabled])

    const handleInputChange = (e) => {
        let newValue = e.target.value;
        setText(newValue);
        changeTextValue(newValue);
    }
   const handleClick=()=>{
        if(!disable)
            clickOnText();
    }

    return (
            <CustomInput disabled={disable}
                         varient={"outlined"}
                         className={"flex-grow-1   tde-input"}
                         type="text"
                         value={text}
                         endAdornment={
                             showSearch?<InputAdornment position="end">
                                 <CustomIcon onClick={handleClick}
                                             button
                                             Icon={SearchIcon}/>
                             </InputAdornment>:<></>

                         }

                         onChange={handleInputChange}
                         onClick={handleClick}
            />
    );
}
