import React, {useState} from 'react';
import {Button} from "reactstrap";
import StarRatings from 'react-star-ratings';



const RateSingleActivity = ({activityItem, onCancel, onSuccess}) => {


    const [newRating, setNewReating] = useState({activityItemId: activityItem.id, rateValue: -1, rateReason:''});
    const reasons = ['reason 1', 'reason 2', 'reason 3'];

    const handleOnChangeRateValue = (value) => {
        setNewReating(
            {
            ...newRating,
                rateValue: value,
            }
        )
    }

    const handleOnSelectReason = (value) => {
        setNewReating(
            {
            ...newRating,
                rateReason: value,
            }
        )
    }

    const cancel = () =>{
        onCancel();
    }

    const submit = () =>{
        console.log(newRating);
        onSuccess();
    }

    return (
        <div>

            <StarRatings rating={newRating.rateValue} numberOfStars={5} changeRating={handleOnChangeRateValue}/>
            <hr></hr>
            {(newRating.rateValue > -1 && newRating.rateValue < 3) &&
            <ul>
                {reasons.map((element, index) =>
                    <li key={index}>
                        {element}
                        <Button color={'success'} className={'btn-success'}
                                onClick={() => handleOnSelectReason(element)}>
                            Select
                        </Button>
                    </li>
                )}
            </ul>
            }
            <hr></hr>
            <Button onClick={cancel}>Cancel</Button>
            <Button className={'btn-success'} onClick={submit}>Submit</Button>
        </div>
    )

};

export default RateSingleActivity;
