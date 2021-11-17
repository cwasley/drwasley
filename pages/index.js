import React, { Fragment, useState } from 'react'
import {
  Typography,
  Menu,
  Button,
  MenuItem,
  Grid,
  ListItemIcon,
  ListItemText,
  Divider,
  Container,
  Box,
} from '@mui/material'
import {
  Call,
  Group,
  Description,
  Help,
  Search,
  List,
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import Link from '../src/components/Link'
import Nav from '../src/components/Nav'
import logo from '../public/logo.svg'
import prisma from '../lib/prisma.ts'
import { Offset } from '../src/components/Offset'

export const getStaticProps = async () => {
  const members = await prisma.member.findMany()
  return { props: { members } }
}

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
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
))(() => ({
  '& .MuiPaper-root': {
    border: '1px solid #d3d4d5',
  },
}))

export default function Home() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <Nav />
      <Offset />
      <Container maxWidth='md'>
        <Box
          mt={4}
          mb={7}
          alignItems='center'
          justifyContent='center'
          display='flex'
        >
          <Image src={logo} alt='Memorial Care Logo' />
        </Box>
        <Grid
          container
          spacing={2}
          direction='column'
          alignItems='center'
          justifyContent='center'
          display='flex'
        >
          <Grid item xs={12}>
            <Typography align='center' variant='h5' component='h1'>
              What would you like to do?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              aria-controls='choose-destination'
              aria-haspopup='true'
              variant='contained'
              color='primary'
              onClick={handleClick}
            >
              Select
            </Button>
            <StyledMenu
              id='menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} href='/contact' onClick={handleClose}>
                <ListItemIcon>
                  <Call fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Contact/Call To Schedule' />
              </MenuItem>
              <MenuItem
                component={Link}
                href='/our-radiologists'
                onClick={handleClose}
              >
                <ListItemIcon>
                  <Group fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Our Radiologists' />
              </MenuItem>
              <Divider />
              <MenuItem component={Link} href='/articles' onClick={handleClose}>
                <ListItemIcon>
                  <Description fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='CME Talks/Articles' />
              </MenuItem>
              <MenuItem component={Link} href='/contrast' onClick={handleClose}>
                <ListItemIcon>
                  <Help fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Is Oral Contrast Required?' />
              </MenuItem>
              <Divider />
              <MenuItem
                component={Link}
                href='/select-a-test'
                onClick={handleClose}
              >
                <ListItemIcon>
                  <Search fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Search Tests' />
              </MenuItem>
              <MenuItem
                component={Link}
                href='/test-index'
                onClick={handleClose}
              >
                <ListItemIcon>
                  <List fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Test Index' />
              </MenuItem>
            </StyledMenu>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}
