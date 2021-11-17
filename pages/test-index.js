import React from 'react'
import {
  Typography,
  Container,
  Divider,
  Button,
  Stack,
  Box,
} from '@mui/material'
import prisma from '../lib/prisma.ts'
import Link from '../src/components/Link'

export const getStaticProps = async () => {
  const tests = await prisma.test.findMany({
    // Remove tests that do not have any data
    where: {
      NOT: [{ strengths: null }],
    },
    orderBy: {
      name: 'asc',
    },
  })
  return { props: { tests } }
}

export default function TestIndex(props) {
  const tests = props.tests

  return (
    <Container maxWidth='md'>
      <Box mt={4}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant='h4' component='h1' gutterBottom align='center'>
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
        <div
          style={{
            alignContent: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          <Stack>
            {tests.map((test, index) => (
              <Typography
                key={test.name}
                align='center'
                sx={{ border: 'none !important' }}
              >
                <Button
                  variant='contained'
                  component={Link}
                  fullWidth
                  color='secondary'
                  size='large'
                  href={`/tests/${test.id}`}
                  sx={tests.length !== index + 1 ? { mb: '8px' } : {}}
                >
                  {test.name}
                </Button>
              </Typography>
            ))}
          </Stack>
        </div>
      </Box>
    </Container>
  )
}
