import { useState, useEffect } from "react";
import { User, LogOut } from "lucide-react";
import axios from "axios";

export default function CabsonlineLucideDashboard({ userId, logout }) {
  const [activeTab, setActiveTab] = useState("active");
  const [bookings, setBookings] = useState([]);
  const [history, setHistory] = useState([]);
  const [user, setUser] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    fetchBookings();
    fetchHistory();
    fetchUser();
  }, []);

  const fetchBookings = async () => {
    const res = await axios.get(`/api/bookings/user/${userId}`);
    const upcoming = res.data.filter((b) => new Date(b.bookingTime) > new Date());
    setBookings(upcoming);
  };

  const fetchHistory = async () => {
    const res = await axios.get(`/api/bookings/user/${userId}`);
    const past = res.data.filter((b) => new Date(b.bookingTime) <= new Date());
    setHistory(past);
  };

  const fetchUser = async () => {
    const res = await axios.get(`/api/users/${userId}`);
    setUser(res.data);
  };

  const confirmCancel = (booking) => {
    setSelectedBooking(booking);
    setShowConfirm(true);
  };

  const cancelBooking = async () => {
    if (!selectedBooking) return;
    await axios.delete(`/api/bookings/${selectedBooking.id}`);
    setShowConfirm(false);
    setSelectedBooking(null);
    fetchBookings();
    fetchHistory();
  };

  return (
    <div className="min-h-[85vh] flex bg-gray-100 mt-10">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex flex-col shadow-xl">
        <div className="p-6 flex flex-col items-center border-b border-blue-700">
          <div className="w-20 h-20 rounded-full bg-white overflow-hidden mb-4 shadow">
            <img
              src={`https://ui-avatars.com/api/?name=${user.name}`}
              alt="User Avatar"
            />
          </div>
          <h2 className="font-bold text-xl">{user.name}</h2>
          <p className="text-sm text-blue-200">{user.email}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-8">
          <ul>
            <li>
              <button
                onClick={() => setActiveTab("active")}
                className={`w-full text-left px-6 py-3 transition-colors duration-300 rounded-l-lg flex items-center space-x-2 ${
                  activeTab === "active" ? "bg-blue-800 font-semibold" : "hover:bg-blue-600"
                }`}
              >
                <span>Active Bookings</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("history")}
                className={`w-full text-left px-6 py-3 transition-colors duration-300 rounded-l-lg flex items-center space-x-2 ${
                  activeTab === "history" ? "bg-blue-800 font-semibold" : "hover:bg-blue-600"
                }`}
              >
                <span>Booking History</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Profile & Logout at bottom */}
        <div className="mt-auto border-t border-blue-700 p-6 space-y-3">
          <button
            onClick={() => setActiveTab("profile")}
            className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            <User className="w-5 h-5 text-yellow-400" />
            <span>Profile</span>
          </button>
          <button
            onClick={logout}
            className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-red-600 transition bg-red-500 text-white"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-auto">
        {activeTab === "active" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.length === 0 && (
              <p className="text-gray-500 col-span-full text-lg">
                No active bookings.
              </p>
            )}
            {bookings.map((b) => (
              <div
                key={b.id}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1 relative"
              >
                <div className="mb-3">
                  <p className="font-semibold text-lg text-blue-900">
                    {b.bookingDetails}
                  </p>
                  <p className="text-gray-500">
                    {new Date(b.bookingTime).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => confirmCancel(b)}
                  className="absolute top-5 right-5 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "history" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {history.length === 0 && (
              <p className="text-gray-500 col-span-full text-lg">
                No booking history.
              </p>
            )}
            {history.map((b) => (
              <div
                key={b.id}
                className="bg-gray-50 shadow rounded-xl p-5 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <p className="font-semibold text-blue-900">{b.bookingDetails}</p>
                <p className="text-gray-500">
                  {new Date(b.bookingTime).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "profile" && (
          <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Profile Information
            </h2>
            <p className="mb-2">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        )}
      </main>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-2xl w-96">
            <h2 className="text-xl font-bold text-red-600 mb-4">
              Confirm Cancellation
            </h2>
            <p>Are you sure you want to cancel this booking?</p>
            <p className="mt-2 font-semibold">{selectedBooking.bookingDetails}</p>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                No
              </button>
              <button
                onClick={cancelBooking}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}