import React, {useState} from 'react';
import CustomCard from "../../elements/CustomCard/CustomCard";
import RecentActivities from "../../modules/recent-acitvities/recent-activities";
import CustomModal from "../../elements/CustomModal/CustomModal";
import RateSingleActivity from "../../modules/rate-single-activity/rate-single-activity";
import AccountBalance from "../../elements/AccountBalance/AccountBalance";
import Refuel from "../refuel/refuel";
import AnonymousPurchase from "../anonymous_purchase/anonymous_purchase";

const Dashboard = () => {

    const [isShowRateModal, setIShowRateModal] = useState(false);
    const [isShowRegisterAnonymPurchaseModal, setIsShowRegisterAnonymPurchaseModal] = useState(false);
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

    const handleShowRegisterAnonymPurchaseModal = () => {
        setIsShowRegisterAnonymPurchaseModal(true)
    }

    const handleCloseRegisterAnonymPurchaseModal = () => {
        setIsShowRegisterAnonymPurchaseModal(false)
    }

    return (
        <React.Fragment>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-12">
                    <CustomCard
                        title={'خریدهای اخیر شما'}
                        description={''}
                        html={<RecentActivities onRowClick={element => handleRecentActivityOnRowClick(element)}/>}
                    />
                </div>
                <div className="col-lg-4 col-md-12 md-mt-5">
                    <CustomCard
                        title={'موجودی حساب شما'}
                        description={''}
                        html={<Refuel/>}
                    />
                </div>
                <div className="col-lg-4 col-md-12 md-mt-5">
                    <CustomCard
                        title={'ثبت خرید بدون کارت'}
                        description={'اگر میخواهید خرید بدون کارت خود را در سیستم ثبت نمایید دکمه شروع را فشاردهید '}
                        html={<button onClick={handleShowRegisterAnonymPurchaseModal} className={'btn btn-success'}>شروع</button>}
                    />
                </div>
            </div>


            <CustomModal title={'امتیاز دهی به پذیرنده'}
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

            <CustomModal title={'ثبت خرید بدون کارت'}
                         showModal={isShowRegisterAnonymPurchaseModal}
                         content={<AnonymousPurchase onCancel={handleCloseRegisterAnonymPurchaseModal}/>}
                         />
        </React.Fragment>
    )
}


export default Dashboard;
