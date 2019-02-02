import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

const CustomCard = ({title, icon, image, description, html}) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{description}</CardSubtitle>
                <CardText>{html}</CardText>
            </CardBody>
        </Card>
    )
}




export default CustomCard;
