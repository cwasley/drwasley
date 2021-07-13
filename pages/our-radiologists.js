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
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Box
} from '@material-ui/core'
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  EmojiObjects as EmojiObjectsIcon,
  Work as WorkIcon,
  ThumbUp as ThumbUpIcon
} from '@material-ui/icons'
import Image from 'next/image'
import { radiologistData } from '../src/components/OurRadiologists/constants'
import Nav from '../src/components/Nav'

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

export default function OurRadiologists() {
  const [state, setState] = useState({
    expertise: false,
    services: false,
    values: false
  })

  const toggleList = (list) => {
    setState({ ...state, [list]: !state[list] })
  }

  const handleClickAway = () => {
    setState({
      expertise: false,
      services: false,
      values: false
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
            South Coast Radiology
          </Typography>
          <Grid container justifyContent="center" alignContent="center" spacing={2}>
            <Grid item xs={12}>
              <ClickAwayListener onClickAway={handleClickAway}>
                <List
                  component="nav"
                  className={classes.lists}
                >
                  <ListItem button onClick={() => toggleList('expertise')}>
                    <ListItemIcon>
                      <EmojiObjectsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Areas of Expertise" />
                    {state['expertise'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={state['expertise']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {/* TODO pull from constants*/}
                      <ListItem className={classes.nested}>
                        <ListItemText primary="CT Myelography" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Bone Marrow Biopsy" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="CT and MRI Arthrography" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Biliary and Renal Disease" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Dialysis Access" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Deep Vein Thrombosis treatment" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Tumor Ablation Therapy" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Peripheral Arterial Disease" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Pelvic Congestion Syndrome" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Renal Artery Stenosis" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Image Guided Biopsies and Marker Placement" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Pain Management" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Testicular Varicocele" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Uterine Fibroids" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Varicose Veins" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Vascular Imaging" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Venous Access" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="CT and MRI Angiography" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem button onClick={() => toggleList('services')}>
                    <ListItemIcon>
                      <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Specialized Services" />
                    {state['services'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={state['services']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {/* TODO pull from constants*/}
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Digital PACS" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Interventional cath lab with rotational and CT angiography" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="64 row volume CT scanner" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="High Field and Large Bore MRI" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Computer Assisted Diagnosis and Interventional Guidance" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="3D Imaging Lab" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Subspecialty interpretation" />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="2nd opinion consultation" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem button onClick={() => toggleList('values')}>
                    <ListItemIcon>
                      <ThumbUpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Corporate Values" />
                    {state['values'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={state['values']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {/* TODO pull from constants*/}
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Seamlessly integrated and comprehensive radiology service." />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Prompt, high quality structured reporting." />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Leadership committed to alignment, collaboration and consistent service." />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Partners in marketing, growth and fostering MemorialCare initiatives." />
                      </ListItem>
                      <ListItem className={classes.nested}>
                        <ListItemText primary="Patient safety. Evidence based radiology. Education of staff" />
                      </ListItem>
                    </List>
                  </Collapse>
                </List>
              </ClickAwayListener>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {radiologistData.map((item, index) => (
              <Grid item key={`image-${index}`} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia>
                      <Image
                        src={item.img}
                        alt={item.title}
                        className={classes.media}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">{item.title}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Fragment>
  )
}