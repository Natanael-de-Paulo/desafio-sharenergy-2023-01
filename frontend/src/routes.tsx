import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Login } from './pages/Login';


export function Routes(){
	return (
		<Switch>
			<Route path='/'  element={<Login />}></Route>
		</Switch>
	);
}