import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

type StarRatingProps = {
  averageRating: number;
};

function StarRating({ averageRating }: StarRatingProps) {
  const totalStars = 5;
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating - fullStars >= 0.5;

  const renderStar = (index: number) => {
    if (index < fullStars) {
      return <FaStar key={index} />;
    } else if (hasHalfStar && index === fullStars) {
      return <FaStarHalfStroke key={index} />;
    } else {
      return <FaRegStar key={index} />;
    }
  };

  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => renderStar(index))}
    </div>
  );
}

export default StarRating;
