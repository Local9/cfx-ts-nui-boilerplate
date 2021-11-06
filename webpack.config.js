const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const destination = path.resolve(__dirname, 'dist');

const global = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['swc-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}

const server = {
    ...global,

    target: 'node',
    entry: ['./src/server/env.ts', './src/server/server.ts'],
    output: {
        filename: 'server/bundle.js',
        path: destination
    }
};

const client = {
    ...global,

    entry: './src/client/client.ts',
    output: {
        filename: 'client/bundle.js',
        path: destination
    }
};

const shared = {
    ...global,

    entry: './src/shared/shared.ts',
    output: {
        filename: 'shared/bundle.js',
        path: destination
    },

    plugins: [new ESLintPlugin()],
}

module.exports = [shared, server, client];