"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,

} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import GroupIcon from "@mui/icons-material/Group";
import GavelIcon from "@mui/icons-material/Gavel";
import ScienceIcon from "@mui/icons-material/Science";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SecurityIcon from "@mui/icons-material/Security";
import DescriptionIcon from "@mui/icons-material/Description";
import { Circle } from "@mui/icons-material";
import { blueColor } from "@/components/utils/Colors";

const options = [
  {
    title: "Managing Your Information",
    icon: <InfoIcon />,
    text:
      "In order to provide for your care, we need to collect and keep information about you and your health on our records.",
    points: [
      "We retain your information securely.",
      "We will only ask for what we need.",
      "We never share it unnecessarily.",
      "Inform us about any changes that we should know.",
      "All staff sign a confidentiality agreement.",
    ],
  },
  {
    title: "Disclosure to Health Professionals",
    icon: <GroupIcon />,
    text:
      "We may need to pass on information to health and social care professionals to provide the treatment and services you need. Only the relevant part of your record will be disclosed.",
  },
  {
    title: "Disclosures Required/Permitted Under Law",
    icon: <GavelIcon />,
    text:
      "Personal information, including health information, can be disclosed in certain situations such as infectious diseases.",
  },
  {
    title: "Use of Information for Research and Audit",
    icon: <ScienceIcon />,
    text:
      "Patient information is used for research and audit in an anonymized or pseudonymized manner to improve services.",
  },
  {
    title: "Disclosure to Employers, Insurance Companies, and Solicitors",
    icon: <SecurityIcon />,
    text:
      "Medical certificates will only provide confirmation that you are unfit for work unless additional information is necessary and discussed with you.",
  },
  {
    title: "Use of Information for Training and Teaching",
    icon: <DescriptionIcon />,
    text:
      "It is common for GPs to discuss patient case histories for medical education. In such cases, the patient's identity is not revealed.",
  },
];

function StatementOptions() {
  return (
    <Box sx={{ px: [2,4,8], py: 6, backgroundColor: "#f0f8ff" }}>
      <Grid container spacing={4}>
        {options.map((option, index) => (
          <Grid  size={{xs:12,md:6}} key={index}>
            <Box display="flex" alignItems="flex-start" gap={2}>
             
              <Box  sx={{ p: 2, borderRadius: 2 }}>
                 <Avatar
                sx={{
                  bgcolor: "#0066CC",
                  color: "#fff",
                  width: 50,
                  height: 50,
                  mt: 0.5,
                  mb:3
                }}
              >
                {option.icon}
              </Avatar>
                <Typography variant="h6" gutterBottom>
                  {option.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: option.points ? 1 : 0 }}>
                  {option.text}
                </Typography>
                  {option.points && (
                  <Box sx={{ pl: 1.5 }}>
                    {option.points.map((point, idx) => (
                      <Box
                        key={idx}
                        display="flex"
                        alignItems="flex-start"
                        gap={1}
                        mb={0.5}
                      >
                        <Circle sx={{ fontSize: 12, mt: 0.5 ,color:blueColor}} />
                        <Typography variant="body2">{point}</Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default StatementOptions;
