import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Category() {
  const navigate = useNavigate();
  const [yachtCounts, setYachtCounts] = useState({});
  const categoryIds = [1, 2, 3, 4];

  // Define image URLs, destination names, and corresponding images for each category
  const categoryData = {
    1: { name: 'Aqaba', image: 'url(https://traveler.marriott.com/wp-content/uploads/2023/03/aqaba-jordan-1288858945.jpg)' },
    2: { name: 'Abu Dhabi', image: 'url(https://a.cdn-hotels.com/gdcs/production62/d281/a24b4a56-8273-41a9-b9db-09d6b33fdb4e.jpg?impolicy=fcrop&w=800&h=533&q=medium)' },
    3: { name: 'Miami', image: 'url(https://www.worldatlas.com/upload/df/29/12/shutterstock-490898872.jpg)' },
    4: { name: 'Bodrum', image: 'url(https://a.cdn-hotels.com/gdcs/production198/d1616/28d46508-b839-4fb6-8da8-637f84bf71fd.jpg)' },
  };

  const handleButtonClick = (id) => {
    navigate(`/yachts/${id}`);
  };

  useEffect(() => {
    axios
      .get('https://651db05044e393af2d5a346e.mockapi.io/yachts')
      .then((response) => {
        const data = response.data;
        const counts = {};

        categoryIds.forEach((categoryId) => {
          const yachtsRelatedToCategory = data.filter((yacht) => yacht.category_id === categoryId);
          counts[categoryId] = yachtsRelatedToCategory.length;
        });

        setYachtCounts(counts);
      });
  }, []);

  return (
    <div className="destination-block destination-v5 border-bottom border-color-8">
      <div className="container space-1">
        <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mt-3">
          <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Our Destinations</h2>
        </div>
        <div className="row">
          {categoryIds.map((categoryId) => (
            <div className="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1" key={categoryId}>
              <div
                className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2"
              
                style={{ backgroundImage: categoryData[categoryId].image }}
                onClick={() => handleButtonClick(categoryId)}
              >
                <header className="w-100 d-flex justify-content-between mb-3">
                  <div>
                    <div className="pb-3 text-lh-1">
                      <a
                        className="text-white font-weight-bold font-size-21"
                        onClick={() => handleButtonClick(categoryId)}
                      >
                        {categoryData[categoryId].name}
                      </a>
                    </div>
                    <div className="d-inline-flex px-3 py-1 rounded-pill bg-white">
                      <button
                        className="font-size-15"
                        style={{ border: 'none', backgroundColor: 'white' }}
                        onClick={() => handleButtonClick(categoryId)}
                      >
                        {yachtCounts[categoryId]} Yachts
                      </button>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
