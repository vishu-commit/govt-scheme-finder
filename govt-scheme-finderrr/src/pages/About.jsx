import {
  FaReact,
  FaSearch,
  FaHeart,
  FaMobileAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-slate-100 min-h-screen py-12">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-emerald-700">
          About Government Scheme Finder
        </h1>

        <p className="text-center text-slate-600 mt-5 text-lg max-w-3xl mx-auto">
          Government Scheme Finder is a React-based web application
          that helps users search and explore different government
          schemes in one place.
        </p>

        {/* Features */}
        <div className="mt-16">

          <h2 className="text-3xl font-bold text-center mb-10">
            Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">

              <FaSearch className="text-5xl text-emerald-600 mx-auto mb-4" />

              <h3 className="text-xl font-bold">
                Smart Search
              </h3>

              <p className="mt-3 text-slate-600">
                Search schemes quickly using keywords.
              </p>

            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">

              <FaHeart className="text-5xl text-pink-500 mx-auto mb-4" />

              <h3 className="text-xl font-bold">
                Favorites
              </h3>

              <p className="mt-3 text-slate-600">
                Save your favorite government schemes.
              </p>

            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">

              <FaMobileAlt className="text-5xl text-blue-500 mx-auto mb-4" />

              <h3 className="text-xl font-bold">
                Responsive
              </h3>

              <p className="mt-3 text-slate-600">
                Works smoothly on desktop, tablet and mobile.
              </p>

            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">

              <FaReact className="text-5xl text-cyan-500 mx-auto mb-4" />

              <h3 className="text-xl font-bold">
                React Project
              </h3>

              <p className="mt-3 text-slate-600">
                Developed using React, Tailwind CSS and React Router.
              </p>

            </div>

          </div>

        </div>

        {/* Technologies */}
        <div className="mt-20 bg-white rounded-2xl shadow-md p-10">

          <h2 className="text-3xl font-bold mb-6">
            Technologies Used
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li>React JS</li>
            <li>React Router DOM</li>
            <li>Tailwind CSS</li>
            <li>React Icons</li>
            <li>Context API</li>
            <li>Local Storage</li>
          </ul>

        </div>

      </div>

    </div>
  );
};

export default About;