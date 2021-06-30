const { series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp')

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss'
}
//Funcion que compila SASS
function css() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'expanded'//compressed->codigo minificado
        }))    
        .pipe(dest('./build/css'))
}

function imagenes() {
    return src(paths.imagenes)/* buscar en todos los contenidos */
        .pipe( imagemin())
        .pipe( dest( './build/img' ) )
        .pipe(notify({ message: 'Imagen Minificada'}))

}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe( notify({message: 'Version webP lista'}));
}

function watchArchivos() {
    watch(paths.scss, css);// * = a la carpeta actual - ** = a todos los archivos y carpetas con esa extensión
}

/* requiero watch creo una funcion y en la funcion watch le paso como primer parametro la url y como segundo la funcion donde estoy compilando. */

//siempre hay que crear los exports
exports.css = css;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series(css, watchArchivos);
