import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './index.css';
import Searchbar from './Searchbar';
import { Row, Pagination, Button } from 'antd';

function Home() {
  const [movies, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState();
  const [ganre, setGanre] = useState();
  const [curPage, setCurPage] = useState();

  useEffect(() => {
    let completed = false;
    const getMovies = async title => {
      const response = await axios.get('http://localhost:4000/movies', {
        params: { title, ganre },
      });
      if (!completed) {
        setMovie(response.data.slice(4 * (curPage - 1), 4 * curPage));
        setIsLoading(false);
      }
    };
    getMovies(inputValue);
    return () => (completed = true);
  }, [inputValue, ganre, curPage]);

  return (
    <section className="container">
      <Row>
        <Searchbar onSearch={setInputValue} filterGanre={setGanre} />
        <Button
          className="add-movies"
          size="large"
          style={{
            backgroundColor: '#c5d2ec',
            borderRadius: '20px',
            fontWeight: 'bold',
          }}
        >
          Add new movie
        </Button>
      </Row>
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...🎬</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => {
            return <Movie key={movie.id} {...movie} />;
          })}
        </div>
      )}
      <Pagination defaultCurrent={1} total={50} onChange={setCurPage} />
    </section>
  );
}

export default Home;
