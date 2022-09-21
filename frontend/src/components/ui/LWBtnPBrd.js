import styles from './LWBtnBrd.module.css';

const LWBtnBrd = (props) => {
  const classes = styles.LPBtn + ' ' + props.className;

  return (
    <button className={classes} onClick={props.onClick}>{props.children}</button>
  );
};

export default LWBtnBrd;