* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
  background-color: #f7f9fb;
  color: #333333;
}

/* 1. ENCABEZADO SUPERIOR TIPO REFERENCIA (Color Carbón Oscuro + Verde) */
.header {
  background-color: #1e2229;
  padding: 18px 40px;
  width: 100%;
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo span {
  color: #388e3c;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 1px;
}

.main-nav ul {
  display: flex;
  list-style: none;
  gap: 25px;
}

.main-nav ul li a {
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.main-nav ul li a:hover {
  color: #ffffff;
}

/* CONTENEDOR GENERAL */
.main-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 20px;
}

/* 2. ESTADÍSTICAS ESTILO PASTILLA (MISMA FORMA Y TAMAÑO DE TU FOTO) */
.stats-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
}

.stat-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px 25px;
  text-align: center;
  width: 220px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.stat-num {
  font-size: 1.3rem;
  font-weight: 700;
  color: #388e3c;
  display: block;
}

.stat-desc {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 2px;
}

/* 3. CARRUSEL GRANDE (MISMO FORMATO QUE TU FOTO) */
.carousel-wrapper {
  width: 100%;
  margin-bottom: 40px;
}

.carousel {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  background-color: #e5e7eb;
}

.carousel-track {
  display: flex;
  transition: transform 0.4s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  position: relative;
}

.carousel-slide img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  display: block;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(30, 34, 41, 0.75);
  color: #ffffff;
  text-align: center;
  padding: 12px;
  font-weight: 600;
  font-size: 1rem;
}

/* FLECHAS BLANCAS CIRCULARES */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ffffff;
  color: #333333;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.carousel-btn.prev { left: 15px; }
.carousel-btn.next { right: 15px; }

/* 4. SECCIÓN INFERIOR DE TARJETAS */
.info-section {
  margin-top: 20px;
}

.info-section h2 {
  font-size: 1.3rem;
  color: #111827;
  font-weight: 700;
}

.lead {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 4px;
  margin-bottom: 30px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.info-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.card-img {
  height: 140px;
  background-size: cover;
  background-position: center;
}

#Ramospre-diseñados {
  background-image: url('https://images.unsplash.com/photo-1558030006-450675393462?w=600&auto=format&fit=crop');
}

#guajira {
  background-image: url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop');
}

#cordoba {
  background-image: url('https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop');
}

.info-card h3 {
  font-size: 1rem;
  color: #111827;
  font-weight: 700;
  margin: 12px 14px 4px;
}

.info-card p {
  font-size: 0.8rem;
  color: #6b7280;
  margin: 0 14px 14px;
  line-height: 1.4;
}

/* FOOTER / CAMPO CORREO */
.footer-reservas {
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 30px;
}

.input-group input {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.85rem;
  outline: none;
}

.input-group button {
  padding: 8px 16px;
  background: #388e3c;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
}