import React, { useState, Fragment } from 'react'
import {
  Typography,
  Grid,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  ClickAwayListener,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Box,
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  EmojiObjects as EmojiObjectsIcon,
  Work as WorkIcon,
  ThumbUp as ThumbUpIcon
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import { expertise, services, values, radiologistData } from '../src/constants'
import Nav from '../src/components/Nav'
import { Offset } from '../src/components/Offset'

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

  const NestedListItem = styled(ListItem)(({ theme }) => ({
    paddingLeft: theme.spacing(4),
  }))

  return (
    <Fragment>
      <Nav />
      <Offset />
      <Container maxWidth="md">
        <Box mt={4}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            South Coast Radiology
          </Typography>
          <Paper sx={{
            width: '100%',
            maxWidth: 600,
            color: 'black',
            justifyContent: "center",
            alignContent: "center",
            margin: "16px auto",
          }}>
            <Grid container justifyContent="center" alignContent="center">
              <Grid item xs={12}>
                <ClickAwayListener onClickAway={handleClickAway}>
                  <List
                    component="nav"
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
                        {expertise.map((e, index) => (
                          <NestedListItem key={`expertise-${index}`}>
                            <ListItemText primary={e} />
                          </NestedListItem>
                        ))}
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
                        {services.map((s, index) => (
                          <NestedListItem key={`service-${index}`}>
                            <ListItemText primary={s} />
                          </NestedListItem>
                        ))}
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
                        {values.map((v, index) => (
                          <NestedListItem key={`value-${index}`}>
                            <ListItemText primary={v} />
                          </NestedListItem>
                        ))}
                      </List>
                    </Collapse>
                  </List>
                </ClickAwayListener>
              </Grid>
            </Grid>
          </Paper>
          <Grid container spacing={3}>
            {radiologistData.map((item, index) => (
              <Grid item key={`image-${index}`} xs={12} sm={6}>
                <Card sx={{
                  margin: "16px auto 16px auto",
                  color: "white",
                  backgroundColor: "#454545",
                  display: "flex",
                }}>
                  <CardMedia sx={{ maxHeight: 111 }}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      layout="fixed"
                    />
                  </CardMedia>
                  <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    <Typography variant="h6" component="div">{item.title}</Typography>
                    <List>
                      {item.certifications.map((certification, index) => (
                        <ListItem key={`certification-${index}`} disableGutters dense disablePadding>
                          <ListItemText>
                            <Typography variant="body2" component="div">{certification}</Typography>
                          </ListItemText>
                        </ListItem>
                      ))}
                    </List>
                    <br />
                    {item.education.map((line, index) => (
                      <Typography key={`education-${index}`} variant="body2" component="div">{line}</Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Fragment>
  )
}
