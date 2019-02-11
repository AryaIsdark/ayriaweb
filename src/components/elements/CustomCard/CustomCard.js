import React from 'react';


const CustomCard = ({title, icon, image, description, html}) => {
    return (
    <div className="featured-item style-2">
        <div className="featured-icon"><i className="flaticon-data"></i>
            <span className="rotateme"></span>
        </div>
        <div className="featured-title">
            <h5>{title}</h5>
        </div>
        <div className="featured-desc">
            <div>{html}</div>
            <a className="icon-btn mt-4" href="#"> <i className="la la-angle-right"></i>
            </a>
        </div>
    </div>
    )
}




export default CustomCard;
