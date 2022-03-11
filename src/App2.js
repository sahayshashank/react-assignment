import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

function App() {
	const [heading, setHeading] = React.useState("Heading");
	const [dialogOpen, setDialogOpen] = React.useState(false);

	const headingChange = () => {
		setHeading("New Heading");
	}
    const openDialog = (event) => {
		setDialogOpen(true);
	}
	const closeDialog = (event) => {
		setDialogOpen(false);
    window.close();
	}
    
	return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <div>
                        <IconButton 
                                    edge="start"
                                    color="inherit" 
                                    onClick={headingChange}
                                >
                            <Typography variant="h5"> Update Text </Typography>
                        </IconButton>
                        <IconButton 
                                    edge="end"
                                    color="inherit" 
                                    onClick={openDialog}
                                >
                                <Typography variant="h5"> About </Typography>
                        </IconButton>
                        </div>
                </Toolbar>
            </AppBar>

            <Dialog onClose={closeDialog} open={dialogOpen}>
                <Typography variant="h6"> Thank you for applying to X InfoTech. We will get back to you shortly.</Typography>
                <DialogActions>
                    <Button variant="contained" id={"dialogOK"} onClick={closeDialog}>Confirm and Close</Button>
                </DialogActions>
            </Dialog>
                            
            <Typography variant="h1">
            {heading}
            </Typography>
        </Box>
	);
}

export default App;
