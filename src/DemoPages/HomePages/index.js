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

    useEffect(() => {
        axios.get("http://localhost:1234/input").then(res => {
            setDataCard(res.data)
        })
    }, [])

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
                                         participant={card.participant} image={card.id}
                                         note={card.note}/>
                            ))}
                        </Row>
                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>);
};

export default Homepage;