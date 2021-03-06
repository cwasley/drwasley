import React, { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  ClickAwayListener,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Box,
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  EmojiObjects as EmojiObjectsIcon,
  Work as WorkIcon,
  ThumbUp as ThumbUpIcon,
  Verified as VerifiedIcon,
  Grading as GradingIcon,
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import { expertise, services, values, radiologistData } from '../src/constants'

export default function OurRadiologists() {
  const [state, setState] = useState({
    expertise: false,
    services: false,
    values: false,
  })

  const toggleList = (list) => {
    setState({ ...state, [list]: !state[list] })
  }

  const handleClickAway = () => {
    setState({
      expertise: false,
      services: false,
      values: false,
    })
  }

  const NestedListItem = styled(ListItem)(({ theme }) => ({
    paddingLeft: theme.spacing(4),
  }))

  return (
    <Container maxWidth='lg'>
      <Box mt={4}>
        <Typography align='center' variant='h4' component='h1' gutterBottom>
          South Coast Radiology
        </Typography>
        <Paper
          sx={{
            width: '100%',
            maxWidth: 600,
            color: 'black',
            justifyContent: 'center',
            alignContent: 'center',
            margin: '16px auto',
          }}
        >
          <Grid container justifyContent='center' alignContent='center'>
            <Grid item xs={12}>
              <ClickAwayListener onClickAway={handleClickAway}>
                <List component='nav'>
                  <ListItem button onClick={() => toggleList('expertise')}>
                    <ListItemIcon>
                      <EmojiObjectsIcon />
                    </ListItemIcon>
                    <ListItemText primary='Areas of Expertise' />
                    {state['expertise'] ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </ListItem>
                  <Collapse
                    in={state['expertise']}
                    timeout='auto'
                    unmountOnExit
                  >
                    <List component='div' disablePadding>
                      {expertise.map((e, index) => (
                        <NestedListItem key={`expertise-${index}`}>
                          <ListItemText primary={e} />
                        </NestedListItem>
                      ))}
                    </List>
                  </Collapse>
                  <ListItem button onClick={() => toggleList('services')}>
                    <ListItemIcon>
                      <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary='Specialized Services' />
                    {state['services'] ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </ListItem>
                  <Collapse
                    in={state['services']}
                    timeout='auto'
                    unmountOnExit
                  >
                    <List component='div' disablePadding>
                      {services.map((s, index) => (
                        <NestedListItem key={`service-${index}`}>
                          <ListItemText primary={s} />
                        </NestedListItem>
                      ))}
                    </List>
                  </Collapse>
                  <ListItem button onClick={() => toggleList('values')}>
                    <ListItemIcon>
                      <ThumbUpIcon />
                    </ListItemIcon>
                    <ListItemText primary='Corporate Values' />
                    {state['values'] ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </ListItem>
                  <Collapse in={state['values']} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                      {values.map((v, index) => (
                        <NestedListItem key={`value-${index}`}>
                          <ListItemText primary={v} />
                        </NestedListItem>
                      ))}
                    </List>
                  </Collapse>
                </List>
              </ClickAwayListener>
            </Grid>
          </Grid>
        </Paper>
        <Grid container>
          {radiologistData.map((item, index) => (
            <Grid item key={`image-${index}`} xs={12}>
              <Card
                sx={{
                  margin: '16px auto 16px auto',
                  display: 'flex',
                }}
              >
                <CardMedia sx={{ maxHeight: 111 }}>
                  <Image src={item.img} alt={item.title} layout='fixed' />
                </CardMedia>
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                  }}
                >
                  <Accordion sx={{ boxShadow: 'none' }} disableGutters>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant='h6' component='div'>
                        {item.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant='subtitle1' component='div'>
                        Certifications
                      </Typography>
                      <List>
                        {item.certifications.map((certification, index) => (
                          <ListItem
                            key={`certification-${index}`}
                            disableGutters
                            dense
                            disablePadding
                          >
                            <ListItemIcon>
                              <VerifiedIcon />
                            </ListItemIcon>
                            <ListItemText>
                              <Typography variant='body2' component='div'>
                                {certification}
                              </Typography>
                            </ListItemText>
                          </ListItem>
                        ))}
                      </List>
                      <br />
                      <Typography variant='subtitle1' component='div'>
                        Qualifications
                      </Typography>
                      <List>
                        {item.education.map((line, index) => (
                          <ListItem
                            key={`education-${index}`}
                            disableGutters
                            dense
                            disablePadding
                          >
                            <ListItemIcon>
                              <GradingIcon />
                            </ListItemIcon>
                            <ListItemText>
                              <Typography variant='body2' component='div'>
                                {line}
                              </Typography>
                            </ListItemText>
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
