'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copyData', function() {

  return gulp.src([config.sourceDir + 'data/**/*'])
    .pipe(gulp.dest(config.buildDir + 'data/'));

});
