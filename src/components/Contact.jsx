import React from "react";
import SectionTitle from "./SectionTitle";
import { INFO } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section container">
      <SectionTitle>Contact</SectionTitle>
      <div className="grid place-items-center">
        <form
          className="w-full max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! This demo form is not wired to Google Sheets yet.");
          }}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded border border-[hsl(224_56%_12%)] font-semibold mb-4"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded border border-[hsl(224_56%_12%)] font-semibold mb-4"
            required
          />
          <textarea
            rows={6}
            placeholder="Message"
            className="w-full p-3 rounded border border-[hsl(224_56%_12%)] font-semibold mb-4"
            required
          />
          <button className="ml-auto block bg-brand text-white px-6 py-3 rounded font-semibold">
            Send
          </button>
        </form>

        <div className="mt-6 space-y-2 text-center">
          <p><b>Email:</b> {INFO.email}</p>
          <p><b>Phone:</b> {INFO.phone}</p>
          <p><b>Location:</b> {INFO.location}</p>
        </div>
      </div>
    </section>
  );
}
