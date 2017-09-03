'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('watch', ['browserSync'], function() {

  // Scripts are automatically watched by Watchify inside Browserify task
  gulp.watch(config.data.src,                 ['copyData']);
  gulp.watch(config.fonts.src,                ['copyFonts']);
  gulp.watch(config.styles.watchSrcs,         ['sass']);
  gulp.watch(config.images.src,               ['imagemin']);
  gulp.watch(config.sourceDir + 'index.html', ['copyIndex']);

});
