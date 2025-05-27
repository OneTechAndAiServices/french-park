// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import {
//   Box,
//   Grid,
//   Typography,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import ServicesAllBottom from './ServicesAllBotoom';

// const services = [
//   'Medical Consultations',
//   'Chronic Disease Management Programme',
//   'Dementia Work-up Clinic',
//   'Travel Vaccines/Advice',
//   'Skin Issue Management',
//   'Medical Certificates',
//   'Driving License Renewal / Insurance Medical Examination',
//   'Pre-employment Medical Examination',
//   'Repeat Prescriptions',
//   'Referral for Counselling',
//   'Warfarin Management',
//   '24-Hour Blood Pressure Monitoring',
//   'ECG',
//   'Phlebotomy / Blood Testing',
//   'Therapeutic Phlebotomy for Management of Haemochromatosis',
//   'Ear Syringing',
//   'Contraception',
//   'STI Screening & Treatment',
//   'Joint Injections',
//   'Cryotherapy for Warts, Verrucae, and Other Skin Lesions',
// ];
// const services2 = [
//   'Well-Man Check-Up',
//   'Well-Woman Check-Up',
//   'Women’s Health Issues',
//   'Cervical Smears',
//   'Antenatal Care',
//   'Medical Certificates',
//   'Pre-conception Advice',
//   'STI Screening and Treatment',
//   'Maternity and Infant Scheme',
//   'Prostate Check',

// ];

// export default function ServicesAll() {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

//   const half = Math.ceil(services.length / 2);
//   const firstCol = services.slice(0, half);
//   const secondCol = services.slice(half);
//     const half2 = Math.ceil(services2.length / 2);
//   const firstCol2 = services2.slice(0, half2);
//   const secondCol2 = services2.slice(half2);

//   return (
// <>
// <Box textAlign={"center"}>
// <Typography fontSize={"50px"} fontWeight={400} my={3}>Our Services</Typography>
// </Box>
//     <Box sx={{ backgroundColor: '#EEF7FF', p: 4 }}>
//       <Grid container spacing={4} alignItems="center">
//         <Grid size={{xs:12,md:7}}>
//           <Typography variant="h5" fontWeight={400} fontSize={"30px"} gutterBottom>
//             General Health Care
//           </Typography>
//           <Typography variant="body1"  fontSize={"15px"}>
//             General health care refers to the essential services and practices aimed at maintaining
//             and improving overall well-being. It encompasses preventive measures, such as
//             vaccinations and regular check-ups, as well as the diagnosis and treatment of common
//             illnesses and chronic conditions.
//           </Typography>

//           <Grid container spacing={2} sx={{mt:4}}>
//             {[firstCol, secondCol].map((column, colIdx) => (
//               <Grid size={{xs:12,md:6}} key={colIdx} >
//                 <List dense disablePadding>
//                   {column.map((service, index) => (
//                     <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
//                       <ListItemIcon sx={{ minWidth: 30, mt: '4px' }}>
//                         <FiberManualRecordIcon sx={{ color: '#1976d2', fontSize:16 }} />
//                       </ListItemIcon>
//                       <ListItemText primary={service} primaryTypographyProps={{ fontSize: "14px",fontWeight:400 }} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>

//         <Grid size={{xs:12,md:5}} display="flex" justifyContent="center">
//           <Box
//             sx={{
//               borderRadius: 3,
//               overflow: 'hidden',
//               boxShadow: 3,
//               width: isSmallScreen ? '100%' : 400,
//               height: isSmallScreen ? 250 : 400,
//               position: 'relative',
//             }}
//           >
//             <Image
//               src="/veterinary.png"
//               alt="General Health Care"
//               fill
//               style={{ objectFit: 'cover' }}
//             />
//           </Box>
//         </Grid>
//       </Grid>


//  <Grid container spacing={4} alignItems="center" sx={{my:8,maxWidth:"900px",mx:"auto"}}>
//               <Grid size={{xs:12,md:6}}>
//           <Typography variant="h5" fontWeight={400} fontSize={"30px"} gutterBottom>
//           Weight Loss
//           </Typography>
//           <Typography variant="body1"  fontSize={"15px"}>
//       Losing weight is more than just a number on the scale it's about building healthy habits that last. Our weight loss resources are designed to guide you through safe, effective strategies that fit your lifestyle. From balanced nutrition and exercise tips to expert advice and motivational stories, we’re here to support your journey toward a healthier, more energized you.
//           </Typography>

