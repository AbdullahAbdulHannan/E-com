import React from "react";
import { Zoom } from "react-slideshow-image";
// import image1 from "./images/slide_1.jpg";
// import image2 from "./images/slide_2.jpg";
// import image3 from "./images/slide_3.jpg";
// import image4 from "./images/slide_4.jpg";
// import image5 from "./images/slide_5.jpg";
// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";

const zoomOutProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const  Slideshow = ({image1,image2,image3,image4}) => {
  const images = [image1, image2, image3, image4];
  return (
    <div className="slide-container md:w-[24%] w-[85%]">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} className="w-[100%] m-14 " src={each} />
        ))}
      </Zoom>
    </div>
  );
};
export default Slideshow
// function App() {
//   return (
//     <div className="App">
//       <Slideshow />
//     </div>
//   );
// }

// export default App;
