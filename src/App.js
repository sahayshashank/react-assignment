import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import ImageDND from './ImageDND.js'
import base from './basePhoto.png';
import texts from './texts.json';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Slider from '@material-ui/core/Slider';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {PDFExport} from '@progress/kendo-react-pdf'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme) => ({
  root:{
    position:"relative",
    left:90,
    right:500,
    padding:1,
    width:"80%",
    borderStyle:"solid",
  },
  heading: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  heading2: {
    textAlign: 'center',
    padding:15
  },
  heading3: {
    paddingBottom:10
  },
  profilePhoto:{
    borderStyle:"solid",
    height:195,
    width: 175,
    position: "relative",
    padding: 3
  },
  textFields:{
    width: "90%",
    margin:5,
    background:"white"
  },
  controller:{
    fontSize: props => props.fontSize,
		fontWeight: props => props.fontWeight,
    color: props => props.color,
    background: props =>props.background
  },
  lastButtons:{
    background:"rgba(180,0,0,0.9)",
    color:"white",
    margin:10
  },
  table:{
    position:"relative",
    width:"40%",
    left:370
  }
}))

function App() {
  const [fontSize, setFontSize] = React.useState(26);
  const [fontColor, setFontColor] = React.useState("");
  const [background, setBackground] = React.useState("");
	const [weight, setFontWeight] = React.useState(300);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

	const [anchorEl, setAnchorEl] = React.useState(null)
	const [locale, setLocale] = React.useState("en")
	const supportedLocales = ["en","fi","hi"]

  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phoneNo, setPhoneNo] = React.useState("")
  const [city, setCity] = React.useState("")
  const [dob, setDob] = React.useState("")
  const [linkedin, setLinkedin] = React.useState("")

  const [reactJs, setReactJs] = React.useState(0);
  const [html, setHtml] = React.useState(0);
  const [go, setGo] = React.useState(0);
  const [python, setPython] = React.useState(0);
  const [java, setJava] = React.useState(0);
  const [aws, setAws] = React.useState(0);

  const [num, setNum] = React.useState("");
	const [undoStack, setUndoStack] = React.useState([]);
	const [redoStack, setRedoStack] = React.useState([]);

  const [jobRole, setJobRole] = React.useState('ft');
  const pdfExportComponent = React.useRef(null)

	const menuOpen = Boolean(anchorEl);
	const menuOpen2 = Boolean(anchorEl2);

  const [org,setOrg] = React.useState("")
  const [time,setTime] = React.useState("")
  const [selected, setSelected] = React.useState(-1);
  const [rows,setRows] = React.useState([])

  const [dialogOpen, setDialogOpen] = React.useState(false);

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	}
	const handleMenuClose = () => {
		setAnchorEl(null);
	}
  const handleTextChange=(event,num)=>{
    if(num===1)
      setFirstName(event.target.value)
    else if(num===2)
      setLastName(event.target.value)
    else if(num===3)
      setEmail(event.target.value)
    else if(num===4)
      setPhoneNo(event.target.value)
    else if(num===5)
      setCity(event.target.value)
    else if(num===6)
      setDob(event.target.value)
    else if(num===7)
      setLinkedin(event.target.value)
    else if(num===8)
		  setOrg(event.target.value)
    else if(num===9)
		  setTime(parseInt(event.target.value))
  }
  const reactJsUpdate = (event, newValue) => {
		setReactJs(newValue)
	}
  const htmlUpdate = (event, newValue) => {
		setHtml(newValue)
	}
  const goUpdate = (event, newValue) => {
		setGo(newValue)
	}
  const pythonUpdate = (event, newValue) => {
		setPython(newValue)
	}
  const javaUpdate = (event, newValue) => {
		setJava(newValue)
	}
  const awsUpdate = (event, newValue) => {
		setAws(newValue)
	}
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
  const handleJobRoleChange = (event) => {
    setJobRole(event.target.value);
  }
  const handleExport = (event) =>{
    pdfExportComponent.current.save()
  }
  const handleMenu2 = event => {
		setAnchorEl2(event.currentTarget);
	};
	const handleMenuClose2 = () => {
		setAnchorEl2(null);
	};
	const menuFontSizeIncrease = () => {
		setFontSize(fontSize+2);
	}
  const menuFontSizeDecrease = () => {
		setFontSize(fontSize-2);
	}
  const menuFontWeightLight = () => {
		setFontWeight(500);
	}
  const menuFontWeightMed = () => {
		setFontWeight(700);
	}
  const menuFontWeightBold = () => {
		setFontWeight(800);
	}
  const darkMode = () => {
		setFontColor("white");
    setBackground("black")
    handleMenuClose2()
	}
  const brightMode = () => {
		setFontColor("black");
    setBackground("white")
    handleMenuClose2()
	}
  const fileChange=(e)=>{
		let files=e.target.files
		let reader= new FileReader()
		reader.readAsDataURL(files[0])
		reader.onload=(e)=>{
			console.warn("resume : ",e.target.result)
			const formData=(e.target.result)
			{/* use POST to a server and pass this data URL for getting the data of the file (implement in back end)*/}
		}
	}
  const add = (event)=>{
    let newData = {org:org,time:time} 
		setRows(rows.concat(newData))
	}
  const select = (event, index) => {
		setSelected(index);
	}
  const remove = (event) => {
		setRows(rows.slice(0, selected).concat(rows.slice(selected+1)));
		setSelected(-1);
	}
  const openDialog = (event) => {
		setDialogOpen(true);
	}
	const closeDialog = (event) => {
		setDialogOpen(false);
    window.close();
	}
  const returnToForm = (event) => {
		setDialogOpen(false);
	}

	const bundle = texts.hasOwnProperty(locale)?texts[locale]:texts["en"]
  const marks=[{
    value: 0,
    label: bundle.NO_KNOWLEDGE,
  },
  {
    value: 1,
    label: bundle.AMATEUR,
  },
  {
    value: 2,
    label: bundle.INTERMEDIATE,
  },
  {
    value: 3,
    label: bundle.FLUENT,
  },
  {
    value:4,
    label:bundle.PROFESSIONAL
  }]
	const classes = useStyles({fontSize: fontSize, fontWeight: weight, color:fontColor, background:background});

	return (
    <div classname={classes.controller}>
      {/*AppBar*/}
      <AppBar>                      
				<Toolbar>
					<div>
						<IconButton 
							edge="start" 
							color="inherit" 
							onClick={handleMenu2}
						> <MenuIcon /> </IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl2}
							anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
							}}
							open={menuOpen2}
							onClose={handleMenuClose2}
						>
							<MenuItem disabled>Current Font Size - {fontSize}</MenuItem>
							<MenuItem onClick={(e) => {menuFontSizeIncrease();}}>Increase size</MenuItem>
							<MenuItem onClick={(e) => {menuFontSizeDecrease();}}>Decrease size</MenuItem>
              <MenuItem disabled>Font Weight</MenuItem>
							<MenuItem onClick={(e) => {menuFontWeightLight();}}>Light weight</MenuItem>
							<MenuItem onClick={(e) => {menuFontWeightMed();}}>Medium weight</MenuItem>
							<MenuItem onClick={(e) => {menuFontWeightBold();}}>Heavy weight</MenuItem>
              <MenuItem disabled>Browser mode</MenuItem>
							<MenuItem onClick={(e) => {darkMode();}}>Dark Mode</MenuItem>
							<MenuItem onClick={(e) => {brightMode();}}>Bright Mode</MenuItem>
						</Menu>
					</div>
					<Typography variant="h6">Font and Display Settings</Typography>
				</Toolbar>
			</AppBar>

      <Dialog onClose={closeDialog} open={dialogOpen}>
          <Typography variant="h6"> Thank you for applying to X InfoTech. We will get back to you shortly.</Typography>
          <DialogActions>
            <Button variant="contained" id={"dialogOK"} onClick={returnToForm}>Return to Form</Button>
            <Button variant="contained" id={"dialogOK"} onClick={closeDialog}>Confirm and Close</Button>
          </DialogActions>
      </Dialog>

      <PDFExport ref={pdfExportComponent} >
      <div className={classes.controller}>
        <Typography className={classes.heading} style={{fontSize:fontSize, fontWeight:weight, marginTop:60}}>{bundle.JOB_DESC} </Typography>
        {/*Language support button*/}
        <div style={{textAlign:"center"}}>			        
        <p  style={{fontSize:fontSize, fontWeight:weight}}>Lanaguge : <Button
            variant="contained" 
            edge="start" 
            color="inherit" 
            onClick={handleMenu}
          > {locale} </Button></p>
          <Menu
            id="locale-menu"
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
            {
              supportedLocales.map((item, index) =>  {
                let l = new Intl.Locale(item);
                return (
                  <MenuItem 
                    key={"localeItem_" + index + "_" + item} 
                    onClick={(event) => {setLocale(item); setAnchorEl(null);}}
                  > {l.language} </MenuItem>
                )
              })
            }
          </Menu>	
		    </div>
        
    {/*personal info*/}
    <Box
      display="flex"
      alignItems="flex-start"
      className={classes.root}
      style={{background:background}}
    >
      <Box p={3} className={classes.controller}>      {/*profile photo*/}
        <ImageDND data={base}/>
        <Typography className={classes.heading2} style={{fontSize:fontSize, fontWeight:weight}}>{bundle.DRAGNDROP}</Typography>
      </Box>
      <Box p={3} flexShrink={2} className={classes.controller}>      
        <Typography className={classes.heading}  style={{fontSize:fontSize, fontWeight:weight}}>{bundle.PERSONAL_INFO}</Typography>
        <Box style={{width:"100%"}}>
        <TextField
          className={classes.textFields}
          label={bundle.FIRST_NAME}
          value={firstName}
          onChange={(e)=>handleTextChange(e,1)}
          variant="outlined" />
        <TextField
          className={classes.textFields}
          label={bundle.LAST_NAME}
          value={lastName}
          onChange={(e)=>handleTextChange(e,2)}
          variant="outlined" />
        <TextField
          className={classes.textFields}
          label={bundle.EMAIL}
          value={email}
          onChange={(e)=>handleTextChange(e,3)}
          variant="outlined" />
        <TextField
          className={classes.textFields}
          label={bundle.PHONE}
          value={phoneNo}
          onChange={(e)=>handleTextChange(e,4)}
          variant="outlined" />
        <TextField
          className={classes.textFields}
          label={bundle.CITY}
          value={city}
          onChange={(e)=>handleTextChange(e,5)}
          variant="outlined" />
        <TextField
          className={classes.textFields}
          type="date"
          label={bundle.DOB}
          value={dob}
          onChange={(e)=>handleTextChange(e,6)}
          InputLabelProps={{shrink: true}}
          variant="outlined" />
        <TextField
          className={classes.textFields}
          label={bundle.LINKEDIN}
          value={linkedin}
          onChange={(e)=>handleTextChange(e,7)}
          variant="outlined" />
          </Box>
      </Box>
    </Box> {/*info*/}

    <Box className={classes.root} style={{textAlign:"center"}}>   {/*resume*/}
      <Typography className={classes.heading} style={{fontSize:fontSize, fontWeight:weight}}>{bundle.RESUME}</Typography>
      <input type="file" name="file" onChange={(e)=>fileChange(e)} />
    </Box>
    <br />

    {/*Work History*/}
    <Box className={classes.root} style={{textAlign:"center"}}>   
      <Typography className={classes.heading} style={{fontSize:fontSize, fontWeight:weight}}>{bundle.WORK_HIST}</Typography>
      <TextField
        className={classes.textFields}
        label={bundle.ORG}
        value={org}
        onChange={(e)=>handleTextChange(e,8)}
        variant="outlined" />
      <TextField
        className={classes.textFields}
        label={bundle.TIME}
        value={time}
        onChange={(e)=>handleTextChange(e,9)}
        variant="outlined" />
        <br />
      <Button className={classes.lastButtons} variant="contained" onClick={add}>Add</Button>
      <Button className={classes.lastButtons} variant="contained" onClick={remove} disabled={selected<0}>Remove</Button>
      <div style={{textAlign:"center"}}>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Organization</TableCell>
              <TableCell align="right">Time Spent (in Months)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow button selected={index === selected}  onClick={(event) => {select(event, index);}} key={row.org}>
                <TableCell component="th" scope="row">{row.org}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </Box>
    <br />

    {/*Technical Info*/}
    <Box 
      className={classes.root}
      style={{background:background}}>
      <Box p={3} className={classes.controller}>
        <Typography className={classes.heading} style={{fontSize:fontSize, fontWeight:weight}}>{bundle.TECHNICAL_INFORMATION}</Typography>

        <Box>                 {/*Front End*/}
          <Typography className={classes.heading3} style={{fontSize:fontSize-10, fontWeight:weight}}>Front End</Typography>
          <Typography>React Js</Typography>
          <Slider
            value={reactJs}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={4}
            onChange={reactJsUpdate}
            marks={marks}
            className={classes.slider}
            style={{width:"87%", left:50}}
          /> <br />
          <Typography>HTML and CSS</Typography>
          <Slider
            value={html}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={4}
            onChange={htmlUpdate}
            marks={marks}
            style={{width:"87%", left:50}}
          />
        </Box> <br />

        <Box>                 {/*Back End*/}
          <Typography className={classes.heading3} style={{fontSize:fontSize-10, fontWeight:weight}}>Back End</Typography>
          <Typography>GoLang</Typography>
          <Slider
            value={go}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={4}
            onChange={goUpdate}
            marks={marks}
            style={{width:"87%", left:50}}
          /> <br />
          <Typography>Python</Typography>
          <Slider
            value={python}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={4}
            onChange={pythonUpdate}
            marks={marks}
            style={{width:"87%", left:50}}
          /> <br />
          <Typography>Java/Scala</Typography>
          <Slider
            value={java}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={4}
            onChange={javaUpdate}
            marks={marks}
            style={{width:"87%", left:50}}
          />
        </Box> <br />

        <Box>                 {/*Cloud*/}
          <Typography className={classes.heading3} style={{fontSize:fontSize-10, fontWeight:weight}}>Cloud Technologies</Typography>
          <Typography>AWS</Typography>
          <Slider
            value={aws}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={4}
            onChange={awsUpdate}
            marks={marks}
            style={{width:"87%", left:50}}
          />
        </Box>      
      </Box>
    </Box>

    {/*Preferences*/}
    <br />
    <Box className={classes.root}>  
      <Box p={3} className={classes.controller}>
        <Typography className={classes.heading} style={{fontSize:fontSize, fontWeight:weight}}>{bundle.PREFERENCES}</Typography>
        <Box>
          <Typography style={{fontSize:fontSize-10, fontWeight:weight}}>{bundle.DESIRED_ROLE}</Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={jobRole} onChange={handleJobRoleChange}>
              <FormControlLabel value="ft" control={<Radio />} label={bundle.TRAINEE} />
              <FormControlLabel value="fee" control={<Radio />} label={bundle.FRONT_END_ENGG} />
              <FormControlLabel value="cla" control={<Radio />} label={bundle.CLOUD_ARCH} />
              <FormControlLabel value="bes" control={<Radio />} label={bundle.BACK_END_ENGG} />
              <FormControlLabel value="fsd" control={<Radio />} label={bundle.FULL_STACK} />
              <FormControlLabel value="dbs" control={<Radio />} label={bundle.DATABASE} />
              <FormControlLabel value="opse" control={<Radio />} label={bundle.OPS} />
            </RadioGroup>
          </FormControl>
        </Box>
        <br />
        <Box>
          <Typography>{bundle.EXPECTED_SALARY}</Typography>
          <Box style={{width:300}}>
            <TextField style={{background:"white"}} id={"number1"} disabled={true} variant="outlined" fullWidth value={num} /></Box>
            <Button variant="contained" id={"4"} onClick={(e) => {addNum(1)}}>1</Button>
            <Button variant="contained" id={"4"} onClick={(e) => {addNum(2)}}>2</Button>
            <Button variant="contained" id={"4"} onClick={(e) => {addNum(3)}}>3</Button><br />
            <Button variant="contained" id={"4"} onClick={(e) => {addNum(4)}}>4</Button>
            <Button variant="contained" id={"4"} onClick={(e) => {addNum(5)}}>5</Button>
            <Button variant="contained" id={"4"} onClick={(e) => {addNum(6)}}>6</Button><br />
            <Button variant="contained" id={"4"} onClick={(e) => {addNum(7)}}>7</Button>
            <Button variant="contained" id={"4"} onClick={(e) => {addNum(8)}}>8</Button>
            <Button variant="contained" id={"4"} onClick={(e) => {addNum(9)}}>9</Button><br />
            <Button style={{left:65}} variant="contained" id={"4"} onClick={(e) => {addNum(0)}}>0</Button>
            <Box>
              <IconButton style={{color:fontColor}} disabled={undoStack.length === 0} onClick={undo}>
                <UndoIcon/>
              </IconButton>
              <IconButton style={{color:fontColor, fontSize:fontSize, fontWeight:weight}} disabled={redoStack.length === 0} onClick={redo}>
                <RedoIcon/>
              </IconButton>
          </Box>
          <Typography>Undo and Redo</Typography>
        </Box>     
      </Box>
    </Box>
    <br />
  </div>
  </PDFExport>
    <Box style={{textAlign:"center"}}>
    <Button className={classes.lastButtons} onClick={handleExport}>Print in PDF</Button>
    <Button className={classes.lastButtons} onClick={openDialog}>Submit</Button>
    </Box>
  </div>
	)
}
export default App
