import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  MapPin,
} from "lucide-react";

function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <section className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl p-8 md:p-14 text-white">
          <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Contact GovCareerHub
          </h1>

          <p className="mt-5 max-w-2xl text-blue-100 text-lg">
            Have a question, suggestion, or found an issue?
            We'd love to hear from you.
          </p>
        </section>

        {/* Contact cards */}
        <section className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Mail size={27} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              Email
            </h2>

            <p className="mt-2 text-gray-500">
              Send us your questions or suggestions.
            </p>

            <a
              href="mailto:support@govcareerhub.com"
              className="inline-block mt-4 text-blue-700 font-semibold hover:text-blue-900"
            >
              support@govcareerhub.com
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
              <MessageSquare size={27} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              Suggestions
            </h2>

            <p className="mt-2 text-gray-500">
              Tell us which features you'd like to see on GovCareerHub.
            </p>

            <p className="mt-4 text-green-700 font-semibold">
              Your feedback matters
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <MapPin size={27} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              GovCareerHub
            </h2>

            <p className="mt-2 text-gray-500">
              An online platform created to make government
              career information easier to access.
            </p>
          </div>

        </section>

        {/* Message form */}
        <section className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10">

          <h2 className="text-2xl font-bold text-gray-900">
            Send us a message
          </h2>

          <p className="mt-2 text-gray-500">
            This form is currently for display. We can connect it
            to Supabase later.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been received.");
            }}
            className="mt-8 space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>

              <input
                type="text"
                required
                placeholder="What is your message about?"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>

              <textarea
                required
                rows="6"
                placeholder="Write your message..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>

          </form>

        </section>

      </div>
    </main>
  );
}

export default Contact;