import React, {Fragment, useState} from 'react';
import ReactTable from "react-table";
import {
    Row, Col,
    Card, CardBody,
    UncontrolledButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';
import avatar2 from "../../assets/utils/images/avatars/2.jpg";
import {makeData} from "../Tables/DataTables/Examples/utils"
import PageTitle from "../../Layout/AppMain/PageTitle";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Header from "../../Layout/AppHeader";
import axios from "axios";

class TableData extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    getData(){
        axios.get(`http://localhost:1234/input`)
            .then(res => {
                this.setState({data:res.data})
                console.log(res.data)
            })
    }

    componentDidMount(){
        this.getData();
    }

    render() {
        const {data} = this.state;
        console.log("ini data", data);
        return (
            <Fragment>

                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Header/>
                    <div className="app-main">
                        <div className="app-main__inner">
                            <Card className="main-card m-5">
                                <div className="mb-3">
                                    <CardBody>
                                        <ReactTable
                                            data={data}
                                            filterable
                                            columns={[{
                                                columns: [
                                                    {
                                                        Header: 'Title',
                                                        accessor: 'lastName',
                                                    },
                                                    {
                                                        Header: 'Location',
                                                        accessor: 'age'
                                                    },
                                                    {
                                                        Header: 'Date',
                                                        accessor: 'visits'
                                                    },
                                                    {
                                                        Header: 'Participant',
                                                        accessor: 'lastName'
                                                    },
                                                    {
                                                        Header: 'Note',
                                                        accessor: 'lastName'
                                                    }
                                                ]
                                            }]}
                                            defaultPageSize={5}
                                            className="-striped -highlight"
                                        />
                                    </CardBody>
                                </div>
                            </Card>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default TableData;