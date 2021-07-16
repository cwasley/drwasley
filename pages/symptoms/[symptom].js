import React, { Fragment, useState, useRef, useEffect } from 'react'
import {
  Typography,
  makeStyles,
  Container,
  Table,
  TableRow,
  TableCell,
  Paper,
  Button,
  ButtonGroup,
  Divider,
  Box,
} from '@material-ui/core'
import Nav from '../../src/components/Nav'
import prisma from '../../lib/prisma.ts'
import Link from '../../src/components/Link'

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
    marginBottom: 32
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
    justifyContent: 'center',
    marginBottom: 16
  },
  searchButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 32
  },
  testButtonMargin: {
    marginBottom: 8
  },
  buttonContainer: {
    border: "none !important"
  },
  helpfulTests: {
    margin: "32px 0",
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

  return (
    <Fragment>
      <Nav />
      <Container maxWidth="md">
        <div className={classes.toolbar} />
        <Box mt={4}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            {titleCase(symptom.name)}
          </Typography>
          <Divider className={classes.divider}/>
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
              Tests that may be helpful, in order of ACR appropriateness criteria:
            </Typography>
            <div className={classes.buttonGroup}>
              <ButtonGroup orientation="vertical" variant="contained" color="primary">
                {symptom.tests.map((test, index) => (
                  <Typography key={test.name} align='center' className={classes.buttonContainer}>
                    <Button
                      variant="contained"
                      component={Link}
                      naked
                      fullWidth
                      color="secondary"
                      size="large"
                      disabled={!test.cpt_code}
                      href={`/tests/${test.id}`}
                      className={symptom.tests.length !== index + 1 && classes.testButtonMargin}
                    >
                      {test.name}
                    </Button>
                  </Typography>
                ))}
              </ButtonGroup>
            </div>
            <Typography align="center" variant="subtitle2" gutterBottom>
              For other considerations, call or text radiologist.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Fragment>
  )
}