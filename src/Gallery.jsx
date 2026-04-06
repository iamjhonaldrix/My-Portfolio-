function Gallery() {
const images = ["img1.JPG", "img2.JPG", "img3.JPG", "img4.JPG", "img5.JPG", "img6.JPG", "img7.JPG"];

    return (
        <>
        <div className="see2">
           <a href="#">View All &gt;</a>
        </div>
        <div className="myGallery">
            {images.map((img, index) => (
        <div className="photos" key={index}>
          <img src={`/image/${img}`} alt={img} />
        </div>
      ))}
        </div>
    </>
  );
}

export default Gallery