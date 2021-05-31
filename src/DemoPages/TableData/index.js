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


const CreateRow = (props) => {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.location}</td>
        </tr>
    )
}
const TableData = ({getDataList, loading, listOfData}) => {

    useEffect(() => {
        if(loading){
            getDataList()
        }
    })


    // const {dataTable} = this.state;
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
                                    {/*<Table size="lg">*/}
                                    {/*    <thead>*/}
                                    {/*    <th>Title</th>*/}
                                    {/*    <th>Location</th>*/}
                                    {/*    </thead>*/}
                                    {/*    <tbody>*/}
                                    {/*    {this.state.dataTable.map((data) => (*/}
                                    {/*        <CreateRow key={data.index} title={data.title}*/}
                                    {/*                   location={data.location}/>*/}
                                    {/*    ))}*/}
                                    {/*    </tbody>*/}
                                    {/*</Table>*/}
                                    <ReactTable
                                        data={listOfData}
                                        filterable
                                        columns={[{
                                            columns: [
                                                {
                                                    Header: 'Title',
                                                    accessor: 'title',
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


const mapStateToProps = state => ({
    ...state.crudReducer,
    listOfData: state.crudReducer.listData,
    loading: state.crudReducer.loading
})

const mapDispatchToProps = {
    getDataList: crudAction.getData
}

export default connect(mapStateToProps, mapDispatchToProps)(TableData);