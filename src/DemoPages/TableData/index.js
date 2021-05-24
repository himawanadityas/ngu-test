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

class TableData extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }

    render() {
        const {data} = this.state;
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
                                    defaultPageSize={10}
                                    className="-striped -highlight"
                                />
                            </CardBody>
                        </div>
                    </Card>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default TableData;