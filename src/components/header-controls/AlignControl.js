import React from "react";
import {PanelList} from "../helper/AssetHelper";
import CustomIcon from "../common/CustomIcon";
import {
    FormatAlignCenter, FormatAlignLeft, FormatAlignRight, FormatAlignJustify,
    VerticalAlignBottom as VerticalAlignBottomIcon,
    VerticalAlignCenter as VerticalAlignCenterIcon,
    VerticalAlignTop as VerticalAlignTopIcon,
} from '@material-ui/icons';

const AlignControl = (props) => {

    const isActive = (type) => {
        return undefined === type;
    }

    
        const {activePanel, activeObject} = props;
        return (
            <>
                {(activePanel === PanelList.TextEditorPanel || activePanel === PanelList.TaglineEditorPanel ||
                    activePanel === PanelList.TextNameEditorPanel ) &&
                <>
                    <label htmlFor="" className={"mb-0 tde-pr-10"}>Align</label>
                    <div className="tde-btns-holder tde-py-10 tde-px-20 d-flex align-items-center">
                        <CustomIcon button
                                    active={isActive('left')}
                                    onClick={ () => {} }
                                    className={"icon tde-mr-15"} Icon={FormatAlignLeft}/>
                        <CustomIcon button active={isActive('center')}
                                    onClick={ () => {} }
                                    className={"icon tde-mr-15"}
                                    Icon={FormatAlignCenter}/>
                        <CustomIcon button
                                    active={isActive('right')}
                                    onClick={ () => {} }
                                    className={"icon tde-mr-15"}
                                    Icon={FormatAlignRight}/>
                        <CustomIcon button active={isActive('justify')}
                                    onClick={ () => {} }
                                    className={"icon"}
                                    src={"even-width"}/>
                    </div>
                </>
                }
                {activePanel === PanelList.IconEditorPanel &&
                <>
                    <label htmlFor="" className={"mb-0 tde-pr-10"}>Align</label>
                    <div className="tde-btns-holder tde-py-10 tde-px-20 d-flex align-items-center">
                        {activeObject && (activeObject.custom.layoutAlign === "top" || activeObject.custom.layoutAlign === "bottom") &&
                        <>
                            <CustomIcon button onClick={ () => {} } active={isActive('h-center')} className={"icon tde-mr-15"} src={"align-v-center"}/>
                            <CustomIcon button onClick={() => {} } active={isActive('left')} className={"icon tde-mr-15"} src={"align-v-left"}/>
                            <CustomIcon button onClick={() => {} } active={isActive('right')} className={"icon"} src={"align-v-right"}/>
                        </>
                        }

                        {activeObject && (activeObject.custom.layoutAlign === "left" || activeObject.custom.layoutAlign === "right") &&
                        <>
                            <CustomIcon button onClick={() => {}} active={isActive('v-center')}
                                        className={"icon tde-mr-15"}
                                        src={'align-center'}
                            />
                            <CustomIcon button onClick={() => {}} active={isActive('top')}
                                        className={"icon tde-mr-15"}
                                        src={'align-top'}
                            />
                            <CustomIcon button onClick={() => {
                            }} active={isActive('bottom')} className={"icon"} src={'align-bottom'}/>
                        </>
                        }
                    </div>
                </>
                }
                {activePanel === PanelList.ContainerEditorPanel || activePanel === PanelList.ExtrasEditorPanel &&
                <>
                    <label htmlFor="" className={"mb-0 tde-pr-10"}>Align</label>
                    <div className="tde-btns-holder tde-py-10 tde-px-20 d-flex align-items-center">
                        <CustomIcon button onClick={() => {}}
                                    active={isActive('v-center')}
                                    className={"icon tde-mr-15"}
                                    src={'align-center'} />
                        <CustomIcon button onClick={() => {}}
                                    active={isActive('top')}
                                    className={"icon tde-mr-15"}
                                    src={'align-top'}
                        />
                        <CustomIcon button onClick={() => {}}
                                    active={isActive('bottom')} className={"icon tde-mr-15"}
                                    src={'align-bottom'}/>

                        <CustomIcon button onClick={() => {}}
                                    active={isActive('h-center')} className={"icon tde-mr-15"}
                                    src={"align-v-center"}/>
                        <CustomIcon button onClick={() => {}}
                                    active={isActive('left')} className={"icon tde-mr-15"}
                                    src={"align-v-left"}/>
                        <CustomIcon button onClick={() => {}}
                                    active={isActive('right')} className={"icon tde-mr-15"}
                                    src={"align-v-right"}/>
                    </div>
                </>
                }

            </>
        );
    


}
export default AlignControl;
