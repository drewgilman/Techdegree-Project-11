import React from 'react';
import Image from './Image';
import NotFound from './NotFound';

const Gallery = (props) => {

  const results = props.data;
  let images;
  if (results.length > 0) {
    images = results.map(image => {
      //setup variables to construct image URL from the JSON data
      let id = image.id;
      let secret = image.secret;
      let server = image.server;
      let farm = image.farm;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id}/>});
  } else {
    images = <NotFound />
  }

  return(
    <ul>
      {images}
    </ul>
  );
};
export default Gallery;
