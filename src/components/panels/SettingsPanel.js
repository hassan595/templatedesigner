import React from "react";

import SlideAblePanel from "./SlidablePanel";

const SettingOptions = ["Announcement", "Result", "Score"]

const SettingsPanel = (props) =>{



    return (

        <>
            <SlideAblePanel show={true}>
                <div className="d-flex flex-column px-5">
                    <span className="d-flex text-muted py-2 h6">Settings</span>
                    {
                        SettingOptions.map(
                            option =>
                                (
                                    <div className="d-flex p-1">
                                        <input className="mr-1" type="checkbox" value=""
                                               id={"settingOption-" + option}/>
                                        <label className="mb-0" htmlFor={"settingOption-" + option}>
                                            {option}
                                        </label>
                                    </div>
                                )
                        )
                    }
                </div>
            </SlideAblePanel>


        </>
    )

}



export default SettingsPanel;
