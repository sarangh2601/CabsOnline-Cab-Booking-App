import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SelectCar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { bookingData } = location.state || {};

  const cars = [
    {
      id: 1,
      name: "Hatchback",
      type: "4 seater AC Cab",
      price: 1366,
      extra: "+ ₹499 Charges and Taxes",
      rating: "4.7",
      kms: "63 kms included | Post limit: ₹15/km",
      img: "WagonR-Img.png",
    },
    {
      id: 2,
      name: "Sedan",
      type: "4 seater AC Cab",
      price: 1402,
      extra: "+ ₹501 Charges and Taxes",
      rating: "4.7",
      kms: "63 kms included | Post limit: ₹15/km",
      img: "sadan.png",
    },
    {
      id: 3,
      name: "SUV",
      type: "4 seater AC Cab",
      price: 2016,
      extra: "+ ₹647 Charges and Taxes",
      rating: "4.7",
      kms: "63 kms included | Post limit: ₹16.5/km",
      img: "SUV.png",
    },
  ];

  if (!bookingData) {
    return (
      <div className="text-center mt-20">
        <p>No booking data found.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleSelectCar = (car) => {
    navigate("/confirm-booking", {
      state: {
        bookingData,
        selectedCar: car,
      },
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-6 mt-15 mb-10">
      
      {/* Booking Info */}
      <div className="bg-gray-100 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-lg font-semibold">
          {bookingData.tripType === "local"
            ? bookingData.city
            : `${bookingData.pickupLocation} - ${bookingData.dropoffLocation}`}
        </h2>

        <div className="text-sm text-gray-600 flex flex-wrap gap-4 mt-2 sm:mt-0">
          <span>Trip: <b>{bookingData.tripType}</b></span>
          <span>Date: <b>{bookingData.date}</b></span>

          {bookingData.tripType === "round" && (
            <span>Return: <b>{bookingData.returnDate}</b></span>
          )}

          <span>Time: <b>{bookingData.time}</b></span>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 underline text-sm"
        >
          ← Go Back
        </button>
      </div>

      {/* Car List */}
      <div className="space-y-4">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl shadow-md border flex flex-col sm:flex-row items-center justify-between p-4"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img src={car.img} alt={car.name} className="w-40 object-contain" />
              <div>
                <h3 className="font-semibold text-lg">
                  {car.name}{" "}
                  <span className="text-yellow-500 text-sm">★ {car.rating}</span>
                </h3>
                <p className="text-gray-500 text-sm">{car.type}</p>
                <p className="text-gray-500 text-sm mt-1">{car.kms}</p>
              </div>
            </div>

            <div className="text-right mt-4 sm:mt-0">
              <p className="text-2xl font-bold text-blue-600">₹{car.price}</p>
              <p className="text-xs text-gray-500">{car.extra}</p>
              <button
                onClick={() => handleSelectCar(car)}
                className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
              >
                SELECT CAR
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCar;