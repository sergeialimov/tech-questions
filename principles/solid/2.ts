interface IRunner {
  run(): void;
}

class AsafaPowell implements IRunner {
  run(): void {
    console.log('9.78s');
  }
}

class Runner {
  private runnerClass: IRunner;

  constructor(runnerClass: IRunner) {
    this.runnerClass = new runnerClass();
  }

  run() {
    this.runnerClass.run();
  }
}

interface IJumper {
  jump(): void;
}

class MikePowell implements IJumper {
  jump: void {
    console.log('2m');
  }
}

class RunnerAndJumper {
  private runnerClass: IRunner;
  private jumperClass: IJumper;

  constructor(jumper: IJumper, runner: IRunner) {
    this.jumperClass = new jumper();
    this.runnerClass = new runner();
  }

  run() {
    this.runnerClass.run();
  }

  jump() {
    this.jumperClass.jump();
  }
}