// src/components/NowPlayingBar.tsx
import React, { useState, FC } from 'react';
import { Box, Typography, Slider, Avatar } from '@mui/material';
import {Shuffle, Previous, Next,RepeateOne, Play, Pause, Heart, VolumeHigh, TaskSquare} from "iconsax-react";
import JYB from '../assets/JYBImage.png';

interface MediaButton {
  label: string;
  icon: JSX.Element;
}

const iconButtonStyle = {
  px: 0.7,
  py: 0.7,
  borderRadius: '50%',
  cursor: 'pointer',
};

const NowPlayingBar: FC = () => {
  const [hoveredButton, setHoveredButton] = useState<string>('');

  const mediaButtons: MediaButton[] = [
    { label: 'Shuffle', icon: <Shuffle /> },
    { label: 'Previous', icon: <Previous variant="Bold"/> },
    { label: 'Play', icon: <Play variant="Bold" /> },
    { label: 'Pause', icon: <Pause variant="Bold"/> },
    { label: 'Next', icon: <Next variant="Bold"/> },
    { label: 'RepeateOne', icon: <RepeateOne /> }
  ];

  const MediaControlButton: FC<{ button: MediaButton; isActive: boolean }> = ({ button, isActive }) => (
    <Box
      key={button.label}
      sx={{
        ...iconButtonStyle,
        color: isActive ? 'white' : 'default',
        background: isActive ? '#7C74EE' : 'transparent',
      }}
      onMouseEnter={() => setHoveredButton(button.label)}
      onMouseLeave={() => setHoveredButton('')}
      aria-label={button.label}
    >
      {button.icon}
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.4)',
        backdropFilter: 'blur(95%)',
        WebkitBackdropFilter: 'blur(95px)',
        padding: 3,
        px: 4,
        position: 'fixed',
        bottom: 0,
        left: 290,
        right: 0,
      }}
    >
      {/* Album Art */}
      <Avatar src={JYB} alt="Album Art" sx={{ width: 65, height: 65 }} />

      {/* Song Details */}
      <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 180, pl: 3 }}>
        <Typography variant="subtitle1" fontFamily="Montserrat" fontWeight="500" color="#121212" sx={{ fontSize: '16px' }}>
          Jiwa yang Bersedih
        </Typography>
        <Typography variant="caption" color="#8E8E8E" fontFamily="Montserrat" fontWeight="500" sx={{ fontSize: '14px' }}>
          Ghea Indrawati
        </Typography>
      </Box>

      {/* Playback Controls and Progress Bar */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {mediaButtons.map((button) => (
            <MediaControlButton key={button.label} button={button} isActive={hoveredButton === button.label} />
          ))}
        </Box>

        {/* Progress Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, width: '70%' }}>
          <Typography variant="caption" color="#121212" fontFamily="Montserrat" fontWeight="500" sx={{ fontSize: '16px' }}>
            1:29
          </Typography>
          <Slider
            defaultValue={30}
            sx={{
              flexGrow: 1,
              color: '#7C74EE',
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
              },
            }}
          />
          <Typography variant="caption" color="#121212" fontFamily="Montserrat" fontWeight="500" sx={{ fontSize: '16px' }}>
            4:24
          </Typography>
        </Box>
      </Box>

      {/* Additional Controls: Heart, Volume, and More */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '18%' }}>
        <Box sx={{ cursor: 'pointer' }} aria-label="Add to favorites">
          <Heart />
        </Box>
        <Box sx={{ px: 1.5, cursor: 'pointer' }} aria-label="Volume control">
          <VolumeHigh />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Slider
            defaultValue={50}
            sx={{
              flexGrow: 1,
              width: 80,
              color: '#7C74EE',
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
              },
            }}
          />
        </Box>
        <Box sx={{ px: 1.5, cursor: 'pointer' }} aria-label="More options">
          <TaskSquare />
        </Box>
      </Box>
    </Box>
  );
};

export default NowPlayingBar;
