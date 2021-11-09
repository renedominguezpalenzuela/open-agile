import styles from "../styles/Home.module.css";

//Dibuja un area sombreada a la izquierda

export default function LeftColumnColor() {
  return (
<>

<div className="d-none d-xl-block">
  <div className={styles.left_column_color}></div>
  </div>
</>
  );
}
