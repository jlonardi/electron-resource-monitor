import React from 'react';
import PropTypes from 'prop-types';
import bindStores from '../utils/StoreBinder';
import Panel from './Panel';
import CPU from './CPU';
import styles from './css/CPUMonitor.scss';

const CPUMonitor = ({ usageCPU }) => (
  <Panel label="CPU:">
    <div className={styles.content}>
      {usageCPU.map(cpu => (
        <CPU key={cpu.id} {...cpu} />
      ))}
    </div>
  </Panel>
);

CPUMonitor.propTypes = {
  usageCPU: PropTypes.arrayOf(
    PropTypes.shape({
      usage: PropTypes.number,
      user: PropTypes.number,
      id: PropTypes.number,
      system: PropTypes.number,
      idle: PropTypes.number,
    }),
  ).isRequired,
};

export default bindStores(['CPUStore'], CPUMonitor, ({ CPUStore: { usageCPU } }) => ({ usageCPU }));
