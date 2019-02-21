import React from 'react';


const CustomCard = ({title, icon, image, description, html}) => {
    return (
    <div className="featured-item style-2">
        <div className="featured-icon text-success">
            <i className="flaticon-data"></i>
            <span className="rotateme"></span>
        </div>
        <div className="featured-title pull-right">
            <br></br>
            <p className={'text-info'} style={{fontSize:'20px'}}>{title}</p>
        </div>
        <div className="featured-desc">
            <p>{description}</p>
            <hr></hr>
            <div>{html}</div>
            {/*<a className="icon-btn mt-4" href="#"> <i className="la la-angle-left"></i></a>*/}
        </div>
    </div>
    )
}




export default CustomCard;
