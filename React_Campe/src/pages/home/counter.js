import React, { useState, useEffect } from 'react';

function CounterComponent() {
  const [boatCount, setBoatCount] = useState(0);
  const [locationCount, setLocationCount] = useState(0);
  const [showroomCount, setShowroomCount] = useState(0);
  const [professionalCount, setProfessionalCount] = useState(0);

 
  const animateCounters = () => {
    const targetBoatCount = 1500;
    const targetLocationCount = 5;
    const targetShowroomCount = 1000;
    const targetProfessionalCount = 4000;

    let boatCounter = 0;
    let locationCounter = 0;
    let showroomCounter = 0;
    let professionalCounter = 0;

    const interval = setInterval(() => {
      if (boatCounter < targetBoatCount) {
        boatCounter += 50; 
        setBoatCount(boatCounter);
      }
      if (locationCounter < targetLocationCount) {
        locationCounter += 50;
        setLocationCount(locationCounter);
      }
      if (showroomCounter < targetShowroomCount) {
        showroomCounter += 30; 
        setShowroomCount(showroomCounter);
      }
      if (professionalCounter < targetProfessionalCount) {
        professionalCounter += 100;
        setProfessionalCount(professionalCounter);
      }
    }, 50);

    if (
      boatCounter >= targetBoatCount &&
      locationCounter >= targetLocationCount &&
      showroomCounter >= targetShowroomCount &&
      professionalCounter >= targetProfessionalCount
    ) {
      clearInterval(interval);
    }
  };


  useEffect(() => {
    animateCounters();
  }, []);

  return (
    <div className="icon-block-center icon-center-v2 bg-primary">
      <div className="container text-center space-1">
        <div className="row">
          <div className="col-md-3">
            <i className="flaticon-node text-white font-size-80 mb-3"></i>
            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
              {boatCount}
            </h5>
            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
            Number of Licensed Yachting Professionals
            </p>
          </div>

          <div className="col-md-3">
            <i className="flaticon-cardinal-points text-white font-size-80 mb-3"></i>
            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
              {locationCount}
            </h5>
            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
            The count of places providing these services
            </p>
          </div>

          <div className="col-md-3">
            <i className="flaticon-anchor text-white font-size-80 mb-3"></i>
            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
              {showroomCount}
            </h5>
            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
            Number of yachats
            </p>
          </div>

          <div className="col-md-3">
            <i className="flaticon-star text-white font-size-80 mb-3"></i>
            <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
              {professionalCount}
            </h5>
            <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
            Customer satisfied
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterComponent;

