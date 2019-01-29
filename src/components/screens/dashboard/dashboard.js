import React, {useState} from 'react';
import CustomCard from "../../elements/CustomCard/CustomCard";
import RecentActivities from "../../modules/recent-acitvities/recent-activities";
import CustomModal from "../../elements/CustomModal/CustomModal";
import Profile from "../profile/profile";
import RateSingleActivity from "../../modules/rate-single-activity/rate-single-activity";

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
            <CustomCard
                title={'title'}
                description={'description'}
                html={<RecentActivities onRowClick={element => handleRecentActivityOnRowClick(element)}/>}
            />
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
