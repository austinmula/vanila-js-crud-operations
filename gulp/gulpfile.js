const gulp = require('gulp')
const fs = require('fs');
// Gulp top level functions
// gulp.task - Defines a task
// gulp.watch - watches a specific file for changes
// gulp.src - points to the files to use
// gulp.dest - points to the filder to output


async function asyncAwaitTask() {
    const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    console.log(version);
    await Promise.resolve('some result');
}

exports.default = asyncAwaitTask;

// // Run a basic gulp service
// gulp.task('default', function () {
//     return new Promise(function (resolve, reject) {
//         console.log("HTTP Server Started");
//         resolve();
//     })
// })

// // copy a html file