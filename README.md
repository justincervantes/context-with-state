# Purpose

This test is to explore how React context works across different types (in this case we use string and an array of an
interface called ChessPiece) with state. Using this to debug an issue I'm having with Context in another project, where I can't set state using the useContext hook.


# Tests

- Using state from a parent component to set Context, and consume and set the state through a Context.Consumer: string
- Using state from a parent component to set Context, and consume and set the state through a useContext hook: string
- Using state from a parent component to set Context, and consume and set the state through a Context.Consumer: array of interface (ChessPiece)
- Using state from a parent component to set Context, and consume and set the state through a useContext hook: array of interface (ChessPiece)
- Using state from a parent component to set Context, and consume and set the state through a Context.Consumer: 2D array of interface (ChessPiece)
- Using state from a parent component to set Context, and consume and set the state through a useContext hook: 2D array of interface (ChessPiece)

# Conclusion

You should be able to set the state from the child component by assigning the state to the context in the parent and using the useContext hook to grab the Dispatch<SetStateAction<TYPE>>. There must be another bug in my main project. It may be notable that I ignored lint warnings and did not set the defaultValue for context.
  
Update: The bug was that I was using react-dnd which is a context wrapper which enables understanding dragged and dropped HTML elements. The issue was that my state context did not wrap the drag and drop context, so when the drag and drop hook was called when an item was dropped, the context being referenced did not spew out warnings or errors because I used defaultValue (I shouldn't have done that since I used a Context.Provider, but I wanted to get rid of the TS ESLinting error). I also added Redux debugging for future issues with libraries that are driven by Redux.

# Running

This is built with CRA typescript, so npm run start will get you going.
