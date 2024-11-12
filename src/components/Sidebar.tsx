// src/components/Sidebar.tsx
import React, { useState, FC } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Box, SxProps } from '@mui/material';
import { Home2, Microphone, MusicLibrary2, BookSaved, Clock, Heart, Music, Setting2, Profile, LogoutCurve } from "iconsax-react";
import logo from '../assets/MusiverseLogo.svg';

interface MenuItem {
  label: string;
  icon: JSX.Element;
}

const listItemStyle: SxProps = {
  pl: 2.5,
  py: 1.3,
  my: 0.8,
  borderRadius: 3,
  cursor: 'pointer',
};

const listItemIconStyle: SxProps = { minWidth: '40px' };

const Sidebar: FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string>('');

  const menuItems: MenuItem[] = [
    { label: 'Home', icon: <Home2 /> },
    { label: 'Artist', icon: <Microphone /> },
    { label: 'Album', icon: <MusicLibrary2 /> },
    { label: 'Podcast', icon: <Microphone /> },
    { label: 'Audio Book', icon: <BookSaved /> },
    { label: 'Recent', icon: <Clock /> },
    { label: 'Favourite', icon: <Heart /> },
    { label: 'Playlist', icon: <Music /> },
    { label: 'Setting', icon: <Setting2 /> },
    { label: 'Account', icon: <Profile /> },
    { label: 'Logout', icon: <LogoutCurve /> },
  ];

  const MenuItemComponent: FC<{ item: MenuItem; isActive: boolean }> = ({ item, isActive }) => (
    <ListItem
      key={item.label}
      sx={{
        ...listItemStyle,
        background: isActive ? 'linear-gradient(90deg, #3DC3C0, #8568F5)' : 'transparent',
      }}
      onMouseEnter={() => setHoveredItem(item.label)}
      onMouseLeave={() => setHoveredItem('')}
    >
      <ListItemIcon sx={{ ...listItemIconStyle, color: isActive ? 'white' : '#999999' }}>
        {item.icon}
      </ListItemIcon>
      <ListItemText
        primary={item.label}
        primaryTypographyProps={{
          sx: {
            color: isActive ? '#ffffff' : '#999999',
            fontWeight: 500,
            fontFamily: 'Montserrat',
          },
        }}
      />
    </ListItem>
  );

  return (
    <Box
      sx={{
        width: 290,
        minWidth: 240,
        height: '100vh',
        pt: 4,
        pl: 4,
        pr: 2,
        boxShadow: '10px 10px 9px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/*Logo*/}
      <Box>
        <img src={logo} alt="Logo Musiverse" />
      </Box>

      <List>
        {/* Discover Section */}
        <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 2, fontWeight: 700, fontFamily: 'Montserrat', color: '#3C3E43' }}>
          Discover
        </Typography>
        {menuItems.slice(0, 5).map((item) => (
          <MenuItemComponent key={item.label} item={item} isActive={hoveredItem === item.label} />
        ))}
        {/* Library Section */}
        <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 2, fontWeight: 700, fontFamily: 'Montserrat', color: '#3C3E43' }}>
          Library
        </Typography>
        {menuItems.slice(5, 8).map((item) => (
          <MenuItemComponent key={item.label} item={item} isActive={hoveredItem === item.label} />
        ))}
        {/* More Section */}
        <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 2, fontWeight: 700, fontFamily: 'Montserrat', color: '#3C3E43' }}>
          More
        </Typography>
        {menuItems.slice(8).map((item) => (
          <MenuItemComponent key={item.label} item={item} isActive={hoveredItem === item.label} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
