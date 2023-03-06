import React from "react"


import ControlCameraOutlined from '@material-ui/icons/ControlCameraOutlined';

import CollapsableSection from "./CollapsableSection";
import CustomSlider from "./CustomSlider";




class PositionIt extends React.Component {

    state = {
        minVerHeight:40,
        maxVerHeight:0,
        minHorWidth:40,
        maxHorWidth:0,
        objectTop:0,
        objectLeft:0,
        initialAngle:0,
        maxAngle:360
    }


    render() {
        return (
            <CollapsableSection label={"POSITION"} Icon={ControlCameraOutlined}  responsiveToggeling={this.props.responsiveToggeling}
                                responsiveSlider={this.props.responsiveSlider} hide={this.props.hide} checked={this.props.checked}>

                <CustomSlider heading={"Vertical Position"} val={this.state.objectTop} min={this.state.minVerHeight} max={this.state.maxVerHeight} unit={"px"}
                              onChange={this.changeVerticalPosition}
                              disabled={this.props.disabled}
                />
                <CustomSlider className={"tde-mt-25"} heading={"Horizontal Position"} val={this.state.objectLeft} min={this.state.minHorWidth}
                              max={this.state.maxHorWidth} unit={"px"}
                              onChange={this.changeHorizontalPosition}
                              disabled={this.props.disabled}
                />

                <CustomSlider className={"tde-mt-25"} heading={"Rotation"} val={this.state.initialAngle} min={0} max={360} unit={"px"}
                              onChange={this.onChangeRotation}
                              disabled={this.props.disabled}
                />

            </CollapsableSection>
        )
    }
}




export default PositionIt
