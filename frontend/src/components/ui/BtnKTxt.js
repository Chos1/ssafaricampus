import styles from './BtnKTxt.module.css';

const BtnKTxt = (props) => {
  const classes = styles.LPBtn + ' ' + props.className;

  return (
    <button className={classes} onClick={props.onClick}>{props.children}</button>
  );
};

export default BtnKTxt;