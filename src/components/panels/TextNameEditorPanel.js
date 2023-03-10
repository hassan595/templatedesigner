import React, {useEffect, useState} from "react";
import {fabric} from "fabric"
import SlideAblePanel from "./SlidablePanel";
import {fontsList} from "../helper/AssetHelper";
import WebFont from "webfontloader";
import {
    CollapsableSection, CustomSlider,
    AddTextBtn, CustomIcon, CustomSelect
} from "../common/"
import {

    TuneOutlined,
    FormatColorText as FormatColorTextIcon,
} from '@material-ui/icons';


const TextNameEditorPanel = (props) =>{

        const { isBrandVariationMode, deletedTextName, canvas} = props;
        const [textCase, setTextCase] = useState(null)
        const [textStyle, setTextStyle] = useState(null)

        useEffect(()=>{
            console.log("rendering textpanel", )
            loadGoogleFonts(fontsList)
        },[canvas])

        let textfontSize = 15
        let fontSize = 15;
        let charSpacing = 0;
        let activeControl = true;
        let propertiesValue = null

        const loadGoogleFonts = (fonts) => {
            fonts.forEach(font =>
            {
                WebFont.load({
                    google: {
                        families: [font]
                    }
                });
            })
        }

        const addTextToCanvas = () => {
            console.log("canvas", canvas)
            console.log("wh", canvas.width/2,canvas.height/2)
            let text = new fabric.IText("template designer", {
                top: canvas.height / 2,
                left: canvas.width / 2,
                originX:'center',
                originY:'center',
                fontFamily:'alex brush',
                width: 200,
                height: 200,
                padding: 0,
                fontSize: '16',
            });
            canvas.add(text)
            canvas.setActiveObject(text)
            canvas.requestRenderAll();
        }

        const textTransform = (property) => {
            let activeObject = canvas.getActiveObject()
            if (!activeObject) return
            if (property === "uppercase")
                activeObject.text = activeObject.text.toUpperCase();
            else if (property === "lowercase")
                activeObject.text = activeObject.text.toLowerCase();
            else if (property === "capitalize")
                activeObject.text = activeObject.text.toLowerCase().replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
            setTextCase(property)
            canvas.requestRenderAll()
        }
        const handleTextStyle = (property) => {
            let activeObject = canvas.getActiveObject()
            if (!activeObject) return
            if (property === "Bold") {
                if (activeObject.fontWeight === 'Bold'){
                    activeObject.set({fontWeight:'normal'})
                    property = 'normal'
                }
                else {
                    activeObject.set({fontWeight: 'Bold'})
                }
            }
            else if (property === "Italic") {
                if (activeObject.fontStyle === 'italic') {
                    activeObject.set({fontStyle: 'normal'})
                    property = 'normal'
                }
                else {
                    activeObject.set({fontStyle:'italic'})
                }
            }
            else if (property === "underline") {
                if (activeObject.fontStyle === 'italic') {
                    activeObject.set({underline:false})
                    property = 'normal'
                }
                else {
                    activeObject.set({underline:true})
                }
            }
            setTextStyle(property)
            canvas.requestRenderAll()
        }


        const verifyTextObjects = ()=> {
            
        }
        const handleChangeRotation = (value) => {
            let activeObject = canvas.getActiveObject()
            if (!activeObject) return
            activeObject.set({angle:value})
            canvas.renderAll()
        }
        const changeTextFontSize = (fontSize) => {
            console.log("changeTextFontSize")

            let activeObject = canvas.getActiveObject()
            if (!activeObject) return
            activeObject.set({fontSize:fontSize})
            canvas.renderAll()
        }
        const changeTextLetterSpacing = (charSpacing) =>{
            console.log("changeTextLetterSpacing")

            let activeObject = canvas.getActiveObject()
            if (!activeObject) return
            charSpacing *= 20;
            activeObject.set({charSpacing})
            canvas.renderAll()

        }
        const handleFontFamily=(selectedFontFamily)=>{
            let activeObject = canvas.getActiveObject()
            if (!activeObject) return
            activeObject.set({fontFamily:selectedFontFamily})
            canvas.requestRenderAll();
        }


        return (

            <>
                <SlideAblePanel show={true}>
                    <CollapsableSection label={"Name"}
                                        checked={false}
                                        clickOnSwitch={()=>{}}
                                        Icon={FormatColorTextIcon}
                                        hide={false}
                                        responsiveToggleValue ={true}
                                        responsiveToggeling={true}
                                        responsiveSlider={this?.props.responsiveActive?"activeResponsiveName":''}>


                        <AddTextBtn className={"tde-mt-10 res-add-btn"} title={"ADD NEW TEXT"} textFontSize={15}
                                    handleAddText={()=>addTextToCanvas()}/>

                        <div className="d-flex align-items-center justify-content-between tde-mt-25 res-search-btn">
                            <div className="tde-sub-heading tde-mr-10">Font</div>
                            <CustomSelect selected={propertiesValue?.fontFamily} changeSelection={handleFontFamily}
                                          options={fontsList}/>

                        </div>

                        <div className="d-flex align-items-center  tde-py-5 tde-mt-25 res-case-btn">
                            <div className="tde-sub-heading tde-mr-10">Case</div>

                            <div className="tde-btns-holder tde-py-10 tde-px-20  d-flex">
                                <CustomIcon
                                    onClick={()=>textTransform('lowercase')}
                                    className={"icon tde-mr-15"}
                                    src={'lowercase'}
                                    button
                                    size={24}
                                    active={textCase==='lowercase'}
                                />
                                <CustomIcon
                                    onClick={()=>textTransform('capitalize')}
                                    className={"icon tde-mr-15"}
                                    src={'capitalize-case'}
                                    button
                                    size={24}
                                    active={textCase==='capitalize'}
                                />
                                <CustomIcon
                                    onClick={()=>textTransform('uppercase')}
                                    className={"icon"}
                                    src={'uppercase'}
                                    button
                                    size={24}
                                    active={textCase==='uppercase'}
                                />

                            </div>
                        </div>
                        <div className="d-flex align-items-center  tde-py-5 tde-mt-25 res-case-btn">
                            <div className="tde-sub-heading tde-mr-10">Style</div>

                            <div className="tde-btns-holder tde-py-10 tde-px-20  d-flex">
                                <CustomIcon
                                    onClick={()=>handleTextStyle('Bold')}
                                    className={"icon tde-mr-15"}
                                    src={'bold'}
                                    button
                                    size={24}
                                    active={textStyle==='Bold'}
                                />
                                <CustomIcon
                                    onClick={()=>handleTextStyle('Italic')}
                                    className={"icon tde-mr-15"}
                                    src={'italic'}
                                    button
                                    size={24}
                                    active={textStyle==='Italic'}
                                />
                                <CustomIcon
                                    onClick={()=>handleTextStyle('underline')}
                                    className={"icon"}
                                    src={'underline'}
                                    button
                                    size={24}
                                    active={textCase==='underline'}
                                />

                            </div>
                        </div>

                    </CollapsableSection>



                    <CollapsableSection label={"ADJUST"}
                                        Icon={TuneOutlined}
                                        checked={deletedTextName?false:true}
                                        hide={deletedTextName?true:false}
                                        responsiveToggleValue ={this?.state.responsiveToggleSlide}
                                        responsiveToggeling={this?.responsiveToggeling}
                                        responsiveSlider={this?.props.responsiveActive?"activeResponsiveSlider":''}
                    >

                        <CustomSlider heading={"Font Size"}
                                      val={fontSize}
                                      min={8}
                                      max={72}
                                      disabled={false}
                                      unit={"px"}
                                      onChange={changeTextFontSize}
                        />
                        <CustomSlider
                            className={"tde-mt-25"}
                            heading={"Letter Spacing"}
                            val={charSpacing}
                            min={0}
                            disabled={false}
                            max={100}
                            unit={"px"}
                            onChange={changeTextLetterSpacing}
                        />
                        <CustomSlider
                            className={"tde-mt-25"}
                            heading={"Rotation"}
                            val={charSpacing}
                            min={0}
                            disabled={false}
                            max={360}
                            unit={"px"}
                            onChange={handleChangeRotation}
                        />

                    </CollapsableSection>
                </SlideAblePanel>



            </>
        )

}



export default TextNameEditorPanel;
