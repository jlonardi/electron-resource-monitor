import React from 'react';
import CPUMonitor from './CPUMonitor';
import MemoryMonitor from './MemoryMonitor';
import styles from './css/mainPanel.scss';

const MainPanel = () => (
  <div className={styles.container}>
    <CPUMonitor />
    <MemoryMonitor />
  </div>
);

export default MainPanel;
