import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';


export const LogIn = ({startLogin}) => (
        <div className="log-in">
            <div className="log-in__container">
                <div className="log-in__text__container">  
                    <h1 className="log-in__text is--title">Empty Wallet</h1>
                    <p className="log-in__text is--subtitle">What's in your wal-  ...nevermind.</p>
                </div>
                <button onClick={startLogin} className="log-in__btn btn">Log In</button>
            </div>
        </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: ()=> dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LogIn);

