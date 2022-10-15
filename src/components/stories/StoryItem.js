import React from "react";
const StoryItem = ({id,story,backgroundImage,username}) =>{
    return(
        <div className="card w-full bg-base-100 shadow-xl image-full m-4">
            <figure><img src={backgroundImage}/></figure>
            <div className="card-body">
                <h2 className="text-5xl text-center">{story} </h2>
                <small className='uppercase'>{id}</small>
                <p>by @{username}</p>
            </div>
        </div>
    );
}

export default StoryItem;