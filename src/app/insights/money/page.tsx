"use client"; // only for Next.js App Router projects

import React from "react";
import { FaComment } from "react-icons/fa";

const Money = () => {
  const articles = [
    {
      title: "Stripe is building a new",
      description:
        "James Layfield needed to solve a big problem, so he did it manually, then built an AI tool to do the heavy lifting. Now, his tool has a 7-figure ARR.",
      author: "James Fleischmann",
      date: "May 29, 2025",
      comments: 80,
      image: "money.jpg", // ensure it's in `public/images/`
    },
    {
      title: "Anthropic just launched Claude 4, the new state-of-the-art in AI coding",
      description:
        "The new models can work on complex coding tasks for hours and alternate between reasoning and using tools.",
      author: "Channing Allen",
      date: "May 22, 2025",
      comments: 73,
      image: "claude.jpg",
    },
    {
      title: "Anthropic just launched Claude 4, the new state-of-the-art in AI coding",
      description:
        "The new models can work on complex coding tasks for hours and alternate between reasoning and using tools.",
      author: "Channing Allen",
      date: "May 22, 2025",
      comments: 73,
      image: "claude.jpg",
    },
    {
      title: "Anthropic just launched Claude 4, the new state-of-the-art in AI coding",
      description:
        "The new models can work on complex coding tasks for hours and alternate between reasoning and using tools.",
      author: "Channing Allen",
      date: "May 22, 2025",
      comments: 73,
      image: "claude.jpg",
    },
    {
      title: "Anthropic just launched Claude 4, the new state-of-the-art in AI coding",
      description:
        "The new models can work on complex coding tasks for hours and alternate between reasoning and using tools.",
      author: "Channing Allen",
      date: "May 22, 2025",
      comments: 73,
      image: "claude.jpg",
    },
  ];

  return (
    <section className="bg-white text-black px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mt-20 mb-9">Money</h1>

        <p className="text-lg md:text-2xl mb-16 text-gray-700">
          How are other entrepreneurs doing financially? If that question interests you, you've come to the right place. This is your definitive resource for stories and breakdowns on how much money people are spending, earning, saving, and investing as they run their businesses — along with the strategies behind those decisions. Updated frequently.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-6">Latest Articles</h2>

        <div className="space-y-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center border-t border-[#204061] py-6 px-2"
            >
              {/* Date */}
              <div className="flex flex-col items-start min-w-[120px] mr-7">
                <span className="text-gray-700 text-xs md:text-lg">
                  {article.date}
                </span>
              </div>

              {/* Main Content */}
              <div className="flex flex-col justify-center flex-grow max-w-[60%] min-w-0">
                <h3 className="text-base md:text-2xl font-semibold text-black hover:underline cursor-pointer leading-snug mb-4">
                  {article.title}
                  {idx === 0 && (
                    <span className="ml-1 text-green-400 align-super text-base" title="Featured">
                      &#x2B50;
                    </span>
                  )}
                </h3>
                <p className="text-gray-700 text-xs md:text-xl mb-6 leading-snug">
                  {article.description}
                </p>
                <div className="flex items-center text-gray-700 text-xs md:text-sm gap-2">
                  <span>
                    by{" "}
                    <span className="hover:underline cursor-pointer text-base">
                      {article.author}
                    </span>
                  </span>
                  <FaComment className="ml-2" />
                  <span>{article.comments}</span>
                </div>
              </div>

              {/* Image */}
              <div className="ml-4 flex-shrink-0 w-24 h-20 md:w-32 md:h-24 rounded overflow-hidden flex items-center justify-center">
                <img
                  src={`/images/${article.image}`} // works in Next.js public folder
                  alt={article.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Money;
