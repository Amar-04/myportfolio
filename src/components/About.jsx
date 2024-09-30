import React from "react";

const technologies = [
  {
    name: "ReactJS",
    logo: "./react.png",
  },
  {
    name: "Bootstrap",
    logo: "./bootstrap.png",
  },
  {
    name: "Tailwind",
    logo: "./tailwind.png",
  },
  {
    name: "NodeJS",
    logo: "./node.png",
  },
  {
    name: "ExpressJS",
    logo: "./express.png",
  },
  {
    name: "MongoDB",
    logo: "./mongodb.png",
  },
];

const About = () => {
  return (
    <div className="container max-w-5xl mx-auto px-4 text-center my-4" id="about">
      <div className="bg-yellow-50 p-4 rounded-md shadow text-center mb-8">
        <p className="md:text-lg">
          A third year student pursuing Bachelor's in Computer Applications from
          Maharaja Sayajirao University, Vadodara. <br />
          Hands-on experience in creating responsive and dynamic websites.
        </p>
      </div>

      <h1 className="text-3xl font-bold my-10">Technologies</h1>

      <div className="grid grid-cols-2 gap-4 md:px-20 md:flex md:flex-row md:justify-between">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="py-4 px-6 bg-green-50 rounded-md shadow text-center hover:scale-105"
          >
            <img
              src={tech.logo}
              alt={`${tech.name} logo`}
              className="w-12 h-12 mx-auto"
            />
            <h3 className="mt-2 text-gray-700 font-semibold text-sm">
              {tech.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
