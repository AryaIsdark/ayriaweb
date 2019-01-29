import React from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

const CustomCard = ({title, icon, image, description, html}) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{description}</CardSubtitle>
                <CardText>{html}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    )
}




export default CustomCard;
