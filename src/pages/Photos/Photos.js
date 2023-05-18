import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Photo.css";

function Photos() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setIsLoading(false);
      });
  }, [albumId]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      {photos.map((photo) => (
        <div className="photo-wrapper" key={photo.id}>
          <img className="photo-img" src={photo.thumbnailUrl} alt="Photo" />
          <p className="photo-title">{photo.title}</p>
        </div>
      ))}
    </div>
  );
}
export default Photos;
