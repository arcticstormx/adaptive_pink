"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var babel = require("gulp-babel");
var svgstore = require("gulp-svgstore");
var del = require("del");
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");
var scssresets = require("scss-resets");
var server = require("browser-sync").create();

gulp.task("clean", function () {
  return del("build");
});
gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/js/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});
gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build/"))
});
gulp.task("js", function () {
  return gulp.src("source/js/*.js")
    .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
    .pipe(rename("script.min.js"))
    .pipe(sourcemap.init())
    .pipe(uglify())
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/js/"))
});
gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass({ includePaths: require("scss-resets").includePaths }))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});
gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
});
gulp.task("webp", function () {
  return gulp.src("build/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
});
gulp.task("sprite", function () {
  return gulp.src("build/img/icons/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
});
gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch("source/*.html").on("change", server.reload);
  gulp.watch("source/sass/**/*.scss", gulp.series("css"));
  gulp.watch("source/img/icons/*.svg", gulp.series("sprite"));
  gulp.watch("source/js/*.js", gulp.series("js"));
});

gulp.task("build",
  gulp.series(
    "clean",
    "html",
    "css",
    "images",
    "webp",
    "sprite",
    "js",
    "copy"
  )
);
gulp.task("start", gulp.series("build", "server"));

