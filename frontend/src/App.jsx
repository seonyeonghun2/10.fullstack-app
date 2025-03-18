import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Form, Badge } from 'react-bootstrap';
function MyForm() {
  return (
    <Container>
      <Form>
        <input type="text" />
        <input type="submit" value="검색" />
      </Form>
    </Container>
  );
}
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/movies');
        // const data = await response.json();
        // console.log(response);
        // console.log(response.data); //
        setMovies(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getMovies();
  }, []);

  if (!movies) {
    return <div>loading.....</div>;
  }
  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <div key={movie._id} className="col-sm-12 col-md-6 col-xl-3">
            <div className="mw-100">
              {movie.poster && <img src={movie.poster} alt={movie.title} className="img-fluid" />}
              {!movie.poster && (
                <img src="https://picsum.photos/500" alt={movie.title} className="img-fluid" />
              )}
            </div>
            <div className="d-flex gap-1 my-1 h-20">
              <Badge>제목</Badge>
              <p>{movie.title}</p>
            </div>
            <div className="d-flex gap-1">
              <Badge>개봉일</Badge>
              <p>{movie.year}</p>
            </div>
            <div className="d-flex gap1 my-1">
              <Badge>출연진</Badge>
              <p>
                {movie.cast.map((actor, i) => (
                  <span key={i}>{actor}</span>
                ))}
              </p>
            </div>
            <div className="d-flex gap-1">
              <Badge>감독</Badge>
              <p>{movie.directors}</p>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default App;
