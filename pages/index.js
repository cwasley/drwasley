import React, { Fragment, useState } from 'react'
import {
  Typography,
  Menu,
  Button,
  MenuItem,
  Grid,
  withStyles,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
  Container,
  Box
} from '@material-ui/core'
import {
  Call,
  Group,
  Description,
  Help,
  Search,
  List
} from '@material-ui/icons'
import Image from 'next/image'
import Link from '../src/components/Link'
import Nav from '../src/components/Nav'
import logo from '../public/logo.svg'
import prisma from '../lib/prisma.ts'

export const getStaticProps = async () => {
  const members = await prisma.member.findMany()
  return { props: { members } }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar
}))

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

export default function Home(props) {
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles()

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <Nav />
      <Container maxWidth="md">
        <div className={classes.toolbar} />
        <Box
          mt={4}
          mb={7}
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Image
            src={logo}
            alt="Memorial Care Logo"
          />
        </Box>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Grid item xs={12}>
            <Typography align="center" variant="h5" component="h1">
              What would you like to do?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              aria-controls="choose-destination"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Select
            </Button>
            <StyledMenu
              id="menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} naked href='/contact' onClick={handleClose}>
                <ListItemIcon>
                  <Call fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Contact/Call To Schedule" />
              </MenuItem>
              <MenuItem component={Link} naked href="/our-radiologists" onClick={handleClose}>
                <ListItemIcon>
                  <Group fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Our Radiologists" />
              </MenuItem>
              <Divider />
              <MenuItem component={Link} naked href='/articles' onClick={handleClose}>
                <ListItemIcon>
                  <Description fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="CME Talks/Articles" />
              </MenuItem>
              <MenuItem component={Link} naked href='/contrast' onClick={handleClose}>
                <ListItemIcon>
                  <Help fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Is Oral Contrast Required?" />
              </MenuItem>
              <Divider />
              <MenuItem component={Link} naked href='/select-a-test' onClick={handleClose}>
                <ListItemIcon>
                  <Search fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Search Tests" />
              </MenuItem>
              <MenuItem component={Link} naked href='/test-index' onClick={handleClose}>
                <ListItemIcon>
                  <List fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Test Index" />
              </MenuItem>
            </StyledMenu>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}
