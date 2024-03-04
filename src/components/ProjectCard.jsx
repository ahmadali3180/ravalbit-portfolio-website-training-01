import React from "react";

const ProjectCard = ({ data }) => {
  console.log(data);
  const { name, technologies, url, image } = data;

  return (
    <div className="backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-xl bg-gray-600 px-3 py-6 h-[340px] w-[280px]">
      <a
        className="bg-primary p-1.5 rounded-full w-8 h-8 absolute right-0 mr-3 top-0 mt-3"
        href={url}
        target="_blank"
      >
        <img src="/open.png" alt="open-new-tab" />
      </a>
      <img src={image} alt="project-image" className="w-full h-auto" />
      <div className="flex flex-col gap-4 mt-4 px-2">
        <p className="text-text-primary font-medium text-lg">{name}</p>
        <div className="bg-gradient-to-r from-violet-500 via-blue-400 to-emerald-400 flex flex-col absolute top-56 text-transparent bg-clip-text">
          {technologies.map((tech) => {
            return <p>{tech}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
