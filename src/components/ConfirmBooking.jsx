import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function ConfirmBooking() {
  const { state } = useLocation();
  const [paymentMethod, setPaymentMethod] = useState('upi');

  if (!state) return <div>No Booking Found</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">

        {/* LEFT → BOOKING SUMMARY */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Booking Summary</h2>

          <p><b>Trip:</b> {state.tripType}</p>
          <p><b>From:</b> {state.pickupLocation}</p>
          <p><b>To:</b> {state.dropoffLocation}</p>
          {state.city && <p><b>City:</b> {state.city}</p>}
          <p><b>Date:</b> {state.date}</p>
          {state.returnDate && <p><b>Return:</b> {state.returnDate}</p>}
          <p><b>Time:</b> {state.time}</p>
          <p><b>Car:</b> {state.carType}</p>
        </div>

        {/* RIGHT → PAYMENT SECTION */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-yellow-600">Payment</h2>

          <div className="space-y-4">
            <label className="flex gap-3">
              <input
                type="radio"
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
              />
              UPI
            </label>

            <label className="flex gap-3">
              <input
                type="radio"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              />
              Credit / Debit Card
            </label>

            <label className="flex gap-3">
              <input
                type="radio"
                checked={paymentMethod === 'cash'}
                onChange={() => setPaymentMethod('cash')}
              />
              Cash
            </label>
          </div>

          <button className="mt-8 w-full py-4 bg-gradient-to-r from-blue-600 to-yellow-600 text-white rounded-xl font-bold">
            Pay & Confirm Booking
          </button>
        </div>

      </div>
    </div>
  );
}