import { FaStar } from 'react-icons/fa'; // Assuming you're using the react-icons library for stars

function OpinionCard(props) {
  // Assuming props include fullName, profession, and starRating (a number from 1 to 5)
  const { fullName, profession, starRating } = props;

  // Function to generate star icons based on the starRating prop
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < starRating ? 'text-yellow-400' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="opinion-card bg-gray-800 p-4 rounded-lg shadow-md">
      <p className="text-sm  text-white">{profession}</p>
      <h3 className="text-lg text-white font-semibold">{fullName}</h3>
      <div className="flex items-center mt-2">{renderStars()}</div>
    </div>
  );
}

export default OpinionCard;
