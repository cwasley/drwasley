import React, { Fragment, useState, useRef, useEffect } from 'react'
import {
  Typography,
  makeStyles,
  Container,
  Divider,
  Button,
  ButtonGroup,
  Box,
} from '@material-ui/core'
import Nav from '../src/components/Nav'
import prisma from '../lib/prisma.ts'
import Link from '../src/components/Link'

export const getStaticProps = async (context) => {
  const tests = await prisma.test.findMany({
    orderBy: {
      name: 'asc'
    }
  })
  return { props: { tests } }
}

// export async function getStaticPaths() {
//   const members = await prisma.member.findMany()
//
//   const paths = members.map((member) => ({
//     params: { region: member.name },
//   }))
//
//   return { paths, fallback: false }
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  divider: {
    marginBottom: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexColumn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  buttonGroup: {
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 32
  },
  testButton: {
    marginBottom: 8
  }
}))

export default function TestIndex(props) {
  const classes = useStyles()
  const tests = props.tests

  return (
    <Fragment>
      <Nav />
      <Container maxWidth="md">
        <div className={classes.toolbar} />
        <Box mt={4}>
          <div className={classes.flexColumn}>
            <Typography variant="h4" component="h1">
              Available Test Index
            </Typography>
          </div>
          <Divider className={classes.divider}/>
          <div className={classes.buttonGroup}>
            <ButtonGroup orientation="vertical" variant="contained" color="primary">
              {tests.map((test, index) => (
                <Button
                  key={test.name}
                  variant="contained"
                  component={Link}
                  naked
                  color="secondary"
                  size="large"
                  href={`/tests/${test.id}`}
                  className={tests.length !== index + 1 && classes.testButton}
                >
                  {test.name}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </Box>
      </Container>
    </Fragment>
  )
}