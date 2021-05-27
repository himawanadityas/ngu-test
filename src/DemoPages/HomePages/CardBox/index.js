import React, {Fragment} from 'react';
import {Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardTitle, Col} from "reactstrap";
import im from "../../../assets/utils/images/avatars/1.jpg"

const CardBox = (props) => (
    <Fragment>
        <Col md="3">
            <Card className="main-card mb-3">
                {/*<CardImg top width="20%"*/}
                {/*         src={props.image}*/}
                {/*         alt="Card image cap"/>*/}
                <img src={props.image} alt="Card image cap"/>
                <CardBody>
                    <CardSubtitle>{props.location}</CardSubtitle>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.date}</CardSubtitle>
                    <CardSubtitle>{props.participant}</CardSubtitle>
                </CardBody>
                <CardFooter>
                    <div className='align-content'>
                        <p>{props.note}</p>
                    </div>
                </CardFooter>
            </Card>
        </Col>
    </Fragment>
);

export default CardBox;