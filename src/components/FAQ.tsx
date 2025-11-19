import React from "react";

const faqItems = [
  { q: "Frequently asked question number 1", a: "Answer to the question" },
  { q: "Frequently asked question number 4", a: "Answer to the question" },
  { q: "Frequently asked question number 2", a: "Answer to the question" },
  { q: "Frequently asked question number 5", a: "Answer to the question" },
  { q: "Frequently asked question number 3", a: "Answer to the question" },
  { q: "Frequently asked question number 6", a: "Answer to the question" },
];

const FAQ = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {faqItems.map((item, index) => (
          <div key={index} className="space-y-1">
            <p className="text-base font-semibold text-white">Q: {item.q}</p>
            <p className="text-sm text-white">A: {item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
