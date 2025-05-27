// components/Policy.js
"use client"

import React from "react"
import {
  Box,
  Grid,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"

export default function Policy() {
  const theme = useTheme()
  const blue = theme.palette.primary.main

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 400 ,fontSize:["40px","45px","50px"] }}
      >
        Patient Rights
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="black"

        fontSize={"20px"}
      >
        Patient rights are the fundamental rules of conduct between patients and
        healthcare providers, ensuring that individuals receive fair,
        respectful, and quality care.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Left Column */}
        <Grid  size={{xs:12,md:6}}>
          {/* Your Right */}
          <Box sx={{ mb: 4 }}>
            <Typography
              // variant="subtitle2"
              sx={{ color: blue,  mb: 1 ,fontSize:"16px",fontWeight:600 }}
            >
              Your Right
            </Typography>
            <Typography variant="h6" component="h3"  fontSize={"25px"}>
              Your Right of Access to Your Health Info
            </Typography>
            <Typography variant="body2" color="black" fontSize={"15px"}> 
              You have the right of access to all the personal information held
              about you by this practice. If you wish to see your records, in
              most cases the quickest way is to discuss this with your doctor
              who will review the information in the record with you. You can
              make a formal written access request to the practice and receive
              a copy of your medical records.
            </Typography>
          </Box>

          {/* Transferring */}
          <Box sx={{ mb: 4 }}>
            <Typography
              // variant="subtitle2"
              sx={{ color: blue, mb: 1,fontSize:"16px",fontWeight:600  }}
            >
              Transferring
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom fontSize={"25px"}>
              Transferring to Another Practice
            </Typography>
            <Typography variant="body2" color="black" fontSize={"15px"}>
              If you decide at any time and for whatever reason to transfer to
              another practice we will facilitate that decision by making
              available to your new doctor a copy of your records on receipt of
              your signed consent from your new doctor. For medico‐legal
              reasons we will also retain a copy of your records in this
              practice for an appropriate period of time which may exceed eight
              years.
            </Typography>
          </Box>

          {/* Confidentiality */}
          <Box>
            <Typography
              // variant="subtitle2"
              sx={{ color: blue,mb: 1 ,fontSize:"16px",fontWeight:600 }}
            >
              Confidentiality
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom fontSize={"25px"}>
              Confidentiality
            </Typography>
            <Typography variant="body2" color="black" fontSize={"15px"}>
              The practice complies with the Data Protection Act 1998, and the
              confidentiality of your health records is a priority for the
              practice. We adhere to national guidelines to keep your
              information secure and confidential. Your information is only
              shared with other health professionals who are involved in your
              care and who require access to your medical records. You will be
              asked to consent to this before your information is shared.
            </Typography>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid size={{xs:12,md:6}}>
          {/* Practice surgery */}
          <Box sx={{ mb: 4 }}>
            <Typography
              // variant="subtitle2"
              sx={{ color: blue,fontSize:"16px",fontWeight:600 , mb: 1 }}
            >
              Practice surgery
            </Typography>
            <Typography variant="h6" component="h3"  fontSize={"25px"}>
              To our General Practice surgery
            </Typography>
            <Typography variant="body2" color="black" fontSize={"15px"}>
              You have other rights under data protection regulations in
              relation to transfer of data to a third country, restriction of
              processing, objection to processing and data portability. Further
              information on these rights in the context of general practice is
              described in the Guidelines available at{" "}
              <a
                href="https://www.dataprotection.ie"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: blue, textDecoration: "underline" }}
              >
                www.dataprotection.ie/data
              </a>
              . You also have the right to lodge a complaint with the Data
              Protection Commissioner.
            </Typography>
          </Box>

          {/* Rights */}
          <Box>
            <Typography
              // variant="subtitle2"
              sx={{ color: blue,fontSize:"16px",fontWeight:600 , mb: 1 }}
            >
              Rights
            </Typography>
            <Typography variant="h6" component="h3"  fontSize={"25px"}>
              Patient’s Rights
            </Typography>
            <Typography variant="body2" color="black" fontSize={"15px"}>
              We are committed to giving you the best possible service. Help us
              to help you. You have a right to, and the practice will try to
              ensure that:
            </Typography>
            <List disablePadding>
              {[
                "you will be treated with courtesy and respect",
                "you will be treated as a partner in your care",
                "all aspects of your care will be dealt with in privacy and confidence",
                "you will be seen by a doctor of your choice subject to availability",
              ].map((text) => (
                <ListItem key={text} disableGutters>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <FiberManualRecordIcon
                      sx={{ fontSize: 14, color: blue }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ variant: "body2",color:"black",fontSize:"15px" }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
