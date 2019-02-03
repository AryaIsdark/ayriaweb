import React, {useReducer} from 'react';
import AcceptorSelect from "../../elements/AcceptorSelect/AcceptorSelect";
import reducer from './reducer';
import {Input} from "reactstrap";
import RateSingleActivity from "../../modules/rate-single-activity/rate-single-activity";
import StarRatings from "react-star-ratings";
import CustomModal from "../../elements/CustomModal/CustomModal";

const AnonymousPurchase = () => {
    const initialState = {
        formObject: {
            acceptor:{},
            rating:0,
            invoiceDate:'',
            amount:0,
            attachment: {},
            paymentType: '',

        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const {formObject} = state;
    const handleFormObject = (e) => {
        dispatch({ type: 'updateFormObject', payload: { target: e.target } })
    }
    const handleFileSelect = (e) => {
        console.log(e.target.files[0]);
        dispatch({ type: 'updateAttachment', payload: e.target.files[0] })
    }

    return (
        <div>
            <CustomModal>
                <div className={'form-group'}>
                    <label>AcceptorId</label>
                    <AcceptorSelect
                        onChange={(value)=> dispatch({type:'updateAcceptor', payload:value})}
                        onSelect={(item)=> dispatch({type:'updateAcceptor', payload:item})}/>
                </div>
                <div className={'form-group'}>
                    <label>AcceptorId</label>
                    <Input disabled value={formObject.acceptor.id}/>
                </div>
                <div className={'form-group'}>
                    <label>InvoiceDate</label>
                    <Input id={'invoiceDate'} onChange={e => handleFormObject(e)} type={'date'}/>
                </div>
                <div className={'form-group'}>
                    <label>Amount</label>
                    <Input id={'amount'} onChange={e => handleFormObject(e)} type={'number'}/>
                </div>
                <div className={'form-group'}>
                    <label>PaymentType</label>
                    <Input id={'paymentType'} onChange={e => handleFormObject(e)} />
                </div>
                <div className={'form-group'}>
                    <label>Attachment</label>
                    <Input id={'attachment'} type={'file'} onChange={e => handleFileSelect(e)} />
                </div>
                <div className={'form-group'}>
                    <label>Rate</label>
                    <br></br>
                    <StarRatings
                        starDimension={'24px'}
                        starSpacing={'2px'}
                        rating={formObject.rating}
                        numberOfStars={5}
                        changeRating={(value) => {dispatch({type: 'updateRate', payload: value})}}/>
                </div>
            </CustomModal>
            {JSON.stringify(formObject)}
        </div>
    )
}


export default AnonymousPurchase;
