import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Imagen de fondo para la sección lateral */}
      <div className="hidden md:flex md:w-1/2 relative bg-black">
        <img
          src="/placeholder.jpg" // Reemplaza con tu imagen
          alt="Throne and Liberty"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Throne and Liberty
          </h1>
          <p className="text-xl text-center max-w-md">
            Únete a nuestro gremio y forma parte de la aventura
          </p>
        </div>
      </div>

      {/* Formulario de login */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-white"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Bienvenido de nuevo
            </h2>
            <p className="text-gray-500 mt-2">
              Ingresa tus credenciales para acceder al registro del gremio
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
