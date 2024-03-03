import React, { useState } from "react";
import Button from "./Button";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedId, setSelectedId] = useState("1");

  const toggleSelect = (e) => {
    setSelectedId(e.currentTarget.id);
  };

  return (
    <section
      className="flex justify-between xl:justify-around mt-16 xs:px-16 xxs:px-8 md:px-24 xxs:py-24 bg-projects-texture"
      id="ptojects"
    >
      <div className="flex flex-col gap-6 w-full xl:w-full z-10">
        <div>
          <h2 className="flex items-end xl:text-5xl text-4xl font-bold text-text-primary">
            My
            <span className="text-primary">&nbsp;projects.</span>
          </h2>
        </div>
        <div className="flex gap-4 w-full text-nowrap xxs:text-xs xs:text-base my-2">
          <Button
            id={"1"}
            title={"All"}
            type={selectedId === "1" ? "primary" : "secondary"}
            onClick={toggleSelect}
          />
          <Button
            onClick={toggleSelect}
            title={"UI"}
            id={"2"}
            type={selectedId === "2" ? "primary" : "secondary"}
          />
          <Button
            onClick={toggleSelect}
            title={"UX"}
            id={"3"}
            type={selectedId === "3" ? "primary" : "secondary"}
          />
          <Button
            onClick={toggleSelect}
            title={"Web Design"}
            id={"4"}
            type={selectedId === "4" ? "primary" : "secondary"}
          />
        </div>
        <div className="grid xxs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full justify-evenly items-center mx-auto mt-20">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
