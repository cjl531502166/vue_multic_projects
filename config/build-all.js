let fs = require('fs');
let path = require('path')
let filesDirs = fs.readdirSync(path.join(__dirname, '../src/projects'));
let exec = require('child_process').execSync;
filesDirs.forEach((item, i) => {
  process.env.buildPath = `./src/projects/${item}`;
  process.env.projectName = item;
  exec('npm run b', { stdio: 'inherit' });
});
