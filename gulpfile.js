const { series, src, dest} = require('gulp');
const sass = require('gulp-sass');

//Funcion que compila SASS

function css() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'//compressed->codigo minificado
        }))    
        .pipe(dest('./build/css'))
}

exports.css = css;
