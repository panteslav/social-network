import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;

  return (
    <div className={s.dialogItem}>
      <NavLink className={s.dialogName} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
