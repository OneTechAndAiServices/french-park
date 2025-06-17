// components/AllStaff.js
"use client"

import React from "react"
import { Box, Grid, Typography, useTheme } from "@mui/material"
import { lighten } from "@mui/material/styles"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import { blueColor } from "@/components/utils/Colors"

const STAFF = [
  // { name: "Mr. Maaz Ahmed", title: "HR Manager" },
  // { name: "Dr. Shamim Haider", title: "HR Manager/IT Adviser" },
    { name: "Dr. Catherine Donnelly", title: "" },
  { name: "Ruth Kelly", title: "Staff Nurse" },
  { name: "Margaret O'Gara", title: "Medical Secretary/Assistant" },
  { name: "Karen Drury", title: "Medical Secretary" },
]

export default function AllStaff() {
  const theme = useTheme()
  // light page background = very pale blue
  const pageBg = lighten(blueColor, 0.9)
  // card gradient from white at top to very pale blue at bottom
  const cardGradient = `linear-gradient(180deg, #ffffff 0%, ${lighten(
    blueColor,
    0.95
  )} 100%)`

  return (
<Box    sx={{
        backgroundColor: pageBg,
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
 
      }}>
        <Box
           sx={{
      
        maxWidth:"700px",
        mx:"auto"
      }}
      component="section"
   
    >
      <Grid container spacing={4} justifyContent="center">
        {STAFF.map((person) => (
          <Grid key={person.name} size={{xs:12,md:6}}>
            <Box
              sx={{
                background: cardGradient,
                borderRadius: "54.79px",
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: theme.shadows[1],
              }}
            >
            
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: theme.shadows[2],
                }}
              >
                <SettingsOutlinedIcon
                  sx={{ fontSize: 32, color: blueColor }}
                />
              </Box>

              {/* Name & title */}
              <Typography
                variant="h6"
                sx={{ mt: 2, fontWeight: 500, textAlign: "center",fontSize:"25px" }}
              >
                {person.name}
              </Typography>
              <Typography
                variant="body2"
                color="#818181"
                fontSize={"16px"}
                fontWeight={400}
                sx={{ textAlign: "center" }}
              >
                {person.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
</Box>
  )
}
