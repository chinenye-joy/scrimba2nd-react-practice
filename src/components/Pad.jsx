const Pad = (props) => {
  return (
    <div>
      <button
       style={{backgroundColor: props.color}}
        className="h-20 w-20 rounded-full cursor-pointer opacity-20 border border-red-400"
          classnam={props.on ? "on" : ""}
      >

      </button>
    </div>
  );
};

export default Pad;
