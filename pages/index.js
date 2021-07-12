import React, { useState } from 'react'
import {
  Typography,
  Box,
  Container,
  Menu,
  Button,
  MenuItem,
  Grid,
  withStyles,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import {
  Call,
  ContactPhone,
  Group,
  Description,
  Help,
  Search,
  List
} from '@material-ui/icons'
import Image from 'next/image'
import logo from '../public/logo.svg'
import Link from '../src/components/Link'
import prisma from '../lib/prisma.ts'

export const getStaticProps = async () => {
  const considerations = await prisma.consideration.findMany()
  return { props: { considerations } }
}

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
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Home(props) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Container maxWidth="sm">
      <Box
        mt={4}
        mb={8}
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
        justify="center"
      >
        <Grid item xs={12}>
          <Typography variant="h5" component="h1">
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
            <StyledMenuItem onClick={handleClose}>
              <ListItemIcon>
                <Call fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Consult My Radiologist" />
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContactPhone fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Call To Schedule" />
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <ListItemIcon>
                <Group fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Our Radiologists" />
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <ListItemIcon>
                <Description fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="CME Talks/Articles" />
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <ListItemIcon>
                <Help fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Is Oral Contrast Required?" />
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <ListItemIcon>
                <Search fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Search By Study" />
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <ListItemIcon>
                <Search fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Search By Symptom" />
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <ListItemIcon>
                <List fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Test Index" />
            </StyledMenuItem>
          </StyledMenu>
        </Grid>
      </Grid>
    </Container>
  )
}
