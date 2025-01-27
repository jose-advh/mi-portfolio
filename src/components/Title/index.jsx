const Title = (props) => {
  const { title } = props;

  return (
    <h2 className="flex items-start text-gray-300 text-3xl font-bold">
      &lt;<span className="text-green-400">{title}</span>&nbsp;/&gt;
    </h2>
  );
};

export default Title;
