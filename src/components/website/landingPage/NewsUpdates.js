// components/NewsUpdates.js
"use client"

import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, Link as MuiLink } from "@mui/material"
import Image from "next/image"
import { blueColor } from "@/components/utils/Colors"

export default function NewsUpdates() {
    const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/news");
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        setNewsList(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Grid container alignItems="center" spacing={4}>
    
        <Grid size={{xs:12,md:6}}>
          {/* <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 400 ,fontSize:"45px"}}
            my={2}
          >
            News and Updates
          </Typography>
          <Typography variant="body1" color="black" fontSize={"18px"} fontWeight={400}>
            Stay informed with the latest in health and wellness. The Health Pulse section brings you timely
            updates, expert insights, medical breakthroughs, public health alerts, and lifestyle tips to help you
            make informed decisions about your well-being.
          </Typography> */}
          <Box mt={4}>
            {loading ? (
              <Typography>Loading news...</Typography>
            ) : newsList.length === 0 ? (
              <Typography>No news available at the moment.</Typography>
            ) : (
              newsList.map((news) => (
                <Box key={news._id} mb={3}>
                  <Typography  variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 400 ,fontSize:"45px"}}
            my={2}>
                    {news.title || "Untitled"}
                  </Typography>
                  <Typography variant="body1" color="black" fontSize={"18px"} fontWeight={400}>
                    {news.description || "No description available."}
                  </Typography>
                </Box>
              ))
            )}
          </Box>


          <Button
            variant="contained"
            size="large"
            href="mailto:frenchparkmedicalpractice@gmail.com"
            
            sx={{
              backgroundColor: blueColor,
              borderRadius: "30px",
              textTransform: "none",
              px: 8,
              py: 1,
              mt:2
            }}
          >
            Email Now
          </Button>
        </Grid>

        <Grid size={{xs:12,md:6}}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "40px",
              overflow: "hidden",
              height: { xs: 300, md: 400 },
            }}
          >
            <Image
              src="/newsUpdates.png"
              alt="Doctor consulting with patient"
              fill
              style={{ objectFit: "cover" }}
              priority
            />

         
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
