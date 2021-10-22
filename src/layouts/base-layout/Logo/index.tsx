import React from "react";
import { Link } from "umi";
import styles from "./index.less";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link className={styles.link} to="/">
        兼容性审核认证系统
      </Link>
    </div>
  );
}

export default Logo;
