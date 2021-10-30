import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuthRedirect = (Component) => {
    const withAuthRedirectWrapper = (props) => {
        if (!props.isAuth) {
            return <Redirect to="/login/" />;
        }
        return <Component {...props} />;
    };

    const mapStateToProps = (state) => {
        return { isAuth: state.auth.isAuth };
    };

    const ConnectedAuthWithRedirect = connect(mapStateToProps)(withAuthRedirectWrapper);

    return ConnectedAuthWithRedirect;
};

export default withAuthRedirect;
