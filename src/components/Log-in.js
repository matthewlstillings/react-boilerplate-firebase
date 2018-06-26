import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';


export const LogIn = ({startLogin}) => (
            <div>
                <button onClick={startLogin}>Log In</button>
                <a>Forgot your info?</a>
            </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: ()=> dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LogIn);

