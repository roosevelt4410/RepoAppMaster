import React from 'react';

interface AppInfo {
  appName: string;
  description: string;
  iconUrl?: string;
  onClick: () => void;
}

const CardApss = ({ appName, description, iconUrl, onClick }: AppInfo) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 max-w-xs cursor-pointer hover:shadow-xl transition duration-300 ease-in-out">
      <img
        src={iconUrl || 'ruta-a-tu-icono-por-defecto.png'}
        alt="Icono de la aplicación"
        className="w-16 h-16 object-contain mx-auto mt-4"
      />
      <div className="p-2 text-center">
        <h2 className="text-lg font-semibold mb-2">{appName}</h2>
        <p className="text-sm text-gray-700">{description}</p>
        <button
          onClick={onClick}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-full focus:outline-none text-xs font-semibold"
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default CardApss;
