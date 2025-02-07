import Button from "../../Button";

const Card = (props) => {
  return (
    <article className="z-1 flex relative flex-col items-center gap-3 shadow-lg shadow-blue-900 rounded-xl bg-gray-800/50 text-gray-300 w-80 lg:w-100">
      <div className="z-2 absolute h-full w-full border border-red-900 bg-black/30 blur-xl"></div>
      <figure className="z-3">
        <img
          src={props.image}
          alt={props.name}
          className="rounded-xl hover:scale-101 hover:border transition duration-200 ease-in border-blue-900"
        />
      </figure>
      <header className="z-3 font-bold text-2xl">
        <h2>{props.name}</h2>
      </header>
      <section className="z-3 px-2">
        <p>{props.description}</p>
      </section>
      <footer className="z-3 flex gap-2 justify-start items-start w-70 py-3 lg:gap-3 lg:w-90 lg:py-2">
        <Button
          text="Repositorio"
          icon="/imgs/icons/github.svg"
          redirect={props.code}
          radius="20px"
          arial="Visitar repositorio del proyecto icono atribuido a Icons8"
        />
        <Button
          text="Demo"
          icon="/imgs/icons/open.svg"
          redirect={props.url}
          radius="20px"
          arial="Visitar el proyecto icono atribuido a Icons8"
        />
      </footer>
    </article>
  );
};

export default Card;

// const projects = [
//   {
//     id: 1,
//     name: "Space App",
//     description:
//       "Space App es una plataforma interactiva diseñada para los entusiastas del espacio, estudiantes y cualquier persona curiosa por descubrir los misterios del universo.",
//     image: "https://i.imgur.com/8Q6Q6Q6Q6Q",
//     url: "https://space-app.com",
//     technologies: ["React"],
//   },
