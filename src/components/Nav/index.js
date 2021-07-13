import React, { useState } from 'react'
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Call as CallIcon,
  ContactPhone as ContactPhoneIcon,
  Group as GroupIcon,
  Description as DescriptionIcon,
  Help as HelpIcon,
  Search as SearchIcon,
  List as ListIcon
} from '@material-ui/icons'

import Link from '../Link'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawerPaper: {
    width: drawerWidth,
  },
}))

export default function Nav() {
  const classes = useStyles()
  const [navOpen, setNavOpen] = useState(false)

  const handleDrawerToggle = () => {
    setNavOpen(!navOpen)
  }

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
        <ListItem button>
          <ListItemIcon>
            <CallIcon />
          </ListItemIcon>
          <ListItemText primary='Consult My Radiologist' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactPhoneIcon />
          </ListItemIcon>
          <ListItemText primary='Call To Schedule' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary='Our Radiologists' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary='CME Talks/Articles' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary='Is Oral Contrast Required?' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary='Search Tests' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary='Test Index' />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
            <Link href="/" color="inherit" underline="none">
              myRadiologist
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav aria-label="menu navigation">
        <Drawer
          variant="temporary"
          anchor='left'
          open={navOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  )
}