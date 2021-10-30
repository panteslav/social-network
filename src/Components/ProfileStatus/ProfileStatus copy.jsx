import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        isBeingEdited: false,
        status: this.props.status,
        // hasRightsToEditStatus: this.props.userId === ,
    };

    componentDidMount(prevProps, prevState) {}

    activateEditMode = () => {
        this.setState({
            isBeingEdited: true,
        });
    };

    deactivateEditMode = () => {
        this.setState({
            isBeingEdited: false,
        });
        this.props.updateProfileStatus(this.state.status);
    };

    onStatusInputChange = (e) => {
        const input = e.target.value;
        this.setState({ status: input });
    };

    render() {
        return (
            <div onDoubleClick={this.activateEditMode} onBlur={this.deactivateEditMode}>
                {this.state.isBeingEdited ? (
                    <div>
                        <input
                            onChange={this.onStatusInputChange}
                            autoFocus
                            type="text"
                            defaultValue={this.props.status}
                        ></input>
                    </div>
                ) : (
                    <div>
                        status: <span>{this.props.status}</span>
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
