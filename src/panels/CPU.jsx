import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import styles from './css/CPU.scss';

class CPU extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  draw() {
    const { system, user, idle } = this.props;

    this.chart = new Chart(this.ref.current, { // eslint-disable-line
      type: 'doughnut',
      data: {
        datasets: [{
          data: [system, user, idle],
          backgroundColor: ['#ff6483', '#36a2eb', 'white'],
          borderWidth: [1, 1, 1],
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          enabled: false,
        },
        animation: {
          animateRotate: false,
          animateScale: false,
        },
      },
    });
  }
  render() {
    return (
      <div className={styles.container} >
        <canvas ref={this.ref} style={{ width: '120px', height: '60px' }} />
      </div>
    );
  }
}

CPU.defaultProps = {
  system: 0,
  user: 0,
  idle: 100,
};

CPU.propTypes = {
  system: PropTypes.number,
  user: PropTypes.number,
  idle: PropTypes.number,
};

export default CPU;
