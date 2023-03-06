import React from "react";
import {lineLayoutValues, PanelList} from "../helper/AssetHelper";
import CustomIcon from "../common/CustomIcon";

const LayoutControl = (props) => {


    const isActive = (type) => {
        return undefined === type;
    }

    
        const {activePanel} = props;

        return (
            <>
                {activePanel === PanelList.TaglineEditorPanel &&

                <>
                    <label htmlFor="" className={"mb-0 tde-pr-10"}>Layout</label>
                    <div className="tde-btns-holder tde-py-10 tde-px-20 d-flex align-items-center">
                        <CustomIcon button
                                    active={isActive('top')}
                                    onClick={() => {} } className={"icon tde-mr-15"}
                                    src={"tagline-bottom"}/>
                        <CustomIcon button
                                    active={isActive('left')}
                                    onClick={() => {}} className={"icon tde-mr-15"}
                                    src={"tagline-left"}/>
                        <CustomIcon button
                                    active={isActive('right')}
                                    onClick={() => {}} className={"icon tde-mr-15"}
                                    src={"tagline-right"}/>
                        <CustomIcon button
                                    active={isActive('bottom')}
                                    onClick={() => {}} className={"icon "}
                                    src={"tagline-bottom"}/>
                    </div>
                </>
                }

                {activePanel === PanelList.IconEditorPanel &&
                <>
                    <label htmlFor="" className={"mb-0 tde-pr-10"}>Layout</label>
                    <div className="tde-btns-holder tde-py-10 tde-px-20 d-flex align-items-center">
                        <CustomIcon button active={isActive('top')}
                                    onClick={() => {}} className={"icon tde-mr-15"}
                                    src={"layout-top"}/>
                        <CustomIcon button
                                    active={isActive('left')}
                                    onClick={() => {}} className={"icon tde-mr-15"}
                                    src={"layout-left"}/>
                        <CustomIcon button
                                    active={isActive('right')}
                                    onClick={() => {}} className={"icon tde-mr-15"}
                                    src={"layout-right"}/>
                        <CustomIcon button
                                    active={isActive('bottom')}
                                    onClick={() => {}} className={"icon "}
                                    src={"layout-bottom"}/>
                    </div>
                </>
                }

                {activePanel === PanelList.ExtrasEditorPanel &&
                <>
                    <label htmlFor="" className={"mb-0 tde-pr-10"}>Layout</label>
                    <div className="tde-btns-holder tde-py-10 tde-px-20 d-flex align-items-center">
                        <CustomIcon button
                                    onClick={() => {}}
                                    active={isActive(lineLayoutValues.BW_ICON_NAME)}
                                    className={"icon tde-mr-15"}
                                    src={"center-above"}/>
                        <CustomIcon button
                                    onClick={() => {}}
                                    active={isActive(lineLayoutValues.ABOVE_ICON)}

                                    className={"icon tde-mr-15"}
                                    src={"extras-top"}/>
                        <CustomIcon button
                                    onClick={() => {}}
                                    active={isActive(lineLayoutValues.BELOW_NAME)}
                                    className={"icon tde-mr-15"}
                                    src={"extras-bottom"}/>
                        <CustomIcon button
                                    onClick={() => {}}
                                    active={isActive(lineLayoutValues.BW_TAGLINE_NAME)}
                                    className={"icon "}
                                    src={"center-below"}/>

                    </div>
                </>
                }
            </>
        );

    


}

export default LayoutControl;
