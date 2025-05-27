// components/ServicesEmergency.js
"use client"

import React from "react"
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material"
import { Phone } from "@mui/icons-material"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"

export default function ServicesEmergency() {
  const theme = useTheme()
  const blue = theme.palette.primary.main
  const red = theme.palette.error.main

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      {/* Phone Service Hours */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontSize:"50px", fontWeight: 400 }}>
        Phone Service Hours
      </Typography>
      <Typography variant="body1" gutterBottom fontSize={"25px"}>
        Our phone service is in operation:
      </Typography>
        <Typography fontSize={"22px"} fontWeight={400}>Monday to Friday: </Typography>

      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          mt: 1,
          mb: 4,
        }}
      >
        <Phone sx={{ mr: 1, bgcolor: blue,color:"white" ,p:1,fontSize:37,borderRadius:10 }} />
        <Typography variant="body1" fontSize={"22px"} fontWeight={400}>
          9:30 AM to 12:30 PM and 2:00 PM to 5:00 PM
        </Typography>
      </Box>

      {/* Important Notes */}
      <Typography variant="h5" component="h3"fontSize={"40px"}  gutterBottom sx={{ fontWeight: 400, textAlign: "left" }}>
        Important Notes
      </Typography>
      <List sx={{ textAlign: "left", mb: 4 }}>
        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <FiberManualRecordIcon sx={{ fontSize: 22, color: blue }} />
          </ListItemIcon>
          <ListItemText
            primary="The surgery is closed on Tuesday afternoons from 12:30 PM."
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <FiberManualRecordIcon sx={{ fontSize: 22, color: blue }} />
          </ListItemIcon>
          <ListItemText
            primary="The surgery is also closed on Monday, Wednesday, Thursday, and Friday between 12:30 PM and 2:00 PM."
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <FiberManualRecordIcon sx={{ fontSize: 22, color: blue }} />
          </ListItemIcon>
          <ListItemText
            primary="Please refrain from coming to the practice during these closed times, as we are unable to answer the door. Instead, please contact us during our posted hours."
          />
        </ListItem>
      </List>

      {/* Emergency Notice */}
      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        sx={{ color: "#FF0000", fontWeight: 400,fontSize:"42px" }}
      >
        For Emergencies Only
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: "#FF0000", mb: 1 ,fontSize:"22px"}}
      >
        On Tuesday afternoons, for emergencies only, please call 071 96 63386.
      </Typography>
      <Typography variant="body1" sx={{ color: "#FF0000",fontSize:"22px" }}>
        For all other inquiries, please ring the surgery during our normal hours.
      </Typography>
    </Box>
  )
}
