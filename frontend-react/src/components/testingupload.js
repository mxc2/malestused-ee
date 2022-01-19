import React, { Component, useEffect, useState } from 'react';

import UploadComponent from './file-upload';

function Testingupload(){
  
  const [loadedPosts, setLoadedPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postLength, setPostLength] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8081/endpoint').then(res => {
        return res.json();
    }).then((data) => {
        setIsLoading(false);
        setLoadedPost(data);
    });
  },[postLength]);


console.log(loadedPosts)

if(isLoading){
  return(
      <div>Loading...</div>
  );
}


return (
  <div className="upload">
    <UploadComponent />
      <img src={loadedPosts.posts[0].imgCollection} />
  </div>
      
);
}


export default Testingupload;