import React, { Component } from 'react';
import { Card } from 'antd';

import styles from './WarpWidget.less';

function HOCFactoryFactory(params) {
  const { title = '' } = params;
  // 可以做一些改变 params 的事
  return function HOCFactory(WrappedComponent) {
    return class HOC extends Component {
      render() {
        return (
          <div className={styles.wrapperComponent}>
            <Card title={title}>
              <WrappedComponent
                ref={(wrappedPageRef) => {
                  this.wrappedPageRef = wrappedPageRef;
                }}
                {...this.props}
              />
            </Card>
          </div>
        );
      }
    };
  };
}

export default HOCFactoryFactory;
