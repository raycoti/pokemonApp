import React from "react";
import styles from "./sticky.module.css";

const Sticky: React.FC = ({
  children
}) => {
  return (
    <div className={styles.sticky}>
      {children}
    </div>
  )
}

export default Sticky;
