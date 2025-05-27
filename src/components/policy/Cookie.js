"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function CookiePolicy() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Cookie Policy
      </Typography>

      <Typography variant="body1" paragraph>
        This Cookie Policy explains how French Park Medical Centre uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them.
      </Typography>

      <Box mt={4}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          1. What Are Cookies?
        </Typography>
        <Typography variant="body2" paragraph>
          Cookies are small data files stored on your device when you visit a website. They are widely used to make websites work efficiently and provide information to the website owners.
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          2. How We Use Cookies
        </Typography>
        <Typography variant="body2" paragraph>
          We use cookies to:
        </Typography>
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li><Typography variant="body2">Ensure our website functions correctly</Typography></li>
          <li><Typography variant="body2">Analyze site usage to improve performance</Typography></li>
          <li><Typography variant="body2">Remember your preferences for future visits</Typography></li>
        </ul>
      </Box>

      <Box mt={3}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          3. Managing Cookies
        </Typography>
        <Typography variant="body2" paragraph>
          You can set your browser to refuse some or all cookies, or to alert you when websites set or access cookies. Please note that disabling cookies may affect the functionality of this site.
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          4. Updates to This Policy
        </Typography>
        <Typography variant="body2" paragraph>
          We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          5. Contact Us
        </Typography>
        <Typography variant="body2" paragraph>
          If you have any questions about our use of cookies, please contact us at{" "}
          <strong>frenchparkmedicalpractice@gmail.com</strong>.
        </Typography>
      </Box>
    </Container>
  );
}
