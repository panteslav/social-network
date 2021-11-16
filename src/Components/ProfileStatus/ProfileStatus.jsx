import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserId } from '../../Redux/authSelectors';

const ProfileStatus = ({ userId, status, updateProfileStatus }) => {
    const dispatch = useDispatch();
    const authUserId = useSelector(getAuthUserId);

    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [statusBuffer, setStatusBuffer] = useState(status);
    const isEditable = userId === authUserId;

    const activateEditMode = () => {
        setIsBeingEdited(true);
    };

    const deactivateEditMode = () => {
        setIsBeingEdited(false);
        dispatch(updateProfileStatus(statusBuffer));
    };

    const onStatusInputChange = (e) => {
        const input = e.target.value;
        setStatusBuffer(input);
    };

    return (
        <div onDoubleClick={isEditable ? activateEditMode : null} onBlur={deactivateEditMode}>
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

export default ProfileStatus;
