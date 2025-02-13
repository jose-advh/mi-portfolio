import FotoJose from "/imgs/FotoJose.webp";
import Button from "../Button";
import Certifications from "../Certifications";

const Presentacion = () => {
  return (
    <article
      id="presentacion"
      className="z-1 flex flex-col items-start justify-start pt-22 lg:pt-0 lg:justify-center gap-3 h-[75vh] xl:h-[70vh] w-full md:h-fit lg:m-auto"
    >
      <section className="flex items-center gap-5">
        <img
          className="custom-border w-25 lg:w-35"
          src={FotoJose}
          alt="Fotografia de José Díaz"
        />
        <a
          className="text-[15px] text-gray-300 bg-blue-900 py-2 px-1 lg:px-3 rounded-xl shadow-lg shadow-blue-900"
          href="https://www.linkedin.com/in/jos%C3%A9-d%C3%ADaz-3074b9316/"
          target="_blank"
        >
          Disponible para producir
        </a>
      </section>
      <section className="flex flex-col items-start gap-2">
        <h2 className="text-3xl lg:text-5xl text-gray-200 font-bold text-start">
          Hey, soy José Díaz
        </h2>
        <p className="text-[20px] max-w-full lg:text-2xl lg:w-[40rem] text-gray-300 text-start">
          Estudiante de{" "}
          <span className="font-bold text-green-400">
            Ingeniería de Sistemas{" "}
          </span>
          Especializado en crear aplicaciones web con React, Node.js y MongoDB.
        </p>
      </section>
      <section className="flex flex-wrap gap-3">
        <Button
          text="LinkedIn"
          icon="/imgs/icons/linkedin.svg"
          arial="Visitar Linkedin de José Díaz"
          alt="manglayang studio"
          redirect="https://www.linkedin.com/in/jos%C3%A9-d%C3%ADaz-3074b9316/"
          radius="15px"
        />
        <p
          className="text-[15px] text-gray-300 bg-blue-900 py-2 px-2 lg:px-3 rounded-xl"
          href="https://www.linkedin.com/in/jos%C3%A9-d%C3%ADaz-3074b9316/"
        >
          josearmandodiazh3@gmail.com
        </p>
      </section>
    </article>
  );
};

export default Presentacion;