//         </Grid>
//         <Grid size={{xs:12,md:6}}>
//           <Typography variant="h5" fontWeight={400} fontSize={"30px"} gutterBottom>
//          Dermatology
//           </Typography>
//           <Typography variant="body1"  fontSize={"15px"}>
//       Your skin is your body’s first line of defense — and it deserves expert care. Our Dermatology section covers everything from common skin conditions like acne and eczema to advanced treatments for psoriasis, rosacea, and skin cancer. Explore trusted advice from dermatologists, skincare tips, and the latest in cosmetic and clinical dermatology to help you achieve healthy, radiant skin at every stage of life.
//           </Typography>

//         </Grid>

     
//       </Grid>

//          <Grid container spacing={4} alignItems="center">
//                <Grid size={{xs:12,md:5}} display="flex" justifyContent="center">
//           <Box
//             sx={{
//               borderRadius: 3,
//               overflow: 'hidden',
//               boxShadow: 3,
//               width: isSmallScreen ? '100%' : 400,
//               height: isSmallScreen ? 250 : 400,
//               position: 'relative',
//             }}
//           >
//             <Image
//               src="/medical.png"
//               alt="General Health Care"
//               fill
//               style={{ objectFit: 'cover' }}
//             />
//           </Box>
//         </Grid>
//         <Grid size={{xs:12,md:7}}>
//           <Typography variant="h5" fontWeight={400} fontSize={"30px"} gutterBottom>
//             Women's and Men's Health
//           </Typography>
//           <Typography variant="body1"  fontSize={"15px"}>
//          Women's and men's health focuses on the unique biological and physiological differences between the sexes, addressing specific health concerns and promoting gender-specific care. Women’s health includes areas like reproductive health, pregnancy, menopause, and conditions such as breast and ovarian cancers.
//           </Typography>

//           <Grid container spacing={2} sx={{mt:4}}>
//             {[firstCol2, secondCol2].map((column, colIdx) => (
//               <Grid size={{xs:12,md:6}} key={colIdx} >
//                 <List dense disablePadding>
//                   {column.map((service, index) => (
//                     <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
//                       <ListItemIcon sx={{ minWidth: 30, mt: '4px' }}>
//                         <FiberManualRecordIcon sx={{ color: '#1976d2', fontSize:16 }} />
//                       </ListItemIcon>
//                       <ListItemText primary={service} primaryTypographyProps={{ fontSize: "14px",fontWeight:400 }} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>

     
//       </Grid>

//       <ServicesAllBottom/>
//     </Box></>
//   );
// }
'use client';
import React from 'react';
import Image from 'next/image';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ServicesAllBottom from './ServicesAllBotoom';

const services = [
  'Medical Consultations',
  'Chronic Disease Management Programme',
  'Dementia Work-up Clinic',
  'Travel Vaccines/Advice',
  'Skin Issue Management',
  'Medical Certificates',
  'Driving License Renewal / Insurance Medical Examination',
  'Pre-employment Medical Examination',
  'Repeat Prescriptions',
  'Referral for Counselling',
  'Warfarin Management',
  '24-Hour Blood Pressure Monitoring',
  'ECG',
  'Phlebotomy / Blood Testing',
  'Therapeutic Phlebotomy for Management of Haemochromatosis',
  'Ear Syringing',
  'Contraception',
  'STI Screening & Treatment',
  'Joint Injections',
  'Cryotherapy for Warts, Verrucae, and Other Skin Lesions',
];

const services2 = [
  'Well-Man Check-Up',
  'Well-Woman Check-Up',
  'Women’s Health Issues',
  'Cervical Smears',
  'Antenatal Care',
  'Medical Certificates',
  'Pre-conception Advice',
  'STI Screening and Treatment',
  'Maternity and Infant Scheme',
  'Prostate Check',
];

