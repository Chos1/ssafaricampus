import styles from './SWBtnPBrd.module.css';
const SWBtnPBrd = (props) => {
  const classes = styles.SWBtnPBrd + ' ' + props.className;
  return (
    <button className={classes}>{props.children}</button>
  );
};

export default SWBtnPBrd;