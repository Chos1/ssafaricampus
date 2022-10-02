import styles from "./Loading.module.css";
import { Ring } from "@uiball/loaders";

const Loading = (props) => {
  const classes = styles.Loading + " " + props.className;
  return (
    <div className={classes}>
      <Ring size={90} lineWeight={7} speed={1.5} color="#5d33e6" />
    </div>
  );
};

export default Loading;
