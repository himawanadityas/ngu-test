import React, {Fragment, lazy} from 'react';
import {Link} from 'react-router-dom'
import {Button, CardBody, Col} from "reactstrap";
// import Homepage from "../../../DemoPages/HomePages";
const Homepage = lazy(() => import('../../../DemoPages/HomePages'));

class HeaderDots extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="header-dots">
                    {/*<Col>*/}

                    {/*</Col>*/}
                    <Link to="/home" style={{textDecoration: "none"}}>
                        <Button className="mb-2 mr-2 btn-icon btn-pill" outline color="primary">
                            <i className="pe-7s-tools btn-icon-wrapper"> </i>
                            Home
                            {/*<Link to="/home" style={{textDecoration:"none"}}>Homepage</Link>*/}
                        </Button>
                    </Link>
                    <Link to="/table" style={{textDecoration: "none"}}>
                        <Button className="mb-2 mr-2 btn-icon btn-pill" outline color="secondary">
                            <i className="pe-7s-gym btn-icon-wrapper"> </i>
                            Table
                            {/*<Link to="/table" style={{textDecoration: "none"}}>Table</Link>*/}
                        </Button></Link>
                    <Link to="/input" style={{textDecoration: "none"}}>
                        <Button className="mb-2 mr-2 btn-icon btn-pill" outline color="success">
                            <i className="pe-7s-umbrella btn-icon-wrapper"> </i>
                            Input Form
                            {/*<Link to="/input" style={{textDecoration: "none"}}>Input Form</Link>*/}
                        </Button></Link>

                    {/*<Col>*/}
                    {/*    <Link to="/table">Tables</Link>*/}
                    {/*</Col>*/}
                    {/*<Col>*/}
                    {/*    <Link to="/input">Input</Link>*/}
                    {/*</Col>*/}
                </div>
            </Fragment>
        )
    }
}

export default HeaderDots;
