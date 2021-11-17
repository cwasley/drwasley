import React, { useState } from 'react'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Call as CallIcon,
  Group as GroupIcon,
  Description as DescriptionIcon,
  Help as HelpIcon,
  Search as SearchIcon,
  List as ListIcon,
} from '@mui/icons-material'

import Link from '../Link'

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false)

  const handleDrawerToggle = () => {
    setNavOpen(!navOpen)
  }

  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} href='/'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} href='/contact'>
          <ListItemIcon>
            <CallIcon />
          </ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItem>
        <ListItem button component={Link} href='/our-radiologists'>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary='Our Radiologists' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} href='/articles'>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary='CME Talks/Articles' />
        </ListItem>
        <ListItem button component={Link} href='/contrast'>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary='Is Oral Contrast Required?' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} href='/select-a-test'>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary='Search Tests' />
        </ListItem>
        <ListItem button component={Link} href='/test-index'>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary='Test Index' />
        </ListItem>
      </List>
    </div>
  )

  return (
    <>
      <div>
        <AppBar position='fixed'>
          <Toolbar>
            <IconButton
              edge='start'
              sx={{ mr: 2 }}
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>
              <Link href='/' color='inherit' underline='none'>
                myRadiologist
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <nav aria-label='menu navigation'>
          <Drawer
            variant='temporary'
            anchor='left'
            open={navOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </div>
      <Offset />
    </>
  )
}
