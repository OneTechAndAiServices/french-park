"use client";
import React from "react";
import { Box, Grid, Paper, Typography, Avatar } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import StorageIcon from '@mui/icons-material/Storage';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import StatementOptions from "./StatementOptions";

const data = [
  {
    title: "Unacceptable Behavior",
    text: "It is our policy to treat everyone with respect and courtesy and we expect the same respect and courtesy in return. Any aggressive or inappropriate behavior towards staff will not be tolerated and will be dealt with seriously.",
    icon: <GavelIcon />,
    align: "left",
  },
  {
    title: "Practice Privacy Statement",
    text: "This Practice wants to ensure the highest standard of medical care for our patients. We understand that a General Practice is a trusted community governed by an ethic of privacy and confidentiality...",
    icon: <PersonIcon />,
    align: "right",
  },
  {
    title: "Legal Basis for Processing Your Data",
    text: "The processing of personal data in general practice is necessary in order to protect the vital interests of the patient and for the provision of health care and public health...",
    icon: <LockIcon />,
    align: "left",
  },
  {
    title: "Complaints",
    text: "We make every effort to give the best service possible to everyone who attends our practice. However, we are aware that things can go wrong resulting in a patient feeling that they have a genuine cause for complaint...",
    icon: <ReportProblemIcon />,
    align: "right",
  },
];

const Statements = () => {
  return (
    <Box  >
      <Box maxWidth={"900px"} mx={"auto"} sx={{ px: 4, py: 6 }}>
          <Box textAlign={"center"}  mx={"auto"} maxWidth={"650px"} mb={5}>
            <Typography fontSize={"50px"} fontWeight={400}>
                Statements
            </Typography>
            <Typography fontWeight={"20px"}>
                A statement is a clear and concise expression of an idea, opinion, or fact. It is often used to convey information, present a position, or declare something formally. 
            </Typography>
        </Box>
      <Grid container spacing={6}>
        {data.map((item, index) => (
          <Grid
            container
            item
            xs={12}
            spacing={2}
            key={index}
            direction={item.align === "left" ? "row" : "row-reverse"}
            alignItems="center"
          >
              <Grid sm={2} size={{xs:12,sm:9}}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: "#fff",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.text}</Typography>
              </Paper>
            </Grid>
            <Grid  sm={2} size={{xs:12,sm:3}}  sx={{ textAlign: "center" }}>
              <Avatar
                sx={{
                  bgcolor: "#0066CC",
                  color: "#fff",
                  width: 60,
                  height: 60,
                  mx: "auto",
                }}
              >
                {item.icon}
              </Avatar>
            </Grid>
          
          </Grid>
        ))}
      </Grid>
      </Box>
      <StatementOptions/>
    </Box>
  );
};

export default Statements;
