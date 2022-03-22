import React, { useState } from "react";

function Hook() {
  
  const API_KEY = "26246238-50f1e0cba6f9b9f8362e54889";
  const URL = "https://pixabay.com/api/"
  
  const getPixabayImages = (searchData: string) => {

    if (searchData) {

      const requestValues: object = {
        method: "GET",
        Headers: {
          "Content-Type": "application/json",
          // Authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzk2ZWNmNmIzMWUzNTdkNDVkNjIyNCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjQ3OTMxNDMwLCJleHAiOjE2NDgwMTc4MzB9.BkQKCFDVzrGsGb8wOkneDFwt7e7tR0J3znZ3dtj94PY"
        },
      };
      let url: string = `${URL}?key=${API_KEY}&q=${searchData}&image_type=photo&per_page=20`;
     const result = fetch(url, requestValues)
        .then((result:any) => {
          return result.json()
        })
        .then((result:any) => {
           console.log(result.hits);
        })
        .catch((err:any) =>{
          console.log(err , "error")
        }
        );
    }
  };
  return {getPixabayImages};
}

export default Hook;