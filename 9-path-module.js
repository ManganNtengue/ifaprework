const path=require('path');
console.log(path.sep);

const filePath= path.join('/conten/', 'subfoder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absoluted = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absoluted);