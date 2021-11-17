import React, { Fragment } from 'react'
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Divider,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  Textsms as TextsmsIcon,
} from '@mui/icons-material'
import Image from 'next/image'
import Nav from '../../src/components/Nav'
import ocmc from '/public/hospitals/ocmc.jpg'
import smc from '/public/hospitals/smc.jpg'
import prisma from '../../lib/prisma.ts'
import { Offset } from '../../src/components/Offset'

export const getStaticProps = async (context) => {
  const test = await prisma.test.findFirst({
    where: {
      id: parseInt(context.params.test, 10),
    },
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

export default function Contact(props) {
  const test = props.test

  return (
    <Fragment>
      <Nav />
      <Offset />
      <Container maxWidth='md'>
        <Box mt={4}>
          <Typography align='center' variant='h4' component='h1' gutterBottom>
            Schedule Your Test
          </Typography>
          <Divider sx={{ mb: '32px' }} />
          <Paper>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography variant='h6' id='tableTitle' component='div'>
                  Test Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell variant='head'>Test Name</TableCell>
                      <TableCell>{test.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant='head'>CPT Code</TableCell>
                      <TableCell>{test.cpt_code}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant='head'>
                        Exact format for order to be authorized
                      </TableCell>
                      <TableCell>{test.format}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionDetails>
            </Accordion>
          </Paper>
          <Card sx={{ display: 'flex', margin: '32px 0' }}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={4} sx={{ padding: 0 }}>
                <CardMedia sx={{ maxWidth: '288px' }}>
                  <Image src={ocmc} alt='ocmc' />
                </CardMedia>
              </Grid>
              <Grid item xs={12} sm={8}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography gutterBottom component='h5' variant='h5'>
                      Orange Coast Medical Center
                    </Typography>
                    <div style={{ margin: '16px 0' }}>
                      <Button
                        variant='outlined'
                        color='secondary'
                        href='tel:+1-714-593-2719'
                      >
                        <TextsmsIcon sx={{ marginRight: '4px' }} />
                        Call to Schedule: +1 (714) 593-2719
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ display: 'flex', margin: '32px 0' }}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={4} sx={{ padding: 0 }}>
                <CardMedia sx={{ maxWidth: '288px' }}>
                  <Image src={smc} alt='smc' />
                </CardMedia>
              </Grid>
              <Grid item xs={12} sm={8}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography gutterBottom component='h5' variant='h5'>
                      Saddleback Medical Center
                    </Typography>
                    <div style={{ margin: '16px 0' }}>
                      <Button
                        variant='outlined'
                        color='secondary'
                        href='tel:+1-949-452-3648'
                      >
                        <TextsmsIcon sx={{ marginRight: '4px' }} />
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
