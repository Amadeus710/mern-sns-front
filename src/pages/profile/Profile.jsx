import React from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import { Topbar } from "../../components/Topbar/Topbar";
import "./Profile.css";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className='profile'>
                <Sidebar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img
                                src='assets/post/3.jpeg'
                                alt=''
                                className='profileCoverImg'
                            />
                            <img
                                src='assets/person/1.jpeg'
                                alt=''
                                className='profileUserImg'
                            />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>Test User</h4>
                            <span className='profileInfoDesc'>
                                テストユーザーです。
                            </span>
                        </div>
                    </div>{" "}
                    <div className='profileRightBottom'>
                        <TimeLine />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    );
}
