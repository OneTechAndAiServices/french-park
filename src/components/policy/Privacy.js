"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Privacy Policy
      </Typography>

      <Typography variant="body1" paragraph>
        At French Park Medical Centre, your privacy is extremely important to us. This policy outlines how we handle and protect your personal data.
      </Typography>

      <Box mt={4}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography variant="body2" paragraph>
          We may collect your name, contact details, medical history, and other health-related information when you interact with us, such as during appointments or when using our online services.
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body2" paragraph>
          Your information is used to provide healthcare services, communicate with you, and fulfill our legal obligations. We do not share your data without your consent unless required by law.
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          3. Data Protection
        </Typography>
        <Typography variant="body2" paragraph>
          We follow strict security protocols to safeguard your data, including secure servers, encryption, and staff training.
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          4. Your Rights
        </Typography>
        <Typography variant="body2" paragraph>
          You have the right to access, correct, or request deletion of your personal data. You may also object to the processing of your data in certain circumstances.
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          5. Contact Us
        </Typography>
        <Typography variant="body2" paragraph>
          If you have questions about this Privacy Policy or your data, please contact us at{" "}
          <strong>frenchparkmedicalpractice@gmail.com</strong> or call us at <strong>+353 (0) 94 987 0707</strong>.
        </Typography>
      </Box>
    </Container>
  );
}
