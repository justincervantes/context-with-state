import { createContext, Dispatch, SetStateAction } from 'react';

interface ChessPiece {
	type: string,
	color: string;
}

interface StateContext {
	singleString: string;
	setSingleString: Dispatch<SetStateAction<string>>;
	arrayOfObject: ChessPiece[];
	setArrayOfObject: Dispatch<SetStateAction<ChessPiece[]>>;
	twoDArrayOfObject: ChessPiece[][];
	setTwoDArrayOfObject: Dispatch<SetStateAction<ChessPiece[][]>>;
}

// @ts-ignore
export const AppContext = createContext<StateContext>();