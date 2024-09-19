"use client";

import Image from "next/image";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

import dynamic from "next/dynamic";

const InstagramEmbed = dynamic(() => import("./insta-embed"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className="bg-white text-black">
      {/* Jewellery Collection Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-golden">
          Our Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={`/placeholder.svg?height=300&width=400`}
                alt={`Jewellery item ${item}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  Elegant Piece {item}
                </h3>
                <p className="text-gray-600">
                  A stunning addition to your collection
                </p>
                <p className="text-golden font-bold mt-2">$999.99</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Follow Us on Instagram
        </h2>
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <div key={post} className="relative aspect-square">
              <Image
                src={`/placeholder.svg?height=200&width=200`}
                alt={`Instagram post ${post}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Instagram className="text-white h-8 w-8" />
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex gap-6">
          <InstagramEmbed postUrl="https://www.instagram.com/p/DAD5Nt1PT0N/" />
          <InstagramEmbed postUrl="https://www.instagram.com/p/CurEdujvuJf" />
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-golden">
          Visit Our Store
        </h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.5085836031394!2d81.03556047472532!3d21.09228068057296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a29450b9f635e17%3A0x2a6910925cf0e4!2sNirankari%20Jewellers!5e0!3m2!1sen!2sin!4v1726744812591!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.5085836031394!2d81.03556047472532!3d21.09228068057296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a29450b9f635e17%3A0x2a6910925cf0e4!2sNirankari%20Jewellers!5e0!3m2!1sen!2sin!4v1726744812591!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-golden font-semibold text-lg mb-4">About Us</h3>
            <p className="text-gray-300">
              We are passionate about creating exquisite jewellery pieces that
              capture the essence of beauty and elegance.
            </p>
          </div>
          <div>
            <h3 className="text-golden font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-golden" />
                <span>
                  NIrankari Jewellers, Opp. Jain Mandir, Ganj Line, Rajnandgaon,
                  Chhattisgarh 491441
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-golden" />
                <span>+91 9172770899, &nbsp;</span>
                <span>+91 9827108111</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-golden" />
                <span>jewellersnirankari@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-golden font-semibold text-lg mb-4">
              Broadcast
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our whatsapp broadcast for the latest updates and
              offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-golden"
              />
              <button
                type="submit"
                className="bg-golden text-black px-4 py-2 rounded-r-md hover:bg-yellow-500 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Nirankari Jewellers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
