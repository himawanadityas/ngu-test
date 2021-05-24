import React, {Fragment} from 'react';
import {Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardTitle, Col} from "reactstrap";

const CardBox = (props) => (
    <Fragment>
        <Col md="3">
            <Card className="main-card mb-3">
                <CardImg top width="20%"
                         src={props.image}
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.subtitle}</CardSubtitle>
                </CardBody>
                <CardFooter>
                    <div className='align-content'>
                        <p>Note : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </CardFooter>
            </Card>
        </Col>
    </Fragment>
);

export default CardBox;