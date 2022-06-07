import React from "react";

export const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>SNS</span>
            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <input
                        type='text'
                        className='searchInput'
                        placeholder='探し物は？'
                    />
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarIconItem'>1</div>
                <div className='topbarIconItem'>2</div>
            </div>
            <img src='/assets/person/1.jpeg' alt='' className='topbarImg' />
        </div>
    );
};
