import ImgModal from "../imgModal";

const Certifications = (props) => {
  return (
    <article>
      <section className="flex flex-wrap justify-evenly items-center w-[100%] m-auto lg:m-0 lg:w-[70%]">
        <img
          onClick={props.abrirModal}
          src="/imgs/certifications/prueba.png"
          alt="Certificado oracle"
          className="w-35 lg:w-65"
        />
        <img
          onClick={props.abrirModal}
          src="/imgs/certifications/prueba.png"
          alt="Certificado oracle"
          className="rounded w-35 lg:w-65"
        />
        <img
          onClick={props.abrirModal}
          src="/imgs/certifications/prueba.png"
          alt="Certificado oracle"
          className="rounded w-35 lg:w-65"
        />
      </section>
      <ImgModal
        modalAbierto={props.modalAbierto}
        setModalAbierto={props.setModalAbierto}
      />
    </article>
  );
};

export default Certifications;
