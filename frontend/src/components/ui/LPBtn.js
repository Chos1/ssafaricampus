import styles from './LPBtn.module.css';

const LPBtn = (props) => {
  const classes = styles.btn + ' ' + props.className;

  return (
    <button className={classes}>{props.children}</button>
  );
};

export default LPBtn;