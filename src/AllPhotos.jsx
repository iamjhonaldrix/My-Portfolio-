import { Link } from "react-router-dom";

function AllPhotos() {
  const images = [
    "img1.JPG",
    "img2.JPG",
    "img3.JPG",
    "img5.JPG",
    "img6.JPG",
    "img7.JPG",
    "img8.JPG",
  ];

  return (
    <div className="techStackPage">
      <div className="techStackCard">

        <div className="terminalBar">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <p>gallery@system: ~/all-photos</p>
        </div>

        <div className="techStackContent">

          <p className="techTitle">All Photos</p>

          <div className="myGallery">
            {images.map((img, index) => (
              <div className="photos" key={`${img}-${index}`}>
                <img
                  src={`/image/photos/${img}`}
                  alt={`photo-${index}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <Link to="/" className="cdCmd">
            cd ..
          </Link>

        </div>
      </div>
    </div>
  );
}

export default  AllPhotos;