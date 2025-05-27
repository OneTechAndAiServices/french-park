
"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function Timings() {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [timings, setTimings] = useState([]);

  useEffect(() => {
    fetchTimings();
  }, []);

  const fetchTimings = async () => {
    try {
      const res = await axios.get("/api/timings");
      const data = res.data.data;

      const allDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];

      // Ensure all days are included with default if missing
      const formatted = allDays.map((day) => {
        const match = data.find((entry) => entry.day === day);
        return {
          day,
          hours: match ? match.hours : "Not Available Today",
        };
      });

      setTimings(formatted);
    } catch (err) {
      console.error("Failed to fetch timings:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Box textAlign={"center"}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 500, fontSize: ["40px", "45px", "50px"] }}
        >
          Opening Hours
        </Typography>
      </Box>
         <Typography
              variant="body1"
              color="black"
              fontSize={["20px", "21px", "22px"]}
              mb={2}
            >
              Our doors are open when you need us most. With convenient and
              flexible hours, we’re here to provide quality care tailored to
              your schedule—whether it’s a routine check-up or an urgent visit.
            </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={6}>
          <ClipLoader size={60} color="#1976d2" />
        </Box>
      ) : (
        <Grid container alignItems="center" spacing={4}>
          <Grid size={{xs:12,md:8}}>
         

            <Box component="div">
              {timings.map((entry, idx) => (
                <Box
                  key={entry.day}
                  sx={{
                    display: "flex",
                    flexDirection: ["column", "column", "row"],
                    justifyContent: "space-between",
                    py: 1,
                    borderBottom:
                      idx < timings.length - 1
                        ? `1px solid ${theme.palette.divider}`
                        : "none",
                  }}
                >
                  <Typography
                    variant="body1"
                    fontSize={["18px", "19px", "25px"]}
                    fontWeight={500}
                  >
                    {entry.day}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={["18px", "19px", "20px"]}
                    fontWeight={500}
                  >
                    {entry.hours}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{xs:12,md:4}}>
            <Image
              src="/newsUpdates.png"
              alt="Doctor consulting patient"
              height={400}
              width={400}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              priority
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}



// // components/Timings.js
// "use client"

// import React from "react"
// import { Box, Grid, Typography, useTheme } from "@mui/material"
// import Image from "next/image"
// import { blueColor } from "@/components/utils/Colors"

// const HOURS = [
//   {
//     day: "Monday",
//     hours: "9:30 AM to 12:30 PM, 2:30 PM to 5:00 PM",
//   },
//   {
//     day: "Tuesday",
//     hours: "9:30 AM to 12:30 PM, Closed in the afternoon",
//   },
//   {
//     day: "Wednesday",
//     hours: "9:30 AM to 12:30 PM, 2:30 PM to 5:00 PM",
//   },
//   {
//     day: "Thursday",
//     hours: "9:30 AM to 12:30 PM, 2:30 PM to 5:00 PM",
//   },
//   {
//     day: "Friday",
//     hours: "9:30 AM to 12:30 PM, 2:30 PM to 5:00 PM",
//   },
// ]

// export default function Timings() {
//   const theme = useTheme()

//   return (
//     <Box
//       component="section"
//       sx={{
//         py: { xs: 4, md: 8 },
//         px: { xs: 2, md: 6 },
//       }}
//     >
//         <Box textAlign={"center"}>
//   <Typography
//             variant="h4"
//             component="h2"
//             gutterBottom
//             sx={{ fontWeight: 500,fontSize:["40px" ,"45px" ,"50px" ]}}
//           >
//             Opening Hours
//           </Typography>
//         </Box>
//       <Grid container alignItems="center" spacing={4}>
       
//         <Grid size={{xs:12,md:8}}>
        
//           <Typography variant="body1"  color="black" fontSize={["20px","21px","22px"]} mb={2}>
//             Our doors are open when you need us most. With convenient and
//             flexible hours, we’re here to provide quality care tailored to your
//             schedule—whether it’s a routine check-up or an urgent visit.
//           </Typography>

//           <Box component="div">
//             {HOURS.map((entry, idx) => (
//               <Box
//                 key={entry.day}
//                 sx={{
//                   display: "flex",
//                   flexDirection:["column","column","row"],
//                   justifyContent: "space-between",
//                   py: 1,
//                   borderBottom:
//                     idx < HOURS.length - 1
//                       ? `1px solid ${theme.palette.divider}`
//                       : "none",
//                 }}
//               >
//                 <Typography variant="body1" fontSize={["18px","19px","25px"]} fontWeight={500}>{entry.day}</Typography>
//                 <Typography variant="body1" fontSize={["18px","19px","20px"]} fontWeight={500}>{entry.hours}</Typography>
//               </Box>
//             ))}
//           </Box>
//         </Grid>

       
//         <Grid size={{xs:10,md:4}}>
       
//             <Image
//               src="/newsUpdates.png"
//               alt="Doctor consulting patient"
//             //   fill
//             height={400}
//             width={400}
//               style={{ objectFit: "cover",width:"100%",height:"auto" }}
//               priority
//             />

//         </Grid>
//       </Grid>
//     </Box>
//   )
// }

