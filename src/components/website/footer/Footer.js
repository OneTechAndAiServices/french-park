// "use client";
// import React from "react";
// import Link from "next/link";
// import { Box, Typography } from "@mui/material";
// import Image from "next/image";

// function Footer() {
//     const footerItems = [
//         { title: "Home", route: "/" },
//         { title: "Opening Hours", route: "/opening-hours" },
//         { title: "Staff", route: "/staff" },
//         { title: "Services", route: "/services" },
//         { title: "Patient Rights", route: "/patient-rights" },
//         { title: "Statements", route: "/statements" },
//     ];

//     return (
//         <Box
//             component="footer"
//             sx={{
//                 py: 12,
//                 px: 2,
//                 // backgroundColor: "#f5f5f5",
//                 display: "flex",
//                 // flexDirection: "column",
//                 flexDirection:["column","column","row"],
//                 alignItems:"center",
//                 justifyContent: "center",
//                 gap: 4,
//                 flexWrap: "wrap",
//             }}
//         >
//             <Box display={"flex"} justifyContent={"center"}>
//                 <Image
//                     src="/logo.png"
//                     alt="Doctor"
//                     //   fill
//                     height={1000}
//                     width={1000}
//                     style={{ objectFit: "contain", width: "70px", height: "70px" }}
//                     priority
//                 />
//             </Box>
//             <Box display={"flex"} justifyContent={"center"} flexDirection={["column","column","row"]}>
//                 {footerItems.map((item, index) => (
//                     <Link key={index} href={item.route} passHref>
//                         <Typography
//                             component="span"
//                             variant="body2"
//                             mx={2}
//                             sx={{
//                                 color: "black",
//                                 textDecoration: "none",
//                                 "&:hover": { textDecoration: "underline" },
//                                 cursor: "pointer",
//                             }}
//                         >
//                             {item.title}
//                         </Typography>
//                     </Link>
//                 ))}
//             </Box>
//         </Box>
//     );
// }

// export default Footer;
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";

const footerItems = [
  { title: "Home",          route: "/" },
  { title: "Opening Hours", route: "/opening-hours" },
  { title: "Staff",         route: "/staff" },
    { title: "Services",      route: "/services" },
  { title: "Patient Rights",route: "/patient-rights" },
  { title: "Statements",    route: "/statements" },
    { title: "Login",    route: "/login" },

];
const footerItems2 = [
  
  { title: "Cookie Policy",      route: "/cookie-policy" },
  { title: "Privacy Policy",route: "/privacy-policy" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
       
      <Grid container spacing={4} justifyContent="center">
        {/* ——— Left column ——— */}

<Grid size={{xs:12,md:2}}>
    <Box textAlign="center">
            <Image
              src="/logo.png"
              alt="French Park Logo"
              width={70}
              height={70}
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
</Grid>
          <Grid  size={{xs:12,md:2}}>
       <Typography fontWeight={"bold"} fontSize={16}>Quick Links</Typography>

          <Box
            display="flex"
            flexDirection={"column"}
            flexWrap="wrap"
            justifyContent="center"
            mt={2}
            gap={2}
          >
            {footerItems.map(({ title, route }) => (
              <Link key={route} href={route} passHref>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                    cursor: "pointer",
                  }}
                >
                  {title}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid  size={{xs:12,md:2}}>
       
 <Typography fontWeight={"bold"} fontSize={16}>Policy</Typography>
          <Box
            display="flex"
            flexDirection={"column"}
            flexWrap="wrap"
            justifyContent="center"
            mt={2}
            gap={2}
          >
            {footerItems2.map(({ title, route }) => (
              <Link key={route} href={route} passHref>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                    cursor: "pointer",
                  }}
                >
                  {title}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>

        {/* ——— Right column ——— */}
        <Grid size={{xs:12,md:6}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Google Map */}
            <iframe
              title="French Park Medical Centre"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: 8 }}
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.6602718765283!2d-8.418839284328017!3d53.848004479793246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485c9aa1e312579f%3A0x7c6f3d7d1a35c66d!2sBoyle%20Rd%2C%20Frenchpark%20Demesne%2C%20Frenchpark%2C%20Co.%20Roscommon%2C%20F45%20FX62%2C%20Ireland!5e0!3m2!1sen!2sie!4v1716035098185!5m2!1sen!2sie"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Address */}
            <Typography variant="body2" textAlign="center">
              Boyle Rd, Frenchpark Demesne, Frenchpark,
              <br />
              Co. Roscommon, F45 FX62, Ireland
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
