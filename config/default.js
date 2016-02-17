import path from 'path';

const rootPath = path.dirname(__dirname);
const port = 7778;

let __root = dir => path.join(rootPath, dir);

export default Object.assign(require('../package.json'), {
    port,
    path: {

        // client
        assets: __root('assets'),
        js: {
            entries: {
                'bootstrap': __root('app/home.js')
            },
            dest: __root('assets/scripts')
        },

        // server
        app: __root('server/main.js'),
        routes: __root('server/routes'),
        extensions: __root('server/extensions'),
        controllers: __root('server/controllers'),
        layout: __root('server/views/default.html')
    }
});
