import { Link } from "react-router-dom";

function Gallery() {
  const images = [
    "img1.JPG",
    "img2.JPG",
    "img3.JPG",
    "img4.JPG",
    "img5.JPG",
    "img6.JPG",
    "img7.JPG",
    "img8.JPG",
  
  ];

  return (
    <>
      <div className="see2">
        <Link to="/photos">View All &gt;</Link>
      </div>

      <div className="myGallery">
        {images.map((img, index) => (
          <div className="photos" key={`${img}-${index}`}>
            <img
              src={`/image/photos/${img}`}
              alt={`gallery-${index}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;