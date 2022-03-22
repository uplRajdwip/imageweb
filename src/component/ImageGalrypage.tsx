import React, { useEffect, useState } from 'react'
import Header from '../common/header';
import Hooks from './hooks'

const ImageGalrypage = () => {

  const { getPixabayImages } = Hooks();
  
  const [searchFildInput, setsearchFildInput] = useState('')

    const SearchFildHandler = (searchData: any) => {
        setsearchFildInput(searchData);
    };
       
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
    <div  id='demo'>
    </div>
    </>
  )
}

export default ImageGalrypage
