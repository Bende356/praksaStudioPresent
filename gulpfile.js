const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('scss/**/*.scss') // Path to your SCSS files
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css')); // Output directory for CSS files
}
function watchSass() {
    gulp.watch('scss/**/*.scss', compileSass);
}
gulp.task('sass', compileSass);
gulp.task('watch', watchSass);
