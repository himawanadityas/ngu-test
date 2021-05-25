import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

// Examples

import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container, CustomInput,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row
} from "reactstrap";
import AppHeader from "../../Layout/AppHeader";
import AppFooter from "../../Layout/AppFooter";


function NamaLabel(props) {
    return <label>{props.name}</label>;
}

const FormInput = () => {
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
                        <Container fluid>
                            <Row>
                                <Col md="12">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Input</CardTitle>
                                            <Form>
                                                <Row>
                                                    <Col>
                                                        <FormGroup>
                                                            <NamaLabel name='Title'/>
                                                            <Input type="text" name="title" id="title"
                                                                   placeholder="Your Title"/>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col>
                                                        <FormGroup>
                                                            <NamaLabel name='Location'/>
                                                            <Input type="text" name="location" id="location"
                                                                   placeholder="Location"/>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <FormGroup>
                                                            <NamaLabel name='Participant'/>
                                                            <Input type="text" name="participant" id="participant"
                                                                   placeholder="Participant"/>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col>
                                                        <FormGroup>
                                                            <NamaLabel name='Date'/>
                                                            <Input type="date" name="date" id="date"/>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>

                                                <FormGroup>
                                                    <NamaLabel name='Note'/>
                                                    <Input type="textarea" name="note" id="note"/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>Upload Image</Label>
                                                    <Input type="file" name="image" id="image"/>
                                                </FormGroup>
                                                <Button type="button" className="mt-1">Submit</Button>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>);
};


export default FormInput;




