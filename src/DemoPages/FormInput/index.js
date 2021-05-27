import React, {Fragment} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import axios from "axios";

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


class FormInput extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount() {
        axios.get("http://localhost:1234/input")
            .then(res => {this.setState({
                id:res.data.id,
                title:res.data.title,
                location:res.data.location,
                date:res.data.date,
                participant:res.data.participant,
                note:res.data.note,
                file:res.data.file
            })})
    }

    onSubmit = (e) => {
        const dataInput = {
            id: this.state.id,
            title: this.state.title,
            location: this.state.location,
            date: this.state.date,
            participant: this.state.participant,
            note:this.state.note,
            file: this.state.file
        }
        axios.post("http://localhost:1234/input", dataInput)
            .then(res => console.log(res.data))
    }


    render() {
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
                                                                <Label>Title</Label>
                                                                <Input type="text" name="title" id="title"
                                                                       placeholder="Your Title" onChange={this.handleChange}/>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label>Location</Label>
                                                                <Input type="text" name="location" id="location"
                                                                       placeholder="Location" onChange={this.handleChange}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label>Participant</Label>
                                                                <Input type="text" name="participant" id="participant"
                                                                       placeholder="Participant" onChange={this.handleChange}/>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col>
                                                            <FormGroup>
                                                                <Label>Date</Label>
                                                                <Input type="date" name="date" id="date" onChange={this.handleChange}/>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>

                                                    <FormGroup>
                                                        <Label>Note</Label>
                                                        <Input type="textarea" name="note" id="note" onChange={this.handleChange}/>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>Address Image</Label>
                                                        <Input type="text" name="file" id="file" onChange={this.handleChange}/>
                                                    </FormGroup>
                                                    <Button type="button" className="mt-1" onClick={this.onSubmit}>Submit</Button>
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
    }

}


export default FormInput;




