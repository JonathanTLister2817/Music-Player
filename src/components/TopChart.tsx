// src/components/TopChart.tsx
import React, { useState, FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { Play } from 'iconsax-react';

interface ChartProps {
  imageSrc: string;
  altText: string;
  imgTitle: string;
  title: string;
  artist: string;
  title2: string;
  artist2: string;
  title3: string;
  artist3: string;
  title4: string;
  artist4: string;
}

const avatarStyle = { width: '200px', height: '260px', borderRadius: '8px' };
const songTitleStyle = { fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' };
const artistStyle = { fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' };

const TopChart: FC<ChartProps> = ({ imageSrc, altText,imgTitle, title, artist, title2, artist2, title3, artist3, title4, artist4 }) => {
  const [hoveredItem, sethoveredItem] = useState<number | null>(null);

  const songItems = [
    { title, artist },
    { title: title2, artist: artist2 },
    { title: title3, artist: artist3 },
    { title: title4, artist: artist4 },
  ];

  const SongItem: FC<{ index: number; title: string; artist: string }> = ({ index, title, artist }) => (
    <Box
      onMouseEnter={() => sethoveredItem(index)}
      onMouseLeave={() => sethoveredItem(null)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '320px',
        p: 0.5,
        gap: 2,
        borderRadius: '15px',
        background: hoveredItem === index ? '#7C74EE1A' : 'transparent',
      }}
    >
      <Box sx={{ pl: 2 }}>
        {hoveredItem === index ? (
          <Play size="30" color="#7C74EE" variant="Bold" />
        ) : (
          <Typography width="30px" color="#121212" fontFamily="Montserrat" fontWeight="500" sx={{ fontSize: '20px' }}>
            {index + 1}
          </Typography>
        )}
      </Box>
      <Box width="250px">
        <Typography
          variant="subtitle1"
          color="#121212"
          fontFamily="Montserrat"
          fontWeight="500"
          sx={songTitleStyle}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="#6B6B6B"
          fontFamily="Montserrat"
          fontWeight="500"
          sx={artistStyle}
        >
          {artist}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '200px', height: 'auto', position: 'relative', mr: 2 }}>
        <Avatar src={imageSrc} alt={altText} sx={avatarStyle} />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
            borderRadius: '8px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography fontSize="20px" color="white" fontFamily="Montserrat" fontWeight="700" sx={{ pt: 25 }}>
            {imgTitle}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.3 }}>
        {songItems.map((item, index) => (
          <SongItem key={index} index={index} title={item.title} artist={item.artist} />
        ))}
      </Box>
    </Box>
  );
};

export default TopChart;