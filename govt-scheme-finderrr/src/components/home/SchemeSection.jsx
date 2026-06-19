import SchemeCard from "./SchemeCard";

const SchemeSection = ({ schemes }) => {
  return (
    <section className="bg-gradient-to-b from-pink-50 via-rose-50 to-slate-100 py-20 mt-12 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-pink-600 font-semibold tracking-widest uppercase">
            Government Welfare
          </p>

          <h2 className="text-5xl font-extrabold text-slate-800 mt-2">
            Popular Government Schemes
          </h2>

          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full mt-4"></div>

          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            Browse and discover the latest government schemes for
            Students, Farmers, Women, Senior Citizens, Businesses,
            Health and many more.
          </p>

        </div>

        {/* Scheme Count */}
        <div className="text-center mb-12">

          <span className="inline-block bg-white border border-pink-200 shadow-md px-6 py-3 rounded-full text-gray-700 font-medium">
            📋 Showing{" "}
            <span className="text-pink-600 font-bold">
              {schemes.length}
            </span>{" "}
            Government Schemes
          </span>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {schemes.length > 0 ? (
            schemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">

              <h2 className="text-3xl font-bold text-red-500">
                😔 No Scheme Found
              </h2>

              <p className="text-gray-600 mt-3">
                Try searching with another keyword or choose a different category.
              </p>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default SchemeSection;