const { projectName, buildPath } = require('../config/projectConfig');
process.env.buildPath = buildPath;
process.env.projectName = projectName;
let exec = require('child_process').execSync;
exec('npm run d', { stdio: 'inherit' });
