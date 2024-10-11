import {useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const mascota = location.state?.mascota;

  if (!mascota) {
    return <div>No hay información de la mascota.</div>;
  }

  return (
    <div>
      <h1>{mascota.nombre}</h1>
      <p>{mascota.descripcion}</p>
      <img src={mascota.foto} alt={mascota.descripcion} />
    </div>
  );
}
