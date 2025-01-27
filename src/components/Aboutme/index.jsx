import Title from "../Title";

const Aboutme = () => {
  return (
    <section className="flex flex-col items-start">
      <Title title="About-me" />
      <article className="flex justify-evenly items-center text-white">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          quod saepe ipsum aliquam omnis, voluptatibus vel deleniti repellat
          quis architecto dolor blanditiis dolorem, doloremque cumque veniam id
          fugit. Ea, est.
        </p>
        <img
          src="/imgs/FotoJose.webp"
          alt="Fotografia de José Díaz"
          className="w-25"
        />
      </article>
    </section>
  );
};

export default Aboutme;
