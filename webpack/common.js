const path = require( 'path' );
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    externals: [nodeExternals()],
    module:{
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ],
    },
    output: {
        path: path.resolve( __dirname, '../build' ),
        filename: 'main.js',
    },

    plugins: [],

    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    
    target: "node"
}