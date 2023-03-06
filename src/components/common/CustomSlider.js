import React, {useEffect} from "react";
import {Slider as SliderMUI, withStyles} from "@material-ui/core";
import clsx from "clsx";
import CustomIcon from "./CustomIcon";

const Slider = withStyles({
    thumb: {
        marginTop: -3,
        color: "black",
        width: 8,
        height: 8,

    },
    rail: {
        height: 2,
        color: "#C2CBD0"
    },
    track: {
        height: 2,
        color: "black"
    }
})(SliderMUI);

export default function CustomSlider({  inputIconSrc=null,
                                         className,
                                         heading,
                                         val,
                                         onChange,
                                         step = 1,
                                         min = 0,
                                         max = 100,
                                         name = 'slider',
                                         unit,
                                         disabled = false,
                                     }) {
    const [value, setValue] = React.useState(val ? val.toLocaleString() : "0");
    const [disable, setDisable] = React.useState(disabled);

    useEffect(() => {
        setValue(val ? val : "0");
        setDisable(disabled);
    }, [val, disabled]);


    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        onChange(newValue);
    };

    const handleInputChange = ({currentTarget}) => {

        let newValue = currentTarget.value;

        if (newValue < min || newValue > max) return;
        if (newValue == "") {
            setValue(0);
            onChange(0);
            return;
        }
        newValue = parseInt(newValue);
        setValue(newValue);
        onChange(newValue);


    };


    return (
        <>
            <div className={clsx("d-flex justify-content-between align-items-center", className)}>
                {heading.length > 0 && <h3 className={"mb-0 tde-sub-heading"}>{heading}</h3>}
                <div className="tde-number-input d-flex align-items-center ">
                    {inputIconSrc && <CustomIcon src={inputIconSrc} className={'tde-mr-5'}/>}
                    <input
                        type="number"
                        min={min}
                        max={max}
                        name={name + '-input'}
                        value={(value).toLocaleString()}
                        onChange={handleInputChange}
                        size={value.length}
                        disabled={disable}
                        className={'tde-bg-white w-[20px]'}
                    />
                    {unit}
                </div>
            </div>
            <div className="">
                <Slider disabled={disable}
                        value={value}
                        onChange={handleSliderChange}
                        min={min}
                        max={max}
                        step={step}
                        name={name}
                />

            </div>
        </>
    );
}
