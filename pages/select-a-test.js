import React, { Fragment } from 'react'
import {
  Typography,
  Container,
  Grid,
  Divider,
  Button,
  ButtonGroup,
  Box,
} from '@mui/material'
import { Info as InfoIcon } from '@mui/icons-material'
import Nav from '../src/components/Nav'
import Image from 'next/image'
import skeleton from '../public/skele.png'
import prisma from '../lib/prisma.ts'
import Link from '../src/components/Link'
import { Offset } from '../src/components/Offset'

export const getStaticProps = async () => {
  let members = await prisma.member.findMany()
  members = members.filter((a) => a.order > 0)
  members = members.sort((a,b) => a.order > b.order ? 1 : -1)
  return { props: { members } }
}

const GridWithXXS = ({ xxs, ...other }) => {
  const xxsClass = `MuiGrid-grid-xxs-${xxs}`
  return <Grid className={xxsClass} {...other} />
}

export default function SelectATest(props) {
  const members = props.members

  return (
    <Fragment>
      <Nav />
      <Offset />
      <Container maxWidth="md">
        <Box mt={4}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            Select a Region
          </Typography>
          <Divider />
          <Typography align='center' variant='subtitle1' sx={{
            marginBottom: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <InfoIcon fontSize='small' sx={{ mr: '8px' }} />
            Please select a region you wish to search for a test in.
          </Typography>
          <Grid container spacing={3}>
            <GridWithXXS item xxs={12} xs={6}>
              <ButtonGroup orientation="vertical" variant="text" color="secondary" sx={{ float: "right" }}>
                {members.map((member) => (
                  <Button
                    key={member.name}
                    variant="text"
                    component={Link}
                    size="large"
                    href={`/regions/${member.name}`}
                    sx={{ borderBottom: "none !important" }}
                  >
                    {member.name.charAt(0).toUpperCase() + member.name.slice(1)}
                  </Button>
                ))}
              </ButtonGroup>
            </GridWithXXS>
            <GridWithXXS item xxs={12} xs={6}>
              <Image
                src={skeleton}
                alt="skeleton image"
              />
            </GridWithXXS>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  )
}
