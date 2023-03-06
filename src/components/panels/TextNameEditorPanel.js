import React from "react";

import SlideAblePanel from "./SlidablePanel";

import {
    CollapsableSection,  CustomSearch, CustomSlider,
    AddTextBtn, CustomIcon, PositionIt, CustomSelect
} from "../common/"
import {

    TuneOutlined,
    FormatColorText as FormatColorTextIcon,
} from '@material-ui/icons';


const TextNameEditorPanel = (props) =>{

        const {activeObject, textfontSize,isBrandVariationMode,deletedTextName} = props;
        let propertiesValue = this?.getProperties(activeObject);
        let fontSize = textfontSize;
        let charSpacing = 0;


        let fontFamily = 'Roboto';
        let textCase = 'capitalize';
        let activeControl = true;

        return (
            <>
                <SlideAblePanel show={this?.state?.namePropertyControl || true} responsivetoggle={this?.state?.responsiveToggleSlide}>
                    <CollapsableSection label={"Name"}
                                        checked={false}
                                        clickOnSwitch={()=>{}}
                                        Icon={FormatColorTextIcon}
                                        hide={false}
                                        showSwitch={true}
                                        responsiveToggleValue ={true}
                                        responsiveToggeling={true}
                                        responsiveSlider={this?.props.responsiveActive?"activeResponsiveName":''}>
                        <div className="tde-sub-heading">Brand Name</div>
                        {

                            "Place Holder Brand Name"
                        }
                        {this?.props.responsiveActive  ?
                            !isBrandVariationMode && !this?.verifyTextObjects() &&
                            <AddTextBtn className={"tde-mt-10 res-add-btn"} title={"ADD NEW TEXT"} textFontSize={textfontSize}
                                        handleAddText={this?.addTextToCanvas}/> :
                            !isBrandVariationMode &&
                            <AddTextBtn className={"tde-mt-10 res-add-btn"} title={"ADD NEW TEXT"} textFontSize={textfontSize}
                                        handleAddText={this?.addTextToCanvas}/>
                        }
                        <div className="d-flex align-items-center justify-content-between tde-mt-25 res-search-btn">
                            <div className="tde-sub-heading tde-mr-10">Font</div>
                            <CustomSearch value={fontFamily}
                                          disabled={!activeObject}
                                          clickOnText={this?.handleFontSearch}/>
                        </div>
                        <div className="d-flex align-items-center tde-mt-25 res-style-btn">
                            <div className="tde-sub-heading tde-mr-10">
                                Style
                            </div>
                            <CustomSelect selected={propertiesValue?.fontStyle} changeSelection={this?.handleFontStyle}
                                          options={propertiesValue?.activeFontVariants}/>

                        </div>



                        <div className="d-flex align-items-center  tde-py-5 tde-mt-25 res-case-btn">
                            <div className="tde-sub-heading tde-mr-10">Case</div>

                            <div className="tde-btns-holder tde-py-10 tde-px-20  d-flex">
                                <CustomIcon
                                    onClick={()=>this?.textTransform('lowercase')}
                                    className={"icon tde-mr-15"}
                                    src={'lowercase'}
                                    button
                                    size={24}
                                    active={textCase==='lowercase'}
                                />
                                <CustomIcon
                                    onClick={()=>this?.textTransform('capitalize')}
                                    className={"icon tde-mr-15"}
                                    src={'capitalize-case'}
                                    button
                                    size={24}
                                    active={textCase==='capitalize'}
                                />
                                <CustomIcon
                                    onClick={()=>this?.textTransform('uppercase')}
                                    className={"icon"}
                                    src={'uppercase'}
                                    button
                                    size={24}
                                    active={textCase==='uppercase'}
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
                                      min={this?.props.minFontSize}
                                      max={72}
                                      disabled={activeControl}
                                      unit={"px"}
                                      onChange={this?.changeTextFontSize}
                        />
                        <CustomSlider
                            className={"tde-mt-25"}
                            heading={"Letter Spacing"}
                            val={charSpacing}
                            min={0}
                            disabled={activeControl}
                            max={100}
                            unit={"px"}
                            onChange={this?.changeTextLetterSpacing}
                        />


                    </CollapsableSection>
                    <PositionIt
                        disabled={activeControl}
                        checked={deletedTextName?false:true}
                        hide={deletedTextName?true:false}
                        responsiveToggeling={this?.responsiveToggeling}
                        responsiveSlider={this?.props.responsiveActive?"activeResponsiveSlider":''}
                    />
                </SlideAblePanel>



            </>
        )

}



export default TextNameEditorPanel;
