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
  Box,
} from '@material-ui/core'
import {
  Call as CallIcon,
  Textsms as TextsmsIcon
} from '@material-ui/icons'
import Image from 'next/image'
import Nav from '../src/components/Nav'
import dick from '/public/radiologists/dick.jpeg'
import ocmc from '/public/hospitals/ocmc.jpg'
import smc from '/public/hospitals/smc.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  card: {
    display: "flex",
    margin: "32px 0",
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
    padding: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  detailsGrid: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      display: 'flex',
      textAlign: 'center'
    },
  }
}))

export default function Contact() {
  const classes = useStyles()

  return (
    <Fragment>
      <Nav />
      <Container maxWidth="md">
        <div className={classes.toolbar} />
        <Box mt={4}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            Contact
          </Typography>
          <div>
            <Card className={classes.card}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} className={classes.image}>
                  <CardMedia className={classes.cover}>
                    <Image
                      src={dick}
                      alt="dr wasley"
                    />
                  </CardMedia>
                </Grid>
                <Grid item xs={12} sm={8} className={classes.detailsGrid}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography gutterBottom component="h5" variant="h5">
                        Dick Wasley, MD
                      </Typography>
                      <div className={classes.callButton}>
                        <Button variant="outlined" color="secondary" href="tel:+1-949-683-5396">
                          <TextsmsIcon className={classes.icon}/>
                          Call: +1 (949) 683-5396
                        </Button>
                      </div>
                      <div className={classes.callButton}>
                        <Button variant="outlined" color="secondary" href="sms:+1-949-683-5396">
                          <CallIcon className={classes.icon}/>
                          Text: +1 (949) 683-5396
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
                      src={ocmc}
                      alt="ocmc"
                    />
                  </CardMedia>
                </Grid>
                <Grid item xs={12} sm={8} className={classes.detailsGrid}>
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
                <Grid item xs={12} sm={8} className={classes.detailsGrid}>
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
          </div>
        </Box>
      </Container>
    </Fragment>
  )
}