import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import ThumbNail from "../components/thumbnail/thumbnail";

export default function Home() {
  return (
    <div>
        <ThumbNail />
      <main className={styles.main}>
        <InstructionsComponent />
      </main>
    </div>
  );
}
