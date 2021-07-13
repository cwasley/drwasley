import React, { Fragment } from 'react'
import {
  Typography,
  makeStyles,
  useTheme,
  Container,
  Divider,
  Box,
} from '@material-ui/core'
import Nav from '../../src/components/Nav'
import prisma from '../../lib/prisma.ts'

export const getStaticProps = async (context) => {
  const member = await prisma.member.findFirst({
    where: {
      name: context.params.region
    },
    include: {
      tests: true
    }
  })
  return { props: { member, region: context.params.region } }
}

export async function getStaticPaths() {
  const members = await prisma.member.findMany()

  const paths = members.map((member) => ({
    params: { region: member.name },
  }))

  return { paths, fallback: false }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  divider: {
    marginBottom: 48
  },
  member: {
    cursor: "pointer"
  }
}))

export default function SelectATest(props) {
  const classes = useStyles()
  const theme = useTheme()

  const tests = props.member.tests

  return (
    <Fragment>
      <Nav />
      <Container maxWidth="md">
        <div className={classes.toolbar} />
        <Box mt={4}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            Available Tests: {props.region.charAt(0).toUpperCase() + props.region.slice(1)}
          </Typography>
          <Divider className={classes.divider}/>
          {tests.map((test, index) => (
            <Typography
              align="center"
              key={test.name}
              variant="h6"
              component="h1"
              gutterBottom
              className={classes.member}
            >
              {test.name}
            </Typography>
          ))}
        </Box>
      </Container>
    </Fragment>
  )
}