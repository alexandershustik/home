# home
Верстка home
╔═══════════════ Gulp init ═══════════════╗
║                                         ║
npm init
npm i gulp --save-dev gulp-sass browser-sync gulp-concat gulp-uglifyjs gulp-cssnano gulp-rename del gulp-imagemin imagemin-pngquant gulp-cache gulp-autoprefixer gulp-jade
mkdir app app/css app/fonts app/img app/jade app/js app/libs app/sass
touch app/jade/index.jade app/sass/main.sass app/js/common.js
touch app/index.html
echo "<h1>Well done</h1>" >> app/index.html
nano .bowerrc

{
    "directory" : "app/libs/"
}

bower i jquery
║                                         ║
╚═════════════════════════════════════════╝