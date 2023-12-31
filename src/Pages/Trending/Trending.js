import axios from 'axios'
import React, { useState, useEffect } from 'react'




const Trending = () => {

  const [content, setContent] = useState([]);
  
  const fetchTrending =async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`);

    
    console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div>
        <span className='pageTrend'>Trending</span>
    </div>
  );
};

export default Trending
