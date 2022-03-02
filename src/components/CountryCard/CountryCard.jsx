import styles from "./CountryCard.module.css";

export default function CountryCard({ title, image, link, ...props }) {
  return (
    <div {...props} className={styles.container}>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <a href={link} target="_blank" rel="noreferrer">
        About {title}
      </a>
    </div>
  );
}
