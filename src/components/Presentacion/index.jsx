import FotoJose from "/imgs/FotoJose.webp";
import Button from "../Button";

const Presentacion = () => {
  return (
    <article className="flex flex-col items-start justify-center gap-3 h-screen w-full lg:m-auto lg:w-[85%]">
      <section className="flex items-center gap-5">
        <img
          className="rounded-full w-20 lg:w-25"
          src={FotoJose}
          alt="Fotografia de José Díaz"
        />
        <a
          className="text-white bg-blue-900 py-1 px-3 rounded-xl"
          href="https://www.linkedin.com/in/jos%C3%A9-d%C3%ADaz-3074b9316/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar perfil de LinkedIn de José Díaz"
        >
          Disponible para trabajar
        </a>
      </section>
      <section className="flex flex-col items-start gap-2">
        <h2 className="text-3xl text-black font-bold text-start">
          Hey, soy José Díaz
        </h2>
        <p className="text-[20px] max-w-full lg:text-2xl lg:w-[40rem] text-start">
          1 año de experiencia.{" "}
          <span className="font-bold text-purple-900">
            Ingeniero de Sistemas{" "}
          </span>
          Especializado en crear aplicaciones web con React, Node.js y MongoDB.
        </p>
      </section>
      <Button
        text="Contáctame"
        icon="@"
        alt="manglayang studio"
        redirect="https://porfolio.dev/"
        radius="15px"
      />
    </article>
  );
};

export default Presentacion;
