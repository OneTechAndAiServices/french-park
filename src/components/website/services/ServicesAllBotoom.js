// components/ServicesAllBottom.js

import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { Circle } from '@mui/icons-material';
import { blueColor } from '@/components/utils/Colors';

const services = [
  {
    title: 'Chronic Disease Management',
    description: 'Chronic disease management involves the ongoing care and support of individuals living with long-term health conditions such as diabetes, hypertension, asthma, and heart disease.',
    points: [
      'Asthma',
      'Type 2 Diabetes',
      'Heart (Heart Attack)',
      'COPD',
      'Atrial Fibrillation',
      'Post Stroke',
    ]
  },
  {
    title: 'Pediatrics',
    description: 'Pediatrics is the branch of medicine dedicated to the health and well-being of infants, children, and adolescents.',
    points: [
      '2 week and 6 week check-ups',
      'Infant feeding',
      'Letter for Medical Card',
      'Asthma Cycle of Care',
      '2 years and 5 years checks',
    ]
  },
  {
    title: 'Vaccinations',
    description: 'Vaccinations are a vital part of preventive health care, designed to protect individuals from infectious diseases by stimulating the body’s immune response.',
    points: [
      'Childhood Immunisation Schedule',
      'MMR/VZ Vaccine',
      'Pneumococcal Vaccine',
      'Tetanus booster',
      'Occupational vaccines (e.g. Hepatitis B)',
      'Vaccines titre to check for response to vaccines / immune status',
    ]
  }
];

function ServicesAllBottom() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 ,my:4}}>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid size={{xs:12,sm:6,md:4}} key={index}>
            <Box  sx={{ height: '100%' }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" fontSize={"30px"}>
                  {service.title}
                </Typography>
                <Typography variant="body2" paragraph fontSize={"15px"}>
                  {service.description}
                </Typography>
                {service.points && (
                  <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
                    {service.points.map((point, idx) => (
                      <Box key={idx}>
                      <Box display={"flex"} alignItems={"center"}>
                          <Circle sx={{fontSize:12,color:blueColor}}/>
                        <Typography variant="body2" ml={1} fontSize={"14px"} my={0.5}>{point}</Typography>
                      </Box>
                      </Box>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ServicesAllBottom;
