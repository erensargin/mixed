import React from "react";
import "./singlepost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://ichef.bbci.co.uk/images/ic/1200x675/p01lymgh.jpg"
                    alt=""
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Title{" "}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>E</b></span>
                    <span className="singlePostDate">1 Hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur in eaque dolorem laborum incidunt vel quidem eligendi, tempora explicabo. Et iure minus dignissimos aut accusantium debitis vel facilis amet.</p>
            </div>
        </div>
    );
}
