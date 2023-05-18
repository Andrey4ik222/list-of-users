import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./Albums.css";

function Albums() {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        setIsLoading(false);
      });
  }, [userId]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="albums-wrapper">
        <h2 className="title">Albums</h2>
        <div className="info-wrapper">
          {albums.map((album) => (
            <div className="album-info" key={album.id}>
              <h3 className="album-title">Album {album.id}</h3>
              <p className="album-description">{album.title}</p>
              <p>{album.albumId}</p>
              <button>
                <Link to={`/photo/${album.id}`}>Photo</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Albums;
