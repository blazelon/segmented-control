// generated on 2016-09-06 using generator-webapp 2.1.0
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const myth = require('gulp-myth');
const del = require('del');
const wiredep = require('wiredep').stream;

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('css', () => {
  return gulp.src('src/css/*.css')
    .pipe(myth())
    .pipe(gulp.dest('.tmp/css'))
    .pipe(reload({stream: true}));
});

gulp.task('js', () => {
  return gulp.src('src/js/**/*.js')
    .pipe($.plumber())
    .pipe(gulp.dest('.tmp/js'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return gulp.src(files)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint(options))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
  return lint('src/js/**/*.js', {
    fix: true
  })
    .pipe(gulp.dest('src/js'));
});
gulp.task('lint:test', () => {
  return lint('test/spec/**/*.js', {
    fix: true,
    env: {
      mocha: true
    }
  })
    .pipe(gulp.dest('test/spec/**/*.js'));
});

gulp.task('html', ['css', 'js'], () => {
  return gulp.src('src/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'src', '.']}))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['css', 'js'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'src'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'src/*.html',
  ]).on('change', reload);

  gulp.watch('src/css/**/*.css', ['css']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', ['js'], () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/js': '.tmp/js',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('src/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('src'));
});

gulp.task('build', ['lint', 'html'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
