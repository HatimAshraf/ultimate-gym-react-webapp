const Button = (props) => {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className='px-8 py-4 rounded-md border-[2px] border-emerald-600 border-solid emeraldShadow duration-200 mx-auto'
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
