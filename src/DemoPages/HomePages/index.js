import React, {Fragment, lazy, useEffect, useState} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import AppHeader from '../../Layout/AppHeader/';
import AppFooter from '../../Layout/AppFooter/';
import {Row} from "reactstrap";
import x from "../../assets/utils/images/avatars/3.jpg"
import CardBox from "./CardBox"
import CardBoxData from "./CardBoxData";
import axios from "axios";
import {connect} from "react-redux";

const Homepage = () => {
    const [dataCard, setDataCard] = useState([])
    const [dataImage, setDataImage] = useState()

    useEffect(() => {
        axios.get("http://localhost:1234/input").then(res => {
            setDataCard(res.data)
        })
    }, [])

    useEffect(() => {
        dataCard.map((data, index) => {
            axios.get('http://localhost:1234/input/getImage/' + data.id).then(res => {
                setDataImage(res.data)
                console.log(res.data)
            })
        })
    }, [])

    // const getImageData = (id) => {
    //     axios.get('http://localhost:1234/input/getImage/' + id).then(res => {
    //         setDataImage(res.data)
    //         console.log(res.data)
    //         console.log("Bisaaa yooo")
    //     })
    // };
    // axios.get('http://localhost:1234/input/getImage/' + id).then(res => {
    //     setDataImage(res.data)
    // })
    return (

        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <AppHeader/>
                <div className="app-main">
                    <div className="app-main__inner">
                        <Row>
                            {dataCard.map((card, index) => (
                                <CardBox key={index} title={card.title} location={card.location} date={card.date}
                                         participant={card.participant} image={`data:image/*;base64,` + dataImage}
                                         note={card.note}/>
                            ))}
                        </Row>
                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>);
};

export default Homepage;