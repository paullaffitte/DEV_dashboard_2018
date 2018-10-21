#! /usr/bin/env node

const fs = require('fs');
const about = require('./about');

const head = fs.readFileSync('./README.md').toString();
const arch = fs.readFileSync('./ARCH.md').toString();

let summary = `* [Architecutre](#arch)\n* [Services](#services)`;

let body = '';

about.server.services.forEach(service => {
  summary += `\t* [${service.name}](#${service.name})\n`;
  body += `### <a name="${service.name}"></a>${service.name}\n\n`;
  service.widgets.forEach(widget => {
    summary += `\t\t* [${widget.name}](#${widget.name})\n`
    const params = widget.params.map(e => `\`${e.name}: ${e.type}\``).join('\n');
    body += `#### <a name="${widget.name}"></a>${widget.name}\n\n${widget.description}\n\n##### Parameters\n\n${params}\n\n`;
  });
});

const readme =
  `${head}
${summary}
${arch}
${body}
`;

console.log(readme);
