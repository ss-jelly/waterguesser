
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var runSequence = require('run-sequence');
var del = require('del');

var mocha = require('gulp-mocha');

var webpack = require('webpack-stream');

var webpackConfig = require('./webpack.config');

var paths = {
  allSrcJs: 'src/**/*.js?(x)',
  allAppJs: 'src/app/**/*.js?(x)',
  allTestJs: 'src/test/**/*.js?(x)',

  clientEntryPoint: 'src/app/agents/client/index.js',

  serverEntryPoint: 'src/app/agents/server/index.js',
  
  gulpFile: 'gulpfile.js',
  webpackFile: 'webpack.config.js',

  distDir: 'dist/baked',
  outputFiles: 'dist/baked/*.*',
};

gulp.task('lint', function () {
  return gulp.src([paths.allSrcJs, paths.gulpFile, paths.webpackFile])
    .pipe(eslint('.eslintrc.json'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('clean', function () {
  return del([paths.outputFiles]);
});

gulp.task('build', function (callback) {
  runSequence('lint', callback);
});

gulp.task('webpack', function () {
  return gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distDir));
});

gulp.task('test:execute', function (callback) {
  return gulp.src(paths.allTestJs)
    .pipe(mocha());
});

// entry tasks

gulp.task('test', function (callback) {
  runSequence('build', 'test:execute', callback);
});

gulp.task('compile', function (callback) {
  runSequence('clean', 'build', 'webpack', callback);
});


// entry point
gulp.task('default', ['compile']);
