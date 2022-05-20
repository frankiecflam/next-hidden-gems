import styles from "./index.module.css";
import { useRouter } from "next/router";
import GemmerHeader from "../../../components/Gemmer/GemmerHeader";

const DUMMY_DATA = [
  {
    id: "12",
    username: "frankielam",
    bio: "A web developer passionate for building things from the scratch",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    gems: [],
    collection: [],
    following: [],
    followers: [],
  },
];

const GemmerDetails = () => {
  const { gemmerID } = useRouter().query;

  return (
    <section className={styles.gemmer}>
      <GemmerHeader gemmer={DUMMY_DATA[0]} />
    </section>
  );
};

export default GemmerDetails;
