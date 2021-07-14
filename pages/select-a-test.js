import React, { Fragment } from 'react'
import {
  Typography,
  makeStyles,
  useTheme,
  Container,
  Grid,
  Divider,
  createTheme,
  Button,
  ButtonGroup,
  Box,
} from '@material-ui/core'
import { Info as InfoIcon } from '@material-ui/icons'
import Nav from '../src/components/Nav'
import Image from 'next/image'
import skeleton from '../public/skele.png'
import prisma from '../lib/prisma.ts'
import Link from '../src/components/Link'

export const getStaticProps = async () => {
  let members = await prisma.member.findMany()
  members = members.filter((a) => a.order > 0)
  members = members.sort((a,b) => a.order > b.order ? 1 : -1)
  return { props: { members } }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  divider: {
    marginBottom: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  regions: {
    float: "right"
  },
  infoIcon: {
    marginRight: 8
  }
}))

const GridWithXXS = ({ xxs, ...other }) => {
  const xxsClass = `MuiGrid-grid-xxs-${xxs}`
  return <Grid className={xxsClass} {...other} />
}

export default function SelectATest(props) {
  const classes = useStyles()
  const theme = useTheme()

  const members = props.members

  return (
    <Fragment>
      <Nav />
      <Container maxWidth="md">
        <div className={classes.toolbar} />
        <Box mt={4}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            Select a Region
          </Typography>
          <Divider />
          <Typography align='center' variant='subtitle1' className={classes.divider}>
            <InfoIcon fontSize='small' className={classes.infoIcon} />
            Please select a region you wish to search for a test in.
          </Typography>
          <Grid container spacing={3}>
            <GridWithXXS item xxs={12} xs={6}>
              <ButtonGroup orientation="vertical" variant="contained" color="primary" className={classes.regions}>
                {members.map((member, index) => (
                  <Button
                    key={member.name}
                    variant="outlined"
                    component={Link}
                    naked
                    size="large"
                    href={`/regions/${member.name}`}
                  >
                    {member.name.charAt(0).toUpperCase() + member.name.slice(1)}
                  </Button>
                ))}
              </ButtonGroup>
            </GridWithXXS>
            <GridWithXXS item xxs={12} xs={6}>
              <Image
                src={skeleton}
                alt="skeleton image"
              />
            </GridWithXXS>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  )
}