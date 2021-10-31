import React, { Fragment } from 'react'
import {
  Typography,
  Container,
  Divider,
  Button,
  ButtonGroup,
  Box,
} from '@mui/material'
import Nav from '../src/components/Nav'
import prisma from '../lib/prisma.ts'
import Link from '../src/components/Link'
import { Offset } from '../src/components/Offset'

export const getStaticProps = async (context) => {
  const tests = await prisma.test.findMany({
    orderBy: {
      name: 'asc'
    }
  })
  return { props: { tests } }
}

export default function TestIndex(props) {
  const tests = props.tests

  return (
    <Fragment>
      <Nav />
      <Offset />
      <Container maxWidth="md">
        <Box mt={4}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Available Test Index
            </Typography>
          </div>
          <Divider
            sx={{
              marginBottom: '32px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <div style={{
            alignContent: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '32px',
          }}>
            <ButtonGroup
              orientation="vertical"
              variant="contained"
              color="primary"
            >
              {tests.map((test, index) => (
                <Typography key={test.name} align='center' sx={{ border: "none !important" }}>
                  <Button
                    variant="contained"
                    component={Link}
                    fullWidth
                    color="secondary"
                    size="large"
                    href={`/tests/${test.id}`}
                    sx={tests.length !== index + 1 ? { mb: '8px' } : {}}
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
