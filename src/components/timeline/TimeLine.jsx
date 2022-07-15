import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./TimeLine.css";
import axios from "axios";
// import { Posts } from "../../dummyData";

export default function TimeLine({ username }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = username
                ? await axios.get(`/posts/profile/${username}`)
                : await axios.get("/posts/timeline/6279fa3990c310e621212a30");
            setPosts(response.data);
        };
        fetchPosts();
    }, [username]);
    return (
        <div className='timeline'>
            <div className='timelineWrapper'>
                <Share />
                {posts.map((post) => (
                    <Post post={post} key={post._id} />
                ))}
            </div>
        </div>
    );
}
