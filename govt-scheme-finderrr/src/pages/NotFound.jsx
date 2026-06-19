import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="text-center">

        <FaExclamationTriangle className="text-7xl text-red-500 mx-auto mb-6" />

        <h1 className="text-7xl font-bold text-slate-800">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-slate-600 mt-4 max-w-md">
          Sorry! The page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition"
        >
          Go Back Home
        </Link>

      </div>

    </div>
  );
};

export default NotFound;