import starimage from "../images/star-image.png";
import filledimage from "../images/filled-star-image.png";

const Star = (props) => {
  let starIcon = props.isFilled ? filledimage : starimage;
  return (
    <div>
      <button
      onClick={props.handleClick}
        aria-pressed={props.IsFilled}
        aria-label={
          props.isFilled ? "Remove from favourites" : "Add to favourites"
        }
      >
        <img
          className="w-8 mb-5"
          src={starIcon}
          alt={props.isFilled ? "filledimage" : "starimage"}
        />
      </button>
    </div>
  );
};

export default Star;
