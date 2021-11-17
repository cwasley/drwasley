import React from 'react'
import {
  Typography,
  Container,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material'
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

const TypographyHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(24),
  fontWeight: theme.typography.fontWeightBold,
}))

export default function Contrast() {
  return (
    <Container maxWidth='md'>
      <Box mt={4}>
        <Typography align='center' variant='h4' component='h1' gutterBottom>
          Is Oral Contrast Required?
        </Typography>
        <Paper sx={{ m: '32px 0' }}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <TypographyHeading>Background and Rationale</TypographyHeading>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ flex: '1 0 auto' }}>
                <Typography paragraph>
                  Oral contrast can be helpful in abdominal and pelvic CT. Its
                  increased density defines bowel loops, can identify
                  intrinsic bowel masses or site of leaks. Because of the lack
                  of mesenteric fat, it can be particularly useful in thin
                  patients.
                </Typography>
                <Typography paragraph>
                  However, the use of oral contrast adds time to the study.
                  Patients must drink contrast 1-2 hours prior to the CT exam.
                  In patients with bowel obstruction, often the oral contrast
                  may never reach the site of obstruction.
                </Typography>
                <Typography paragraph>
                  Oral contrast can interfere with 3D reconstructions of CT
                  angiograms or bone studies. For this reason, we may use
                  water ingested just prior to the scan as a
                  &quot;negative&quot; oral contrast agent in CTA, multiphase
                  study of solid organs, mesenteric ischemia studies or pelvic
                  fracture assessments.
                </Typography>
                <Typography paragraph>
                  Oral contrast CAN be ordered for any abdominal/pelvic CT.
                  Allergies are very rare and in general oral contrast will
                  not harm the patient.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        </Paper>
        <Paper sx={{ m: '32px 0' }}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <TypographyHeading
                sx={{
                  color: 'secondary.main',
                }}
              >
                Default Protocols (unless specifically ordered differently)
              </TypographyHeading>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant='h6' component='h1' gutterBottom>
                    Oral contrast is administered for:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary='tumor workup/followup' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='chronic abdominal pain (higher likelyhood of neoplasm,abscess, chronic inflammation' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='postoperative patient, suspected abscess or suspected bowel perforation' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='hernia protocol CT' />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant='h6' component='h1' gutterBottom>
                    Oral contrast is generally NOT administered for:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary='multiphase studies of liver, kidneys, adrenal or pancreas' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='acute abominal pain (less than 3-4 days), unless the patient is thin or pediatric' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='CT urogram' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='CT angiogram/venogram studies' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='Bone studies' />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Box>
    </Container>
  )
}
