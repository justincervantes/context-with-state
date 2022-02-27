import React, { Dispatch, SetStateAction, useContext } from 'react';
import { AppContext } from './context/AppContext';

const Display: React.FC = () => {

	const context = useContext(AppContext);
	const changeName = () => {
		context.setSingleString('July');
	};
	const changePieces = () => {
		context.setArrayOfObject([{ type: 'queen', color: 'white' }, {
			type: 'bishop',
			color: 'black'
		}]);
	};
	const changeTwoDPieces = () => {
		context.setTwoDArrayOfObject([[{ type: 'queen', color: 'white' }, {
			type: 'queen',
			color: 'white'
		}, { type: 'queen', color: 'white' }, { type: 'queen', color: 'white' }], [{
			type: 'queen',
			color: 'white'
		}, { type: 'queen', color: 'white' }, {
			type: 'queen',
			color: 'white'
		}, { type: 'queen', color: 'white' }]]);
	};

	return (
		<div>
			<AppContext.Consumer>
				{(value) => (
					<div>
						<section>
							<div>
								<h1>Test 1: Change state of a string via context</h1>
							</div>
							<div>
								<h5>The current name is {value.singleString}</h5>
								<button onClick={() => value.setSingleString('June')}>Name the string 'June' via value
									of
									Consumer!
								</button>
								<button onClick={() => changeName()}>Name the string 'July' via a function!</button>

							</div>
						</section>

						<br />

						<section>
							<div>
								<h1>Test 2: Change state of aChessPiece interface array via context</h1>
							</div>
							<div>
								<h5>The current pieces are: {value.arrayOfObject.map((piece, index) =>
									<p key={index}>{piece.type} {piece.color}</p>)}</h5>
								<button onClick={() => value.setArrayOfObject([{ type: 'pawn', color: 'white' }, {
									type: 'rook',
									color: 'black'
								}])}>Change the pieces to a white pawn and black rook via value of Consumer
								</button>
								<button onClick={() => changePieces()}>Change the pieces to a white queen and black
									bishop
									via a
									function!
								</button>
							</div>
						</section>

						<br />

						<section>
							<div>
								<h1>Test 3: Change state of a 2D ChessPiece interface array via context</h1>
							</div>
							<div>
								<h5>The current pieces are: {value.twoDArrayOfObject.map((pieceArr, row) =>
									pieceArr.map((piece, column) => {
										return (<p key={column}>Row: {row},
											Column: {column}... {piece.type} {piece.color}</p>);
									})
								)}
								</h5>
								<button onClick={() => value.setTwoDArrayOfObject([[{ type: 'rook', color: 'black' }, {
									type: 'bishop',
									color: 'black'
								}, { type: 'knight', color: 'black' }, { type: 'king', color: 'black' }], [{
									type: 'pawn',
									color: 'black'
								}, { type: 'pawn', color: 'black' }, {
									type: 'pawn',
									color: 'black'
								}, { type: 'pawn', color: 'black' }]])}>Change the pieces to a be all black via the
									Consumer
								</button>
								<button onClick={() => changeTwoDPieces()}>Change the pieces to be all queens via a
									function!
								</button>
							</div>
						</section>

					</div>
				)}
			</AppContext.Consumer>
		</div>);
};

export default Display;