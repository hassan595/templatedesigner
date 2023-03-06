import React from "react";

const SiteHeader = () => {
    return (
        <header className=" tde-header">
            <nav
                className="align-items-center d-flex h-100 justify-content-between overflow-hidden">
                <div className="back-btn-responsive">
                    <div className="tde-sub-heading d-flex align-items-center tde-pointer back-btn "
                    >
                        {/*<BackIcon/>*/}
                        <span className={"ml-1"}> Go back to editor </span>
                    </div>
                </div>
                <div className="logo tde-pointer">
                    <img src="/images/Logomark.svg" alt="Template Designer" />
                </div>
                <div className="tde-secondary-actions d-flex align-items-center">
                    <div className={`tde-btn-dark`}
                         style={{minWidth: 165}}
                         onClick={()=>{}}>
                        <span>Save Logo</span>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default SiteHeader