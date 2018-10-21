#! /usr/bin/env node

const fs = require('fs');
const about = require('./about');

const head = fs.readFileSync('./README.md').toString();
const arch = fs.readFileSync('./ARCH.md').toString();

let summary = `* [Architecutre](#arch)\n* [Services](#services)\n`;

let body = '### <a name="services"></a>Services\n\n';

about.server.services.forEach(service => {
  summary += `\t* [${service.name}](#${service.name})\n`;
  body += `### <a name="${service.name}"></a>${service.name}\n\n`;
  service.widgets.forEach(widget => {
    summary += `\t\t* [${widget.name}](#${widget.name})\n`
    let params = widget.params.map(e => `\`${e.name}: ${e.type}\``);
    params = params.length ? '##### Parameters\n\n' + params.join('\n') : '';
    body += `#### <a name="${widget.name}"></a>${widget.name}\n\n${widget.description}\n\n${params}\n\n`;
  });
});

const readme =
  `${head}
${summary}
${arch}
${body}
`;

console.log(readme);
