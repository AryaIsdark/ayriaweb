import React from 'react';
import {Button} from "reactstrap";

const data = [
    {id: 1, title: 'purchase 1', amount: 20000, company: 'Test company 1'},
    {id: 2, title: 'purchase 2', amount: 150000, company: 'Test company 2'},
    {id: 3, title: 'purchase 3', amount: 450000, company: 'Test company 3'},
    {id: 4, title: 'purchase 4', amount: 32, company: 'Test company 4'},
]

const RecentActivities = ({onRowClick}) => {

    const handleOnRowClick = (element) =>{
        if(element){
            onRowClick(element);
        }
    }

    return (
        <ul>
            {data.map(element =>
                <li key={element.id}>
                    {element.title} - {element.amount} - {element.company}
                    <Button color={'success'} className={'btn-success'}
                            onClick={() => handleOnRowClick(element)}>
                        Rate
                    </Button>
                </li>
            )}
        </ul>
    )

};

export default RecentActivities;
