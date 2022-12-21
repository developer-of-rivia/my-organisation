const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
//const localtunnel = require('localtunnel');
const gcmq = require('gulp-group-css-media-queries');


gulp.task('gcmq', function () {
    gulp.src('app/css/main.css')
        .pipe(gcmq())
        .pipe(gulp.dest('app/css/main-media.css'));
});



/* sass task */
gulp.task('sass', function (done) {
    gulp.src("app/sass/**/*.sass") // путь к sass файлам
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest("app/css/")) //папка для выгрузки css файлов
        .pipe(browserSync.stream());
    done();
});


/* browserSync task */
gulp.task('serve', function (done) {
    browserSync.init({
        server: {
            baseDir: "app",
        },
        notify: false,
        open: true,
        //tunnel: true,
        port: 80,
        //tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
        files: ['app/*.html', ''],
    });
    gulp.watch("app/**/*.sass", gulp.series('sass'));
    gulp.watch("app/**/*.html").on('change', () => {
        browserSync.reload();
        done();
    });
    done();
});
gulp.task('default', gulp.series('sass', 'serve'));