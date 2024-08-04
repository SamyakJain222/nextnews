import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <footer className={styles["Footer-bg"]} style={{backgroundImage: `url(${props.themePath})`}}>
      <h3>© 2024 Next, Inc</h3>
    </footer>
  );
}

export default Footer;
