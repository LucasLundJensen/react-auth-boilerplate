import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { userActions } from '../../store/actions';

export default function Logout() {
    const dispatch = useDispatch();
    dispatch(userActions.logout());

    return <Redirect to="/" />;
}