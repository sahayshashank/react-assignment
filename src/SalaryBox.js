import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import IconButton from '@material-ui/core/IconButton';

function App() {
	// game maps board index positions to the block identities
	const [num, setNum] = React.useState("");
	const [undoStack, setUndoStack] = React.useState([]);
	const [redoStack, setRedoStack] = React.useState([]);
	
	const addNum = (val) => {
		setNum(num + val)
		let ng=[num]
		setUndoStack(undoStack.concat(ng))
		setRedoStack([])
	}

	const undo = (event) => {
		let ng=[num]
		setRedoStack(redoStack.concat(ng));
		setNum(undoStack[undoStack.length-1]);
		setUndoStack(undoStack.slice(0, undoStack.length-1));
	}

	const redo = (event) => {
		let ng=[num]
		setUndoStack(undoStack.concat(ng))
		setNum(redoStack[redoStack.length-1])
		setRedoStack(redoStack.slice(0, redoStack.length-1))
	}
	return (
		<Box>
			<Box><TextField id={"number1"} disabled={true} variant="outlined" fullWidth value={num} /></Box>
			<Button variant="contained" id={"4"} onClick={(e) => {addNum(1)}}>1</Button>
			<Button variant="contained" id={"4"} onClick={(e) => {addNum(2)}}>2</Button>
			<Button variant="contained" id={"4"} onClick={(e) => {addNum(3)}}>3</Button>
			<Box>
				<IconButton disabled={undoStack.length === 0} onClick={undo}>
					<UndoIcon/>
				</IconButton>
				<IconButton disabled={redoStack.length === 0} onClick={redo}>
					<RedoIcon/>
				</IconButton>
			</Box>
		</Box>
		
	);
}

export default App;
