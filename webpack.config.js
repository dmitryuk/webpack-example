import TerserPlugin from "terser-webpack-plugin";

export default {
    entry: {
        a: [
            './example.js',
        ]
    },

    target: 'web',

    optimization: {
        minimizer: [
            new TerserPlugin(),
        ]
    },
};
