import React from "react";

export default function SectionTitle({ children }) {
  return (
    <h2 className="relative text-2xl sm:text-3xl font-semibold text-brand text-center mt-6 mb-8">
      {children}
      <span className="block mx-auto mt-3 h-[3px] w-16 bg-brand" />
    </h2>
  );
}
