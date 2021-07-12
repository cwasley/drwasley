import React from 'react'
import { Container, Typography, Box, Button } from '@material-ui/core'
import Link from '../src/components/Link'

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
      </Box>
    </Container>
  )
}