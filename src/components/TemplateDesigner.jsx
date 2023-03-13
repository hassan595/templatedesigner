import React, {useEffect, useState} from "react";
import {PanelList} from "./helper/AssetHelper"
import { fabric } from "fabric";

import SiteHeader from "./SiteHeader";
import TopBar from "./TopBar";
import EditorPanel from "./panels/EditorPanel";
import TextNameEditorPanel from "./panels/TextNameEditorPanel";
import IconEditorPanel from "./panels/IconEditorPanel";

import SettingsPanel from "./panels/SettingsPanel";

let canvas = null;

const TemplateDesigner = (props) => {
    const [activePanel, setActivePanel] = useState(PanelList.TextNameEditorPanel)
    const [isCanvasLoaded, setCanvasLoaded] = useState(false)
    const [stateCanvas, setCanvas] = useState(false)

    const {activeObject, isDesignLoaded} = props

    useEffect(()=>{
        inItCanvas()
    },[])

    const inItCanvas = () => {
        console.log("render")
        canvas = new fabric.Canvas("td-canvas", {
            width: 700,
            height: 500,
            backgroundColor: "white",
        });
        window.canvas = canvas;
        canvas.renderAll();
        setCanvasLoaded(true)
        setCanvas(canvas)

    }

    return (
        <>
            <SiteHeader />
            <TopBar/>

            <div className="tde-main-section tde-main-section-bg d-flex responsiveMood">
                <div className="tde-editor-tool-section bg-white">
                    {isCanvasLoaded&&
                        <div className="tde-editor-tool-container d-flex">
                        <EditorPanel onChangeTab={setActivePanel} activeIndex={activePanel} responsiveActive={this?.state?.responsiveMoodToggle} />
                        <div className="tde-sub-panel tde-my-15 position-relative">
                            {
                                (activePanel === PanelList.TextEditorPanel || activePanel === PanelList.TextNameEditorPanel) &&
                                <TextNameEditorPanel canvas={stateCanvas} updateToolsHeader={props?.updateToolsHeader}  type={"NameText"} responsiveActive={this?.state?.responsiveMoodToggle}/>
                            }
                            {
                                activePanel === PanelList.IconEditorPanel &&
                                <IconEditorPanel setActiveObjectUpdated={props?.setActiveObjectUpdated} updateToolsHeader={props?.updateToolsHeader} activeObject={activeObject} responsiveActive={this?.state?.responsiveMoodToggle}/>
                            }
                            {
                                activePanel === PanelList.SettingsEditorPanel &&
                                <SettingsPanel />
                            }

                        </div>

                    </div>
                    }
                </div>


                <div className="d-flex flex-grow-1 tde-right-sub-section">
                    <div
                        id={"parent-Div"}
                        className="tde-canvas-container col mx-0 px-0  h-100 d-flex flex-column flex-grow-1 overflow-auto position-relative"
                        style={{background: "#F9F9F9"}}
                    >
                        {/*{*/}
                        {/*    isDesignLoaded &&*/}
                        {/*    <div style={{display:'flex',flexDirection:'column',position:'absolute', width:'100%', height:'100%',justifyContent: 'center', alignItems: 'center'}}>*/}
                        {/*        <div className="d-flex w-100 justify-content-center" style={{paddingBottom:'74px'}}>*/}
                        {/*            <div className="lds-facebook" style={{zIndex:'999'}}>*/}
                        {/*                <div></div>*/}
                        {/*                <div></div>*/}
                        {/*                <div></div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}

                        {/*    </div>*/}
                        {/*}*/}
                        {/*<div className="tde-upper-bar">*/}
                        {/*    <div className="left-col">*/}
                        {/*        <div >*/}
                        {/*            <div className="tde-ml-15 tde-group-btn" style={{padding:'9px 9px', borderRadius:'8px'}}>*/}
                        {/*                <button className={"tde-btn mr-3"} style={{padding:'0px 5px'}} onClick={this?.undoFunc}>*/}
                        {/*                    <CustomIcon fill={'current-color'}  Icon={UndoIcon}/>*/}
                        {/*                </button>*/}
                        {/*                <button className={"tde-btn "} style={{padding:'0px 5px'}} onClick={this?.redoFunc}>*/}
                        {/*                    <CustomIcon fill={'current-color'}  Icon={RedoIcon} />*/}
                        {/*                </button>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className=" bg-light m-auto canvas-area"
                             style={{border: this?.state?.border, boxShadow: this?.state?.boxShadow}}>
                            <canvas id="td-canvas" width={700} height={700} style={{border:'1px solid #ECEEF0'}} />
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default TemplateDesigner