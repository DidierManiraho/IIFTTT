import React from 'react';

const ShowComponent = (props) => {
    return (
        <div className="mt-10 w-full text-center">
            <a styling={props.styling ? "tab tab-active" : "tab"} onClick={props.handler}> {props.title} </a>
        </div>
    );
};

export default ShowComponent;