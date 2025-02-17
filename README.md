## Gestor de Frases 💬
Una aplicación web desarrollada con React.js y TypeScript que permite agregar, buscar, editar y eliminar frases en forma de tarjetas (cards). Este proyecto aplica buenas prácticas de programación y principios de diseño para garantizar un código mantenible, escalable y de alta calidad.

### 🚀 Tecnologías Utilizadas
- React.js: Para la construcción de la interfaz de usuario.
- TypeScript: Tipado estático para mejorar la robustez y mantenimiento del código.
- Context API: Gestión de estado global para las frases y el proceso de búsqueda.
- Custom Hooks: Encapsulación de lógica reutilizable.
- Higher-Order Components (HOC): Para el manejo de errores.
- Render Props: Patrón de composición para el renderizado condicional.
- Styled Components: Estilos modulares y aislados en archivos separados para mantener alta cohesión y bajo acoplamiento.
- Material-UI: Biblioteca de componentes para una interfaz de usuario moderna y accesible.
- Jest y React Testing Library: Para pruebas unitarias y de integración.

### 📐 Buenas Prácticas y Patrones de Diseño
El proyecto sigue principios sólidos de diseño:

- Alta Cohesión y Bajo Acoplamiento: Componentes y lógica modular para facilitar el mantenimiento y la reutilización.
- Responsabilidad Única: Cada componente y Hook tiene una única responsabilidad para mejorar la legibilidad y escalabilidad.
- HOC (Higher-Order Components): withErrorBoundary utilizado para manejo de errores de manera reutilizable.
- Render Props: Implementado en PhraseSearch para controlar la lógica de búsqueda sin acoplar el comportamiento al componente contenedor.
- Custom Hooks: usePhrase centraliza la lógica de estado y acciones sobre frases, promoviendo la reutilización de lógica en múltiples componentes.
- Styled Components en Archivos Separados: Cada componente tiene su archivo de estilos correspondiente para mantener una estructura ordenada y alta cohesión.

### ✅ Pruebas
Se utilizaron Jest y React Testing Library para garantizar la calidad del código.

- Pruebas Unitarias: Validan la lógica de cada componente y Hook.
- Pruebas de Integración: Aseguran que los componentes trabajen correctamente en conjunto.
Cobertura de Pruebas:
- MainBar: Verifica que el input funcione correctamente, incluyendo onChange y maxLength.
- CardList y Card: Aseguran el correcto renderizado y manejo de eventos (editar y eliminar).
- HOC withErrorBoundary: Comprueba la captura y manejo de errores en componentes envueltos.

### 🎨 Consideraciones de Diseño
- Material-UI se utilizó para una UI accesible y consistente.
- Styled Components en archivos separados aseguran el encapsulamiento de estilos y mantienen alta cohesión.
- Responsividad: Diseño adaptable a diferentes tamaños de pantalla para una experiencia fluida en dispositivos móviles y de escritorio.
- Accesibilidad: Uso de etiquetas semánticas y atributos ARIA para una mejor accesibilidad.

### 🔮 Mejoras Futuras
- Persistencia de Datos: Implementar almacenamiento en localStorage o conexión a una API REST para persistencia de frases.
- Paginación y Filtrado Avanzado: Mejorar la experiencia de búsqueda con filtros avanzados.
- Favoritos: Posible sección para guardar frases favoritas.
- Internacionalización (i18n): Soporte para múltiples idiomas.
- Test de E2E: Agregar pruebas end-to-end con Cypress para verificar el flujo completo del usuario.
