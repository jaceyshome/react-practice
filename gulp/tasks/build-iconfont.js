var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var fontName = 'icon-font';

//Builds Icon fonts from the svgs

gulp.task('build-iconfont', function(){
    gulp.src(['app/images/icons/svg/*.svg']) // location of the svg files
        .pipe(iconfontCss({
            fontName: fontName,
            path: 'app/js/components/icon/template.txt', // the template to create the icons.scss file
            targetPath:'../../app/js/components/icon/svg2iconfont.scss', // This is where the file is generated
            fontPath: '../fonts/',
            cssClass: 'b-icon'
        }))
        .pipe(iconfont({
            fontName: fontName,
            prependUnicode: true, // recommended option
            formats: ['ttf', 'eot', 'woff', 'woff2'],
            normalize: true, //Reference: https://www.npmjs.com/package/gulp-iconfont
            fontHeight: 1001 //to get icon fonts from svg of different heights
        }))
        .pipe(gulp.dest('app/fonts/')); //dest where the icon font files will be created
});


