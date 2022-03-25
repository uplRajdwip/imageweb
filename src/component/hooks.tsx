import React, { useState } from "react";

function Hook() {
  const [searchdata, setSearchData]: any = useState([]);
  const [errorFound, setErrorFound]: any = useState([]);
  const [loader, seatLoader]: any = useState(false);

  const API_KEY = "26246238-50f1e0cba6f9b9f8362e54889";
  const URL = "https://pixabay.com/api/"

  const getPixabayImages = (searchData: string) => {

    if (searchData) {
      seatLoader(true)
      const requestValues: object = {
        method: "GET",
        Headers: {
          "Content-Type": "application/json",
          // Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzk2ZWNmNmIzMWUzNTdkNDVkNjIyNCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjQ3OTMxNDMwLCJleHAiOjE2NDgwMTc4MzB9.BkQKCFDVzrGsGb8wOkneDFwt7e7tR0J3znZ3dtj94PY"
        },
      };
      let url: string = `${URL}?key=${API_KEY}&q=${searchData}&image_type=photo&per_page=40&safesearch=true`;


      const result = fetch(url, requestValues)
        .then((result: any) => {
          return result.json()
        })
        .then((result: any) => {


          // console.log(result,'result is found');
          seatLoader(false)
          if (result.hits.length > 0) {
            // console.log('empty')
            setSearchData(result.hits);
            setErrorFound('')
          }
          else {
            setErrorFound('your search - ' + searchData + ' - did not match any image.');
          }
        })
        .catch((err: any) => {
          // console.log(err, "error")
        }
        );
    } else ((err: any) => {
      // console.log(err, 'notfund')
    })
  };
  return { getPixabayImages, searchdata, errorFound, loader };
}

export default Hook;