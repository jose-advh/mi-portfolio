import Card from "./Cards";

// TO-DO: Realizar view more si hay mas de 4 y en moviles 3.

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-9">
      <h2 className="flex items-start text-gray-300 text-3xl font-bold">
        &lt;<span className="text-green-400">Projects</span>&nbsp;/&gt;
      </h2>
      <article className="flex flex-wrap justify-evenly gap-3">
        <Card
          id="1"
          name="Space App"
          description="A web app that displays information about planets in our solar system"
          image="/imgs/projects/space-app.webp"
          url="https://space-app.com"
          technologies={["React", "JavaScript", "HTML/CSS"]}
        />
        {/* <Card
          id="2"
          name="Simu App"
          description="A web app that displays information about planets in our solar system"
          image="/imgs/projects/simu-app.webp"
          url="https://space-app.com"
          technologies={["NodeJS", "JavaScript", "HTML/CSS"]}
        /> */}
      </article>
    </section>
  );
};

export default Projects;
