import React, { Fragment } from 'react'
import {
  Typography,
  Container,
  Divider,
  Button,
  ButtonGroup,
  Box,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
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
    marginBottom: 32,
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
  buttonContainer: {
    border: "none !important"
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
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Available Test Index
            </Typography>
          </div>
          <Divider className={classes.divider}/>
          <div className={classes.buttonGroup}>
            <ButtonGroup orientation="vertical" variant="contained" color="primary">
              {tests.map((test, index) => (
                <Typography key={test.name} align='center' className={classes.buttonContainer}>
                  <Button
                    variant="contained"
                    component={Link}
                    naked
                    fullWidth
                    color="secondary"
                    size="large"
                    href={`/tests/${test.id}`}
                    className={tests.length !== index + 1 && classes.testButton}
                  >
                    {test.name}
                  </Button>
                </Typography>
              ))}
            </ButtonGroup>
          </div>
        </Box>
      </Container>
    </Fragment>
  )
}