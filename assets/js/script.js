document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById ('border');

    imageContainer.addEventListener ('click', function(){
        if (this.classList.contains ('no-border') ) {
            this.classList.remove ('no-border');
            console.log('El borde esta activado');  
        } else{
            this.classList.add('no-border');
            console.log('El borde esta desactivado');
        }
    });
});

