window.onload = function(){
    const form = document.getElementById('form-registro');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        let formData = new FormData(form);
        // serializar los datos del formulario en un objeto
        let data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        console.log(data);
    });
}