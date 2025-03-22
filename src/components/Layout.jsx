"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, LogOut, Users, Home, Settings } from "lucide-react";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí iría la lógica de cierre de sesión
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar para móvil */}
      <div
        className={`fixed inset-0 flex z-40 md:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={() => setSidebarOpen(false)}
        ></div>

        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Cerrar sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <h1 className="text-xl font-bold text-blue-600">
                Throne & Liberty
              </h1>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              <a
                href="#"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md bg-blue-100 text-blue-900"
              >
                <Home className="mr-4 h-6 w-6 text-blue-500" />
                Dashboard
              </a>
              <a
                href="#"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Users className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                Miembros
              </a>
              <a
                href="#"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Settings className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                Configuración
              </a>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center text-red-600"
            >
              <LogOut className="mr-4 h-6 w-6" />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar estático para escritorio */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-xl font-bold text-blue-600">
                Throne & Liberty
              </h1>
            </div>
            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
              <a
                href="#"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md bg-blue-100 text-blue-900"
              >
                <Home className="mr-3 h-6 w-6 text-blue-500" />
                Dashboard
              </a>
              <a
                href="#"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Users className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                Miembros
              </a>
              <a
                href="#"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Settings className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                Configuración
              </a>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center text-red-600"
            >
              <LogOut className="mr-3 h-6 w-6" />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Abrir sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
