import React, {useEffect, useState} from 'react';
import CarList from '../components/CarList';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const startIndex = (currentPage - 1) * 5;

        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=cars&count=100&client_id=`
        );
        const data = await response.json();

        setCars(data.slice(startIndex, startIndex + 5));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCars();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h2 className="home">Welcome to the Cars!</h2>
      <CarList cars={cars}/>
      <div>
        <button className="page-switch-button" onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}>
          Previous Page
        </button>
        <span className="page-number"> Page {currentPage} </span>
        <button className="page-switch-button" onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
      </div>
    </div>
  );
};

export default Home;
