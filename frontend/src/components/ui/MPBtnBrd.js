import styles from './MPBtnBrd.module.css';
const MPBtn = (props) => {
  const classes = styles.MPBtnBrd + ' ' + props.className;
  return (
    <button className={classes}>{props.children}</button>
  );
};

export default MPBtn;

