// src/components/AppLayout.tsx
import React, { FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import Recommended from './Recommended';
import NowPlayingBar from './NowPlayingBar';
import TopChart from './TopChart';
import { ArrowRight2 } from "iconsax-react";

import JYB from '../assets/JYBImage.png';
import RPG from '../assets/RPGImage.jpeg';
import Sial from '../assets/SialImage.jpeg';
import JanJi from '../assets/JanjiImage.jpeg';
import Super from '../assets/SuperImage.png';
import SepK from '../assets/SepKImage.jpeg';
import Seven from '../assets/SevenImage.jpeg';
import Round1 from '../assets/Round1Image.jpeg';
import Round2 from '../assets/Round2Image.jpeg';
import Round3 from '../assets/Round3Image.jpeg';
import Round4 from '../assets/Round4Image.jpeg';
import Round5 from '../assets/Round5Image.jpeg';
import Round6 from '../assets/Round6Image.jpeg';

interface RecommendedData {
  imageSrc: string;
  altText: string;
  title: string;
  artist: string;
}

interface ChartData {
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

const recommendedData: RecommendedData[] = [
  { imageSrc: JYB, altText: 'JYB image', title: 'Jiwa yang Bersedih', artist: 'Ghea Indrawati' },
  { imageSrc: RPG, altText: 'RPG image', title: 'Rayuan Perempuan Gila', artist: 'Nadin Amizah' },
  { imageSrc: Sial, altText: 'Sial image', title: 'Sial', artist: 'Ghea Mahalini' },
  { imageSrc: JanJi, altText: 'JanJi image', title: 'Janji Setia', artist: 'Tiara Andini' },
  { imageSrc: Super, altText: 'Super image', title: 'Super Shy', artist: 'NewJeans' },
  { imageSrc: SepK, altText: 'SepK image', title: 'Seperti Kiash', artist: 'Rizky Febian' },
  { imageSrc: JYB, altText: 'JYB image', title: 'Jiwa yang Bersedih', artist: 'Ghea Indrawati' },
  { imageSrc: RPG, altText: 'RPG image', title: 'Rayuan Perempuan Gila', artist: 'Nadin Amizah' },
  { imageSrc: Sial, altText: 'Sial image', title: 'Sial', artist: 'Ghea Mahalini' },
  { imageSrc: JanJi, altText: 'JanJi image', title: 'Janji Setia', artist: 'Tiara Andini' },
  { imageSrc: Super, altText: 'Super image', title: 'Super Shy', artist: 'NewJeans' },
  { imageSrc: SepK, altText: 'SepK image', title: 'Seperti Kiash', artist: 'Rizky Febian' }
];

const chartsData: ChartData[] = [
  {
    imageSrc: Sial, altText: 'Sial image', imgTitle: '100 TOP Hits', title: 'Sial', artist: 'Mahalini • 4:03', title2: 'Rayuan Perempuan Gila', artist2: 'Nadin Amizah • 5:20',
    title3: 'Jiwa yang Bersedih', artist3: 'Ghea Indrawati • 4:38', title4: 'Komang', artist4: 'Raim Laude • 3:42'
  },
  {
    imageSrc: Seven, altText: 'Seven image', imgTitle: '100 TOP Hits', title: 'Seven (feat. Latto) [Explicit] by Jung Kook', artist: 'Jung Kook, Latto • 3:04', title2: 'Super Shy', artist2: 'NewJeans • 2:34',
    title3: 'Somebody’s Pleasure', artist3: 'Aziz Hedra • 3:44', title4: 'Tally', artist4: 'BLACKPINK • 3:04'
  },
];

const topAlbumsData = [
  { imageSrc: Round1, altText: 'Round1 image' },
  { imageSrc: Round2, altText: 'Round2 image' },
  { imageSrc: Round3, altText: 'Round3 image' },
  { imageSrc: Round4, altText: 'Round4 image' },
  { imageSrc: Round5, altText: 'Round5 image' },
  { imageSrc: Round6, altText: 'Round6 image' },
  { imageSrc: Round1, altText: 'Round1 image' },
  { imageSrc: Round2, altText: 'Round2 image' },
  { imageSrc: Round3, altText: 'Round3 image' },
  { imageSrc: Round4, altText: 'Round4 image' },
  { imageSrc: Round5, altText: 'Round5 image' },
  { imageSrc: Round6, altText: 'Round6 image' }
];

const AppLayout: FC = () => (
  <Box sx={{ display: 'flex', height: '100vh'}}>
    <Box sx={{ position: 'fixed', height: '100%', zIndex: 2 }}>
      <Sidebar />
    </Box>

    <Box sx={{pl:'330px',flex: 1, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <Box sx={{position: 'fixed', width: 'calc(100% - 290px)', zIndex: 2, backgroundColor: 'white' }}>
        <Header />
      </Box>

      {/* Main content area */}
      <Box sx={{pt: '90px', flex: 1, pb: '130px', overflowY: 'auto' }}>
      <SectionHeader title="Recommended" actionText="View all" />
        <Box
          sx={{
            display: 'flex',
            pl: 1,
            gap: 6,
            overflowX: 'auto',
            width: '100%',
            whiteSpace: 'nowrap',
            '&::-webkit-scrollbar': { display: 'none' }
          }}
        >
          {recommendedData.map((item, index) => (
            <Recommended key={index} {...item} />
          ))}
        </Box>
        <SectionHeader title="Top Chart This Week" actionText="View all" />
        <Box
          sx={{
            display: 'flex',
            pl: 1,
            gap: 5,
            alignItems: 'center',
            '&::-webkit-scrollbar': { display: 'none' }
          }}
        >
          {chartsData.map((item, index) => (
            <TopChart key={index} {...item} />
          ))}
          <Box flexGrow={0.7} />
          <Box sx={{cursor: 'pointer'}}>
            <ArrowRight2 color="#666666" />
          </Box>
        </Box>
        <SectionHeader title="Top Album" actionText="View all" />
        <Box
          sx={{
            display: 'flex',
            pl: 1,
            gap: 6,
            overflowX: 'auto',
            width: '100%',
            whiteSpace: 'nowrap',
            '&::-webkit-scrollbar': { display: 'none' }
          }}
        >
          {topAlbumsData.map((item, index) => (
            <Avatar
              key={index}
              sx={{ width: '200px', height: '200px' }}
              src={item.imageSrc}
              alt={item.altText}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ position: 'fixed', width: 'calc(100% - 290px)', zIndex: 2, backgroundColor: 'white' }}>
        <NowPlayingBar />
      </Box>
    </Box>
  </Box>
);

const SectionHeader: FC<{ title: string; actionText: string }> = ({ title, actionText }) => (
  <Box sx={{ display: 'flex', py: 4 }}>
    <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 500, color: '#121212', fontSize: '24px' }}>
      {title}
    </Typography>
    <Box sx={{ flexGrow: 0.96 }} />
    <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 600, color: '#7C74EE', fontSize: '14px', pt: 0.7, cursor: 'pointer' }}>
      {actionText}
    </Typography>
  </Box>
);

export default AppLayout;
