import React, {useState} from 'react';
import {Button, Input, Label} from "reactstrap";
import StarRatings from 'react-star-ratings';



const RateSingleActivity = ({activityItem, onCancel, onSuccess}) => {


    const [newRating, setNewReating] = useState({activityItemId: activityItem.id, rateValue: -1, rateReason:[]});
    const reasons = ['reason 1', 'reason 2', 'reason 3'];
    const [selectedReasons, setSelectedReasons] = useState([]);
    const handleOnChangeRateValue = (value) => {
        setNewReating(
            {
                ...newRating,
                rateValue: value,
            }
        )
    }

    const handleOnSelectReason = (event, value) => {
        let list = selectedReasons;
        if(event.target.checked){
            list.push(value);
            setSelectedReasons(list);
        }
        else{
            list.splice(list.indexOf(value), 1);
            setSelectedReasons(list);
        }

        console.log(list);
        setNewReating(
            {
                ...newRating,
                rateReason: list,
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
                        <Label check>
                            <Input type="checkbox" onClick={(event) => handleOnSelectReason(event, element)}   />
                            {element}
                        </Label>
                    </li>
                )}
            </ul>
            }
            <hr></hr>
            <Button onClick={cancel}>Cancel</Button>
            <span className={'divider'}></span>
            <Button className={'btn-success'} onClick={submit}>Submit</Button>
        </div>
    )
};

export default RateSingleActivity;
