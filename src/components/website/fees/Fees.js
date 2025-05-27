// components/Fees.js
"use client"

import React from "react"
import { Box, Grid, Typography, useTheme } from "@mui/material"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import ScienceIcon from "@mui/icons-material/Science"
import MedicalServicesIcon from "@mui/icons-material/MedicalServices"
import { blueColor } from "@/components/utils/Colors"

const FEE_CARDS = [
  {
    title: "Private Patients",
    icon: <PersonOutlineIcon sx={{ fontSize: 32, color: blueColor }} />,
    items: [
      { label: "Meet & Greet (New Patients)", price: "€40" },
      { label: "Consultation", price: "€60" },
      { label: "Blood Test", price: "€30" },
    ],
  },
  {
    title: "GMS Patients",
    icon: <ScienceIcon sx={{ fontSize: 32, color: blueColor }} />,
    items: [
      { label: "Blood Test", price: "€20" },
      { label: "Joint Injection", price: "€40" },
    ],
  },
  {
    title: "All Patients",
    icon: <MedicalServicesIcon sx={{ fontSize: 32, color: blueColor }} />,
    items: [
      { label: "Medical Certificate (more than 3 days)", price: "€20" },
      { label: "Driving License", price: "€50" },
    ],
  },
]

export default function Fees() {
  const theme = useTheme()
  const circleSize = 64

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
        textAlign: "center",
        
      }}
    >
      {/* Title */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
        Fees
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ maxWidth: 600, fontSize:"20px" ,mx: "auto", color: "black" }}
      >
        Medical fees refer to the charges patients incur for healthcare services,
        including consultations, diagnostic tests, treatments, surgeries, and
        hospital stays.
      </Typography>

   
      <Grid container spacing={4} justifyContent="center">
        {FEE_CARDS.map((card) => (
          <Grid key={card.title} size={{xs:12,sm:6,md:4}}>
            <Box
              sx={{
          
                backgroundColor: blueColor,
                borderRadius: "40px",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
                pb: 4,
                px: 3,
                py:5,
                minHeight:"500px",
                color: "#fff",
              }}
            >
           
              <Box
                sx={{
                display:"flex",
              flexDirection:"column",
              justifyContent:"center",
                  width: circleSize,
                  height: circleSize,
                  bgcolor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  mx:"auto"
                
                }}
              >
                {card.icon}
              </Box>

             
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                {card.title}
              </Typography>

          
              <Box
                sx={{
                  height: "2px",
                  bgcolor: "rgba(255,255,255,0.6)",
                  mb: 2,
                }}
              />

              {/* Items */}
              {card.items.map((item, idx) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    // justifyContent: "space-between",
                    flexDirection:"column",
                    py: 1,
                    borderBottom:
                      idx < card.items.length - 1
                        ? "1px solid rgba(255,255,255,0.4)"
                        : "none",
                  }}
                >
                  <Typography variant="body1" fontSize={"20px"}>{item.label}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600,fontSize:"25px" }}>
                    {item.price}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
