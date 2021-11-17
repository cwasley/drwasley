import React from 'react'
import {
  Typography,
  Container,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Button,
  Box,
  Divider,
} from '@mui/material'
import prisma from '../../lib/prisma.ts'
import Link from '../../src/components/Link'
import hand from '../../public/hand.svg'
import Image from 'next/image'
import { titleCase } from '../../src/utils'

export const getStaticProps = async (context) => {
  const test = await prisma.test.findFirst({
    where: {
      id: parseInt(context.params.test, 10),
    },
    include: {
      member: true,
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

export default function Test(props) {
  const test = props.test

  return (
    <Container maxWidth='md'>
      <Box mt={4}>
        <Typography align='center' variant='h4' component='h1' gutterBottom>
          {titleCase(test.name)}
        </Typography>
        <Divider sx={{ marginBottom: '32px' }} />
        <Paper>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell variant='head'>Body Region</TableCell>
                <TableCell>{test.member.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>Strengths</TableCell>
                <TableCell>{test.strengths}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>Limitations</TableCell>
                <TableCell>{test.limitations}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>Contraindications</TableCell>
                <TableCell>{test.contraindications}</TableCell>
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
              <TableRow>
                <TableCell variant='head'>Patient Preparation</TableCell>
                <TableCell>{test.patient_prep}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            margin: '32px 0',
          }}
        >
          <Image src={hand} height={60} width={60} alt='skeleton image' />
          <Button
            component={Link}
            variant='contained'
            color='secondary'
            size='large'
            href={`/contact/${test.id}`}
          >
            Order this test
          </Button>
        </div>
      </Box>
    </Container>
  )
}
