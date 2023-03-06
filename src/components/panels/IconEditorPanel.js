import React from "react";


import PerfectScrollbar from 'react-perfect-scrollbar';

import CustomSlider from "../common/CustomSlider";

import CollapsableSection from "../common/CollapsableSection";
import PositionIt from "../common/PositionIt";
import CustomIcon from "../common/CustomIcon";
// import ExpandableColorHolder from "../common/ExpandableColorHolder";

// import Loader from "../components/Loader";
// import SecondarySearch from "../components/SecondarySearch";


import SlidablePanel from "./SlidablePanel";



import TuneOutlined from "@material-ui/icons/TuneOutlined";
import IconsIcon from '@material-ui/icons/FilterVintageOutlined';
import CloseIcon from "@material-ui/icons/Close";
import Shape from "@material-ui/icons/CropDinOutlined";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from '@material-ui/icons/Add';

// import IconsListPanel from "./IconsListPanel";
import {Form} from "react-bootstrap";


const nounCategoryId = -1;
const myIconsCategoryId = -2;

const IconEditorPanel = (props) => {






        const {iconsList, activeObject,isBrandVariationMode,deletedIcon} = props;
        let {whoseList,iconsCategoriesList,directoryPath, shapes, showList, loadingIcons,showShapesList,iconColors,tempUploadImage} = this?.state || {};
        let propertiesValue = this?.getProperties(activeObject);
        let showingIconsList = whoseList === 0;
        let itemsList = showingIconsList ? iconsList : shapes;
        return (
            <>
                <SlidablePanel show={!showList&&!showShapesList} responsivetoggle={this?.state.responsiveToggleSlide}>
                    <CollapsableSection
                        label={"ICON"}
                        Icon={IconsIcon}
                        showSwitch={!isBrandVariationMode?false:true}
                        hide={deletedIcon?true:false}
                        clickOnSwitch={this?.handleIconSwitch1}
                        checked={deletedIcon?false:true}
                        responsiveToggleValue ={this?.state.responsiveToggleSlide}
                        responsiveToggeling={this?.responsiveToggeling}
                        responsiveSlider={this?.props.responsiveActive?"activeResponsiveIcon":''}

                    >

                        <div className="d-flex justify-content-between align-items-center">
                            {this?.props.responsiveActive ?

                                    // !isBrandVariationMode ?
                                    <div className="tde-ml-10 res-tde-btns-holder  tde-px-20 tde-py-10 cursor-pointer  btn btn-outline-dark res-w-100"
                                         onClick={this?.showIconsListPanel}>
                                        {
                                            propertiesValue?.iconSrc ?
                                                <div className="d-flex justify-content-center">
                                                        <div className="">Change Icon</div>
                                                        <CustomIcon className={"res-icon-panel"} Icon={SearchIcon}  />
                                                </div>

                                                    :
                                                <div className="d-flex justify-content-center">
                                                        <div className="">Add Icon</div>
                                                        <CustomIcon className={"res-icon-panel"}  Icon={AddIcon}/>
                                                </div>

                                        }
                                    </div>

                                :
                                <>
                                <label className={"mb-0 tde-sub-heading"}>Icon</label>
                                <div className="tde-ml-10 tde-btns-holder tde-px-20 tde-py-10 cursor-pointer"
                                onClick={this?.showIconsListPanel}>
                                {
                                    propertiesValue?.iconSrc ?
                                        <img src={propertiesValue?.iconSrc} style={{height: 30}} alt={'X'}/> :

                                        tempUploadImage ? <img src={tempUploadImage} style={{height: 30}} alt={'X'}/>
                                            :
                                            <CustomIcon Icon={AddIcon}/>
                                }
                                </div>
                                </>
                            }

                            {!this?.props.responsiveActive?
                                // !isBrandVariationMode ?

                                <CustomIcon className={"tde-ml-10 icon"} button onClick={this?.showIconsListPanel} size={24}
                                            Icon={SearchIcon}/>:''

                            }

                        </div>

                        {/*{*/}
                        {/*    propertiesValue?.colorGrid.length > 0 &&*/}
                        {/*    <ExpandableColorHolder*/}
                        {/*        className={"tde-mt-25"}*/}
                        {/*        colors={propertiesValue?.colorGrid}*/}
                        {/*        heading={"Icon Color"}*/}
                        {/*        onColorSelect={this?.changeIconColor}*/}
                        {/*    />*/}
                        {/*}*/}
                        {
                            this?.props.isAdmin && iconColors?.length > 0 && (
                                <div className="d-flex justify-content-center flex-column">
                                <span style={{fontSize:'20px'}}>Freeze colors</span>
                                {
                                    iconColors.map((color)=>{
                                        return(<div key={color.index} className="d-flex align-items-center">
                                            <Form.Check className="freeze-color-check-box cursor-pointer"
                                                        type="checkbox"
                                                        value={color.color}
                                                        checked={color.freeze?true:false}
                                                        onChange={() => {
                                                            this?.toggleColorProperty(color.color);
                                                        }}
                                            />
                                            <span className="ml-3">{color.color}</span>
                                            <div className="ml-3" style={{backgroundColor: color.color, display: 'inline-block', width: '23px', height:'18px',borderRadius:'3px'}}></div>
                                            {/*<span>Type:fill</span>*/}


                                        </div>)
                                    })
                                }
                                </div>
                            )
                        }
                    </CollapsableSection>



                    <CollapsableSection label={"ADJUST"}
                                        Icon={TuneOutlined}
                                        checked={deletedIcon?false:true}
                                        hide={deletedIcon?true:false}
                                        responsiveToggleValue ={this?.state.responsiveToggleSlide}
                                        responsiveToggeling={this?.responsiveToggeling}
                                        responsiveSlider={this?.props.responsiveActive?"activeResponsiveSlider":''}

                    >
                        <CustomSlider heading={"Icon Size"}
                                      val={propertiesValue?.iconSize}
                                      min={0}
                                      max={propertiesValue?.iconMaxSize}
                                      unit={"px"}
                                      onChange={this?.changeIconSize}
                                      disabled={!activeObject}
                        />

                    </CollapsableSection>

                    <PositionIt
                                combineWithName={this?.props.iconCombineWithName}
                                showAlignWithCheck={false}
                                checked={deletedIcon?false:true}
                                hide={deletedIcon?true:false}
                                responsiveToggeling={this?.responsiveToggeling}
                                responsiveSlider={this?.props.responsiveActive?"activeResponsiveSlider":''}
                    />

                    {/*<CollapsableSection label={"Image"} Icon={TuneOutlined} hide={true}>*/}
                    {/*    <div className={"d-flex"}>*/}
                    {/*        <input accept="image/*" onChange={this?.onImageChange} type={"file"} id={"photo_id"}*/}
                    {/*               className={"form-control-file"}/>*/}
                    {/*    </div>*/}
                    {/*</CollapsableSection>*/}

                </SlidablePanel>
                <SlidablePanel show={showShapesList}>
                    <PerfectScrollbar>
                        <div className={"d-flex   tde-mb-10"}>
                            <CloseIcon className={"tde-mr-5 tde-pointer ml-auto"} onClick={this?.handleCloseListPanel}/>
                        </div>
                        <div className={"container"}>
                            {showingIconsList && <div className="logos-search ">
                                {/*<SecondarySearch hideRightBtn={true} onChange={this?.handleSearchIcon}*/}
                                {/*                 defaultValue={this?.state.iconsSearchQuery}*/}
                                {/*                 placeholder={'Enter search keyword..'}/>*/}
                                <select className={'custom-select my-2'} value={this?.state.selectedIconCategory}
                                        onChange={this?.handleSelectIconCategories}>
                                    <option value={nounCategoryId}>Noun Icons</option>
                                    <option value={myIconsCategoryId}>My Icons</option>
                                    {this?.props.industryCategoriesList.map(category => <option key={category.id}
                                                                                               value={category.id}>{category.title}</option>)}
                                </select>
                            </div>}
                            {/*{*/}
                            {/*    this?.renderLocalIcons()*/}
                            {/*}*/}
                            {
                                (itemsList && itemsList.length > 0) &&
                                <div className="row">

                                    {
                                        itemsList.map((item,index) => {
                                            let url = "";
                                            let onClick = this?.handleCloseListPanel;
                                            if (whoseList === 0) {
                                                url = item.preview_url;
                                                onClick = () => {
                                                    if (item.colors_json?.length > 0) {
                                                        this?.loadSvgIcon(item.icon_url, item.preview_url, item.colors_json)
                                                        this?.handleCloseListPanel()
                                                    } else {
                                                        this?.loadSvgIcon(item.icon_url, item.preview_url, '')
                                                        this?.handleCloseListPanel()
                                                    }

                                                };

                                                return (
                                                    <div className={"col-6 tde-mb-10"} key={index}>
                                                        <div className="border tde-mb-10 tde-p-10 rounded tde-bg-overlay">
                                                            <img src={url} style={{width: "100%"}} onClick={onClick}
                                                                 alt={'image'}/>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            return (
                                                <div className={"col-6 tde-mb-10"} key={index}>
                                                    <div
                                                        className="border tde-mb-10 tde-p-10 d-flex justify-content-center align-items-center rounded tde-bg-overlay tde-pointer">
                                                        <CustomIcon button className={"icon "} size={40}
                                                                    Icon={item.shape}
                                                                    onClick={(e) => {

                                                                        this?.addShape(e, item);
                                                                    }}/>
                                                    </div>
                                                </div>
                                            )

                                        })
                                    }
                                </div>

                            }
                            {/*{loadingIcons && <div><Loader/></div>}*/}

                        </div>

                    </PerfectScrollbar>

                </SlidablePanel>
                {/*{this?.props.responsiveActive ?*/}
                {/*    showList&&<IconsListPanel replaceIcon={this?.replaceIcon} addNewIcon={this?.addNewIcon} setTempUploadImage={this?.setTempUploadImage} onBack={this?.hideIconsList} iconCategories={iconsCategoriesList} directoryPath={directoryPath} onAddIcon={this?.loadSvgIcon} resposiveMood = {this?.props.responsiveActive}></IconsListPanel>*/}
                {/*    :*/}
                {/*    <SlidablePanel show={showList}>*/}
                {/*        {showList&&<IconsListPanel replaceIcon={this?.replaceIcon} addNewIcon={this?.addNewIcon} setTempUploadImage={this?.setTempUploadImage} onBack={this?.hideIconsList} iconCategories={iconsCategoriesList} directoryPath={directoryPath} onAddIcon={this?.loadSvgIcon} resposiveMood = {this?.props.responsiveActive}></IconsListPanel>}*/}
                {/*    </SlidablePanel>*/}

                {/*}*/}
            </>

        )

}


export default IconEditorPanel;
