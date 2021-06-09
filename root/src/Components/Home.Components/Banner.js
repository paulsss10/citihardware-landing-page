import React, { useState } from "react";
import ico_HAUSMANN from '../../Resources/images/ico_HAUSMANN.png';
import ico_NUVOGRES from '../../Resources/images/ico_NUVOGRES.png';
import ico_LAFONZA from '../../Resources/images/ico_LA FONZA.png';
import ico_NZWOOD from '../../Resources/images/ico_NZ WOOD.png';
import ico_BOSTONBAY from '../../Resources/images/ico_BOSTONBAY.png';
import ico_BOYSEN from '../../Resources/images/ico_BOUSEN.png';
import ico_DUMA from '../../Resources/images/ico_DUMA.png';
import Carousel from 'react-elastic-carousel';
import '../../Styles/Components/Banner.css';



const Banner = () => {
  const [images, setImages] = useState([
    {id: 'hm', imageSrc: ico_HAUSMANN},
    {id: 'ng', imageSrc: ico_NUVOGRES},
    {id: 'lz', imageSrc: ico_LAFONZA},
    {id: 'nz', imageSrc: ico_NZWOOD},
    {id: 'bb', imageSrc: ico_BOSTONBAY},
    {id: 'bs', imageSrc: ico_BOYSEN},
    {id: 'dm', imageSrc: ico_DUMA}
  ])

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
  ]

   
  return (
    <section className="banner_container">
      <figure className="banner_figure"></figure>
      <div className="brand_carousel">
      <Carousel breakPoints={breakPoints} easing='ease' enableAutoPlay={true} loop={true}>
        {images.map(image => <img src={image.imageSrc} id={image.id} className="img_carousel" />)}
      </Carousel>
      </div>
    </section>
  );
};

export default Banner;
