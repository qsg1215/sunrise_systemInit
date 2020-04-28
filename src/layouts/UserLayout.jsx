import { HelmetProvider } from 'react-helmet-async';
import { Link, connect } from 'umi';
import React from 'react';
// import SelectLang from '@/components/SelectLang';
import logo from '../assets/logo.svg';
import styles from './UserLayout.less';

const UserLayout = (props) => {
  const {
    children,
  } = props;
  return (
    <HelmetProvider>
      <div className={styles.container}>
    
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>成都旸谷科技</span>
              </Link>
            </div>
            <div className={styles.desc}>成都旸谷科技业务系统初始化平台</div>
          </div>
          {children}
        </div>
       
      </div>
    </HelmetProvider>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
