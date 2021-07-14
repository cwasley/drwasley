import React, { Fragment, useState, useRef, useEffect } from 'react'
import {
  Typography,
  makeStyles,
  Container,
  Divider,
  Table,
  TableRow,
  TableCell,
  Paper,
  Button,
  Box, ButtonGroup,
} from '@material-ui/core'
import Nav from '../../src/components/Nav'
import prisma from '../../lib/prisma.ts'
import Link from '../../src/components/Link'
import hand from '../../public/hand.svg'
import Image from 'next/image'

export const getStaticProps = async (context) => {
  const symptom = await prisma.symptom.findFirst({
    where: {
      id: parseInt(context.params.symptom, 10)
    },
    include: {
      tests: true,
      considerations: true
    }
  })
  return { props: { symptom } }
}

export async function getStaticPaths() {
  const symptoms = await prisma.symptom.findMany()

  const paths = symptoms.map((symptom) => ({
    params: { symptom: symptom.id.toString() },
  }))

  return { paths, fallback: false }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  divider: {
    marginBottom: 48
  },
  member: {
    cursor: "pointer"
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  flexColumn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  infoIcon: {
    marginRight: 8
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    margin: "32px 0",
  },
  buttonGroup: {
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  searchButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 32
  },
  testButton: {
    marginBottom: 8
  },
  helpfulTests: {
    margin: 32,
    padding: 16
  },
  forOther: {
    padding: 8,
    color: "red"
  }
}))

const titleCase = (str) => {
  return str.replace(/\w\S*/g, (t) => { return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase() })
}

export default function Test(props) {
  const classes = useStyles()

  const symptom = props.symptom

  const considerationText = symptom.considerations[1] ?
    `${symptom.considerations[0].body}\n\n${symptom.considerations[1].body}` :
    symptom.considerations[0].body

  return (
    <Fragment>
      <Nav />
      <Container maxWidth="md">
        <div className={classes.toolbar} />
        <Box mt={4}>
          <Typography align="center" variant="h4" component="h1" className={classes.divider}>
            {titleCase(symptom.name)}
          </Typography>
          <Paper>
            <Table>
              <TableRow>
                <TableCell variant="head">Symptom</TableCell>
                <TableCell>{symptom.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Considerations</TableCell>
                <TableCell>
                  <Typography variant="subheading2" display="block" gutterBottom>
                    {symptom.considerations[0].body}
                  </Typography>
                  {symptom.considerations[1] && (
                    <Typography display="block" variant="subheading2">
                      {symptom.considerations[1].body}
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
            </Table>
          </Paper>
          <Paper className={classes.helpfulTests}>
            <Typography align="center" variant="h6" gutterBottom>
              Tests that may be helpful, based on ACR appropriateness criteria:
            </Typography>
            <div className={classes.buttonGroup}>
              <ButtonGroup orientation="vertical" variant="contained" color="primary">
                {symptom.tests.map((test, index) => {
                  return test.cpt_code ?
                    <Button
                      key={test.name}
                      variant="contained"
                      component={Link}
                      naked
                      color="secondary"
                      size="large"
                      disabled={test.name.toLowerCase().startsWith('for other considerations')}
                      href={`/tests/${test.id}`}
                      className={symptom.tests.length !== index + 1 && classes.testButton}
                    >
                      {test.name}
                    </Button>
                    :
                    <Typography color="red" className={classes.forOther} key={test.name} align="center" variant="subheading">
                      {test.name}
                    </Typography>
                })}
              </ButtonGroup>
            </div>
          </Paper>
        </Box>
      </Container>
    </Fragment>
  )
}