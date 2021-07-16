import React, { Fragment } from 'react'
import {
  Typography,
  makeStyles,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Table,
  TableRow,
  TableCell,
  Paper,
  Box, Toolbar, Divider, ListItem, ListItemIcon, ListItemText, AccordionSummary, AccordionDetails, Accordion,
} from '@material-ui/core'
import {
  EmojiObjects as EmojiObjectsIcon, ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon,
  Textsms as TextsmsIcon
} from '@material-ui/icons'
import Image from 'next/image'
import Nav from '../../src/components/Nav'
import ocmc from '/public/hospitals/ocmc.jpg'
import smc from '/public/hospitals/smc.jpg'
import prisma from '../../lib/prisma.ts'

export const getStaticProps = async (context) => {
  const test = await prisma.test.findFirst({
    where: {
      id: parseInt(context.params.test, 10)
    }
  })
  return { props: { test } }
}

export async function getStaticPaths() {
  const tests = await prisma.test.findMany()

  const paths = tests.map((test) => ({
    params: { test: test.id.toString() },
  }))

  return { paths, fallback: false }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  card: {
    display: "flex",
    margin: "32px 0"
  },
  divider: {
    marginBottom: 32
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: '1 0 auto'
  },
  callButton: {
    margin: "16px 0"
  },
  icon: {
    marginRight: '4px'
  },
  cover: {
    maxWidth: 288
  },
  image: {
    padding: 0
  },
  tableTitle: {
    flex: '1 1 100%',
  }
}))

export default function Contact(props) {
  const classes = useStyles()
  const test = props.test

  return (
    <Fragment>
      <Nav />
      <Container maxWidth="md">
        <div className={classes.toolbar} />
        <Box mt={4}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            Schedule Your Test
          </Typography>
          <Divider className={classes.divider}/>
          <Paper>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                  Test Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Table>
                  <TableRow>
                    <TableCell variant="head">Test Name</TableCell>
                    <TableCell>{test.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell variant="head">CPT Code</TableCell>
                    <TableCell>{test.cpt_code}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell variant="head">Exact format for order to be authorized</TableCell>
                    <TableCell>{test.format}</TableCell>
                  </TableRow>
                </Table>
              </AccordionDetails>
            </Accordion>
          </Paper>
          <Card className={classes.card}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={4} className={classes.image}>
                <CardMedia className={classes.cover}>
                  <Image
                    src={ocmc}
                    alt="ocmc"
                  />
                </CardMedia>
              </Grid>
              <Grid item xs={12} sm={8}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography gutterBottom component="h5" variant="h5">
                      Orange Coast Medical Center
                    </Typography>
                    <div className={classes.callButton}>
                      <Button variant="outlined" color="secondary" href="tel:+1-714-593-2719">
                        <TextsmsIcon className={classes.icon}/>
                        Call to Schedule: +1 (714) 593-2719
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Grid>
            </Grid>
          </Card>
          <Card className={classes.card}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={4} className={classes.image}>
                <CardMedia className={classes.cover}>
                  <Image
                    src={smc}
                    alt="smc"
                  />
                </CardMedia>
              </Grid>
              <Grid item xs={12} sm={8}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography gutterBottom component="h5" variant="h5">
                      Saddleback Medical Center
                    </Typography>
                    <div className={classes.callButton}>
                      <Button variant="outlined" color="secondary" href="tel:+1-949-452-3648">
                        <TextsmsIcon className={classes.icon}/>
                        Call to Schedule: +1 (949) 452-3648
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>
    </Fragment>
  )
}