import { Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <main>
      {/* Contact Header */}
      <header className="bg-[#4CAF50] text-[#FFFFFF] py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl">
            We're here to help! Reach out to us with any questions or concerns.
          </p>
        </div>
      </header>

      {/* Contact Content */}
      <main className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-[#4CAF50]">
              Send Us a Message
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#4CAF50] text-white font-bold py-2 px-4 rounded-md hover:bg-[#45a049] transition duration-300 flex items-center"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#4CAF50]">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-[#4CAF50] mr-4" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p>support@foodexpress.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-[#4CAF50] mr-4" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-[#4CAF50] mr-4" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p>123 Food Street, Delivery City, FC 12345</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-[#4CAF50]">
                Office Hours
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">Monday - Friday:</span> 9:00
                  AM - 8:00 PM
                </li>
                <li>
                  <span className="font-semibold">Saturday:</span> 10:00 AM -
                  6:00 PM
                </li>
                <li>
                  <span className="font-semibold">Sunday:</span> Closed
                </li>
              </ul>
            </div>

            {/* FAQ Link */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">
                Have a Question?
              </h3>
              <p className="mb-4">
                Check out our FAQ section for quick answers to common questions.
              </p>
              <a
                href="#"
                className="text-[#4CAF50] font-semibold hover:underline"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};

export default Contact;
