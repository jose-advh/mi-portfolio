import ImgModal from "../imgModal";

const Certifications = (props) => {
  return (
    <article className="w-full">
      {/* TO-DO: BACKGROUND  */}
      {/* <div className="z-1 fixed top-0 w-full bg-black/50 h-screen"></div> */}
      <section className="flex flex-wrap gap-4 justify-evenly items-center w-[100%] m-auto lg:m-0 lg:w-[70%]">
        <img
          onClick={props.abrirModal}
          src="/imgs/certifications/prueba.png"
          alt="Certificado oracle"
          className="w-40 cursor-pointer"
        />
        <img
          onClick={props.abrirModal}
          src="/imgs/certifications/prueba.png"
          alt="Certificado oracle"
          className="w-40 cursor-pointer"
        />
        <img
          onClick={props.abrirModal}
          src="/imgs/certifications/prueba.png"
          alt="Certificado oracle"
          className="w-40 cursor-pointer"
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
