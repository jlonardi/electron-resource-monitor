import Emitter from '../utils/Emitter';

const os = require('os');

class MemoryStore extends Emitter {
  constructor(props) {
    super(props);

    this.memoryInfo = {
      used: this.calculateMemoryUsage(),
    };

    this.init();
  }

  getState() {
    return this.memoryInfo;
  }

  init() {
    setInterval(() => {
      this.memoryInfo.used = this.calculateMemoryUsage();
      this.emit('change', this.getState());
    }, 2000);
  }

  calculateMemoryUsage() {
    return 100 - ((os.freemem() / os.totalmem()) * 100); // used memory %
  }
}

export default MemoryStore;
