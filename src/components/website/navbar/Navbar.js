
"use client"

import React, { useState, useTransition, Fragment } from "react"
import { useRouter, usePathname } from "next/navigation"
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import { MoonLoader } from "react-spinners"
import Image from "next/image"

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Opening Hours", path: "/opening-hours" },
  { label: "Staff", path: "/staff" },
  // { label: "Fees", path: "/fees" },
  { label: "Services", path: "/services" },
]

const POLICY_ITEMS = [
  { label: "Patient Rights", path: "/patient-rights" },
  { label: "Statements", path: "/statements" },
]

const PRACTICE_ITEMS = [
  { label: "Fees", path: "/fees" },
  { label: "Useful links", path: "/useful-links" },
    { label: "More Info", path: "/more-info" },
]

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const [openPolicy, setOpenPolicy] = useState(false)
  const [openPractice, setOpenPractice] = useState(false)

  const navigate = (path) => {
    startTransition(() => {
      router.push(path)
    })
  }

  const navButtonStyle = (active) => ({
    mx: 1,
    textTransform: "none",
    borderBottom: active ? "2px solid" : "2px solid transparent",
    color: "black",
    borderColor: active ? "black" : "transparent",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "transparent",
      borderColor: "primary.light",
      color: "primary.light",
      transition: "0.3s",
    },
  })

  const renderLinks = (
    <Fragment>
      {NAV_ITEMS.map(({ label, path }) => {
        const active = pathname === path
        return (
          <Button
            key={path}
            onClick={() => navigate(path)}
            sx={navButtonStyle(active)}
          >
            {label}
          </Button>
        )
      })}

      {/* Policy Dropdown */}
      <Box sx={{ position: "relative" }}>
        <Button
          onClick={() => setOpenPolicy(!openPolicy)}
          endIcon={openPolicy ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={navButtonStyle(pathname?.includes("/policy"))}
        >
          Policy
        </Button>
        {openPolicy && (
          <Box
            sx={{
              position: "absolute",
              background: "white",
              boxShadow: 3,
              borderRadius: 1,
              mt: 1,
              zIndex: 10000,
            }}
          >
            {POLICY_ITEMS.map(({ label, path }) => (
              <ListItemButton
                key={path}
                onClick={() => {
                  setOpenPolicy(false)
                  navigate(path)
                }}
                selected={pathname === path}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            ))}
          </Box>
        )}
      </Box>

      {/* Practice Info Dropdown */}
      <Box sx={{ position: "relative" }}>
        <Button
          onClick={() => setOpenPractice(!openPractice)}
          endIcon={openPractice ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={navButtonStyle(pathname?.includes("/practice-info"))}
        >
          Practice Info
        </Button>
        {openPractice && (
          <Box
            sx={{
              position: "absolute",
              background: "white",
              boxShadow: 3,
              borderRadius: 1,
              mt: 1,
              zIndex: 10000,
            }}
          >
            {PRACTICE_ITEMS.map(({ label, path }) => (
              <ListItemButton
                key={path}
                onClick={() => {
                  setOpenPractice(false)
                  navigate(path)
                }}
                selected={pathname === path}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            ))}
          </Box>
        )}
      </Box>

      <Button
        onClick={() => navigate("/contact-us")}
        variant="outlined"
        sx={{
          ml: 2,
          borderRadius: "20px",
          textTransform: "none",
          px: 3,
        }}
      >
        Contact Us
      </Button>
    </Fragment>
  )

  return (
    <Box sx={{ position: "relative" }} py={1}>
      {isPending && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(36, 34, 34, 0.9)",
            zIndex: 1300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MoonLoader size={70} color="#ffffff" />
        </Box>
      )}

      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{ top: 0, zIndex: theme.zIndex.appBar }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1, md: 6 } }}>
          <Box
            onClick={() => navigate("/")}
            sx={{
              fontWeight: 700,
              fontSize: "1.25rem",
              cursor: "pointer",
            }}
          >
            {/* FrenchPark */}
              <Image
                          src="/logo.jpg"
                          alt="Doctor"
                        //   fill
                          height={1000}
                          width={1000}
                          style={{ objectFit: "contain" ,width:"70px",height:"70px"}}
                          priority
                        />
          </Box>

          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {renderLinks}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 260, pt: 1 }}>
          <Box sx={{ textAlign: "right", pr: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        <Box display={"flex"} justifyContent={"center"} mb={2} >
             <Image
                          src="/logo.jpg"
                          alt="Doctor"
                        //   fill
                          height={1000}
                          width={1000}
                          style={{ objectFit: "contain" ,width:"70px",height:"70px"}}
                          priority
                        />
        </Box>
          <Divider />
          <List>
            {NAV_ITEMS.map(({ label, path }) => (
              <ListItemButton
                key={path}
                selected={pathname === path}
                onClick={() => {
                  setDrawerOpen(false)
                  navigate(path)
                }}
              >
                {label}
              </ListItemButton>
            ))}

            {/* Policy dropdown in drawer */}
            <ListItemButton onClick={() => setOpenPolicy(!openPolicy)}>
              <ListItemText primary="Policy" />
              {openPolicy ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={openPolicy} timeout="auto" unmountOnExit>
              {POLICY_ITEMS.map(({ label, path }) => (
                <ListItemButton
                  key={path}
                  sx={{ pl: 4 }}
                  selected={pathname === path}
                  onClick={() => {
                    setDrawerOpen(false)
                    navigate(path)
                  }}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              ))}
            </Collapse>

            {/* Practice dropdown in drawer */}
            <ListItemButton onClick={() => setOpenPractice(!openPractice)}>
              <ListItemText primary="Practice Info" />
              {openPractice ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={openPractice} timeout="auto" unmountOnExit>
              {PRACTICE_ITEMS.map(({ label, path }) => (
                <ListItemButton
                  key={path}
                  sx={{ pl: 4 }}
                  selected={pathname === path}
                  onClick={() => {
                    setDrawerOpen(false)
                    navigate(path)
                  }}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              ))}
            </Collapse>

            <Divider sx={{ my: 1 }} />
            <ListItemButton
              onClick={() => {
                setDrawerOpen(false)
                navigate("/contact-us")
              }}
            >
              Contact Us
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}


// // components/Navbar.js
// "use client"

// import React, { useState, useTransition, Fragment } from "react"
// import { useRouter, usePathname } from "next/navigation"
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItemButton,
//   Divider,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material"
// import MenuIcon from "@mui/icons-material/Menu"
// import CloseIcon from "@mui/icons-material/Close"
// import { ClipLoader, MoonLoader, RingLoader } from "react-spinners"

// const NAV_ITEMS = [
//   { label: "Home", path: "/" },
//   { label: "Opening Hours", path: "/opening-hours" },
//   { label: "Staff", path: "/staff" },
//   // { label: "Appointments", path: "/appointments" },
//    { label: "Fees", path: "/fees" },
//   { label: "Services", path: "/services" },
//   { label: "Policy", path: "/policy" },
//   { label: "Practice Information", path: "/practice-info" },
// ]

// export default function Navbar() {
//   const router = useRouter()
//   const pathname = usePathname()
//   const theme = useTheme()
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"))

//   const [drawerOpen, setDrawerOpen] = useState(false)
//   const [isPending, startTransition] = useTransition()
// const [policyAnchorEl, setPolicyAnchorEl] = useState(null);
// const [practiceAnchorEl, setPracticeAnchorEl] = useState(null);

// const openPolicyMenu = Boolean(policyAnchorEl);
// const openPracticeMenu = Boolean(practiceAnchorEl);
// const navButtonStyle = (active) => ({
//   mx: 1,
//   textTransform: "none",
//   borderBottom: active ? "2px solid" : "2px solid transparent",
//   color: "black",
//   borderColor: active ? "black" : "transparent",
//   transition: "0.3s",
//   "&:hover": {
//     backgroundColor: "transparent",
//     borderColor: "primary.light",
//     color: "primary.light",
//     transition: "0.3s",
//   },
// });

//   function navigate(path) {
//     startTransition(() => {
//       router.push(path)
//     })
//   }

//   const renderLinks = (
//     <Fragment>
//       {NAV_ITEMS.map(({ label, path }) => {
//         const active = pathname === path
//         return (
//           <Button
//             key={path}
//             onClick={() => navigate(path)}
//             sx={{
//               mx: 1,
//               textTransform: "none",
//               borderBottom: active ? "2px solid" : "2px solid transparent",
//               color: "black",
//             //   borderColor: active ? "primary.main" : "transparent",
//                   borderColor: active ? "black" : "transparent",
//                     transition:"0.3s",
//               "&:hover": {
//                 backgroundColor: "transparent",
//                 borderColor: "primary.light",
//                   color: "primary.light",
//                   transition:"0.3s"
//               },
//             }}
//           >
//             {label}
//           </Button>
//         )
//       })}
//       <Button
//         onClick={() => navigate("/contact")}
//         variant="outlined"
//         sx={{
//           ml: 2,
//           borderRadius: "20px",
//           textTransform: "none",
//           px: 3,
//         }}
//       >
//         Contact Us
//       </Button>
//     </Fragment>
//   )

//   return (
//     <Box sx={{ position: "relative" }}>
//       {isPending && (
//         <Box
//           sx={{
//             position: "fixed",
//             inset: 0,
//             bgcolor: "rgba(36, 34, 34, 0.9)",
//             zIndex: 1300,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <MoonLoader size={70} color="#ffff" />
//         </Box>
//       )}

//       <AppBar
//         position="sticky"
//         color="transparent"
//         elevation={0}
//         sx={{ top: 0, zIndex: theme.zIndex.appBar }}
//       >
//         <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1, md: 6 } }}>
//           <Box
//             onClick={() => navigate("/")}
//             sx={{
//               fontWeight: 700,
//               fontSize: "1.25rem",
//               cursor: "pointer",
//             }}
//           >
//             FrenchPark
//           </Box>

//           {isMobile ? (
//             <IconButton onClick={() => setDrawerOpen(true)}>
//               <MenuIcon />
//             </IconButton>
//           ) : (
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               {renderLinks}
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//       >
//         <Box sx={{ width: 240, pt: 2 }}>
//           <Box sx={{ textAlign: "right", pr: 1 }}>
//             <IconButton onClick={() => setDrawerOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider />
//           <List>
//             {NAV_ITEMS.map(({ label, path }) => (
//               <ListItemButton
//                 key={path}
//                 selected={pathname === path}
//                 onClick={() => {
//                   setDrawerOpen(false)
//                   navigate(path)
//                 }}
//               >
//                 {label}
//               </ListItemButton>
//             ))}
//             <Divider sx={{ my: 1 }} />
//             <ListItemButton
//               onClick={() => {
//                 setDrawerOpen(false)
//                 navigate("/contact")
//               }}
//             >
//               Contact Us
//             </ListItemButton>
//           </List>
//         </Box>
//       </Drawer>
//     </Box>
//   )
// }

