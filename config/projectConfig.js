let fs = require('fs');
let path = require('path');
let config = require('./index');
let projectDirectories = fs.readdirSync(path.join(__dirname, '../src/projects'));
let argv = process.argv[2];
if (argv && !projectDirectories.includes(argv)) {
  throw new Error('参数错误,项目不存在');
  return;
}
let allProjectsConfig = {};
projectDirectories.forEach((dir, i) => {
  let stat = fs.lstatSync(path.join(__dirname, `../src/projects/${dir}`));
  if (stat.isDirectory()) {
    Object.assign(allProjectsConfig, {
      [dir]: {
        buildPath: `./src/projects/${dir}`,
        projectName: dir
      }
    })
  }
})
const projectConfig = argv == undefined ? config['defaultProject'] : allProjectsConfig[argv];
module.exports = projectConfig;
