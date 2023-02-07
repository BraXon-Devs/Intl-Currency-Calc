import * as fs from 'fs';
fs.readFile('./package.json', (err, data) => {
    if (err) throw err;
    const packageJson = JSON.parse(data.toString());
    const currentVersionArray = packageJson.version.split('.').map(num => Number(num));
    currentVersionArray[2]++;
    const newVersion = currentVersionArray.join('.');
    packageJson.version = newVersion;
    fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2), (err) => {
      if (err) throw err;
    });
  });
  