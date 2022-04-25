var calificacion = prompt("ingrese su calificacion")

if(calificacion >= 1 && calificacion <= 10){
    
    if(calificacion >=7){
        alert("Aprobado")
    }
    else{
        alert("Reprobado")
    }

}else{
    alert("Valor fuera de rango, Ingrese un dato valido")

}