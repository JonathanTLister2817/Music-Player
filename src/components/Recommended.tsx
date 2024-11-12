// src/components/Recommended.tsx
import React, { FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { Play } from 'iconsax-react';

interface RecommendedProps {
  imageSrc: string;
  altText: string;
  title: string;
  artist: string;
}

const avatarStyle = { width: '200px', height: '200px', borderRadius: '8px' };
const playButtonStyle = {
  position: 'absolute',
  bottom: 10,
  right: 10,
  width: '40px',
  height: '40px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

const Recommended: FC<RecommendedProps> = ({ imageSrc, altText, title, artist }) => (
  <Box>
    <Box sx={{ width: '200px', height: 'auto', position: 'relative' }}>
      <Avatar src={imageSrc} alt={altText} sx={avatarStyle} />
      <Box sx={playButtonStyle} aria-label="Play">
        <Play variant="Bold" color="white" size="20" />
      </Box>
    </Box>
    <Box width="200px">
      <Typography
        variant="subtitle1"
        color="#121212"
        fontFamily="Montserrat"
        fontWeight="500"
        sx={{ fontSize: '16px', mt: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        color="#6B6B6B"
        fontFamily="Montserrat"
        fontWeight="500"
        sx={{ fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {artist}
      </Typography>
    </Box>
  </Box>
);

export default Recommended