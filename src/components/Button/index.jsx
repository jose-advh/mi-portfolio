const Button = (props) => {
  const { text, icon, redirect, radius } = props;

  return (
    <a
      className="flex gap-2 bg-blue-900 p-2 text-white"
      style={{ borderRadius: radius }}
      href="#"
    >
      <img src="/imgs/icons/email.svg" className="w-[20px]" alt="" />
      {text}
    </a>
  );
};

export default Button;
