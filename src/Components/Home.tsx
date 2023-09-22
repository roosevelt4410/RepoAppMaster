import './../index.css';

const Home = () => {
  return (
    <div className="bg-custom min-h-screen flex items-center justify-center text-center font-Raleway">
      <div className="text-white font-Raleway">
        <h1 className="text-6xl font-semibold mb-4 text-black">Bienvenido a la Central de Información</h1>
        <p className="text-2xl mb-6 text-black">
          Gestiona de manera eficiente toda la información de aplicativos y conexiones.
        </p>
        <a
          href="/apps"
          className="bg-empresa-verde text-white hover:bg-empresa-rojo hover:text-empresa-verde py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out border-2 border-empresa-rojo text-lg font-semibold"
        >
          Buscar Aplicación
        </a>
      </div>
    </div>
  );
};

export default Home;



