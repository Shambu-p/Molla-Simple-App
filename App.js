import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { firebase } from './config';
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Header from "./components/Header";
import TaskView from "./components/TaskView";
import { store } from './state_management/store';
import { Provider } from 'react-redux';


const Stack = createStackNavigator();
function App() {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	function onAuthStateChanged(user) {
		setUser(user);
		if (initializing) setInitializing(false);
	}
	useEffect(() => {
		const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="login"
				component={Login}
				options={{
					headerTitle: () => <Header />,
					headerStyle: {
						height: 100,
						backgroundColor: '#3E3364'
					}
				}} />
			<Stack.Screen
				name="Registration"
				component={Registration}
				options={{
					headerTitle: () => <Header />,
					headerStyle: {
						backgroundColor: '#3E3364'
					}
				}} />
			<Stack.Screen
				name="Home"
				component={TaskView}
				options={{
					headerTitle: () => <Header />,
					headerStyle: {
						backgroundColor: '#3E3364'
					}
				}} />
		</Stack.Navigator>
	);
}

export default () => {
	return <NavigationContainer>
		<Provider store={store}>
			<App />
		</Provider>
	</NavigationContainer>
}
