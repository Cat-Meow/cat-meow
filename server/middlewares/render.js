import fs from 'fs';
import _ from 'lodash';
import config from 'config';

let tmpl = _.template(fs.readFileSync(config.path.layout));

export default function render(dir) {
  this.body = tmpl(dir);
}