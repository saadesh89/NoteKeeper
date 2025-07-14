import Notes from "@/components/notes/Notes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Notes />
    </div>
  );
}
