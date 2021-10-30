import React, { useState } from 'react';

const ProfileStatus = ({ status, updateProfileStatus }) => {
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [statusBuffer, setStatusBuffer] = useState(status);

    const activateEditMode = () => {
        setIsBeingEdited(true);
    };

    const deactivateEditMode = () => {
        setIsBeingEdited(false);
        updateProfileStatus(statusBuffer);
    };

    const onStatusInputChange = (e) => {
        const input = e.target.value;
        setStatusBuffer(input);
    };

    return (
        <div onDoubleClick={activateEditMode} onBlur={deactivateEditMode}>
            {isBeingEdited ? (
                <div>
                    <input
                        onChange={onStatusInputChange}
                        autoFocus
                        type="text"
                        defaultValue={status}
                    ></input>
                </div>
            ) : (
                <div>
                    status: <span>{status}</span>
                </div>
            )}
        </div>
    );
};

// class ProfileStatus extends React.Component {
//     state = {
//         isBeingEdited: false,
//         status: props.status,
//         // hasRightsToEditStatus: props.userId === ,
//     };

//     activateEditMode = () => {
//         setState({
//             isBeingEdited: true,
//         });
//     };

//     deactivateEditMode = () => {
//         setState({
//             isBeingEdited: false,
//         });
//         props.updateProfileStatus(state.status);
//     };

//     onStatusInputChange = (e) => {
//         const input = e.target.value;
//         setState({ status: input });
//     };

//     render() {
//         return (
//             <div onDoubleClick={activateEditMode} onBlur={deactivateEditMode}>
//                 {state.isBeingEdited ? (
//                     <div>
//                         <input
//                             onChange={onStatusInputChange}
//                             autoFocus
//                             type="text"
//                             defaultValue={props.status}
//                         ></input>
//                     </div>
//                 ) : (
//                     <div>
//                         status: <span>{props.status}</span>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

export default ProfileStatus;
