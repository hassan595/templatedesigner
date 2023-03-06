import React from 'react';
import FabEditor from "./fabric-editor/fabEditor";
const MainPanel =()=> {


    return (
        <div>

            <div role="tabpanel" id="scrollable-force-tabpanel-10" aria-labelledby="scrollable-force-tab-10">
                <div className="position-relative">
                    <header className=" tde-header">
                        <nav className="align-items-center d-flex h-100 justify-content-between overflow-hidden">
                            <div className="back-btn-responsive">
                                <div className="tde-sub-heading d-flex align-items-center tde-pointer back-btn ">
                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                         aria-hidden="true">
                                        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"></path>
                                    </svg>
                                    <span className="ml-1">Go back to logo options</span></div>
                            </div>
                            <div className="logo tde-pointer"><img src="/images/Logomark.svg" alt="Logoflow" /></div>
                            <div className="tde-secondary-actions d-flex align-items-center">
                                <div className=" tde-btn-dark"><span><span className="res-Header"> <svg
                                    className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                    aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg></span><span
                                    className="normal-Header">Save Logo</span></span></div>
                            </div>
                        </nav>
                    </header>
                    <div style={{display: "block"}}>
                        <header className="tde-tools-header tde-sec-header bg-white">
                            <nav className="align-items-center d-flex h-100  tde-pr-large-85 tde-pl-20">
                                <div className="d-flex align-items-center tde-toolbaar-editor-set res-edit-logo">
                                    <div
                                        className="d-flex align-items-center tde-ml-large-45 tde-mr-large-25 tde-mr-small-10"
                                        style={{color: "black"}}>
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                             aria-hidden="true" style={{height: "20px", width: "20px"}}>
                                            <path
                                                d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
                                        </svg>
                                    </div>
                                    <span className="text-dark font-weight-bold text-nowrap res-edit-logo-text"
                                          style={{fontSize: "14px"}}>Edit your logo</span></div>
                                <div className="d-flex res-w-100">
                                    <div className="d-flex align-items-center tde-ml-large-20 tde-ml-small-15 tde-px-5">
                                        <label htmlFor="" className="mb-0 tde-pr-10">Background</label>
                                        <div className="tde-btns-holder tde-p-10 d-flex align-items-center">
                                            <div className="tde-pointer d-flex justify-content-center align-items-center"
                                                 style={{height: "19px", width: "19px", background: "rgb(255, 255, 255)", border: "1px solid rgb(236, 238, 240)", borderRadius: "3px"}}></div>
                                        </div>
                                    </div>
                                    <div className="tde-btns-holder-custom tde-p-10  d-flex align-items-center tde-ml-30">
                                        <div className="d-flex align-items-center icon tde-pointer icon-btn"
                                             style={{color: "rgb(116, 131, 140)"}}>
                                            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                                 aria-hidden="true" style={{height: "20px", width: "20px"}}>
                                                <path
                                                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"></path>
                                            </svg>
                                        </div>
                                        <div className="d-flex align-items-center icon tde-ml-15 tde-pointer icon-btn"
                                             style={{color: "rgb(116, 131, 140)"}}>
                                            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                                 aria-hidden="true" style={{height: "20px", width: "20px"}}>
                                                <path
                                                    d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center tde-ml-30 tde-py-5"><label htmlFor=""
                                                                                                       className="mb-0 tde-pr-10">Align</label>
                                        <div className="tde-btns-holder tde-py-10 tde-px-20 d-flex align-items-center">
                                            <div className="d-flex align-items-center icon tde-mr-15 tde-pointer icon-btn"
                                                 style={{color: "rgb(116, 131, 140)"}}>
                                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                                     aria-hidden="true" style={{height: "20px", width: "20px"}}>
                                                    <path
                                                        d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></path>
                                                </svg>
                                            </div>
                                            <div className="d-flex align-items-center icon tde-mr-15 tde-pointer icon-btn"
                                                 style={{color: "rgb(116, 131, 140)"}}>
                                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                                     aria-hidden="true" style={{height: "20px", width: "20px"}}>
                                                    <path
                                                        d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"></path>
                                                </svg>
                                            </div>
                                            <div className="d-flex align-items-center icon tde-mr-15 tde-pointer icon-btn"
                                                 style={{color: "rgb(116, 131, 140)"}}>
                                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                                     aria-hidden="true" style={{height: "20px", width: "20px"}}>
                                                    <path
                                                        d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"></path>
                                                </svg>
                                            </div>
                                            <div className="d-flex align-items-center icon tde-pointer icon-btn"
                                                 style={{color: "rgb(116, 131, 140)"}}><img
                                                src="./images/icons/even-width.svg?v=1" alt="icon-image"
                                                style={{height: "20px", width: "20px"}} /></div>
                                        </div>
                                    </div>
                                    <div className=" tde-p-10  d-flex align-items-center tde-ml-30"><label htmlFor=""
                                                                                                         className="mb-0 tde-pr-10">Layering</label>
                                        <div className="tde-btns-holder tde-py-10 tde-px-20 d-flex align-items-center">
                                            <div className="d-flex align-items-center icon tde-mr-15 tde-pointer icon-btn"
                                                 style={{color: "rgb(116, 131, 140)"}}>
                                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                                     aria-hidden="true" style={{height: "20px", width: "20px"}}>
                                                    <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"></path>
                                                </svg>
                                            </div>
                                            <div className="d-flex align-items-center icon tde-pointer icon-btn"
                                                 style={{color: "rgb(116, 131, 140)"}}>
                                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                                     aria-hidden="true" style={{height: "20px", width: "20px"}}>
                                                    <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </header>
                        <div className="tde-main-section tde-main-section-bg d-flex responsiveMood">
                            <div className="tde-editor-tool-section bg-white">
                                <div className="tde-editor-tool-container d-flex">
                                    <div className="tde-left-sub-section">
                                        <div className="tde-editor-options-btn-panel">
                                            <div className="d-flex flex-column h-100 responsiveEditorPanel">
                                                <div
                                                    className="tde-editor-panel-btn d-flex flex-column justify-content-center align-items-center active">
                                                    <div className="tde-editor-panel-btn-icon tde-mb-5"
                                                         style={{marginBottom: "5px"}}>
                                                        <div className="d-flex align-items-center active"
                                                             style={{color: "rgb(18, 18, 35)"}}>
                                                            <svg className="MuiSvgIcon-root" focusable="false"
                                                                 viewBox="0 0 24 24" aria-hidden="true"
                                                                 style={{height: "20px", width: "20px"}}>
                                                                <path d="M5 4v3h5.5v12h3V7H19V4z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="tde-editor-panel-btn-text">Name</div>
                                                </div>
                                                <div
                                                    className="tde-editor-panel-btn d-flex flex-column justify-content-center align-items-center">
                                                    <div className="tde-editor-panel-btn-icon tde-mb-5"
                                                         style={{marginBottom: "5px"}}>
                                                        <div className="d-flex align-items-center"
                                                             style={{color: "rgb(116, 131, 140)"}}>
                                                            <svg className="MuiSvgIcon-root" focusable="false"
                                                                 viewBox="0 0 24 24" aria-hidden="true"
                                                                 style={{height: "20px", width: "20px"}}>
                                                                <path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="tde-editor-panel-btn-text">Tagline</div>
                                                </div>
                                                <div
                                                    className="tde-editor-panel-btn d-flex flex-column justify-content-center align-items-center">
                                                    <div className="tde-editor-panel-btn-icon tde-mb-5"
                                                         style={{marginBottom: "5px"}}>
                                                        <div className="d-flex align-items-center"
                                                             style={{color: "rgb(116, 131, 140)"}}>
                                                            <svg className="MuiSvgIcon-root" focusable="false"
                                                                 viewBox="0 0 24 24" aria-hidden="true"
                                                                 style={{height: "20px", width: "20px"}}>
                                                                <path
                                                                    d="M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-.91-.52-1.95-.8-3.01-.8-1.02 0-2.05.26-2.99.8-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-.94-.54-1.97-.8-2.99-.8-1.05 0-2.1.28-3.01.8 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19.91.52 1.95.8 3.01.8 1.02 0 2.05-.26 2.99-.8.28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54.94.54 1.97.8 2.99.8 1.05 0 2.1-.28 3.01-.8-.01-2.07-1.08-4.08-3-5.19zm-2.54-3.88c.21-.17.38-.29.54-.37.61-.35 1.3-.54 2-.54.27 0 .53.03.79.08-.31.91-.94 1.69-1.78 2.18-.17.1-.36.18-.58.27l-1.38.52c-.17-.46-.41-.87-.72-1.24l1.13-.9zM12 3.37c.63.72 1 1.66 1 2.63 0 .19-.02.41-.05.63l-.23 1.44C12.48 8.03 12.24 8 12 8s-.48.03-.71.07l-.23-1.44C11.02 6.41 11 6.19 11 6c0-.98.37-1.91 1-2.63zM4.51 7.68c.26-.06.53-.08.8-.08.69 0 1.38.18 1.99.54.15.09.32.2.49.35l1.15.96c-.3.36-.53.76-.7 1.2l-1.38-.52c-.21-.09-.4-.18-.56-.27-.87-.5-1.49-1.27-1.79-2.18zm3.33 7.79c-.21.17-.38.29-.54.37-.61.35-1.3.54-2 .54-.27 0-.53-.03-.79-.08.31-.91.94-1.69 1.78-2.18.17-.1.36-.18.58-.27l1.38-.52c.16.46.41.88.72 1.24l-1.13.9zM12 20.63c-.63-.72-1-1.66-1-2.63 0-.2.02-.41.06-.65l.22-1.42c.23.04.47.07.72.07.24 0 .48-.03.71-.07l.23 1.44c.04.22.06.44.06.63 0 .98-.37 1.91-1 2.63zm6.69-4.24c-.69 0-1.38-.18-1.99-.54-.18-.1-.34-.22-.49-.34l-1.15-.96c.3-.36.54-.76.7-1.21l1.38.52c.22.08.41.17.57.26.85.49 1.47 1.27 1.78 2.18-.27.07-.54.09-.8.09z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="tde-editor-panel-btn-text">Icon</div>
                                                </div>
                                                <div
                                                    className="tde-editor-panel-btn d-flex flex-column justify-content-center align-items-center">
                                                    <div className="tde-editor-panel-btn-icon tde-mb-5"
                                                         style={{marginBottom: "5px"}}>
                                                        <div className="d-flex align-items-center"
                                                             style={{color: "rgb(116, 131, 140)"}}>
                                                            <svg className="MuiSvgIcon-root" focusable="false"
                                                                 viewBox="0 0 24 24" aria-hidden="true"
                                                                 style={{height: "20px", width: "20px"}}>
                                                                <path
                                                                    d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="tde-editor-panel-btn-text">Extras</div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="tde-editor-panel-btn d-flex flex-column justify-content-center align-items-center tde-colors-editor-panel-btn">
                                                        <div className="tde-editor-panel-btn-icon tde-mb-5 tde-no-filter"
                                                             style={{marginBottom: "5px"}}>
                                                            <div className="d-flex align-items-center"><img
                                                                src="./images/icons/colors_1.svg?v=1" alt="icon-image"
                                                                style={{height: "20px", width: "20px"}} /></div>
                                                        </div>
                                                        <div className="tde-editor-panel-btn-text">Colors</div>
                                                    </div>
                                                    <div className="d-flex tde-ml-0"
                                                         style={{height: "6px", width: "57px", marginLeft: "15px"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tde-sub-panel tde-my-15 position-relative">
                                        <div className="tde-slidable custom-h-100 tde-slide-in">
                                            <div className="scrollbar-container ps ps--active-y">
                                                <div
                                                    className="d-flex align-items-center tde-collapse-header tde-btn-5-caps tde-super-light-grey-1-bg response-collapse">
                                                    <div className="icon">
                                                        <div className="d-flex align-items-center active"
                                                             style={{color: "rgb(18, 18, 35)"}}>
                                                            <svg className="MuiSvgIcon-root" focusable="false"
                                                                 viewBox="0 0 24 24" aria-hidden="true"
                                                                 style={{height: "16px", width: "16px"}}>
                                                                <path fill-opacity=".36" d="M0 20h24v4H0z"></path>
                                                                <path
                                                                    d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <span>NAME</span>
                                                    <div className="ml-auto tde-mr-5"></div>
                                                    <div>
                                                        <div
                                                            className="d-flex align-items-center res-custom-icon-disable active"
                                                            style={{color: "rgb(18, 18, 35)"}}>
                                                            <svg className="MuiSvgIcon-root" focusable="false"
                                                                 viewBox="0 0 24 24" aria-hidden="true"
                                                                 style={{height: "24px", width: "24px"}}>
                                                                <path
                                                                    d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="MuiCollapse-container MuiCollapse-entered"
                                                     style={{minHeight: "0px", position: "relative", zIndex: "2"}}>
                                                    <div className="MuiCollapse-wrapper">
                                                        <div className="MuiCollapse-wrapperInner">
                                                            <div className="tde-px-25 tde-py-20">
                                                                <div className="tde-sub-heading">Brand Name</div>
                                                                <div
                                                                    className="tde-add-text-btn d-flex justify-content-between align-items-center tde-p-10 tde-mt-10 res-add-btn">
                                                                    <span>ADD NEW TEXT</span>
                                                                    <div className="d-flex align-items-center icon"
                                                                         style={{color: "rgb(116, 131, 140)"}}>
                                                                        <svg className="MuiSvgIcon-root"
                                                                             focusable="false" viewBox="0 0 24 24"
                                                                             aria-hidden="true"
                                                                             style={{height: "16px", width: "16px"}}>
                                                                            <path
                                                                                d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center justify-content-between tde-mt-25 res-search-btn">
                                                                    <div className="tde-sub-heading tde-mr-10">Font</div>
                                                                    <div
                                                                        className="MuiInputBase-root MuiInput-root WithStyles(ForwardRef(Input))-root-26 MuiInput-underline WithStyles(ForwardRef(Input))-underline-28 flex-grow-1   tde-input Mui-disabled Mui-disabled MuiInputBase-adornedEnd"
                                                                        varient="outlined"><input disabled=""
                                                                                                  type="text"
                                                                                                  className="MuiInputBase-input MuiInput-input Mui-disabled Mui-disabled MuiInputBase-inputAdornedEnd"
                                                                                                  value="Roboto" />
                                                                        <div
                                                                            className="MuiInputAdornment-root MuiInputAdornment-positionEnd">
                                                                            <div
                                                                                className="d-flex align-items-center tde-pointer icon-btn"
                                                                                style={{color: "rgb(116, 131, 140)"}}>
                                                                                <svg className="MuiSvgIcon-root"
                                                                                     focusable="false"
                                                                                     viewBox="0 0 24 24"
                                                                                     aria-hidden="true"
                                                                                     style={{height: "20px", width: "20px"}}>
                                                                                    <path
                                                                                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                                                                </svg>
                                                                            </div>
                                                                        </div></div>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center tde-mt-25 res-style-btn">
                                                                    <div className="tde-sub-heading tde-mr-10">Style</div>
                                                                    <div
                                                                        className="MuiFormControl-root MuiFormControl-fullWidth">
                                                                        <div
                                                                            className="MuiInputBase-root MuiInputBase-formControl">
                                                                            <select
                                                                                className="MuiNativeSelect-root MuiNativeSelect-select MuiInputBase-input WithStyles(ForwardRef(InputBase))-input-30"
                                                                                aria-invalid="false"
                                                                                id="demo-customized-select-native">
                                                                                <option value="regular">regular</option>
                                                                            </select>
                                                                            <svg
                                                                                className="MuiSvgIcon-root MuiNativeSelect-icon WithStyles(ForwardRef(NativeSelect))-icon-29"
                                                                                focusable="false" viewBox="0 0 24 24"
                                                                                aria-hidden="true">
                                                                                <path
                                                                                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center  tde-py-5 tde-mt-25 res-case-btn">
                                                                    <div className="tde-sub-heading tde-mr-10">Case</div>
                                                                    <div
                                                                        className="tde-btns-holder tde-py-10 tde-px-20  d-flex">
                                                                        <div
                                                                            className="d-flex align-items-center icon tde-mr-15 tde-pointer icon-btn"
                                                                            style={{color: "rgb(116, 131, 140)"}}><img
                                                                            src="./images/icons/lowercase.svg?v=1"
                                                                            alt="icon-image"
                                                                            style={{height: "24px", width: "24px"}} /></div>
                                                                        <div
                                                                            className="d-flex align-items-center icon tde-mr-15 tde-pointer icon-btn active"
                                                                            style={{color: "rgb(18, 18, 35)"}}><img
                                                                            src="./images/icons/capitalize-case.svg?v=1"
                                                                            alt="icon-image"
                                                                            style={{height: "24px", width: "24px"}} /></div>
                                                                        <div
                                                                            className="d-flex align-items-center icon tde-pointer icon-btn"
                                                                            style={{color: "rgb(116, 131, 140)"}}><img
                                                                            src="./images/icons/uppercase.svg?v=1"
                                                                            alt="icon-image"
                                                                            style={{height: "24px", width: "24px"}} /></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center tde-collapse-header tde-btn-5-caps tde-super-light-grey-1-bg response-collapse">
                                                    <div className="icon">
                                                        <div className="d-flex align-items-center active"
                                                             style={{color: "rgb(18, 18, 35)"}}>
                                                            <svg className="MuiSvgIcon-root" focusable="false"
                                                                 viewBox="0 0 24 24" aria-hidden="true"
                                                                 style={{height: "16px", width: "16px"}}>
                                                                <path
                                                                    d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <span>ADJUST</span>
                                                    <div className="ml-auto tde-mr-5"></div>
                                                    <div>
                                                        <div
                                                            className="d-flex align-items-center res-custom-icon-disable active"
                                                            style={{color: "rgb(18, 18, 35)"}}>
                                                            <svg className="MuiSvgIcon-root" focusable="false"
                                                                 viewBox="0 0 24 24" aria-hidden="true"
                                                                 style={{height: "24px", width: "24px"}}>
                                                                <path
                                                                    d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="MuiCollapse-container MuiCollapse-entered"
                                                     style={{minHeight: "0px", position: "relative", zIndex: "2"}}>
                                                    <div className="MuiCollapse-wrapper">
                                                        <div className="MuiCollapse-wrapperInner">
                                                            <div className="tde-px-25 tde-py-20">
                                                                <div
                                                                    className="d-flex justify-content-between align-items-center">
                                                                    <h3 className="mb-0 tde-sub-heading">Font Size</h3>
                                                                    <div
                                                                        className="tde-number-input d-flex align-items-center ">
                                                                        <input type="number" min="15" max="72"
                                                                               name="slider-input" disabled=""
                                                                               className="tde-bg-white w-[20px]"
                                                                               value="40" />px</div>
                                                                </div>
                                                                <div className=""><span
                                                                    className="MuiSlider-root MuiSlider-colorPrimary Mui-disabled"><span
                                                                    className="MuiSlider-rail WithStyles(ForwardRef(Slider))-rail-19"></span><span
                                                                    className="MuiSlider-track WithStyles(ForwardRef(Slider))-track-20"
                                                                    style={{left: "0%", width: "43.8596%"}}></span><input
                                                                    name="slider" type="hidden" value="40" /><span
                                                                    className="MuiSlider-thumb WithStyles(ForwardRef(Slider))-thumb-18 MuiSlider-thumbColorPrimary Mui-disabled"
                                                                    role="slider" data-index="0"
                                                                    aria-orientation="horizontal" aria-valuemax="72"
                                                                    aria-valuemin="15" aria-valuenow="40"
                                                                    style={{left: "43.8596%"}}></span></span></div>
                                                                <div
                                                                    className="d-flex justify-content-between align-items-center tde-mt-25">
                                                                    <h3 className="mb-0 tde-sub-heading">Letter
                                                                        Spacing</h3>
                                                                    <div
                                                                        className="tde-number-input d-flex align-items-center ">
                                                                        <input type="number" min="0" max="100"
                                                                               name="slider-input" size="1" disabled=""
                                                                               className="tde-bg-white w-[20px]"
                                                                               value="0" />px</div>
                                                                </div>
                                                                <div className=""><span
                                                                    className="MuiSlider-root MuiSlider-colorPrimary Mui-disabled"><span
                                                                    className="MuiSlider-rail WithStyles(ForwardRef(Slider))-rail-19"></span><span
                                                                    className="MuiSlider-track WithStyles(ForwardRef(Slider))-track-20"
                                                                    style={{left: "0%", width: "0%"}}></span>
                                                                    <input
                                                                    name="slider" type="hidden" value="0" /><span
                                                                    className="MuiSlider-thumb WithStyles(ForwardRef(Slider))-thumb-18 MuiSlider-thumbColorPrimary Mui-disabled"
                                                                    role="slider" data-index="0"
                                                                    aria-orientation="horizontal" aria-valuemax="100"
                                                                    aria-valuemin="0" aria-valuenow="0"
                                                                    style={{left: "0%"}}></span></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex align-items-center tde-collapse-header tde-btn-5-caps tde-super-light-grey-1-bg response-collapse">
                                                    <div className="icon">
                                                        <div className="d-flex align-items-center active"
                                                             style={{color: "rgb(18, 18, 35)"}}>
                                                            <svg className="MuiSvgIcon-root" focusable="false"
                                                                 viewBox="0 0 24 24" aria-hidden="true"
                                                                 style={{height: "16px", width: "16px"}}>
                                                                <path
                                                                    d="M5.54 8.46L2 12l3.54 3.54 1.76-1.77L5.54 12l1.76-1.77zm6.46 10l-1.77-1.76-1.77 1.76L12 22l3.54-3.54-1.77-1.76zm6.46-10l-1.76 1.77L18.46 12l-1.76 1.77 1.76 1.77L22 12zm-10-2.92l1.77 1.76L12 5.54l1.77 1.76 1.77-1.76L12 2z"></path>
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <span>POSITION</span>
                                                    <div className="ml-auto tde-mr-5"></div>
                                                    <div>
                                                        <div
                                                            className="d-flex align-items-center res-custom-icon-disable active"
                                                            style={{color: "rgb(18, 18, 35)"}}>
                                                            <svg className="MuiSvgIcon-root" focusable="false"
                                                                 viewBox="0 0 24 24" aria-hidden="true"
                                                                 style={{height: "24px", width: "24px"}}>
                                                                <path
                                                                    d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="MuiCollapse-container MuiCollapse-entered"
                                                     style={{minHeight: "0px", position: "relative", zIndex: "2"}}>
                                                    <div className="MuiCollapse-wrapper">
                                                        <div className="MuiCollapse-wrapperInner">
                                                            <div className="tde-px-25 tde-py-20">
                                                                <div
                                                                    className="d-flex justify-content-between align-items-center">
                                                                    <h3 className="mb-0 tde-sub-heading">Vertical
                                                                        Position</h3>
                                                                    <div
                                                                        className="tde-number-input d-flex align-items-center ">
                                                                        <input type="number" min="40" max="0"
                                                                               name="slider-input" size="1" disabled=""
                                                                               className="tde-bg-white w-[20px]"
                                                                               value="0" />px</div>
                                                                </div>
                                                                <div className=""><span
                                                                    className="MuiSlider-root MuiSlider-colorPrimary Mui-disabled"><span
                                                                    className="MuiSlider-rail WithStyles(ForwardRef(Slider))-rail-19"></span><span
                                                                    className="MuiSlider-track WithStyles(ForwardRef(Slider))-track-20"
                                                                    style={{left: "0%", width: "100%"}}></span><input
                                                                    name="slider" type="hidden" value="0" /><span
                                                                    className="MuiSlider-thumb WithStyles(ForwardRef(Slider))-thumb-18 MuiSlider-thumbColorPrimary Mui-disabled"
                                                                    role="slider" data-index="0"
                                                                    aria-orientation="horizontal" aria-valuemax="0"
                                                                    aria-valuemin="40" aria-valuenow="0"
                                                                    style={{left: "100%"}}></span></span></div>
                                                                <div
                                                                    className="d-flex justify-content-between align-items-center tde-mt-25">
                                                                    <h3 className="mb-0 tde-sub-heading">Horizontal
                                                                        Position</h3>
                                                                    <div
                                                                        className="tde-number-input d-flex align-items-center ">
                                                                        <input type="number" min="40" max="0"
                                                                               name="slider-input" size="1" disabled=""
                                                                               className="tde-bg-white w-[20px]"
                                                                               value="0" />px</div>
                                                                </div>
                                                                <div className=""><span
                                                                    className="MuiSlider-root MuiSlider-colorPrimary Mui-disabled"><span
                                                                    className="MuiSlider-rail WithStyles(ForwardRef(Slider))-rail-19"></span><span
                                                                    className="MuiSlider-track WithStyles(ForwardRef(Slider))-track-20"
                                                                    style={{left: "0%", width: "100%"}}></span><input
                                                                    name="slider" type="hidden" value="0" /><span
                                                                    className="MuiSlider-thumb WithStyles(ForwardRef(Slider))-thumb-18 MuiSlider-thumbColorPrimary Mui-disabled"
                                                                    role="slider" data-index="0"
                                                                    aria-orientation="horizontal" aria-valuemax="0"
                                                                    aria-valuemin="40" aria-valuenow="0"
                                                                    style={{left: "100%"}}></span></span></div>
                                                                <div
                                                                    className="d-flex justify-content-between align-items-center tde-mt-25">
                                                                    <h3 className="mb-0 tde-sub-heading">Rotation</h3>
                                                                    <div
                                                                        className="tde-number-input d-flex align-items-center ">
                                                                        <input type="number" min="0" max="360"
                                                                               name="slider-input" size="1" disabled=""
                                                                               className="tde-bg-white w-[20px]"
                                                                               value="0" />px</div>
                                                                </div>
                                                                <div className=""><span
                                                                    className="MuiSlider-root MuiSlider-colorPrimary Mui-disabled"><span
                                                                    className="MuiSlider-rail WithStyles(ForwardRef(Slider))-rail-19"></span><span
                                                                    className="MuiSlider-track WithStyles(ForwardRef(Slider))-track-20"
                                                                    style={{left: "0%", width: "0%"}}></span><input
                                                                    name="slider" type="hidden" value="0" /><span
                                                                    className="MuiSlider-thumb WithStyles(ForwardRef(Slider))-thumb-18 MuiSlider-thumbColorPrimary Mui-disabled"
                                                                    role="slider" data-index="0"
                                                                    aria-orientation="horizontal" aria-valuemax="360"
                                                                    aria-valuemin="0" aria-valuenow="0"
                                                                    style={{left: "0%"}}></span></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                                                    <div className="ps__thumb-x" tabIndex="0"
                                                         style={{left:" 0px", width: "0px"}}></div>
                                                </div>
                                                <div className="ps__rail-y"
                                                     style={{top: "0px", right: "0px", height: "588px"}}>
                                                    <div className="ps__thumb-y" tabIndex="0"
                                                         style={{top: "0px", height: "373px"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tde-slidable custom-h-100 tde-slide-out">
                                            <div className="scrollbar-container ps">
                                                <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                                                    <div className="ps__thumb-x" tabIndex="0"
                                                         style={{left:" 0px", width: "0px"}}></div>
                                                </div>
                                                <div className="ps__rail-y" style={{top: "0px", right: "0px"}}>
                                                    <div className="ps__thumb-y" tabIndex="0"
                                                         style={{top: "0px", height: "0px"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-grow-1 tde-right-sub-section">
                                <div id="parent-Div"
                                     className="tde-canvas-container col mx-0 px-0  h-100 d-flex flex-column flex-grow-1 overflow-auto position-relative"
                                     style={{background: "rgb(249, 249, 249)"}}>
                                    <div className="tde-upper-bar">
                                        <div className="left-col">
                                            <div>
                                                <div className="tde-ml-15 tde-group-btn"
                                                     style={{padding: "9px", borderRadius: "8px"}}>
                                                    <button className="tde-btn mr-3" style={{padding: "0px 5px"}}>
                                                        <div className="d-flex align-items-center">
                                                            <svg className="MuiSvgIcon-root" focusable="false"
                                                                 viewBox="0 0 24 24" aria-hidden="true"
                                                                 style={{height: "20px", width: "20px"}}>
                                                                <path
                                                                    d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path>
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    <button className="tde-btn " style={{padding: "0px 5px"}}>
                                                        <div className="d-flex align-items-center">
                                                            <svg className="MuiSvgIcon-root" focusable="false"
                                                                 viewBox="0 0 24 24" aria-hidden="true"
                                                                 style={{height: "20px", width: "20px"}}>
                                                                <path
                                                                    d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path>
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" bg-light m-auto canvas-area"
                                         style={{border: "none", boxShadow: "none"}}>
                                        <div className="canvas-container"
                                             style={{width: "500px", height: "400px", position: "relative", userSelect: "none"}}>
                                            <canvas id="canvas" width="500" height="400"
                                                    style={{border: "1px solid rgb(236, 238, 240)", position: "absolute", width: "500px", height: "400px", left: "0px", top: "0px", touchAction: "none", userSelect: "none"}}
                                                    className="lower-canvas"></canvas>
                                            <canvas className="upper-canvas " width="625" height="500"
                                                    style={{border: "1px solid rgb(236, 238, 240)", position: "absolute", width: "500px", height: "400px", left: "0px", top: "0px", touchAction: "none", userSelect: "none", cursor: "default"}}></canvas>
                                        </div>
                                    </div>
                                    <div
                                        className="d-flex tde-mb-40 justify-content-between tde-mx-40 responsiveMoodNavBar">
                                        <div className="d-flex">
                                            <div className="tde-mr-20 tde-toggle-btn">
                                                <div className="tde-pr-10">Grid</div>
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex align-items-center icon tde-mr-15 tde-pointer icon-btn"
                                                        style={{color: "rgb(116, 131, 140)"}}><img
                                                        src="./images/icons/grid-on.svg?v=1" alt="icon-image"
                                                        style={{height: "20px", width: "20px"}} /></div>
                                                    <div
                                                        className="d-flex align-items-center icon  tde-pointer icon-btn active"
                                                        style={{color: "rgb(18, 18, 35)"}}><img
                                                        src="./images/icons/border-clear.svg?v=1" alt="icon-image"
                                                        style={{height: "20px", width: "20px"}} /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="tde-secondary-btn tde-mockup-btn align-setde-end"><span
                                                className="d-flex"><div
                                                className="d-flex align-items-center tde-pointer icon-btn"
                                                style={{color: "rgb(116, 131, 140)"}}><img
                                                src="./images/icons/mockup-btn.svg?v=1" alt="icon-image"
                                                style={{height: "20px", width: "20px"}} /></div><div
                                                className="">View Mockups</div></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default MainPanel;