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
          description="Ofrece simulacros interactivos que ayudan a la familiarización del estudiante con la prueba Saber 11"
          image="/imgs/projects/simu-app.webp"
          code="https://github.com/jose-advh/simu_app"
          technologies={["React", "JavaScript", "HTML/CSS"]}
        />
        <Card
          id="2"
          name="Petshop"
          description="Ofrece información sobre el cuidado de los perros y también consejos sobre estos"
          image="/imgs/projects/petshop.webp"
          url="https://petshop-pi-blue.vercel.app/"
          code="https://github.com/jose-advh/petshop"
          technologies={["React", "JavaScript", "HTML/CSS"]}
        />
        <Card
          id="1"
          name="Space App"
          description="Una galeria que muestra imagenes sobre el espacio, universos, estrellas etc..."
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
