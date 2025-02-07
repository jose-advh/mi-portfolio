import Title from "../Title";

const Aboutme = () => {
  return (
    <section
      id="aboutme"
      className="z-1 flex flex-col justify-center items-start gap-10 lg:pt-12"
    >
      <Title title="About-me" />
      <article className="flex flex-col items-center lg:flex-row justify-between text-start w-[100%] lg:w-[90%] m-auto text-white gap-5">
        <section className="flex flex-col pt-3 lg:pt-0 text-[17px] lg:order-1 order-2 gap-4 w-[100%] lg:w-[70%] text-white">
          <p>
            Mi nombre es José Armando Díaz Hérnandez, decidí estudiar la carrera
            de{" "}
            <span className="text-green-400 font-bold">
              Ingenieria en Sistemas
            </span>{" "}
            cuando le activé el Bluetooth a mi padre y me dijo que me metería a
            un curso de Informatica.
          </p>
          <p>
            A lo largo de mi formación,{" "}
            <span className="text-green-400 font-bold">
              he realizado varios proyectos
            </span>{" "}
            que me han permitido desarrollar habilidades técnicas, blandas y
            creativas. He trabajado en el diseño e implementación de
            aplicaciones web y móviles, utilizando tecnologías como{" "}
            <span className="text-green-400 font-bold">
              React, Node.js, y bases de datos SQL
            </span>
            .
          </p>
          <p>
            Me gusta estar en lugares donde pueda explotar mi creatividad,
            siempre busco ir por más y no me conformo con lo mínimo.{" "}
            <span className="text-green-400 font-bold">
              Disfruto enfrentándome a nuevos desafíos
            </span>{" "}
            que me permitan aprender y crecer tanto profesional como
            personalmente.
          </p>
        </section>
        <img
          src="/imgs/FotoJose.webp"
          alt="Fotografia de José Díaz"
          className="w-50 rounded border-6 border-blue-800 transition duration-500-ease rotate-5 hover:rotate-0 order-1"
        />
      </article>
    </section>
  );
};

export default Aboutme;
