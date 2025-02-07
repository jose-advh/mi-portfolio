const ImgModal = (props) => {
  return (
    <article>
      {props.modalAbierto && (
        <dialog
          open
          className="z-1 fixed w-[75%] top-0 bottom-0 left-0 right-0 m-auto lg:w-[40%]"
        >
          <figure className="bg-blue-200">
            <img
              className="bg-transparent"
              src="/imgs/certifications/certificado-oracle-alura.webp"
              alt="Certificado Oracle Next Generaiton"
            />
          </figure>
          <form method="dialog">
            <button
              className="fixed top-[38%] right-[15%] lg:top-[20%] lg:right-[31%] bg-black/50 p-2 rounded-xl"
              onClick={() => props.setModalAbierto(false)}
            >
              <img
                className="cursor-pointer"
                src="/imgs/icons/cerrar.png"
                alt="Cerrar"
              />
            </button>
          </form>
        </dialog>
      )}
    </article>
  );
};

export default ImgModal;
