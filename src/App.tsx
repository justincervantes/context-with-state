import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppContext } from './context/AppContext';
import Display from './Display';

function App() {
	const [singleString, setSingleString] = useState('\"initial state of string\"');
	const [arrayOfObject, setArrayOfObject] = useState([{ type: 'knight', color: 'white' }, {
		type: 'queen',
		color: 'black'
	}]);
	const [twoDArrayOfObject, setTwoDArrayOfObject] = useState([[{ type: 'rook', color: 'white' }, {
		type: 'bishop',
		color: 'white'
	}, { type: 'knight', color: 'white' }, { type: 'king', color: 'white' }], [{
		type: 'pawn',
		color: 'white'
	}, { type: 'pawn', color: 'white' }, {
		type: 'pawn',
		color: 'white'
	}, { type: 'pawn', color: 'white' }]]);
	const value = {
		singleString,
		setSingleString,
		arrayOfObject,
		setArrayOfObject,
		twoDArrayOfObject,
		setTwoDArrayOfObject
	};
	return (
		<div className='App'>
			<AppContext.Provider value={value}>
				<Display></Display>
			</AppContext.Provider>
		</div>
	);
}

export default App;
