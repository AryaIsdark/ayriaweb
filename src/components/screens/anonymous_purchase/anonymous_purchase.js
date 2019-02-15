import React, {useReducer} from 'react';
import AcceptorSelect from "../../elements/AcceptorSelect/AcceptorSelect";
import reducer from './reducer';
import {Input} from "reactstrap";
import StarRatings from "react-star-ratings";
import CustomModal from "../../elements/CustomModal/CustomModal";

const AnonymousPurchase = ({onCancel}) => {
    const initialState = {
        formObject: {
            acceptor: {},
            rating: 0,
            invoiceDate: '',
            amount: 0,
            attachment: {},
            paymentType: '',

        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const {formObject} = state;
    const handleFormObject = (e) => {
        dispatch({type: 'updateFormObject', payload: {target: e.target}})
    }
    const handleFileSelect = (e) => {
        console.log(e.target.files[0]);
        dispatch({type: 'updateAttachment', payload: e.target.files[0]})
    }

    const handleOnCancel = () => {
        onCancel();
    }

    return (
        <div >
            <div className={'form-group'}>
                <label>پذیرنده </label>
                <AcceptorSelect
                    onChange={(value) => dispatch({type: 'updateAcceptor', payload: value})}
                    onSelect={(item) => dispatch({type: 'updateAcceptor', payload: item})}/>
            </div>
            <div className={'form-group'}>
                <label>AcceptorId</label>
                <Input disabled value={formObject.acceptor.id}/>
            </div>
            <div className={'form-group'}>
                <label>تاریخ فاکتور</label>
                <Input id={'invoiceDate'} onChange={e => handleFormObject(e)} type={'date'}/>
            </div>
            <div className={'form-group'}>
                <label>رقم </label>
                <Input id={'amount'} onChange={e => handleFormObject(e)} type={'number'}/>
            </div>
            <div className={'form-group'}>
                <label>نوع پرداخت</label>
                <Input id={'paymentType'} onChange={e => handleFormObject(e)}/>
            </div>
            <div className={'form-group'}>
                <label>تصویر فاکتور</label>
                <Input id={'attachment'} type={'file'} onChange={e => handleFileSelect(e)}/>
            </div>
            <div className={'form-group'}>
                <label>امتیاز به پذیرنده</label>
                <br></br>
                <StarRatings
                    starDimension={'24px'}
                    starSpacing={'2px'}
                    rating={formObject.rating}
                    numberOfStars={5}
                    changeRating={(value) => {
                        dispatch({type: 'updateRate', payload: value})
                    }}/>
            </div>
            <hr></hr>

            <button className={'btn btn-default'} onClick={handleOnCancel}>انصراف </button>
            <span className={'divider'}></span>
            <button className={'btn btn-info'}>ثبت  </button>
            {/*<pre>{JSON.stringify(formObject)}</pre>*/}
        </div>
    )
}


export default AnonymousPurchase;
