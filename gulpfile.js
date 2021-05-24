const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function() {
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Site da Comunidade Terapêutica Vale da Luz
=========================================================

* Coded Je4nPw https://t.me/je4npw

=========================================================

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Site da Comunidade Terapêutica Vale da Luz
=========================================================

* Coded Je4nPw https://t.me/je4npw

=========================================================
-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Site da Comunidade Terapêutica Vale da Luz
=========================================================

* Coded Je4nPw https://t.me/je4npw

=========================================================
*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
