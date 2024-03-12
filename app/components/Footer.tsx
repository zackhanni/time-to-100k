import Link from "next/link";
import React from "react";

const externalLinks = [
  {
    name: "link 1",
    link: "/",
  },
  {
    name: "link 2",
    link: "/",
  },
  {
    name: "link 3",
    link: "/",
  },
  {
    name: "link 4",
    link: "/",
  },
];

export default function Footer() {
  return (
    <section className="py-16 text-white bg-gray-700 flex flex-col items-center space-y-8">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl max-w-xs">
          Interested in learning more about personal finance?
        </h2>
        <div className="flex flex-col">
          {externalLinks.map((link) => {
            return (
              <Link
                href={link.link}
                key={link.name}
                className="hover:underline"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <Link href="https://www.zachary.works/" className="hover:underline ">
        Website created by Zack Hanni. Click to see more.
      </Link>
    </section>
  );
}
