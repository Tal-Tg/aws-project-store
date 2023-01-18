import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function CarusellaRelevent() {
  return (
    // <div></div>
    <Carousel variant="dark">
      <Carousel.Item>
      <img className="d-block w-100" src="https://img.ltwebstatic.com/images3_ach/2022/12/12/16708284723eab0db65565f68087468e691c61ba0e_thumbnail_1920x.webp" width="100%" height="100%" alt="First slide" />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" alt="Second slide" src="https://img.ltwebstatic.com/images3_ach/2022/12/17/1671255443326c8de5df0ba6fcc198dcfa29966d7c_thumbnail_1920x.webp" width="100%" height="100%" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://img.ltwebstatic.com/images3_ach/2022/12/28/1672213157593686fbc8acb2668738a3dc5ab60f0a_thumbnail_1920x.webp" width="100%" height="100%" alt="Third slide"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://img.ltwebstatic.com/images3_ach/2022/11/29/16697081860a25f82bd4ed5601be5e7da4f8a90379.gif" width="100%" height="100%" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarusellaRelevent;

// import React from "react";
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import testPhoto from './testPhoto.jpg'
// import {CarusellaGrid,CarusellaGridItem,CarusellaGridItemWrapper,CarusellaItemImageDiv,CarusellaItemImage,CarusellaHeader,CarusellaText,
//     CarusellaLink} from './CarusellaElements'

// const CarusellaCommercial = () =>{
//     return(
//         <div style={{width:"100%" ,height:"20px", }} >
//             <Carousel >
//                 <CarusellaGrid>
//                     <img src="https://img.ltwebstatic.com/images3_ach/2022/12/12/16708284723eab0db65565f68087468e691c61ba0e_thumbnail_1920x.webp" width="100%" height="100%" alt="" />
//                 </CarusellaGrid>
//                 <CarusellaGrid>
//                 <img src="https://img.ltwebstatic.com/images3_ach/2022/12/17/1671255443326c8de5df0ba6fcc198dcfa29966d7c_thumbnail_1920x.webp" width="100%" height="100%" alt="" />
//                 </CarusellaGrid>
//                 <CarusellaGrid>
//                 <img src="https://img.ltwebstatic.com/images3_ach/2022/12/28/1672213157593686fbc8acb2668738a3dc5ab60f0a_thumbnail_1920x.webp" width="100%" height="100%" alt="" />
//                 </CarusellaGrid>
//                 <CarusellaGrid>
//                 <img src="https://img.ltwebstatic.com/images3_ach/2022/11/29/16697081860a25f82bd4ed5601be5e7da4f8a90379.gif" width="100%" height="100%" alt="" />
//                 </CarusellaGrid>
//             </Carousel>
//         </div>
//     )
// }

//                 {/* <div>
//                     <img src={testPhoto}  width="100%" height="100%" />
//                     <p className="legend">Legend 2</p>

//                 </div> */}

// export default CarusellaCommercial