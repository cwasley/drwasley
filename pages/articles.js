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
  Divider,
  Paper,
  Box
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Description as DescriptionIcon
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import Nav from '../src/components/Nav'
import Link from '../src/components/Link'
import { scr, cme, coastlines } from '../src/components/Articles/constants'
import { Offset } from '../src/components/Offset'

const NestedListItem = styled((props) => (
  <ListItem
    component={Link}
    target="_blank"
    rel="noopener"
    {...props}
  />
))(({ theme }) => ({
  paddingLeft: theme.spacing(4),
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

  return (
    <Fragment>
      <Nav />
      <Offset />
      <Container maxWidth="md">
        <Box mt={4}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            CME Talks & Articles
          </Typography>
          <Divider />
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
                    <ListItem button onClick={() => toggleList('scr')}>
                      <ListItemIcon>
                        <DescriptionIcon />
                      </ListItemIcon>
                      <ListItemText primary="South Coast Radiology" />
                      {state['scr'] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse in={state['scr']} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {scr.map((s, index) => (
                          <NestedListItem key={`scr-${index}`} href={s.link}>
                            <ListItemText primary={s.text} />
                          </NestedListItem>
                        ))}
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
                        {cme.map((c, index) => (
                          <NestedListItem key={`cme-${index}`} href={c.link}>
                            <ListItemText primary={c.text} />
                          </NestedListItem>
                        ))}
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
                        {coastlines.map((c, index) => (
                          <NestedListItem key={`coastlines-${index}`} href={c.link}>
                            <ListItemText primary={c.text} />
                          </NestedListItem>
                        ))}
                      </List>
                    </Collapse>
                  </List>
                </ClickAwayListener>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Fragment>
  )
}
