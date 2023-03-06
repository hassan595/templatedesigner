import React, {useState} from "react";
import { withStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import ExpandMore from '@material-ui/icons/ExpandMore';
import {ColorVariables} from "../helper/AssetHelper";

const BootstrapInput = withStyles(theme => ({

    input: {
        position       : "relative",
        backgroundColor: theme.palette.common.white,
        border         : "1px solid " + ColorVariables.superLightGray2,
        borderRadius   : 8,
        display        : "flex",
        fontSize       : 12,
        padding        : '0px 12px',
        transition     : "none",
        height         : 38,
        textTransform:'capitalize',

        "&:focus": {
            borderRadius   : 8,
            backgroundColor: theme.palette.common.white,

        },
    }
}))(InputBase);

const CustomNativeSelect = withStyles(theme => ({
    icon: {
        right: "12px",
        color:ColorVariables.mildText
    }
}))(NativeSelect);


// const ExpandMoreIcon ="<CustomIcon Icon={ExpandMore}/>";

export default function CustomSelect({selected, changeSelection, options})
{
    // const classes = useStyles();
     const [style, setStyle] = useState(selected);

    React.useEffect(()=>{
        setStyle(selected);
    },[selected]);

    const handleChange = (event) => {
        changeSelection(event.target.value);
        setStyle(event.target.value);

    };
    return (
        <FormControl fullWidth>
            <CustomNativeSelect
                id="demo-customized-select-native"
                value={style}
                onChange={handleChange}
                input={<BootstrapInput/>}
                IconComponent={ExpandMore}
            >

                {
                    options?.map((item, index) => {
                        return (<option  value={item} key={index}>{item}</option>)
                    })
                }
            </CustomNativeSelect>
        </FormControl>
    );
}
