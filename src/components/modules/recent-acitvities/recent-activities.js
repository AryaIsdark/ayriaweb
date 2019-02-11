import React, {useState} from 'react';
import {Button} from "reactstrap";
import CustomModal from "../../elements/CustomModal/CustomModal";
import RateSingleActivity from "../rate-single-activity/rate-single-activity";

const data = [
    {id: 1, title: 'purchase 1', amount: 20000, company: 'Test company 1'},
    {id: 2, title: 'purchase 2', amount: 150000, company: 'Test company 2'},
    {id: 3, title: 'purchase 3', amount: 450000, company: 'Test company 3'},
    {id: 4, title: 'purchase 4', amount: 32, company: 'Test company 4'},
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
                    <th className={"border-0"}>Header 1</th>
                    <th className={"border-0"}>Header 2</th>
                    <th className={"border-0"}>Header 3</th>
                    <th className={"border-0"}>Header 4</th>
                </tr>
                </thead>
                <tbody>
                {data.map(element => (
                    <tr>
                        <td key={element.id}>{element.id}</td>
                        <td>{element.title}</td>
                        <td>{element.amount}</td>
                        <td>{element.company}</td>
                        <td>
                            <Button color={"success"} className={"btn-success"} onClick={() => handleOnRowClick(element)}>
                                Rate
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
