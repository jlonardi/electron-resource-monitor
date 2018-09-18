import React from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';
import bindStores from '../utils/StoreBinder';
import styles from './css/memoryMonitor.scss';

const MemoryMonitor = ({ MemoryStore: { used } }) => (
  <Panel label="Memory:">
    <div className={styles.bar}>
      <div className={styles.progress} style={{ width: `${used}%` }} />
    </div>
  </Panel>
);

MemoryMonitor.propTypes = {
  MemoryStore: PropTypes.shape({
    used: PropTypes.number,
  }),
};

export default bindStores(['MemoryStore'], MemoryMonitor);
