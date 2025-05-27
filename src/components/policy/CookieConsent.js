"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Checkbox,
  FormControlLabel,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent || JSON.parse(consent)?.accepted === false) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ accepted: true, preferences })
    );
    setOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({ accepted: false }));
    setOpen(false);
  };

  const handleChange = (event) => {
    setPreferences((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 4,
          p: 2,
          background: "#fff",
          boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
        },
      }}
    >
      <DialogTitle
        sx={{
        //   background: "linear-gradient(90deg, #1976d2, #2196f3)",
          color: "#2196f3",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        🍪 Your Privacy Matters
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <Typography variant="body1" mb={2}>
          We use cookies to personalize content and ads, to provide social media features, and to analyze our traffic. You can adjust your preferences below.
        </Typography>

        <FormControlLabel
          control={<Checkbox checked disabled />}
          label="✅ Necessary Cookies (Required)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={preferences.analytics}
              onChange={handleChange}
              name="analytics"
            />
          }
          label="📊 Analytics Cookies"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={preferences.marketing}
              onChange={handleChange}
              name="marketing"
            />
          }
          label="🎯 Marketing Cookies"
        />
      </DialogContent>

      <DialogActions sx={{ justifyContent: "space-between", px: 3, pb: 2 }}>
        <Button
          onClick={handleDecline}
          variant="outlined"
          color="error"
          size="small"
        >
          Reject All
        </Button>
        <Box>
          <Button onClick={() => setOpen(false)} sx={{ mr: 1 }} size="small">
            Close
          </Button>
          <Button
            onClick={handleAccept}
            variant="contained"
            color="primary"
            size="small"
          >
            Accept Selected
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default CookieConsent;
