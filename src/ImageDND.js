import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

function ImageDND(props) {
	// game maps board index positions to the block identities
	const [image, setImage] = React.useState(props.data);

	
	const imageDragStart = (event) => {
		event.dataTransfer.setData("image/jpeg", event.target.src);
		event.dataTransfer.dropEffect = "copy";
	}
	
	const imageOnDrop = (event) => {
		event.preventDefault();
		let file = event.dataTransfer.files[0];
		if (file) {
			let reader = new FileReader()
			reader.onloadend = function(evt) {
				setImage(reader.result);
			};
			reader.readAsDataURL(file)
		}
	}

	const imageDragEnter = (event) => {
		event.preventDefault();
		let file = event.dataTransfer.files[0];
		if (file) {
			event.preventDefault(); // we should check here also that the file type is suitable
		}
	}	
	const imageDragOver = (event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "copy"
	}
	
	const pagePaste = (event) => {
		event.preventDefault();
		let paste = event.clipboardData.files[0];
		if (paste.kind === "file" && (paste.type === "image/png" || paste.type === "image/jpeg")) {
		let reader = new FileReader()
		reader.readAsDataURL(paste.getAsFile())
		reader.onloadend = function(evt) {
			setImage(reader.result);
		}
		}
	}

	const pageCopy = (event) => {
		event.clipboardData.setData('image/jpeg', image);
		event.preventDefault();	
	}
	
	const useStyles = makeStyles((theme) => ({
		root: {
		  flexGrow: 1,
		},
		paper: {
		  padding: theme.spacing(2),
		  textAlign: 'center',
		  color: theme.palette.text.secondary,
		},
	  }));
	
	const classes = useStyles();

	return (
		<Grid container spacing={1}>
		<div onCopy={pageCopy} onPaste={pagePaste} contentEditable={true} >
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<img src={image}
						alt="Profile Picture here" 
						id="DraggingImage" 
						onDragStart={imageDragStart} 
						onDragEnter={imageDragEnter}
						draggable={true} 
						onDrop={imageOnDrop} 
						onDragOver={imageDragOver}
						style={{width:380, height:400}}
						/>
					</Paper>
				</Grid>
		</div>
	    </Grid>
	);
}

export default ImageDND;
