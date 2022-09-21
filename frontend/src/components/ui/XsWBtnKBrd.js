import styles from './XsWBtnKBrd.module.css';
const XsWBtnKBrd = (props) => {
  const classes = styles.SWBtnPBrd + ' ' + props.className;
  return (
    <button className={classes} onClick={props.onClick}>{props.children}</button>
  );
};

export default XsWBtnKBrd;