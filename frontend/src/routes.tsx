import React from 'react';
import { Navigate, Outlet, Route, Routes as Switch, useLocation } from 'react-router-dom';
import { useContextAuth } from './contexts/useAuth';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RamdomDog } from './pages/RamdomDog';
import { SignUp } from './pages/SignUp';

interface ProtectedRouteProps{
  redirectPath?:  string;
}

const ProtectedRoute = ({redirectPath = '/'}: ProtectedRouteProps) => {
	const { isAuthenticated, loading } = useContextAuth();

	if(loading) {
		return <div>Carregando...</div>;
	}

	if(isAuthenticated === false) {
		return <Navigate to={redirectPath} replace />;
	}

	return <Outlet />;
};

export function Routes(){
	return (
		<Switch>
			<Route path='/' element={<Login />}></Route>
			<Route path='/signup' element={<SignUp />}></Route>
			<Route element={<ProtectedRoute />}>
				<Route path='/home' element={<Home />}></Route>
				<Route path='/ramdom-dog' element={<RamdomDog />}></Route>
			</Route>
			<Route path="*" element=''></Route>
		</Switch>
	);
}