//this is gulpfile.this.js
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyhtml = require('gulp-minify-html');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var stripDebug = require('gulp-strip-debug');

var src = 'public/src';
var dist = 'public/dist';

var paths = {
    js: src + '/js/*.js',
    scss: src + '/scss/*.scss',
    html: src + '/**/*.html'
};

gulp.task('build_sass', function () {
    console.log('build_sass...');
    return gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(dist + '/css'))
});
gulp.task('build_js', function () {
    console.log('build_js...');
    return gulp.src(paths.js)
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist + '/js'));
});
gulp.task('build_html', function () {
    console.log('build_html...');
    return gulp.src(paths.html)
        .pipe(minifyhtml())
        .pipe(gulp.dest(dist + '/'))
});

gulp.task('build_development', ['build_sass', 'build_js', 'build_html'], function () {
    console.log('build_development [build_sass -> build_js -> build_html]...');
});

gulp.task('clean', function () {
    console.log('clean ...')
});

gulp.task('serve', function () {
    console.log('serve ...');
    gulp.src(dist+'/').pipe(webserver({
        liverelod: true,
        open: true,
        port: 8888
    }));

});

// 파일 변경 감지 및 브라우저 재시작
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(paths.js, ['build_js']);
    gulp.watch(paths.scss, ['build_sass']);
    gulp.watch(paths.html, ['build_html']);
    gulp.watch(dist + '/**').on('change', livereload.changed);
});

gulp.task('default', ['clean', 'build_development', 'serve', 'watch'], function () {
    console.log('default [clean -> build_development -> serve -> watch]');

});
