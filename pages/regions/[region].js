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
  ButtonGroup,
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
      name: context.params.region
    },
    include: {
      tests: true,
      symptoms: true
    }
  })
  const members = await prisma.member.findMany({
    where: {
      order: {
        gt: 0
      }
    },
    orderBy: {
      order: 'asc'
    }
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

export default function Region(props) {
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

  const tests = props.member.tests
  const symptoms = props.member.symptoms

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
            <Typography variant="h4" component="h1" align='center'>
              Search Tests by Region:
            </Typography>
            <Button
              ref={anchorRef}
              onClick={handleToggle}
            >
              <Typography variant="h4" component="h1">
                {props.region.charAt(0).toUpperCase() + props.region.slice(1)}
              </Typography>
              <ArrowDropDownIcon style={{ fontSize: 30 }} />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        {props.members.map((member) => (
                          <MenuItem
                            key={member.name}
                            onClick={handleClose}
                            component={Link}
                            href={`/regions/${member.name}`}
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
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '16px 0',
          }}>
            {symptoms.length > 0 && (
              <Button
                component={Link}
                variant="outlined"
                color="primary"
                size="large"
                href={`/symptom-regions/${props.member.name}`}
              >
                Search by Symptom
              </Button>
            )}
            {symptoms.length === 0 && (
              <Button
                variant="outlined"
                color="primary"
                size="large"
                disabled
              >
                Search by Symptom
              </Button>
            )}
          </div>
          <Typography align='center' variant='subtitle1' sx={{
            marginBottom: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            Choose a test from the list below. If needed, click on {props.member.name.toUpperCase()} to change body
            region or click &quot;Search by Symptom&quot; to search tests suggested by symptom.
          </Typography>
          <div style={{
            alignContent: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '32px',
          }}>
            <ButtonGroup orientation="vertical" variant="contained" color="primary">
              {tests.map((test, index) => (
                <Typography key={test.name} align='center' sx={{
                  alignContent: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  border: 'none !important',
                }}>
                  <Button
                    key={test.name}
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
