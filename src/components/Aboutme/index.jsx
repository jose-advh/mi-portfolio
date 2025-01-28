import Title from "../Title";

const Aboutme = () => {
  return (
    <section
      id="aboutme"
      className="flex flex-col justify-center items-start gap-10 pt-15 lg:pt-12"
    >
      <Title title="About-me" />
      <article className="flex flex-col items-center lg:flex-row justify-between text-start w-[100%] lg:w-[90%] m-auto text-white gap-5">
        <section className="flex flex-col pt-3 lg:pt-0 text-[17px] lg:order-1 order-2 gap-4 w-[100%] lg:w-[70%] text-gray-200">
          <p className="rounded px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quod saepe{" "}
            <span className="text-green-400">ipsum aliquam omnis</span>,
            voluptatibus vel deleniti repellat quis architecto dolor blanditiis
            dolorem, doloremque cumque veniam id fugit.
          </p>
          <p className="rounded px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quod saepe ipsum aliquam omnis,{" "}
            <span className="text-green-400">voluptatibus</span>, vel deleniti
            repellat quis architecto dolor blanditiis dolorem, doloremque cumque
            veniam id fugit.
          </p>
          <p className="rounded px-5">
            Lorem ipsum dolor sit amet{" "}
            <span className="text-green-400">consectetur adipisicing</span>{" "}
            elit. Consequuntur quod saepe ipsum aliquam omnis, voluptatibus vel
            deleniti repellat quis architecto dolor blanditiis dolorem,
            doloremque cumque veniam id fugit.
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
