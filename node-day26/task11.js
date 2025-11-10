const EventEmitter = require('events');

class DeploymentWorkflow extends EventEmitter {
  startProject() {
    console.log('🟢 Project initialization started...');
    this.emit('build');
  }

  buildProject() {
    console.log('🏗️ Building project...');
    setTimeout(() => {
      console.log('✅ Build successful!');
      this.emit('deploy');
    }, 1000);
  }

  deployProject() {
    console.log('🚀 Deploying project to server...');
    setTimeout(() => {
      console.log('🌍 Deployment complete!');
      this.emit('complete');
    }, 1000);
  }
}

const workflow = new DeploymentWorkflow();

workflow.on('start', () => workflow.startProject());
workflow.on('build', () => workflow.buildProject());
workflow.on('deploy', () => workflow.deployProject());
workflow.on('complete', () => console.log('🎉 Workflow finished successfully!'));

workflow.emit('start');
