import React from 'react';

function PersonalInfo(props) {
    const {name, age} = props;
    return(
        <div className="info">
            <h2>Name : {name}</h2>
            <h4>Age : {age} </h4>
        </div>
    )
}

export default PersonalInfo;