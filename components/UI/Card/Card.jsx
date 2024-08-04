import styles from "./Card.module.css";

function Card(props) {
  return (
    <div
      className={styles["card"]}
      style={{ backgroundImage: `url(${props.themePath})` }}
    >
      <a href={props.artLink} target="_blank" rel="noopener noreferrer">
        <h2>{props.artHeadline}</h2>
        <img src={props.artImg} alt="Article Photo" />
        <p>{props.artDesc}</p>
        <p>Read more...</p>
      </a>
    </div>
  );
}

export default Card;
