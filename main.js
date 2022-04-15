let numeroDias = Number(prompt("¿Cuántos días tomarás asistencia? (Ingrese solamente números)"))
let numeroAlumnos = Number(prompt("Ingrese el número de estudiantes"));
for (i = 1; i <= numeroDias; i++) {
  alert(`Día ${i}`)
  let presente = 0;
  let ausente = 0;
  for (let j = 1; i <= numeroAlumnos; j++) {
    let alumno = prompt("Ingrese el nombre del alumno");
    let asistencia = prompt("Elija la opción: 'P' (presente) o 'A' (ausente)")
    if (asistencia == "p" || asistencia == "P") {
      alert(`${alumno} está presente`);
      presente++;
    }
    else if (asistencia == "a" || asistencia == "A") {
      alert(`${alumno} está ausente`);
      ausente++;
    }
    else {
      alert("Error al ingresar parámetros. Inténtalo de nuevo")
      break;
    }
    if (j == numeroAlumnos) {
      alert(`Hay ${presente} alumnos presentes el día ${i}`);
      alert(`Hay ${ausente} alumnos ausentes el día ${i}`);
      break;
    }
}
if (i == numeroDias) {
  alert("Terminaste de pasar lista");
}

}