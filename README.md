## Proyecto de Práctica con React Router

En este proyecto nos dimos a la tarea de practicar un poco con el router de React, **React Router DOM**, para poder navegar entre las páginas creadas con ayuda del hook `useParams` y `useNavigate`.

### Análisis del código

#### 1. Navegación principal

**`NavLink`:** Se utiliza para los enlaces de navegación. Destaca la ruta activa aplicando una clase CSS (`activado`) cuando la ruta coincide con el enlace.

Ejemplo de enlace activo:

```jsx
<NavLink to='/inicio'
         className={({ isActive }) => isActive ? "activado" : ""}
>
  Inicio
</NavLink>
```

#### 2. Configuración de rutas

Se define un sistema de rutas con `<Routes>` y `<Route>`. Cada ruta está vinculada a un componente específico.

Ejemplo de configuración de rutas:

```jsx
<Routes>
  <Route path='/' element={<Inicio />} />
  <Route path='/inicio' element={<Inicio />} />
  <Route path='/articulos' element={<Articulos />} />
  <Route path='/contacto' element={<Contacto />} />
  <Route path='/persona/:nombre/:apellido' element={<Persona />} />
</Routes>
```

**Rutas dinámicas:**
Por ejemplo, `/persona/:nombre/:apellido` permite acceder a la información de una persona utilizando parámetros en la URL.

#### 3. Redirecciones

Se usa `Navigate` para redirigir automáticamente de una ruta a otra. Por ejemplo:

```jsx
<Route path="/redirigir" element={<Navigate to="/persona/victor/robles" />} />
```

#### 4. Subrutas en el Panel de Control

El componente `PanelControl` tiene enlaces que apuntan a subrutas como `/panel/inicio` o `/panel/crear-articulos`.

Usa `<Outlet>` para mostrar los componentes que corresponden a estas subrutas:

```jsx
<div>
  {/* Aquí van los componentes de las subrutas */}
  <Outlet />
</div>
```

Ejemplo de configuración de subrutas:

```jsx
<Route path="/panel/*" element={<PanelControl />} >
  <Route path='inicio' element={<InicioPanel />} />
  <Route path='crear-articulos' element={<Crear />} />
</Route>
