const { spawnSync } = require('child_process');
const fs = require('fs');

console.log('Running node directly without cmd.exe shell...');
const nodeExe = 'C:\\Program Files\\nodejs\\node.exe';
const npmCli = 'C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js';

const res = spawnSync(nodeExe, [npmCli, 'install', '--no-audit', '--no-fund'], {
  cwd: 'd:\\galaxy',
  encoding: 'utf8',
  shell: false
});

fs.writeFileSync('npm_log.txt', `STDOUT:\n${res.stdout}\n\nSTDERR:\n${res.stderr}\n\nSTATUS: ${res.status}`, 'utf8');
console.log('Finished with status:', res.status);
