// 'use client';
// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { keyframes } from '@mui/system';

// // ✅ Slower scroll (change duration below)
// // ✅ Starts immediately with visible text (no blank gap)

// const scroll = keyframes`
//   0% { transform: translateX(0%); }
//   100% { transform: translateX(-50%); }
// `;

// function Notice() {
//   const notices = [
//     {
//       id: 1,
//       title: "Online GP Consultation",
//       text: "Explore our new Online GP Consultation Service at www.gpline.ie – a convenient option now available for private patients."
//     },
//     {
//       id: 2,
//       title: "Phone Service Issue",
//       text: "Hi there! Our phone service is currently experiencing issues. If you're unable to reach us, please email us at frenchparkmedicalpractice@gmail.com. We apologize for the inconvenience and appreciate your patience!"
//     },
//     {
//       id: 3,
//       title: "Walk‑in Clinic",
//       text: "Walk-in clinic for flu and Covid vaccine."
//     }
//   ];

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         overflow: 'hidden',
//         backgroundColor: '#005eb8',
//         color: '#fff',
//         py: 1,
//       }}
//     >
//       <Box
//         sx={{
//           display: 'inline-flex',
//           whiteSpace: 'nowrap',
//           animation: `${scroll} 60s linear infinite`, // ✅ Slower scroll (adjust timing here)
//         }}
//       >
//         {[...notices, ...notices].map((notice, index) => (
//           <Typography
//             key={`${notice.id}-${index}`}
//             component="span"
//             sx={{
//               mx: 4,
//               fontSize: { xs: '0.85rem', md: '1rem' },
//               display: 'inline-block',
//             }}
//           >
//             <strong>{notice.title}: </strong>
//             {notice.text}
//           </Typography>
//         ))}
//       </Box>
//     </Box>
//   );
// }

// export default Notice;

'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import axios from 'axios';

const scroll = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

function Notice() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get('/api/notices'); // Make sure this matches backend route
        setNotices(res.data || []);
      } catch (err) {
        console.error('Error fetching notices:', err);
      }
    };

    fetchNotices();
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#005eb8',
        color: '#fff',
        py: 1,
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          whiteSpace: 'nowrap',
          animation: `${scroll} 60s linear infinite`,
        }}
      >
      {[...notices, ...notices].map((notice, index) => (
  <Typography
    key={`${notice._id || 'no-id'}-${index}`}
    component="span"
    sx={{
      mx: 4,
      fontSize: { xs: '0.85rem', md: '1rem' },
      display: 'inline-block',
    }}
  >
    <strong>{notice.title}: </strong>
    {notice.text}
  </Typography>
))}

      </Box>
    </Box>
  );
}

export default Notice;



