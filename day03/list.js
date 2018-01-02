/**
 *  @author 汤小洋
 *  @datetime 2017-01-03 14:28:30
 *  @description 获取所有*.html文件中的标题信息，并根据标题信息生成list.html文件
 */

'use strict';

const fs = require('fs');
const path = require('path');
const readline = require('readline');

//读取目录中所有文件
var files = fs.readdirSync(__dirname);
files.sort();
// console.log(files); 

// 遍历所有文件
var content = '';
var i = 0;
files.forEach(file => {
    // console.log(path.extname(file)); //获取文件后缀
    // 判断找出所有.html文件
    if (path.extname(file) == '.html' && file != 'list.html') {
        //逐行读取
        var streamReader = fs.createReadStream(path.join(__dirname, file), 'utf8');
        var rl = readline.createInterface({ input: streamReader });
        rl.on('line', (line) => {
            // console.log(line);
            //找到标题信息
            if (line.trim().startsWith('<title>')) {
                line = line.trim().replace('<title>', '').replace('</title>', '');
                // console.log(line);
                i = ++i < 10 ? '0' + i : i;
                content += `<a href="${i}.html">${i}.${line}</a><br>
    `;
                // console.log(content);
            }
        });
    }
});
setTimeout(() => {
    // console.log(content);
    template = template.replace('{{{content}}}', content);
    try {
        fs.writeFileSync(path.join(__dirname, 'list.html'), template);
        console.log('生成list.html成功！');
    } catch (e) {
        console.log(e);
    }
}, 2000)


var template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    {{{content}}}
</body>
</html>
`;
