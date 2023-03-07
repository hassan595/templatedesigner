import React from "react";
import AlignWithControl from "./header-controls/AlignWithControl";
import FlipControl from "./header-controls/FlipControl";
import AlignControl from "./header-controls/AlignControl";
import LayoutControl from "./header-controls/LayoutControl";
import LayeringControl from "./header-controls/LayeringControl";
import ClonedControl from "./header-controls/ClonedControl";
import {
    Tune as SettingIcon,

} from '@material-ui/icons';
import CustomIcon from "./common/CustomIcon";

const TopBar = () => {
    return (
        <header className="tde-tools-header tde-sec-header bg-white">

            <nav
                className="align-items-center d-flex h-100  tde-pr-large-85 tde-pl-20">
                <div className="d-flex align-items-center tde-toolbaar-editor-set res-edit-logo">
                    <CustomIcon className={"tde-ml-large-45 tde-mr-large-25 tde-mr-small-10"}   Icon={SettingIcon} fill={"black"} />
                    <span className={"text-dark font-weight-bold text-nowrap res-edit-logo-text"} style={{fontSize:14}}>
                                Edit your logo
                            </span>
                </div>
                <div className="d-flex res-w-100">

                    {
                        <div className="d-flex align-items-center tde-ml-large-20 tde-ml-small-15 tde-px-5">

                            <label htmlFor="" className={"mb-0 tde-pr-10"}>Background</label>
                            <div className="tde-btns-holder tde-p-10 d-flex align-items-center">
                                {/*<ColorSwatch colorPicker={true} color={backgroundColor} onSelect={this.backgroundColorSelected}/>*/}
                            </div>
                        </div>
                    }
                    {
                        <div className="tde-btns-holder-custom tde-p-10  d-flex align-items-center tde-ml-30">
                            <ClonedControl />
                        </div>
                    }
                    {
                        <div className="d-flex align-items-center tde-ml-30 tde-py-5" >
                            <LayoutControl />
                        </div>
                    }
                    {
                        <div className="d-flex align-items-center tde-ml-30 tde-py-5" >
                            <AlignControl />
                        </div>
                    }
                    {
                    <div className="d-flex align-items-center tde-ml-30 tde-py-5" >
                        <FlipControl />
                    </div>
                    }
                    {
                        <div className=" tde-p-10  d-flex align-items-center tde-ml-30">
                            <LayeringControl />
                        </div>
                    }
                </div>
            </nav>

        </header>
    )
}

export default TopBar;