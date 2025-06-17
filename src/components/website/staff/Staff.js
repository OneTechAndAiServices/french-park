
"use client"

import React from "react"
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import Image from "next/image"
import { blueColor } from "@/components/utils/Colors"
import AllStaff from "./AllStaff"

const STAFF = [
  // {
  //   name: "Dr. Muhammad Ghazanain",
  //   image: "/staff1.png", // put this in /public
  //   bio: `Dr. Muhammad Ghazanain graduated in 2010 from Allama Iqbal Medical College in Pakistan and went on to pursue specialized medical training. He worked as a Medical Registrar for 5 years in Ireland and completed his MRCP (Membership of the Royal College of Physicians of Ireland) exams. In 2018, Dr. Ghazanain decided to become a General Practitioner (GP) and joined the GP Training Scheme (GCST). During his training he completed additional diplomas in Paediatrics (Royal College of Ireland), Diploma in Child Health (Royal College of Ireland), Immediate Cardiac Life Support (ICLS), Intermediate Cardiac Care Science Course (ICCS), Joint Infection Course.`,
  //   qualifications: [
  //     "General Practitioner (Royal College of Ireland)",
  //     "Diploma in Paediatrics (Royal College of Ireland)",
  //     "Diploma in Child Health (Royal College of Ireland)",
  //     "Joint Infection Course (JIC)",
  //     "Immediate Cardiac Life Support (ICLS)",
  //     "Intermediate Cardiac Care Science Course (ICCS)",
  //   ],
  // },
  {
  name: "Dr. Muhammad Ghazanain",
  image: "/staff1.png", 
  bio: `Dr. Muhammad Ghazanain graduated in 2009 from Allama Iqbal Medical College in Pakistan and went on to pursue specialized medical training. He worked as a Medical Registrar for 5 years in Ireland and completed his MRCP (Membership of the Royal College of Physicians of Ireland) exams. In 2018, Dr. Ghazanain decided to become a General Practitioner (GP) and joined the GP Training Scheme (GCST). During his training he completed additional diplomas in Paediatrics (Royal College of Ireland), RCPI Diploma in Dermatology, Immediate Cardiac Life Support (ICLS), Intermediate Cardiac Care Science Course (ICCS), Joint Infection Course.`,
  qualifications: [
    "General Practitioner (Royal College of Ireland)",
    "Diploma in Paediatrics (Royal College of Ireland)",
    "RCPI Diploma in Dermatology",
    "Joint Infection Course (JIC)",
    "Immediate Cardiac Life Support (ICLS)",
    "Intermediate Cardiac Care Science Course (ICCS)",
  ],
}

  // {
  //   name: "Dr. Catherine Donnelly",
  //   image: "/staff2.png", 
  //   bio: `Dr. Catherine Donnelly graduated from the National University of Ireland in 2009. During her training in Geriatric Medicine (Reg in Medicine) in Tallaght Hospital, Dublin she developed expertise in General Internal Medicine, Neurology, and Musculoskeletal Disorders. After completing her training, Dr. Donnelly completed a Diploma in Tropical Medicine and worked in Malawi for 1 year before returning to general practice. She joined our team in 2015 and holds a Diploma in Tropical and Infectious Disease (DTID) with UCD.`,
  //   qualifications: [
  //     "MB BCh BAO (National University of Ireland)",
  //     "Diploma in Tropical Medicine & Hygiene (DTM&H)",
  //     "Diploma in Tropical & Infectious Disease (DTID) UCD",
  //     "Membership of the Irish College of General Practitioners (MICGP)",
  //   ],
  // },
]

export default function Staff() {
  const theme = useTheme()

  return (
   <>
    <Box component="section" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 6 } }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 400,fontSize:["38px" ,"45px" ,"50px" ]}}
      >
        Our Staff
      </Typography>
  <Box
              sx={{
                // position: "relative",
                display:"flex",
                backgroundColor: "#fff",
                borderRadius: "40px",
                // boxShadow: 3,
                p: { xs: 4, md: 6 },
                pt: { xs: 8, md: 10 },
              }}
            >
      <Grid container spacing={4} justifyContent="center">
        {/* {STAFF.map((doc, idx) => (
     <React.Fragment  key={`${doc.name}-${idx}`}>
     
          <Grid key={doc.name} size={{xs:12,md:6}} >
          
             
                <Image
                  src={doc.image}
                  alt={doc.name}
                  width={1000}
                  height={1000}
                  style={{ objectFit: "cover", borderRadius: "50%"  ,height:"auto",width:"100%"}}
                  priority
                />
         
  </Grid>
       <Grid key={doc.name} size={{xs:12,md:6}}>
              <Box sx={{ mt: 2 ,ml:2}}>
                <Typography variant="h6" sx={{ fontWeight: 500,fontSize:["20px","23px","27px"] }}>
                  {doc.name}
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: "black" ,fontSize:"15px"}}>
                  {doc.bio}
                </Typography>

                <Typography variant="subtitle1" sx={{ fontWeight: 500, mt: 2,color:blueColor,fontSize:"20px" }}>
                  Qualifications
                </Typography>
                <List disablePadding>
                  {doc.qualifications.map((q) => (
                    <ListItem key={q} disableGutters >
                      {/* <ListItemIcon sx={{ minWidth: 32 }}>
                        <FiberManualRecordIcon sx={{ fontSize: 8, color: blueColor }} />
                      </ListItemIcon> */}
                      {/* <ListItemText primary={q} />
                      <Typography sx={{ fontSize:"14px",fontWeight:500 }}>{q}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
          
          </Grid>
            

          </React.Fragment>
        ))} */}
        {STAFF.map((doc, idx) => (
  <React.Fragment key={`${doc.name}-${idx}`}>
    {/* <Grid size={{ xs: 12, md: 6 }}>
      <Image
        src={doc.image}
        alt={doc.name}
        width={1000}
        height={1000}
        style={{
          objectFit: "cover",
          borderRadius: "50%",
          height: "auto",
          width: "100%",
        }}
        priority
      />
    </Grid> */}

    <Grid size={{ xs: 12, md: 10 }} sx={{boxShadow:2,p:2,borderRadius:"10px"}}>
      <Box sx={{ mt: 2, ml: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, fontSize: ["20px", "23px", "27px"] }}
        >
          {doc.name}
        </Typography>
        <Typography
          variant="body2"
          paragraph
          sx={{ color: "black", fontSize: "15px" }}
        >
          {doc.bio}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 500, mt: 2, color: blueColor, fontSize: "20px" }}
        >
          Qualifications
        </Typography>
        <List disablePadding>
          {doc.qualifications.map((q, qIdx) => (
            <ListItem key={qIdx} disableGutters>
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                {q}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  </React.Fragment>
))}

      </Grid>
            </Box>
    </Box>
    
    <AllStaff/></>
  )
}
