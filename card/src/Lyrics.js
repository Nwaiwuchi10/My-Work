import axios from "axios";
import React, { useEffect, useState } from "react";
import * as ReactBootstrap from "react-bootstrap";

const Lyrics = () => {
  const [lyricsitem, setLyricsitem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    lyricsFunction();
  }, []);

  const lyricsFunction = async () => {
    try {
      const res = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res);
          setLyricsitem(res.data.lyrics);
        });
      setLoading(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      {loading ? lyricsitem : <ReactBootstrap.Spinner animation="border" />}
    </div>
  );
};

export default Lyrics;
