import React, {Fragment, useEffect, useState} from 'react';
import ReactTable from "react-table";
import {
    Row, Col,
    Card, CardBody,
    UncontrolledButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Table
} from 'reactstrap';
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Header from "../../Layout/AppHeader";
import axios from "axios";
import {connect} from "react-redux";
// import {getDataList} from "../../reducers/action";
import crudAction from "../../redux/action/crudAction";


const TableData = () => {
    const [listOfData, setListOfData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:1234/input').then(res => {
            setListOfData(res.data)
        })
    },[])

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
                                        data={listOfData}
                                        filterable
                                        columns={[{
                                            columns: [
                                                {
                                                    Header: 'Title',
                                                    accessor: 'title',
                                                    // Cell: row => console.log(row.value)
                                                },
                                                {
                                                    Header: 'Location',
                                                    accessor: 'location'
                                                },
                                                {
                                                    Header: 'Date',
                                                    accessor: 'date'
                                                },
                                                {
                                                    Header: 'Participant',
                                                    accessor: 'participant'
                                                },
                                                {
                                                    Header: 'Note',
                                                    accessor: 'note'
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


export default TableData;