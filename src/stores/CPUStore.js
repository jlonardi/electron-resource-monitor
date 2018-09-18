import Emitter from '../utils/Emitter';

const os = require('os');

class CPUStore extends Emitter {
  constructor() {
    super();

    // this actually sets as the starting value of the store the cpu usage
    // since the last boot, this stuff happens just so that there is some
    // relevant data when the program starts to mesaure the first delta

    const usages = this.delta();
    const usageCPU = usages.map(({ idle, user, system }, i) => {
      const total = ((user + system) / idle) * 100;
      return {
        id: i + 1,
        user: (user / idle) * 100,
        system: (system / idle) * 100,
        idle: 100 - total,
      };
    });

    this.CPUInfo = {
      usageCPU,
    };

    this.init();
  }

  delta() {
    const cpus = os.cpus();

    return cpus.map((cpu) => {
      const { times } = cpu;
      const total = Object.keys(times)
        .filter(time => time !== 'idle')
        .reduce((ticks, time) => ticks + times[time], 0);

      const { user, idle } = times;
      const system = total - user;

      return {
        idle,
        user,
        total,
        system,
      };
    });
  }

  getState() {
    return this.CPUInfo;
  }
  init() {
    let startMeasures = this.delta();

    setInterval(() => {
      const endMeasures = this.delta();
      const usageCPU = endMeasures.map((end, i) => {
        const total = ((end.total - startMeasures[i].total) / (end.idle - startMeasures[i].idle)) * 100;
        const user = ((end.user - startMeasures[i].user) / (end.idle - startMeasures[i].idle)) * 100;
        const system = total - user;
        return {
          id: i + 1,
          total,
          user,
          system,
          idle: 100 - total,
        };
      });

      this.CPUInfo.usageCPU = usageCPU;

      this.emit('change', this.getState());
      // reset
      startMeasures = this.delta();
    }, 2000);
  }
}

export default CPUStore;
