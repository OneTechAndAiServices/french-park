import { Box, Grid, Typography, Stack, IconButton, Link } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { blueColor } from '@/components/utils/Colors';

function ContactUs() {
  return (
    <Box sx={{ backgroundColor: '#f2f2f2' }}>
      <Grid container>
        <Grid  size={{xs:12,md:6}}>
          <Image 
            src="/therapist.png" 
            alt="Contact Us" 
            width={1000} 
            height={1000} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            priority 
          />
        </Grid>

        <Grid size={{xs:12,md:6}} sx={{ backgroundColor: '#005eb8', color: 'white', p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Connect With Us
          </Typography>

          {/* Phone Link */}
          <Link href="tel:+353949870707" underline="none" color="inherit">
            <Stack direction="row" alignItems="center" spacing={1} mb={2}>
              <PhoneIcon />
              <Typography>+353 (0) 94 987 0707</Typography>
              <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            </Stack>
          </Link>

          {/* Email Link */}
          <Link href="mailto:frenchparkmedicalpractice@gmail.com" underline="none" color="inherit">
            <Stack direction="row" alignItems="center" spacing={1} mb={2}>
              <EmailIcon />
              <Typography>frenchparkmedicalpractice@gmail.com</Typography>
              <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            </Stack>
          </Link>

          {/* Address Link */}
          <Link 
            href="https://www.google.com/maps/search/?api=1&query=Frenchpark+Medical+Practice,+Boyle+Rd,+Frenchpark+Demesne,+Roscommon,+F45+FX62,+Ireland" 
            target="_blank" 
            underline="none" 
            color="inherit"
          >
            <Stack direction="row" alignItems="center" spacing={1} mb={4}>
              <LocationOnIcon />
              <Typography>
                Boyle Rd, Frenchpark Demesne, Frenchpark, Co. Roscommon, F45 FX62, Ireland
              </Typography>
              <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            </Stack>
          </Link>

          {/* Social Media Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton 
              sx={{ color: blueColor, backgroundColor: 'white'  ,":hover":{bgcolor:blueColor,color:"white"} }} 
              href="https://facebook.com" 
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton 
              sx={{ color: blueColor, backgroundColor: 'white' ,":hover":{bgcolor:blueColor,color:"white"}  }} 
              href="https://www.linkedin.com/company/frenchpark-medical-centre/" 
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton 
              sx={{ color: blueColor, backgroundColor: 'white' ,":hover":{bgcolor:blueColor,color:"white"} }} 
              href="https://telegram.org" 
              target="_blank"
            >
              <SendIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUs;
