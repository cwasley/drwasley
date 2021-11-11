import React, { Fragment } from 'react'
import {
  Typography,
  Container,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Button,
  Stack,
  Divider,
  Box,
} from '@mui/material'
import Nav from '../../src/components/Nav'
import prisma from '../../lib/prisma.ts'
import Link from '../../src/components/Link'
import { Offset } from '../../src/components/Offset'
import { titleCase } from '../../src/utils'

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

export default function Test(props) {
  const symptom = props.symptom

  return (
    <Fragment>
      <Nav />
      <Offset />
      <Container maxWidth="md">
        <Box mt={4}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            {titleCase(symptom.name)}
          </Typography>
          <Divider sx={{ marginBottom: '32px' }}/>
          <Paper>
            <Table>
              <TableBody>
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
              </TableBody>
            </Table>
          </Paper>
          <Paper sx={{
            margin: "32px 0",
            padding: '16px',
          }}>
            <Typography align="center" variant="h6" gutterBottom>
              Tests that may be helpful, in order of ACR appropriateness criteria:
            </Typography>
            <div style={{
              alignContent: 'center',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '16px',
            }}>
              <Stack>
                {symptom.tests.map((test, index) => (
                  <Typography key={test.name} align='center' sx={{ border: "none !important" }}>
                    <Button
                      variant="contained"
                      component={Link}
                      fullWidth
                      color="secondary"
                      size="large"
                      disabled={!test.cpt_code}
                      href={`/tests/${test.id}`}
                      sx={symptom.tests.length !== index + 1 ? { mb: '8px' } : {}}
                    >
                      {test.name}
                    </Button>
                  </Typography>
                ))}
              </Stack>
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
