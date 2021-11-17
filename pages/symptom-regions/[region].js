import React, { Fragment, useState, useRef, useEffect } from 'react'
import {
  Typography,
  Container,
  Divider,
  Paper,
  Grow,
  Button,
  ClickAwayListener,
  MenuItem,
  MenuList,
  Popper,
  Stack,
  Box,
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Nav from '../../src/components/Nav'
import prisma from '../../lib/prisma.ts'
import Link from '../../src/components/Link'
import { Offset } from '../../src/components/Offset'

export const getStaticProps = async (context) => {
  const member = await prisma.member.findFirst({
    where: {
      name: context.params.region,
    },
    include: {
      symptoms: true,
    },
  })
  const members = await prisma.member.findMany({
    where: {
      order: {
        gt: 0,
      },
    },
    orderBy: {
      order: 'asc',
    },
  })
  return { props: { members, member, region: context.params.region } }
}

export async function getStaticPaths() {
  const members = await prisma.member.findMany()

  const paths = members.map((member) => ({
    params: { region: member.name },
  }))

  return { paths, fallback: false }
}

export default function SymptomRegion(props) {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  function handleListKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault()
      setOpen(false)
    }
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const symptoms = props.member.symptoms

  return (
    <Fragment>
      <Nav />
      <Offset />
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
            <Typography variant='h4' component='h1' align='center'>
              Search symptoms by region:
            </Typography>
            <Button ref={anchorRef} onClick={handleToggle}>
              <Typography variant='h4' component='h1'>
                {props.region.charAt(0).toUpperCase() + props.region.slice(1)}
              </Typography>
              <ArrowDropDownIcon style={{ fontSize: 30 }} />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              placement='bottom'
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: 'center top' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id='menu-list-grow'
                        onKeyDown={handleListKeyDown}
                      >
                        {props.members.map((member) => (
                          <MenuItem
                            key={member.name}
                            onClick={handleClose}
                            component={Link}
                            href={`/symptom-regions/${member.name}`}
                          >
                            {member.name}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          <Divider />
          <Typography
            align='center'
            variant='subtitle1'
            sx={{
              marginBottom: '32px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Choose a symptom from the list below. If needed, click on{' '}
            {props.member.name.toUpperCase()} to change body region or click
            &quot;Search by Test&quot; to search all tests for this region.
          </Typography>
          <div
            style={{
              alignContent: 'center',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '32px',
            }}
          >
            <Stack>
              {symptoms.map((symptom, index) => (
                <Typography
                  key={symptom.name}
                  align='center'
                  sx={{ border: 'none !important' }}
                >
                  <Button
                    variant='contained'
                    component={Link}
                    fullWidth
                    color='secondary'
                    size='large'
                    href={`/symptoms/${symptom.id}`}
                    sx={symptoms.length !== index + 1 ? { mb: '8px' } : {}}
                  >
                    {symptom.name}
                  </Button>
                </Typography>
              ))}
            </Stack>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '32px',
            }}
          >
            <Button
              component={Link}
              variant='outlined'
              color='primary'
              size='large'
              href={`/regions/${props.member.name}`}
            >
              Search all tests
            </Button>
          </div>
        </Box>
      </Container>
    </Fragment>
  )
}
