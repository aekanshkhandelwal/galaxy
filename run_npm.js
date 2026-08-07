const { spawnSync } = require('child_process');
const fs = require('fs');

console.log('Starting npm install...');
const res = spawnSync('cmd.exe', ['/c', 'npm', 'install', '--no-audit', '--no-fund'], {
  cwd: 'd:\\galaxy',
  encoding: 'utf8'
});

fs.writeFileSync('npm_log.txt', `STDOUT:\n${res.stdout}\n\nSTDERR:\n${res.stderr}\n\nSTATUS: ${res.status}`, 'utf8');
console.log('Finished with status:', res.status);
