const Button = (props) => {
  const { text, icon, redirect, radius, arial } = props;
  return (
    <a
      className="flex items-center gap-2 bg-blue-900 w-fit py-2 px-4 text-white"
      style={{ borderRadius: radius }}
      href={redirect}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={arial}
    >
      <img src={icon} className="w-[24px]" alt="Icono" />
      {text}
    </a>
  );
};

export default Button;
