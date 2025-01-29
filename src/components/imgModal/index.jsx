const ImgModal = (props) => {
  return (
    <article>
      {props.modalAbierto && (
        <dialog
          open
          className="z-1 fixed w-[75%] top-45 left-0 right-0 m-auto lg:w-[30%]"
        >
          <figure className="bg-blue-200">
            <img
              className="bg-transparent"
              src="/imgs/certifications/prueba.png"
              alt="Certificado Oracle Next Generaiton"
            />
          </figure>
          <form method="dialog">
            <button onClick={() => props.setModalAbierto(false)}>Cerrar</button>
          </form>
        </dialog>
      )}
    </article>
  );
};

export default ImgModal;
