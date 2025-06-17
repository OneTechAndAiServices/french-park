"use client"

import { blueColor, skyBlueColor } from "@/components/utils/Colors"
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Link,
} from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TelegramIcon from "@mui/icons-material/Telegram"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { ArrowForward } from "@mui/icons-material"

export default function Banner() {
const [bannerData, setBannerData] = useState(null)


const fetchBannerContent = async () => {
  try {
    const res = await fetch("/api/banner")
    const data = await res.json()
    console.log("Banner API data:", data)
    setBannerData(data)
  } catch (error) {
    console.error("Failed to fetch banner data", error)
  }
}

useEffect(() => {
fetchBannerContent()
}, [])

  // if (!bannerData) return null 
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: blueColor,
        height: "auto",
        borderRadius: "40px",
        px: { xs: 2, md: 6 },
        // py: { xs: 4, md: 4 },
        mx: { xs: 1, md: 3 },
      }}
    >
      <Grid container spacing={{ md: 4 }}>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              //   height:"561px",
              backgroundColor: "#fff",
              borderRadius: "60px",
              p: { xs: 3, md: 3 },
              my: 3
            }}
          >

            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 26,
                display: "flex",
                gap: 1,
              }}
            >
              <IconButton size="small" sx={{ bgcolor: skyBlueColor, color: "black" }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ bgcolor: skyBlueColor, color: "black" }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ bgcolor: skyBlueColor, color: "black" }}>
                <TelegramIcon fontSize="small" />
              </IconButton>
            </Box>


            <Box sx={{ textAlign: "center", my: 2 }}>
              <Image
                src="/logo.jpg"
                alt="French Park Logo"
                width={200}
                height={200}
                style={{ height: "85px", width: "85px" }}
              />
            </Box>


            <Typography
              variant="h4"
              component="h2"
              align="center"
              fontSize={"30px"}
              gutterBottom
            >
              Welcome to French Park Medical Center
            </Typography>
            <Typography
              variant="body1"
              align="center"
              fontSize={"18px"}
            >
              We are a GP surgery located in Frenchpark, Co. Roscommon.
            </Typography>

            <Typography
              variant="subtitle1"
              align="center"
              sx={{ fontWeight: 600, mt: 2 }}
            >
              General Practice surgery
            </Typography>
            <Typography
              variant="body2"
              align="center"
              fontWeight={500}
              fontSize={"15px"}
              sx={{ mt: 1 }}
            >
              At French Park Medical Centre, <span style={{ color: blueColor }}> our mission is to provide the
                highest standard </span> of patient-focused healthcare. Our compassionate
              team is dedicated to providing you with personalized, high-quality
              healthcare tailored to your individual needs and preferences.
            </Typography>

            <Box sx={{ textAlign: "center", my: 2 }}>
       
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "30px", px: 4, py: 0.5, fontSize: "15px", textTransform: "none" }}
                href="/contact-us"
              >
                Contact Us
              </Button>
            </Box>

            {/* <Typography
              variant="subtitle2"
              align="center"
              sx={{
                fontWeight: 600,
                fontSize: "22px",
                color: "green",
                animation: "blinker 1s linear infinite",
                "@keyframes blinker": {
                  "50%": {
                    opacity: 0,
                  },
                },
              }}
            >
              New Patients Registration:
            </Typography>

            <Box
              sx={{ listStyle: "disc", pl: 4, mt: 1, mb: 1, fontSize: "20px", textAlign: "center" }}
            >
              We are open for new <strong>(Private/GMS)</strong> Patients
              registration
            </Box> */}
{bannerData ? (
  <Box sx={{ textAlign: "center", mt: 3 }}>
    <Typography
      variant="subtitle2"
      sx={{
        fontWeight: 600,
        fontSize: "22px",
        color: "green",
        animation: "blinker 1s linear infinite",
        "@keyframes blinker": {
          "50%": { opacity: 0 },
        },
      }}
    >
      {bannerData.heading}
    </Typography>
    <Typography fontSize="18px" mt={1}>
      {bannerData.description}
    </Typography>
  </Box>
) : (
  <Typography align="center" fontSize="18px" mt={2} color="error">
    No banner messages at the moment.
  </Typography>
)}




            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Button size="medium" href="tel:+353949870707" color="primary" endIcon={<ArrowForward />} variant="contained" sx={{ textDecoration: "underLine", fontSize: "17px",mx:1, borderRadius: "30px",}}>
                CALL
              </Button>
              <Button size="medium" href="mailto:frenchparkmedicalpractice@gmail.com" endIcon={<ArrowForward />} color="primary" variant="contained" sx={{ textDecoration: "underLine", fontSize: "17px" ,mx:1,borderRadius: "30px",}} >
                EMAIL
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* — RIGHT IMAGE + OVERLAY — */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
           
          >
         
            <Box sx={{ position: 'relative', width: '100%' }}>
              {/* Doctor Image */}
              <Image
                src="/doctorImage.png"
                alt="Doctor"
                width={1000}
                height={1000}
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                priority
              />

              {/* Overlay Box */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 30,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(255, 255, 255, 0.6)', // translucent white
                  backdropFilter: 'blur(10px)',           // blur effect
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  px: 3,
                  py: 2,
                  boxShadow: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  flexWrap: 'wrap',
                  width: '90%',
                  maxWidth: 500,
                  textAlign: 'left',
                }}
              >
                {/* Logo */}
                <Box sx={{ width: 100, height: 100, position: 'relative' }}>
                  <Image src="/gp2.png" alt="GPLine Logo" height={100} width={100} style={{ objectFit: 'contain' }} />
                </Box>

                {/* Text & Button */}
                <Box sx={{ flexGrow: 1 }}>
                  <Typography fontSize="16px" fontWeight={600}>
                    Private Patient Appointment
                  </Typography>
                  <Typography fontSize="13px" mt={0.5}>
                    Explore our new Online GP Consultation Service
                    <br />
                    <b>(Not For GMS Patient)</b>
                  </Typography>
                </Box>

                {/* Button */}
                <Button variant="contained" endIcon={<ArrowForward />} target="_blank" href="https://gpline.ie/" size="small" sx={{ borderRadius: 2, textTransform: 'none' }}>
                  Visit Now
                </Button>
                {/* <Button variant="contained" endIcon={<ArrowForward />} href="/contact-us" size="small" sx={{ borderRadius: 2, textTransform: 'none' }}>
                  Contact Us
                </Button> */}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
