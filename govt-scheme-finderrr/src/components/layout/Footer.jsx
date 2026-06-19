import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLandmark,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>

            <div className="flex items-center gap-2">

              <FaLandmark className="text-3xl text-emerald-400" />

              <h2 className="text-2xl font-bold">
                Govt Scheme Finder
              </h2>

            </div>

            <p className="mt-5 text-slate-300 leading-7">
              Government Scheme Finder helps citizens easily
              discover schemes related to education, farming,
              women empowerment, business, healthcare and
              senior citizens.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h2 className="text-2xl font-bold mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3 text-slate-300">

              <li>🏠 Home</li>

              <li>❤️ Favorites</li>

              <li>ℹ️ About</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h2 className="text-2xl font-bold mb-5">
              Contact
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>govtschemefinder@gmail.com</span>
              </div>

              <a
                 href="https://github.com/vishu-commit"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-3 hover:text-emerald-400 transition"
               >
                 <FaGithub />
                 <span>GitHub</span>
              </a>

               <a
                  href="https://www.linkedin.com/in/vishu-rajput-9321b8358/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-emerald-400 transition"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
               </a>

            </div>

          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <p className="text-center text-slate-400">
  © {new Date().getFullYear()} Government Scheme Finder. All Rights Reserved.
</p>

        <p className="text-center text-slate-500 mt-3">
          Designed & Developed using React + Tailwind CSS
        </p>

      </div>

    </footer>
  );
};

export default Footer;