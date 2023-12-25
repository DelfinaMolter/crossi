import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './board.css';

export default function MasonryImageList() {
  return (
    <Box className="img-list" sx={{ maxWidth: 1150, width: '100%', height: 'auto', overflow: 'hidden' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '/1-board.png',
    title: 'Crossi Güemes',
  },
  {
    img: '/2-board.png',
    title: 'Crossi Güemes',
  },
  {
    img: '/3-board.png',
    title: 'Crossi Güemes',
  },
  {
    img: '/4-board.png',
    title: 'Crossi Consti',
  },
  {
    img: '/5-board.png',
    title: 'Crossi Consti',
  },
  {
    img: '/6-board.png',
    title: 'Crossi Consti',
  }
];

// xs, extra-small: 0px carousel sin margin
// sm, small: 600px 
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px