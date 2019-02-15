import React, {useState} from 'react';
import {Button} from "reactstrap";
import CustomModal from "../../elements/CustomModal/CustomModal";
import RateSingleActivity from "../rate-single-activity/rate-single-activity";

const data = [
    {id: 1, title: 'خرید 1', amount: 20000, company: '  پذیرنده خیالی  1'},
    {id: 2, title: 'خرید 2', amount: 150000, company: '  پذیرنده خیالی  2'},
    {id: 3, title: 'خرید 3', amount: 450000, company: '  پذیرنده خیالی  2'},
    {id: 4, title: 'خرید 4', amount: 320000, company: '  پذیرنده خیالی 3'},
]

const RecentActivities = ({onRowClick}) => {
    const[selectedItem, setSelectedItem]= useState({});

    const handleOnRowClick = element => {
        if (element) {
            setSelectedItem(element)
        }
    };

    const handleRecentActivityOnCancel = () => {
        setSelectedItem({});
    }

    return (
        <>
            <table className={"table mb-0"}>
                <thead className={"bg-light"}>
                <tr>
                    <th className={"border-0"}>#</th>
                    <th className={"border-0"}>مبلغ</th>
                    <th className={"border-0"}>پذیرنده</th>
                    <th className={"border-0"}>امتیاز</th>
                </tr>
                </thead>
                <tbody>
                {data.map(element => (
                    <tr>
                        <td key={element.id}>{element.id}</td>
                        <td>{element.amount}</td>
                        <td>{element.company}</td>
                        <td>
                            <Button color={"success"} className={"btn-success"} onClick={() => handleOnRowClick(element)}>
                                امتیازدهی
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <CustomModal
                showModal={selectedItem.id}
                title={'Rate recent activity'}
                content={<RateSingleActivity onCancel={handleRecentActivityOnCancel} activityItem={selectedItem}/>}
            />
        </>
    );
};

export default RecentActivities;
