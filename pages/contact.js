import React, { Fragment } from 'react'
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Box,
} from '@mui/material'
import { Call as CallIcon, Textsms as TextsmsIcon } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import Nav from '../src/components/Nav'
import { Offset } from '../src/components/Offset'
import richard from '/public/radiologists/dick.jpeg'
import ocmc from '/public/hospitals/ocmc.jpg'
import smc from '/public/hospitals/smc.jpg'

const DetailsGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
  },
}))

export default function Contact() {
  return (
    <Fragment>
      <Nav />
      <Offset />
      <Container maxWidth='md'>
        <Box mt={4}>
          <Typography align='center' variant='h4' component='h1' gutterBottom>
            Contact
          </Typography>
          <div>
            <Card sx={{ display: 'flex', margin: '32px 0' }}>
              <Grid container spacing={0}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    minHeight: 162,
                  }}
                >
                  <CardMedia sx={{ maxWidth: 288 }}>
                    <Image src={richard} alt='dr wasley' />
                  </CardMedia>
                </Grid>
                <DetailsGrid item xs={12} sm={8}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography gutterBottom component='h5' variant='h5'>
                        Richard Wasley, MD
                      </Typography>
                      <div style={{ margin: '16px 0' }}>
                        <Button
                          variant='outlined'
                          color='secondary'
                          href='tel:+1-949-683-5396'
                        >
                          <TextsmsIcon sx={{ mr: 4 }} />
                          Call: +1 (949) 683-5396
                        </Button>
                      </div>
                      <div style={{ margin: '16px 0' }}>
                        <Button
                          variant='outlined'
                          color='secondary'
                          href='sms:+1-949-683-5396'
                        >
                          <CallIcon sx={{ mr: 4 }} />
                          Text: +1 (949) 683-5396
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </DetailsGrid>
              </Grid>
            </Card>
            <Card sx={{ display: 'flex', margin: '32px 0' }}>
              <Grid container spacing={0}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    minHeight: 162,
                  }}
                >
                  <CardMedia sx={{ maxWidth: 288 }}>
                    <Image src={ocmc} alt='ocmc' />
                  </CardMedia>
                </Grid>
                <DetailsGrid item xs={12} sm={8}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography gutterBottom component='h5' variant='h5'>
                        Orange Coast Medical Center
                      </Typography>
                      <Button
                        variant='outlined'
                        color='secondary'
                        href='tel:+1-714-378-7572'
                        sx={{ m: '8px 0' }}
                      >
                        <TextsmsIcon sx={{ mr: 4 }} />
                        Call to Schedule: +1 (714) 378-7572
                      </Button>
                    </CardContent>
                  </div>
                </DetailsGrid>
              </Grid>
            </Card>
            <Card sx={{ display: 'flex', margin: '32px 0' }}>
              <Grid container spacing={0}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    minHeight: 162,
                  }}
                >
                  <CardMedia sx={{ maxWidth: 288 }}>
                    <Image src={smc} alt='smc' />
                  </CardMedia>
                </Grid>
                <DetailsGrid item xs={12} sm={8}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography gutterBottom component='h5' variant='h5'>
                        Saddleback Medical Center
                      </Typography>
                      <Button
                        variant='outlined'
                        color='secondary'
                        href='tel:+1-949-452-3648'
                        sx={{ margin: '8px 0' }}
                      >
                        <TextsmsIcon sx={{ mr: 4 }} />
                        Call to Schedule: +1 (949) 452-3648. Option 2.
                      </Button>
                    </CardContent>
                  </div>
                </DetailsGrid>
              </Grid>
            </Card>
          </div>
        </Box>
      </Container>
    </Fragment>
  )
}
