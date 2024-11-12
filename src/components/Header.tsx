// src/components/Header.tsx
import React, { FC } from 'react';
import { Typography, TextField, Avatar, Box, InputAdornment, TextFieldProps } from '@mui/material';
import { SearchNormal1 } from "iconsax-react";
import AVImage from '../assets/AvatarImage.png';

const Header: FC = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, color: "white", pt: 5, pb: 1}}>
      {/* Search Input */}
      <TextField
        placeholder="Search artist, title, album"
        variant="outlined"
        sx={{
          flex: 0.93,
          '& .MuiOutlinedInput-root': {
            borderRadius: '16px',
            fontFamily: 'montserrat',
            fontWeight: '500',
            fontSize: '16px',
            '& fieldset': {
              borderColor: '#B9B9B9',
            }
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#B5B5B5',
            opacity: 1
          },
        }}
        InputProps={{
          startAdornment: (
            <Box sx={{pl:0.4, pr: 0.9}}>
            <InputAdornment position="start">
              <SearchNormal1 color="#ACACAC"/>
            </InputAdornment>
            </Box>
          ),
        } as TextFieldProps['InputProps']}
      />
      {/* Premium Badge and User Avatar */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, pl: 3 }}>
        {/* Premium Badge */}
        <Typography variant="caption" color="white" fontFamily="Work Sans" fontWeight={400} fontSize="13px" sx={{
          background: 'linear-gradient(90deg, #3DC3C0, #8568F5)',
          px: 2.4,
          py: 0.3,
          borderRadius: 3,
          cursor: 'pointer'
        }}>Premium</Typography>
        {/* User Avatar */}
        <Box sx={{
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(90deg, #3DC3C0, #8568F5)',
          borderRadius: '50%',
          padding: '29px'
        }}>
          <Avatar 
          src={AVImage} 
          alt="User" 
          sx={{
            width: '50px',
            height: '50px',
            cursor: 'pointer'
          }} />
        </Box>
      </Box>
    </Box>
);

export default Header;
