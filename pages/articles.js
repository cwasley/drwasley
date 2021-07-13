import React, { useState, Fragment } from 'react'
import {
  Typography,
  Grid,
  makeStyles,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  ClickAwayListener,
  Box
} from '@material-ui/core'
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Description as DescriptionIcon
} from '@material-ui/icons'
import Nav from '../src/components/Nav'
import Link from '../src/components/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  lists: {
    width: '100%',
    maxWidth: 600,
    color: 'black',
    backgroundColor: theme.palette.lightBackground.main,
    justifyContent: "center",
    alignContent: "center",
    margin: "32px auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  card: {
    maxWidth: 288,
    margin: "16px auto 16px auto",
    color: "white",
    backgroundColor: "#454545"
  },
  media: {
    height: 288,
    paddingTop: '56.25%',
    marginTop: '30'
  },
}))

export default function Articles() {
  const [state, setState] = useState({
    scr: false,
    cme: false,
    coastlines: false
  })

  const toggleList = (list) => {
    setState({ ...state, [list]: !state[list] })
  }

  const handleClickAway = () => {
    setState({
      scr: false,
      cme: false,
      coastlines: false
    })
  }

  const classes = useStyles()

  return (
    <Fragment>
      <Nav />
      <Container maxWidth="md">
        <div className={classes.toolbar} />
        <Box mt={4}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            CME Talks & Articles
          </Typography>
          <Grid container justifyContent="center" alignContent="center" spacing={2}>
            <Grid item xs={12}>
              <ClickAwayListener onClickAway={handleClickAway}>
                <List
                  component="nav"
                  className={classes.lists}
                >
                  <ListItem button onClick={() => toggleList('scr')}>
                    <ListItemIcon>
                      <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary="South Coast Radiology" />
                    {state['scr'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={state['scr']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {/* TODO pull from constants*/}
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/scr_1.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="Concierge radiology - conceptual design" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem button onClick={() => toggleList('cme')}>
                    <ListItemIcon>
                      <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary="CME Talks (.pdfs of powerpoint slides)" />
                    {state['cme'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={state['cme']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {/* TODO pull from constants*/}
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/cme_1.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary='"Shedding Light" on appropriate imaging tests' />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/cme_2.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary='CT angiography / conventional angiography correlation' />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/cme_3.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary='Lung Cancer Screening' />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/cme_4.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary='The role of radiology in cancer diagnosis and treatment' />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/cme_5.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary='Basic principles of chest Xray interpretation' />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem button onClick={() => toggleList('coastlines')}>
                    <ListItemIcon>
                      <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary="Coastlines Articles" />
                    {state['coastlines'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={state['coastlines']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {/* TODO pull from constants*/}
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_1.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="Clinical decision support. Is it time now?" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_2.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="Quality in Radiology" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_3.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="Radiation Dose Reduction" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_4.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="How radiologists limit radiation exposure" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_5.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary='Do we need a "complete CT" with AND without contrast?' />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_6.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="Abdominal CT - When is contrast important?" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_7.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="Best Practice Guidelines - abdominal" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_8.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="Best Practice Guidelines - chest" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_9.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="Best Practice Guidelines - brain and spine" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_10.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="Appropriate indications for CXR" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_11.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="CT lung screening" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_12.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="3D imaging" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_13.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="PET/CT indications" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_14.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="is CT or MRI overutilized" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_15.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="Renal cell Cancer" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_16.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="Uterine Fibroid Embolization therapy" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        component={Link}
                        naked
                        href="https://collin-wasley.s3.us-west-1.amazonaws.com/articles/coast_17.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <ListItemText primary="Capabilites of the CT scanner at OCMMC" />
                      </ListItem>
                    </List>
                  </Collapse>
                </List>
              </ClickAwayListener>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  )
}