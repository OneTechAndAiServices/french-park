// components/OurServices.js
"use client"

import React from "react"
import { Box, Grid, Typography, Link } from "@mui/material"
import { blueColor } from "@/components/utils/Colors"

export default function OurServices() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 400,fontSize:["40px","45px","50px"] }}
      >
        Our Services
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid  size={{xs:12,md:6}}>
          {/* Blood Tests */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 500 ,fontSize:"30px"}}>
              Blood Tests
            </Typography>

            <Box  sx={{ mt: 1 }}>
              <Typography
                component="span"
                sx={{ color: "#008AFF", fontWeight: 500,fontSize:"20px" }}
              >
                Fasting Bloods:
              </Typography>{" "}
              <Typography fontSize={"18px"} fontWeight={400}>

              Patients who are fasting are prioritised for appointments on
              Tuesday, Wednesday & Thursday mornings up to 11.30am.
              </Typography>
            </Box>

            <Box  sx={{ mt: 1 }}>
              <Typography
                component="span"
                sx={{ color: "#008AFF", fontWeight: 500,fontSize:"20px"}}
              >
                Non-Fasting Bloods:
              </Typography>{" "}
              <Typography fontSize={"18px"} fontWeight={400}>

              Patients can avail of this service on a Monday & Wednesday
              evening.
              </Typography>
            </Box>

            <Typography
            
              sx={{ color: "#FF0000", mt: 2, fontWeight: 500 }}
            >
              Please note there is a €20 administration charge for blood tests
              for all medical card holders.
            </Typography>

            <Box sx={{ mt: 2 }} fontSize={"18px"} fontWeight={400}>
              In order to keep to appointment times, these appointments are
              for taking blood only. Any other problems will require a separate
              appointment. Blood results can take up to 21 days to be reviewed.
            </Box>

            <Box fontSize={"18px"} fontWeight={400}>
              You can discuss your results with the doctor at your next visit
              or contact reception after 21 days.
            </Box>
          </Box>

          {/* Guide Dogs */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 500 ,fontSize:"30px"}}>
              Guide Dogs
            </Typography>
            <Typography sx={{ mt: 1 }} fontSize={"18px"} fontWeight={400}>
              Guide dogs are welcome at the surgery, but we ask that you be
              aware of other patients and staff who may have an allergy or fear
              of dogs.
            </Typography>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid size={{xs:12,md:6}}>
          {/* Prescription Service */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 500 ,fontSize:"30px"}}>
              Prescription Service
            </Typography>
            <Typography sx={{ mt: 1 }} fontSize={"18px"} fontWeight={400}>
              If your medical condition is stable, i.e., blood pressure &
              blood tests are up to date, you can order your prescription at
              reception. Please contact reception with a list of the regular
              medications, their strengths, and quantity. This service requires
              2 days notice.
            </Typography>
          </Box>

          {/* Access */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 500 ,fontSize:"30px" }}>
              Access
            </Typography>
            <Typography sx={{ mt: 1 }} fontSize={"18px"} fontWeight={400}>
              If you have any special needs, please let our staff know so that
              we can ensure that you get the same support in the future.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography
                component="span"
                sx={{  color: "#008AFF", fontWeight: 500,fontSize:"20px"}}
              >
                Wheelchair access:
              </Typography>{" "}
              <Typography fontSize={"18px"} fontWeight={400}>
                
              The surgery has been specially designed to make it easier for
              disabled patients to visit. There are no steps at the entrance of
              the building, giving patients easy access.
              </Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Typography
                component="span"
                sx={{  color: "#008AFF", fontWeight: 500,fontSize:"20px" }}
              >
                Disabled Parking:
              </Typography>{" "}
              <Typography fontSize={"18px"} fontWeight={400}>

              There are several dedicated disabled car parking spaces available
              immediately outside the front entrance of the surgery.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
