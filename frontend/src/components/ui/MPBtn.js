import styles from './MPBtn.module.css';
const MPBtn = (props) => {
  const classes = styles.MPBtn + ' ' + props.className;
  return (
    <button className={classes}>{props.children}</button>
  );
};

export default MPBtn;

