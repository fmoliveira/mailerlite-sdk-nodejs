var gulp = require('gulp'),
	bump = require('gulp-bump');

gulp.task('bump', function () {
	gulp.src('./package.json')
		.pipe(bump({ type: 'patch' }))
		.pipe(gulp.dest('./'));
});

gulp.task('release', ['bump']);