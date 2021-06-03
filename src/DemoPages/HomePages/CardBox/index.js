import React, {Fragment, useEffect, useState} from 'react';
import {Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardTitle, Col} from "reactstrap";
import im from "../../../assets/utils/images/avatars/1.jpg"
import axios from "axios";

const CardBox = (props) => {
    const [imageData, setImageData] = useState("")

    useEffect(() => {
        axios.get('http://localhost:1234/input/getImage/' + props.image).then(res => {
            setImageData(res.data)
        })
    })

    return (
        <Fragment>
            <Col md="3">
                <Card className="main-card mb-3">
                    <CardImg top width={100}
                             src={"data:image/*;base64," + imageData}
                             alt="Card image cap"/>
                    {/*<img src={"data:image/*;base64," + imageData} alt="Card image cap"/>*/}
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
        </Fragment>);
};

export default CardBox;