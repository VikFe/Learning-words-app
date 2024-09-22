import "../Card/Card.css";
function Card({
  id,
  english,
  transcription,
  russian,
  tags,
  tags_json,
  boolean,
}) {
  return (
    <div className="card">
      <h3>{english}</h3>
      <p>{transcription}</p>
      <p>{russian}</p>
    </div>
  );
}

export default Card;
