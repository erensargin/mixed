import React from 'react'
import "./post.css"

export default function Post() {
    return (
        <div className='post'>
            <img className='postImg' src="https://ichef.bbci.co.uk/images/ic/1200x675/p01lymgh.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione inventore praesentium
                dicta cupiditate optio tempora quis, dolore qui aspernatur accusamus? Illo tempore eaque quasi nostrum eius? Ducimus, nam nostrum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione inventore praesentium
                dicta cupiditate optio tempora quis, dolore qui aspernatur accusamus? Illo tempore eaque quasi nostrum eius? Ducimus, nam nostrum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione inventore praesentium
                dicta cupiditate optio tempora quis, dolore qui aspernatur accusamus? Illo tempore eaque quasi nostrum eius? Ducimus, nam nostrum?
            </p>
        </div>
    )
}