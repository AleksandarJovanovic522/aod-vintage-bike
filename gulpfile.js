var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');

//scss to css task
gulp.task('scss', function () {
	return gulp.src('src/scss/style.scss').pipe(sass()).pipe(gulp.dest('dist/css'));
});

//scss lint
gulp.task('scss-lint', function () {
	return gulp
		.src('src/scss/*.scss')
		.pipe(
			sassLint({
				configFile: '.sass-lint.yml',
			})
		)
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError());
});

gulp.task('default', function () {
	gulp.watch('src/scss/**/*.scss', gulp.series(['scss', 'scss-lint']));
});
