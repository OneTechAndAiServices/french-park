// components/Services.js
"use client"

import React from "react"
import { Box, Grid, Typography, useTheme } from "@mui/material"
import { lighten } from "@mui/material/styles"
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined"
import { blueColor } from "@/components/utils/Colors"

const TOP_FORMS = [
  "Medical Card and GP Visit Card Application Form – People Aged 70 Years or Older",
  "GP Visit Card Registration Form (Under 6)",
  "Drugs Payment Scheme Application Form",
  "Long Term Illness Scheme Application Form",
  "Maternity Benefit Form",
]

const DRIVING_FORMS = [
  "Driving License Application Form",
  "Driving License Eyesight Form",
  "Driving License Medical Form",
]

const OTHER_FORMS = [
  "European Health Insurance Card Application Form",
  "Medical Card and GP Visit Application",
  "Medical Card/GP Visit Card Change of General Practitioner (GCP) Form",
]

export default function Services() {
  const theme = useTheme()
  const dark = blueColor
  const light = lighten(blueColor, 0.5)

  function renderCard(label, bg) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: bg,
          borderRadius: "16px",
          color: "#fff",
          p: 2.5,
          height: "100%",
          minHeight: 200,
        }}
      >
   
        <Box sx={{ alignSelf: "flex-end" ,bgcolor:"white",p:1,borderRadius:10}}>
          <AssignmentOutlinedIcon
            sx={{ color: theme.palette.text.primary, fontSize: 20 }}
          />
        </Box>

  
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, lineHeight: 1.4 }}
        >
          {label}
        </Typography>
      </Box>
    )
  }

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 6 } }}>
   
      <Grid container spacing={2} justifyContent={"center"}>
        {TOP_FORMS.map((f, i) => (
          <Grid key={f} size={{xs:12,sm:6,md:4}} sx={{my:2}}>
            {renderCard(f, i % 2 === 0 ? dark : light)}
          </Grid>
        ))}
      </Grid>


      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: 600, mt: 6, mb: 2 }}
      >
        Driving Forms
      </Typography>
      <Grid container spacing={2} justifyContent={"center"}>
        {DRIVING_FORMS.map((f, i) => (
          <Grid key={f} size={{xs:12,sm:6,md:4}} sx={{my:2}}>
            {renderCard(f, i % 2 === 0 ? dark : light)}
          </Grid>
        ))}
      </Grid>

    
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: 600, mt: 6, mb: 2 }}
      >
        Other Forms
      </Typography>
      <Grid container spacing={2} justifyContent={"center"}>
        {OTHER_FORMS.map((f, i) => (
          <Grid key={f} size={{xs:12,sm:6,md:4}} sx={{my:2}}>
            {renderCard(f, (i + 1) % 2 === 0 ? dark : light)}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
