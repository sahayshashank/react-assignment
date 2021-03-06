import React from 'react';
import './myowncss.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	editDialog: {
		marginLeft: theme.spacing(4),
		marginRight: theme.spacing(4),
	},
	greeting: {
		fontSize: props => props.fontSize,
		fontWeight: props => props.fontWeight,
	}
}));


function App() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [dialogOpen, setDialogOpen] = React.useState(false);
	const [fontSize, setFontSize] = React.useState(32);
	const [weight, setFontWeight] = React.useState("normal");
	const [fontSizeInput, setFontSizeInput] = React.useState("16");
	
	const menuOpen = Boolean(anchorEl);
	
	
	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	
	const menuFontSizeSet = (newSize) => {
		setAnchorEl(null);
		setFontSize(newSize);
	}
	const openDialog = (event) => {
		handleMenuClose(event);
		setFontSizeInput(""+fontSize)
		setDialogOpen(true);
	}
	const closeDialog = (event) => {
		setDialogOpen(false);
	}
	const acceptDialog = (event) => {
		let fs = parseInt(fontSizeInput)
		setFontSize(fs);
		closeDialog();
	}
	const inputFontSize = (event) => {
		setFontSizeInput(event.target.value);
	}
	const weightChange = (event) => {
		setFontWeight(event.target.value);
	}
	
	const styledClasses = useStyles({fontSize: fontSize, fontWeight: weight});
	
	return (
		<div className="App">
			<AppBar position="static">
				<Toolbar>
					<div>
						<IconButton 
							edge="start" 
							className={styledClasses.menuButton} 
							color="inherit" 
							onClick={handleMenu}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={menuOpen}
							onClose={handleMenuClose}
						>
							<MenuItem onClick={openDialog}>Set value....</MenuItem>
							<MenuItem onClick={(e) => {menuFontSizeSet(16);}}>16 pt</MenuItem>
							<MenuItem onClick={(e) => {menuFontSizeSet(32);}}>32 pt</MenuItem>
							<MenuItem onClick={(e) => {menuFontSizeSet(64);}}>64 pt</MenuItem>
						</Menu>
					</div>
					<Typography variant="h6" className={styledClasses.title}>
						Styling
					</Typography>
				</Toolbar>
			</AppBar>
			
			<FormControl component="fieldset" className={styledClasses.formControl}>
				<FormLabel component="legend">Weight</FormLabel>
				<RadioGroup name="fontWeight" value={weight} onChange={weightChange}>
					<FormControlLabel value="normal" control={<Radio />} label="Normal" />
					<FormControlLabel value="bold" control={<Radio />} label="Bold" />
					<FormControlLabel value="900" control={<Radio />} label="Bolder" />
				</RadioGroup>
			</FormControl>
			
			<Dialog onClose={closeDialog} open={dialogOpen}>
				<DialogTitle id="simple-dialog-title">Update text</DialogTitle>
				<TextField id={"name"} className={styledClasses.editDialog} value={fontSizeInput} onChange={inputFontSize} />
				<DialogActions>
					<Button variant="contained" id={"dialogCancel"} onClick={closeDialog}>Cancel</Button>
					<Button variant="contained" id={"dialogOK"} onClick={acceptDialog}>OK</Button>
				</DialogActions>
			
			</Dialog>
			
			<Typography variant="h1" style={{fontSize: fontSize, fontWeight: weight}} className="greeting">
				Greetings!
			</Typography>
			
			<Typography variant="h1" className={styledClasses.greeting + " greeting"}>
				Greetings!
			</Typography>
			
		</div>
	);
}

export default App;
