import { Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';
import Loader from 'react-loaders'

import {
    ToastContainer,
} from 'react-toastify';

const Home = lazy(()=> import('../../DemoPages/HomePages'));
const Input = lazy(()=> import('../../DemoPages/FormInput'));
const TableData = lazy(()=> import('../../DemoPages/TableData'));
const Tables = lazy(() => import('../../DemoPages/Tables'));
const AppMain = () => {

    return (
        <Fragment>

            {/* Components */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-pulse-rise"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/home" component={TableData}/>
            </Suspense>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-pulse-rise"/>
                        </div>
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/input" component={Input}/>
            </Suspense>
            <Route exact path="/" render={() => (
                <Redirect to="/home"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;