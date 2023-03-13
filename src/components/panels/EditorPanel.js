import React from 'react';
import {PanelList} from "../helper/AssetHelper"
import EditorPanelBtn from "../EditorPanelBtn";
import TitleIcon from '@material-ui/icons/Title';

import IconsIcon from '@material-ui/icons/FilterVintageOutlined';
import SettingsIcon from '@material-ui/icons/Settings';

import EditIcon from '@material-ui/icons/Edit';
import clsx from "clsx";

const EditorPanel = ({activeColor, setContainerPosition, onChangeTab, activeIndex, filterPanelBtns = false,adminUser ,responsiveActive=false}) => {

    return (

        <div className="tde-left-sub-section" >
            <div className="tde-editor-options-btn-panel">

                    <div className={clsx("d-flex flex-column h-100 responsiveEditorPanel")}>
                        <EditorPanelBtn active={activeIndex === PanelList.TextEditorPanel|| activeIndex === PanelList.TextNameEditorPanel}
                                        onClick={() => onChangeTab(PanelList.TextNameEditorPanel)} Icon={TitleIcon}
                                        text={"Name"}/>
                        <EditorPanelBtn active={activeIndex === PanelList.IconEditorPanel}
                                        onClick={() => onChangeTab(PanelList.IconEditorPanel)} Icon={IconsIcon}
                                        text={"Icon"}/>


                        <div>
                            <EditorPanelBtn className={"tde-colors-editor-panel-btn"}
                                            overrideFill={false}
                                            active={activeIndex === PanelList.ColorsEditorPanel}
                                            onClick={() => onChangeTab(PanelList.ColorsEditorPanel)}
                                            src={activeIndex === PanelList.ColorsEditorPanel?"colors_active":"colors_1"}
                                            text={"Colors"}/>

                            <div className={'d-flex tde-ml-0'} style={{height: '6px', width: '57px', marginLeft: "15px"}}>
                                {activeColor?.slice(0,4).map((item, index) => {
                                    return (
                                        <div key={index} style={{height: '6px', width: '14px', backgroundColor: item}}/>)
                                })}
                            </div>
                        </div>
                        <EditorPanelBtn active={activeIndex === PanelList.SettingsEditorPanel}
                                        fill={"red"} onClick={() => onChangeTab(PanelList.SettingsEditorPanel)}
                                        Icon={SettingsIcon} text={"Settings"}/>

                    </div>

            </div>

        </div>
    );
}





export default EditorPanel;


