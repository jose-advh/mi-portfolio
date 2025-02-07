import Card from "./Cards";
import Title from "../Title";

// TO-DO: Realizar view more si hay mas de 4 y en moviles 3.

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-9">
      <Title title="Projects" />
      <article className="flex flex-wrap justify-evenly gap-3">
        <Card
          id="3"
          name="Simu Icfes"
          description="A web to take mock exams for the Saber 11 test administered in Colombia."
          image="/imgs/projects/simu-app.webp"
          code="https://github.com/jose-advh/simu_app"
          technologies={["React", "JavaScript", "HTML/CSS"]}
        />
        <Card
          id="2"
          name="Petshop"
          description="A web that offers information and resources about pets, including care tips"
          image="/imgs/projects/petshop.webp"
          url="https://petshop-pi-blue.vercel.app/"
          code="https://github.com/jose-advh/petshop"
          technologies={["React", "JavaScript", "HTML/CSS"]}
        />
        <Card
          id="1"
          name="Space App"
          description="A web app that displays information about planets in our solar system"
          image="/imgs/projects/space-app.webp"
          url="https://space-app-one-zeta.vercel.app/"
          code="https://github.com/jose-advh/space-app"
          technologies={["React", "JavaScript", "HTML/CSS"]}
        />
      </article>
    </section>
  );
};

export default Projects;
