import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaGlobe } from "react-icons/fa";
import schemes from "../data/schemes";

const SchemeDetails = () => {
  const { id } = useParams();

  const scheme = schemes.find((item) => item.id === Number(id));

  if (!scheme) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold text-red-500">
          Scheme Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="bg-slate-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        {/* Category */}
        <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
          {scheme.category}
        </span>

        {/* Title */}
        <h1 className="text-5xl font-bold text-emerald-700 mt-5">
          {scheme.title}
        </h1>

        {/* Description */}
        <p className="text-slate-600 mt-6 text-lg leading-8">
          {scheme.description}
        </p>

        {/* Eligibility */}
        <div className="mt-8 bg-blue-50 rounded-xl p-5">
          <h2 className="text-2xl font-bold mb-3">
            Eligibility
          </h2>

          <p className="text-slate-700">
            {scheme.eligibility}
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-8 bg-emerald-50 rounded-xl p-5">
          <h2 className="text-2xl font-bold mb-3">
            Benefits
          </h2>

          <p className="text-slate-700">
            {scheme.benefit}
          </p>
        </div>

        {/* Documents */}
        <div className="mt-8 bg-yellow-50 rounded-xl p-5">
          <h2 className="text-2xl font-bold mb-3">
            Required Documents
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {scheme.documents?.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">

          <a
            href={scheme.officialWebsite}
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            <FaGlobe />
            Official Website
          </a>

          <Link
            to="/"
            className="border border-slate-400 hover:bg-slate-100 px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

        </div>

      </div>
    </section>
  );
};

export default SchemeDetails;