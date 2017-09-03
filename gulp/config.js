'use strict';

const config = {

    browserPort: 3000,
    UIPort: 3001,

    scripts: {
        src: './app/js/**/*.js',
        dest: './build/js/',
        test: './tests/**/*.js',
        gulp: './gulp/**/*.js'
    },

    data: {
        src: './app/data/**/*',
        dest: './build/data/'
    },

    images: {
        src: './app/images/**/*.{jpeg,jpg,png,gif,svg}',
        dest: './build/images/'
    },

    fonts: {
        src: './app/fonts/**/*',
        dest: './build/fonts/'
    },

    styles: {
        watchSrcs: './app/**/*.scss',
        src: './app/styles/main.scss',
        dest: './build/css/'
    },

    sourceDir: './app/',

    buildDir: './build/',

    testFiles: './tests/**/*.{js,jsx}',

    assetExtensions: [
        'js',
        'css',
        'map',
        'png',
        'jpe?g',
        'gif',
        'svg',
        'eot',
        'otf',
        'ttc',
        'ttf',
        'woff2?',
        'json'
    ]

};

export default config;
