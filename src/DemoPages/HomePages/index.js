
import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import AppHeader from '../../Layout/AppHeader/';
import AppFooter from '../../Layout/AppFooter/';
import {Row} from "reactstrap";

import CardBox from "./CardBox"
import CardBoxData from "./CardBoxData";

const Homepage = () => {
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
                            {CardBoxData.map((card, index) => (
                                <CardBox key={index} title={card.title} subtitle={card.subtitle} image={card.image}/>
                            ))}
                        </Row>

                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>);
};

export default Homepage;