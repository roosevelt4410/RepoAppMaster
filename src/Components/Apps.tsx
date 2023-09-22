import React from 'react';
import CardApss from './CardApss';

const AppList = () => {
  const apps = [
    {
      id: 1,
      appName: 'Mi Aplicación 1',
      description: 'Descripción de la aplicación 1',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 2,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 3,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 4,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 5,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 6,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 7,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 8,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 9,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 10,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 11,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 12,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 13,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 14,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
    {
      id: 15,
      appName: 'Mi Aplicación 2',
      description: 'Descripción de la aplicación 2',
      iconUrl: 'ruta-a-icono-app-1.png',
    },
  ];

  const handleAppClick = (appId: any) => {
    // Implementa la lógica para redirigir a un panel de detalles o realizar otras acciones al hacer clic en una aplicación.
  };

  return (
    <div className="bg-gradient-to-r from-empresa-rojo via-empresa-verde to-empresa-rojo min-h-screen text-center text-white font-Raleway">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {apps.map((app) => (
            <CardApss
              key={app.id}
              appName={app.appName}
              description={app.description}
              iconUrl={app.iconUrl}
              onClick={() => handleAppClick(app.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppList;

