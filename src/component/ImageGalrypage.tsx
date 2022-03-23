import React, { useEffect, useState } from 'react'
import Header from '../common/header';
import { Button, Divider, Drawer, ImageList, ImageListItem, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material'
import Hook from './hooks';
import styles from '../common/header.module.css'
import { Box, color } from '@mui/system';
import ClipLoader from "react-spinners/ClipLoader";
import { Form } from 'formik';

type Anchor = 'right';

const ImageGalrypage = () => {

  const { getPixabayImages, searchdata } = Hook();
  const [searchFildInput, setsearchFildInput] = useState('')

  const SearchFildHandler = (searchData: any) => {
    setsearchFildInput(searchData);
  };

  type Anchor = 'top' | 'left' | 'bottom' | 'right';


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [sidebarUrl, setSidebarUrl] = useState()
  const toggleDrawer =
    (anchor: Anchor, open: boolean, url? : any) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        console.log(url, "data")
        setSidebarUrl(url);
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1000 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Divider />
      <img src={sidebarUrl}  className={styles.sideBarImage}/>
    </Box>
  );
  return (
    <>
      <div>
        <Header
          input={true}
          onChange={(event: any) => SearchFildHandler(event.target.value)}
          button={true}
          onClick={() => getPixabayImages(searchFildInput)}
        />
      </div>
     
        <div>
          {(['right'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <div className={styles.image_fild}>
                <div className={styles.background_text}><h2>Search Image's</h2></div>
                <ImageList sx={{ height: 1000, overflow: 'hidden' }} cols={5} rowHeight={30} >
                  {searchdata.map((item: any) => (
                    <ImageListItem key={item.id} onClick={toggleDrawer(anchor, true, item.largeImageURL)}>
                      <img src={item.largeImageURL} />
                      {anchor}
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
    </>
  )
}

export default ImageGalrypage