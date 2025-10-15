const fs = require('fs');
const events = require('events');
const path = require('path');

const emitter = new events.EventEmitter();
const tasksFile = path.join(__dirname, 'tasks.json');

// Load tasks or start with empty array
let tasks = [];
if (fs.existsSync(tasksFile)) {
  tasks = JSON.parse(fs.readFileSync(tasksFile, 'utf8') || '[]');
}

// Log function
function log(msg) {
  fs.appendFileSync(path.join(__dirname, 'tasks.log'), `${new Date().toLocaleString()} - ${msg}\n`);
}

// Events
emitter.on('add', task => { console.log(`Added: ${task}`); log(`Added: ${task}`); });
emitter.on('complete', task => { console.log(`Completed: ${task}`); log(`Completed: ${task}`); });
emitter.on('delete', task => { console.log(`Deleted: ${task}`); log(`Deleted: ${task}`); });

// Save tasks to file
function save() { fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2)); }

// Actions
const [,, action, ...args] = process.argv;

if(action === 'add') {
  const task = args.join(' ');
  tasks.push({ task, done: false });
  save();
  emitter.emit('add', task);
} 
else if(action === 'complete') {
  const i = parseInt(args[0])-1;
  if(tasks[i]) { tasks[i].done = true; save(); emitter.emit('complete', tasks[i].task); }
  else console.log('Invalid task number');
} 
else if(action === 'delete') {
  const i = parseInt(args[0])-1;
  if(tasks[i]) { const t = tasks.splice(i,1)[0]; save(); emitter.emit('delete', t.task); }
  else console.log('Invalid task number');
} 
else if(action === 'list') {
  console.log('\nTasks:');
  tasks.forEach((t,i)=>console.log(`${i+1}. [${t.done?'✓':' '}] ${t.task}`));
  console.log('');
} 
else {
  console.log(`Usage:
node taskTrackerSimple.js add "Task Name"
node taskTrackerSimple.js complete TASK_NUMBER
node taskTrackerSimple.js delete TASK_NUMBER
node taskTrackerSimple.js list`);
}
