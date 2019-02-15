import React, {useState} from 'react';
import CustomCard from "../../elements/CustomCard/CustomCard";
import RecentActivities from "../../modules/recent-acitvities/recent-activities";
import CustomModal from "../../elements/CustomModal/CustomModal";
import RateSingleActivity from "../../modules/rate-single-activity/rate-single-activity";
import AccountBalance from "../../elements/AccountBalance/AccountBalance";
import Refuel from "../refuel/refuel";

const Dashboard = () => {

    const [isShowRateModal, setIShowRateModal] = useState(false);
    const [selectedActivityItemForRating, setSelectedActivityItemForRating] = useState({});

    const handleRecentActivityOnRowClick = (element) => {
        if(element){
            setSelectedActivityItemForRating(element)
            setIShowRateModal(true);
        }
    }

    const handleRateSingleActivityOnCancel = () => {
        setIShowRateModal(false);
        setSelectedActivityItemForRating({})
    }

    const handleRateSingleActivityOnSuccess = () => {
        setIShowRateModal(false);
        setSelectedActivityItemForRating({})
    }

    const handleRateSingleActivityOnError = () => {

    }

    return (
        <React.Fragment>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-12">
                    <CustomCard
                        title={'خریدهای اخیر شما'}
                        description={'description'}
                        html={<RecentActivities onRowClick={element => handleRecentActivityOnRowClick(element)}/>}
                    />
                </div>
                <div className="col-lg-4 col-md-12 md-mt-5">
                    <CustomCard
                        title={'موجودی حساب شما'}
                        description={'description'}
                        html={<Refuel/>}
                    />
                </div>
                <div className="col-lg-4 col-md-12 md-mt-5">
                    <div className="featured-item style-2">
                        <div className="featured-icon"><i className="flaticon-market"></i>
                            <span className="rotateme"></span>
                        </div>
                        <div className="featured-title">
                            <h5>Marketing</h5>
                        </div>
                        <div className="featured-desc">
                            <p>Top quality Software services, labore et dolore magna ali qua Lorem ipsum dolor sit amet.</p>
                            <a className="icon-btn mt-4" href="#"> <i className="la la-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <CustomModal title={'Rate modal'}
                         showModal={isShowRateModal}
                         content={
                             <RateSingleActivity
                                onCancel={handleRateSingleActivityOnCancel}
                                onSuccess={handleRateSingleActivityOnSuccess}
                                onError={handleRateSingleActivityOnError}
                                activityItem={selectedActivityItemForRating}
                             />
                         }
                         />
        </React.Fragment>
    )
}


export default Dashboard;
