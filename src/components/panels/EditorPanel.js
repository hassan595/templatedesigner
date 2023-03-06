import React from 'react';
import {PanelList} from "../helper/AssetHelper"
import EditorPanelBtn from "../EditorPanelBtn";
import TitleIcon from '@material-ui/icons/Title';
import TaglineIcon from '@material-ui/icons/ShortText';
import PresetsIcon from '@material-ui/icons/BookmarksOutlined';
import ExtrasIcon from '@material-ui/icons/AddToPhotosOutlined';
import IconsIcon from '@material-ui/icons/FilterVintageOutlined';

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
                        {/*<EditorPanelBtn active={activeIndex === PanelList.TaglineEditorPanel}*/}
                        {/*                onClick={() => onChangeTab(PanelList.TaglineEditorPanel)} Icon={TaglineIcon}*/}
                        {/*                text={"Tagline"}/>*/}
                        <EditorPanelBtn active={activeIndex === PanelList.IconEditorPanel}
                                        onClick={() => onChangeTab(PanelList.IconEditorPanel)} Icon={IconsIcon}
                                        text={"Icon"}/>
                        {/*<EditorPanelBtn active={activeIndex === PanelList.ContainerEditorPanel}*/}
                        {/*                onClick={() => onChangeTab(PanelList.ContainerEditorPanel)}*/}
                        {/*                src={"container"} text={"Container"}/>*/}
                        {/*{!responsiveActive &&*/}
                        {/*<EditorPanelBtn active={activeIndex === PanelList.ExtrasEditorPanel}*/}
                        {/*                onClick={() => onChangeTab(PanelList.ExtrasEditorPanel)} Icon={ExtrasIcon}*/}
                        {/*                text={"Extras"}/>*/}
                        {/*}*/}

                        {/*<EditorPanelBtn active={activeIndex === PanelList.PresetsEditorPanel}*/}
                        {/*                onClick={() => onChangeTab(PanelList.PresetsEditorPanel)} Icon={PresetsIcon}*/}
                        {/*                text={"Presets"}/>*/}
                        {
                            // adminUser && <EditorPanelBtn active={activeIndex === PanelList.ThemeEditorPanel}
                            //                              onClick={() => onChangeTab(PanelList.ThemeEditorPanel)} Icon={PresetsIcon}
                            //                              text={"Theme"}/>
                        }

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
                        {/*<EditorPanelBtn className={"mt-auto"} active={activeIndex === PanelList.SavedLogoEditorPanel}*/}
                        {/*                fill={"red"} onClick={() => onChangeTab(PanelList.SavedLogoEditorPanel)}*/}
                        {/*                Icon={FavoriteIcon} text={"Saved Logo"}/>*/}

                    </div>

            </div>

        </div>
    );
}





export default EditorPanel;


