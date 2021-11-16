import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import Preloader from './Components/Common/Preloader';
import { initializeApp } from './Redux/appReducer';
import { getInitializationStatus } from './Redux/appSelectors';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader />;
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header />
                    <Sidebar />
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route
                                path="/profile/:userId?"
                                render={({ match }) => (
                                    <ProfileContainer key={match.params.userId} />
                                )}
                            />
                            <Route path="/dialogs" render={() => <DialogsContainer />} />
                            <Route path="/users" render={() => <UsersContainer />} />
                            <Route path="/login" render={() => <Login />} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialized: getInitializationStatus(state),
    // sidebar:
});

export default connect(mapStateToProps, { initializeApp })(App);
