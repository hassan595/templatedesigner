import React, {useState, useEffect, useRef} from 'react';
import {
    withStyles,
} from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {InputAdornment} from '@material-ui/core';
import Input from '@material-ui/core/Input';

// import ColorSwatch from "./ColorSwatch";

const CustomInput = withStyles((theme) => ({
    root: {
        borderRadius: 8,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: "1px solid #ECEEF0",
        fontSize: 12,
        padding: '5px 12px',
        transition: "none",
        height: 34

    },
    focused: {
        border: "1px solid #000000",
    },
    underline: {
        "&:before": {
            content: "none"
        },
        "&:after": {
            content: "none"
        },
    }
}))(Input);

export default function CustomTextInput({ value, id ,changeTextValue, clickOnText,onFocus, color, colorOnSelect, selected,multiline=false,isBrandVariationMode=false}) {
    const [text, setText] = useState(value);
    const [showCheckIcon, setShowCheckIcon] = useState(selected);
    const customInputElement = useRef(null);

    useEffect(() => {
        setText(value);
        if (!isBrandVariationMode) {
            setShowCheckIcon(selected);

            if (selected) {
                customInputElement.current.focus();
            }
        }
    }, [value, selected])
    const handleInputChange = (e) => {
        let newValue = e.target.value;
        setShowCheckIcon(true);
        setText(newValue);

        changeTextValue(newValue, e);
    }


    const handleClickOnInput = (e) => {
        clickOnText(e.target.id);
    }
 const handleFocus = (e) => {
     onFocus(id);
    }

    return (

        <>
            <div className="d-flex align-items-center adjust-bottom-margin mt-2">
                <CustomInput onFocus={handleFocus} multiline={multiline} rows={3} ref={customInputElement} varient={"outlined"} endAdornment={
                    !isBrandVariationMode && showCheckIcon && !multiline ? <InputAdornment position="end">
                            <CheckCircleIcon/>
                        </InputAdornment>
                        :
                        <></>

                }    className={"flex-grow-1 tde-input"} type="text" disabled={isBrandVariationMode} value={text} id={id} onClick={handleClickOnInput}
                             onChange={handleInputChange}/>
                <div className="ml-3">
                    {/*<ColorSwatch color={color} id={id} onSelect={colorOnSelect} colorPicker={true}*/}
                    {/*             selectColor={clickOnText}/>*/}
                </div>
            </div>
        </>
    );
}
