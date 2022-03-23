import React, { useEffect, useState } from 'react'
import Header from '../common/header';
import { ImageList, ImageListItem } from '@mui/material'
import Hook from './hooks';
import styles from '../common/header.module.css'
import { color } from '@mui/system';
import ClipLoader from "react-spinners/ClipLoader";

const ImageGalrypage = () => {

  // const [loader, setloader] = useState(false);
  const { getPixabayImages, searchdata } = Hook();
  const [searchFildInput, setsearchFildInput] = useState('')

  const SearchFildHandler = (searchData: any) => {
    setsearchFildInput(searchData);
  };

  // useEffect(() => {
  //   setloader(true);
  //   setTimeout(()=>{
  //     setloader(false);
  //   },8000)
  // }, []);

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
      <div className={styles.image_fild}>
        <div className={styles.background_text}><h2>Search Image's</h2></div>
        
         <ImageList sx={{ height: 1000, overflow: 'hidden' }} cols={5} rowHeight={30}>
         {searchdata.map((item: any) => (
           <ImageListItem 
           key={item.id}>
             <img src={item.largeImageURL}/>
           </ImageListItem>
         ))}
       </ImageList>
       
      </div>
    </>
  )
}

export default ImageGalrypage
