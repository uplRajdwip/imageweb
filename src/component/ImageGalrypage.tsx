import React, { useEffect, useState } from 'react'
import Header from '../common/header';
import { Divider, Drawer, ImageList, ImageListItem } from '@mui/material'
import Hook from './hooks';
import styles from '../common/header.module.css'
import { Box } from '@mui/system';
import Image from 'next/image';
import Loader from 'react-spinners/ClipLoader';
// import UrlImageDownloader from 'react-url-image-downloader';
type Anchor = 'right';

const ImageGalrypage = () => {

  const { getPixabayImages, searchdata, errorFound, loader } = Hook();
  const [searchFildInput, setsearchFildInput] = useState('')
  // const [Download, setDownload] = useState('')
  // console.log(searchFildInput ,'dfghg');

  const SearchFildHandler = (searchData: any) => {
    setsearchFildInput(searchData);
    // console.log(searchData)
  };

  useEffect(() => {
    // console.log(errorFound, 'loading');
  }, [errorFound])

  type Anchor = 'top' | 'left' | 'bottom' | 'right';


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [sidebarUrl, setSidebarUrl] = useState()
  const toggleDrawer =
    (anchor: Anchor, open: boolean, url?: any) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        // console.log(url, "data")
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

      // const DoDownload = () => {
      //   setDownload(searchdata);
      // }

  const refreshPage = () => {
    window.location.reload();
  }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Divider />
      <div>
        <div className={styles.close_image}>
       <Image src='/Image/close.png' className={styles.close_image_cls} height={50} width={50} />
        </div>
         <img src={sidebarUrl} className={styles.sideBarImage} />
      </div>
    </Box>
  );
  return (
    <>
      <div>
        <Header
          logo={true}
          input={true}
          onChange={(event: any) => SearchFildHandler(event.target.value)}
          Searchbutton={true}
          onClickSearch={() => getPixabayImages(searchFildInput)}
          onKeyPress={(e: any) => { e.key === 'Enter' && getPixabayImages(searchFildInput) }}
          Refreshbutton={true}
          onClickRefresh={refreshPage}
        />

      </div>
      {loader === true ?
        <Loader />
        :
        <div className={styles.fullBackground} >
          {(['right'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <div className={styles.image_fild}>
                <div className={styles.background_text}><h2>Search Image</h2></div>
                {errorFound === '' ?
                  (<ImageList sx={{ height: 1000, overflow: 'hidden' }} cols={5} rowHeight={40} >
                    {searchdata.map((item: any) => (
                      <ImageListItem key={item.id} onClick={toggleDrawer(anchor, true, item.largeImageURL)}>
                       <img src={item.largeImageURL} />
                      
                      
                        {anchor}
                      </ImageListItem>
                    ))}
                  </ImageList>)
                  :
                  <div className={styles.errMsg}>{errorFound}</div>
                }
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
        </div>}
    </>
  )
}

export default ImageGalrypage