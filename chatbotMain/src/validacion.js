export const ValidarNombre = (value) => {
    if (value.length > 15) {
      return 'Por favor, introduce un nombre válido.';
    }

    if(/\d/.test(value)){
      return 'El nombre no puede contener numeros.';
    }
    return true;

}