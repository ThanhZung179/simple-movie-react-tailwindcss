import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import useSWR from 'swr';
import { fetcher } from '../../config';



const MovieList = () => {

  const [movies, setMovies] = useState([])

  const { data, error, isLoading } = useSWR('https://api.themoviedb.org/3/movie/now_playing?api_key=f71a7f1f53eebc0f8297601ef788b7c1', fetcher)

  useEffect(() => {
    if (data && data.results) setMovies(data.results)
  }, [data])

  console.log(movies)

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={'auto'}>
        {movies.length > 0 && 
        movies.map((item) => (
          <SwiperSlide key= {item.id}>
            <MovieCard item= {item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;