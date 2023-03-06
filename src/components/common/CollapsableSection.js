import React,{useState} from 'react';
import {Collapse} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Switch from "./Switch";
import CloseIcon from '@material-ui/icons/ClearOutlined';
import CustomIcon from "./CustomIcon";
import clsx from "clsx";
function CollapsableSection({className='',label,onClick,Icon,showSwitch,showCross,children,TitleIcon, hide,src, clickOnSwitch, checked=true, hideIcon = true,responsiveToggleValue=false,responsiveToggeling,responsiveSlider='',responsiveMoodCategory=false}) {
    const [collapse,setCollapse]=useState(hide);
    const [responsiveToggle,setResponsiveToggle]=useState(responsiveToggleValue?responsiveToggleValue:false);
    const [showSwitchState,setShowSwitchState] = useState(showSwitch?showSwitch:false);
    React.useEffect(()=>{
        let getWindowSize = window.innerWidth;
        if(getWindowSize<600)
        {
            setCollapse(false);
        }else {
            setCollapse(hide);
        }

    }, [hide]);

    React.useEffect(()=>{
        //eslint-disable-next-line
        let getWindowSize = screen.width;
        if(getWindowSize<875)
        {
            responsiveMoodActive(true);
            setShowSwitchState(false);
        }
    }, []);
    const responsiveMoodActive = (toggle)=>{
        setCollapse(toggle);

    }
    const handleCLick=()=>{
        //eslint-disable-next-line
        let getWindowSize = screen.width;

        if(onClick){
            onClick();
        }else{
            if(!checked)
            {
                if(getWindowSize<875)
                {
                    setResponsiveToggle(true)
                    responsiveToggeling(true);
                }
                setCollapse(true);
                return;
            }
            if(getWindowSize<875)
            {
                setResponsiveToggle(!responsiveToggle)
                responsiveToggeling(!responsiveToggle);
            }
            setCollapse(!collapse)
        }

    }

    return (
        <>
            <div className={clsx("d-flex align-items-center tde-collapse-header tde-btn-5-caps",collapse?"tde-bg-white":"tde-super-light-grey-1-bg response-collapse",className, showSwitch&&checked&&'tde-text-gray' ,responsiveMoodCategory && "custom-d-none")}
                onClick={handleCLick } >
                <div className="icon">
                    <CustomIcon active={!collapse} Icon={Icon} src={src} size={TitleIcon?24:16} />
                </div>
                {TitleIcon && <CustomIcon  className={'tde-ml-10 tde-mr-5'} active={checked} Icon={TitleIcon} size={16}/>}
                <span>
                    {label.toUpperCase()}
                </span>
                <div className={"ml-auto tde-mr-5"}>
                    {
                        showSwitchState && <Switch  checked={checked} onClick={clickOnSwitch} collapse={collapse}/>

                    }
                </div>
                {hideIcon  &&
                    <div>
                        {
                        showCross || responsiveToggle  ? <CustomIcon  active={checked} Icon={CloseIcon} />
                            :
                            <CustomIcon  active={!collapse} size={24} className={"res-custom-icon-disable"} Icon={collapse?KeyboardArrowDownIcon:KeyboardArrowUpIcon}  />
                        }
                    </div>
                }

            </div>
            <Collapse style={{position: 'relative', zIndex: '2'}} in={responsiveMoodCategory?true:!collapse} timeout="auto" >
                <div className={clsx("tde-px-25 tde-py-20",responsiveSlider )} >
                    {children}
                </div>
            </Collapse>
        </>
    );
}

export default CollapsableSection;