export default function ServicesAll() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const half = Math.ceil(services.length / 2);
  const firstCol = services.slice(0, half);
  const secondCol = services.slice(half);

  const half2 = Math.ceil(services2.length / 2);
  const firstCol2 = services2.slice(0, half2);
  const secondCol2 = services2.slice(half2);

  return (
    <>
      <Box textAlign="center">
        <Typography fontSize="50px" fontWeight={400} my={3}>
          Our Services
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#EEF7FF', py: [2,3,4], px:[2,2,4] }}>
        <Grid container spacing={4} alignItems="center">
          <Grid  size={{xs:12,md:7}}>
            <Typography variant="h5" fontWeight={400} fontSize="30px" gutterBottom>
              General Health Care
            </Typography>
            <Typography variant="body1" fontSize="15px">
              General health care refers to the essential services and practices aimed at maintaining
              and improving overall well-being. It encompasses preventive measures, such as
              vaccinations and regular check-ups, as well as the diagnosis and treatment of common
              illnesses and chronic conditions.
            </Typography>

            <Grid container spacing={2} sx={{ mt: 4 }}>
              {[firstCol, secondCol].map((column, colIdx) => (
                <Grid item size={{xs:12,md:6}} key={colIdx}>
                  <List dense disablePadding>
                    {column.map((service, index) => (
                      <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: 30, mt: '4px' }}>
                          <FiberManualRecordIcon sx={{ color: '#1976d2', fontSize: 16 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={service}
                          primaryTypographyProps={{ fontSize: '14px', fontWeight: 400 }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={5} display="flex" justifyContent="center">
            <Box
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3,
                width: isSmallScreen ? '100%' : 400,
                height: isSmallScreen ? 250 : 400,
                position: 'relative',
              }}
            >
              <Image
                src="/veterinary.png"
                alt="General Health Care"
                // fill
                height={700}
                width={700}
                style={{ objectFit: 'cover'  ,width:"100%",height:"auto"}}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center" sx={{ my: [2,4,8], maxWidth: '900px', mx: 'auto' }}>
          <Grid size={{xs:12,md:6}}>
            <Typography variant="h5" fontWeight={400} fontSize="30px" gutterBottom>
              Weight Loss
            </Typography>
            <Typography variant="body1" fontSize="15px">
              Losing weight is more than just a number on the scale &mdash; it&rsquo;s about building
              healthy habits that last. Our weight loss resources are designed to guide you through
              safe, effective strategies that fit your lifestyle. From balanced nutrition and
              exercise tips to expert advice and motivational stories, we&rsquo;re here to support your
              journey toward a healthier, more energized you.
            </Typography>
          </Grid>

          <Grid size={{xs:12,md:6}}>
            <Typography variant="h5" fontWeight={400} fontSize="30px" gutterBottom>
              Dermatology
            </Typography>
            <Typography variant="body1" fontSize="15px">
              Your skin is your body&rsquo;s first line of defense &mdash; and it deserves expert care.
              Our Dermatology section covers everything from common skin conditions like acne and
              eczema to advanced treatments for psoriasis, rosacea, and skin cancer. Explore trusted
              advice from dermatologists, skincare tips, and the latest in cosmetic and clinical
              dermatology to help you achieve healthy, radiant skin at every stage of life.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center">
          <Grid size={{xs:12,md:5}} display="flex" justifyContent="center">
            <Box
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3,
                width: isSmallScreen ? '100%' : 400,
                height: isSmallScreen ? 250 : 400,
                position: 'relative',
              }}
            >
              <Image
                src="/medical.png"
                alt="Women's and Men's Health"
                // fill
                height={900}
                width={900}
                 style={{ objectFit: "cover",width:"100%",height:"auto" }}
              />
            </Box>
          </Grid>

          <Grid size={{xs:12,md:7}}>
            <Typography variant="h5" fontWeight={400} fontSize="30px" gutterBottom>
              Women&apos;s and Men&apos;s Health
            </Typography>
            <Typography variant="body1" fontSize="15px">
              Women&rsquo;s and men&rsquo;s health focuses on the unique biological and physiological
              differences between the sexes, addressing specific health concerns and promoting
              gender-specific care. Women&rsquo;s health includes areas like reproductive health,
              pregnancy, menopause, and conditions such as breast and ovarian cancers.
            </Typography>

            <Grid container spacing={2} sx={{ mt: 4 }}>
              {[firstCol2, secondCol2].map((column, colIdx) => (
                <Grid size={{xs:12,md:6}} key={colIdx}>
                  <List dense disablePadding>
                    {column.map((service, index) => (
                      <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: 30, mt: '4px' }}>
                          <FiberManualRecordIcon sx={{ color: '#1976d2', fontSize: 16 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={service}
                          primaryTypographyProps={{ fontSize: '14px', fontWeight: 400 }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <ServicesAllBottom />
      </Box>
    </>
  );
}
