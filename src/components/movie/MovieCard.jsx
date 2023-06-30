import React from 'react';

const MovieCard = ({ item }) => {
  const {
    title,
    vote_average,
    release_date,
    poster_path
  } = item
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
      <img src='https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg'
        alt=''
        className='w-full h-[200px] object-cover rounded-lg mb-5' />
      <h3 className='text-lg font-bold mb-3 overflow-hidden overflow-ellipsis '>Spiderman: Homecoming</h3>
      <div className="flex item-center justify-between text-sm opacity-50 mb-5">
        <span>2017</span>
        <span>7.4</span>
      </div>
      <button className='py-3 px-6 rounded-lg capitalize bg-primary w-full'>Watch Now</button>
    </div>
  );
};

export default MovieCard;