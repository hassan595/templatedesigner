import React from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';

function SlidablePanel(props) {

    const handleScrollDown = (container) => {
        if (props.onScroll) {
            if (container.scrollTop >= (container.scrollHeight - container.clientHeight) * 0.9) {
                props.onScroll();
                // container.scrollTop -= 0.1 * container.scrollHeight;

            }
        }
    }

    return (
        <div className={clsx(props.className, "tde-slidable custom-h-100", props.show ? "tde-slide-in" : "tde-slide-out")}
             onClick={props.onItemSelect}><PerfectScrollbar className={clsx(props.responsivetoggle && props.responsivetoggle?"responsiveMood" :'')}
            onScrollDown={handleScrollDown}>{props.children}</PerfectScrollbar></div>
    );
}

export default SlidablePanel;
