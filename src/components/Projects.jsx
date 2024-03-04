import React, { useState } from "react";
import Button from "./Button";
import ProjectCard from "./ProjectCard";
import projects from "../assets/projects.json";

const Projects = () => {
  const [selectedId, setSelectedId] = useState("1");

  const toggleSelect = (e) => {
    setSelectedId(e.currentTarget.id);
  };

  return (
    <section
      className="flex justify-between xl:justify-around mt-16 xs:px-16 xxs:px-8 md:px-24 xxs:py-24 bg-projects-texture 2xl:bg-none"
      id="ptojects"
    >
      <div className="flex flex-col gap-6 w-full">
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
        <div className="flex xxs:flex-col sm:flex-row justify-evenly gap-6 sm:mt-32 w-full xxs:mt-20 2xl:scale-125 items-center">
          {projects.map((item) => (
            <ProjectCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
