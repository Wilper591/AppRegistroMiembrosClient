"use client";

import { useState, useEffect } from "react";
import { PlusCircle, MinusCircle, Edit2, Save, X } from "lucide-react";

function Dashboard() {
  // Estado para almacenar los miembros
  const [members, setMembers] = useState([]);
  // Estado para el miembro que se está editando
  const [editingMember, setEditingMember] = useState(null);
  // Estado para las opciones de roles y armas
  const [options, setOptions] = useState({
    roles: ["dps", "healer", "tank"],
    weapons: [
      "Espada",
      "Arco",
      "Bastón",
      "Daga",
      "Hacha",
      "Martillo",
      "Lanza",
      "Varita",
    ],
  });
  // Estado para el formulario de edición
  const [editForm, setEditForm] = useState({
    name: "",
    role: "",
    weapon1: "",
    weapon2: "",
  });

  // Simular la carga de datos desde el backend
  useEffect(() => {
    // Simulación de una llamada a la API
    const fetchData = async () => {
      try {
        // Simular delay de red
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Datos de ejemplo (esto vendría de tu backend)
        const mockMembers = [
          {
            id: 1,
            name: "Aragorn",
            role: "dps",
            weapon1: "Espada",
            weapon2: "Daga",
            pvpScore: 10,
            pveScore: 15,
          },
          {
            id: 2,
            name: "Gandalf",
            role: "healer",
            weapon1: "Bastón",
            weapon2: "Varita",
            pvpScore: 5,
            pveScore: 20,
          },
          {
            id: 3,
            name: "Gimli",
            role: "tank",
            weapon1: "Hacha",
            weapon2: "Martillo",
            pvpScore: 8,
            pveScore: 12,
          },
        ];

        // Simular obtención de opciones desde el backend
        const mockOptions = {
          roles: ["dps", "healer", "tank"],
          weapons: [
            "Espada",
            "Arco",
            "Bastón",
            "Daga",
            "Hacha",
            "Martillo",
            "Lanza",
            "Varita",
          ],
        };

        setMembers(mockMembers);
        setOptions(mockOptions);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchData();
  }, []);

  // Función para aumentar el puntaje PvP
  const increasePvpScore = (id) => {
    setMembers(
      members.map((member) =>
        member.id === id ? { ...member, pvpScore: member.pvpScore + 1 } : member
      )
    );
  };

  // Función para disminuir el puntaje PvP
  const decreasePvpScore = (id) => {
    setMembers(
      members.map((member) =>
        member.id === id && member.pvpScore > 0
          ? { ...member, pvpScore: member.pvpScore - 1 }
          : member
      )
    );
  };

  // Función para aumentar el puntaje PvE
  const increasePveScore = (id) => {
    setMembers(
      members.map((member) =>
        member.id === id ? { ...member, pveScore: member.pveScore + 1 } : member
      )
    );
  };

  // Función para disminuir el puntaje PvE
  const decreasePveScore = (id) => {
    setMembers(
      members.map((member) =>
        member.id === id && member.pveScore > 0
          ? { ...member, pveScore: member.pveScore - 1 }
          : member
      )
    );
  };

  // Función para iniciar la edición de un miembro
  const startEditing = (member) => {
    setEditingMember(member.id);
    setEditForm({
      name: member.name,
      role: member.role,
      weapon1: member.weapon1,
      weapon2: member.weapon2,
    });
  };

  // Función para cancelar la edición
  const cancelEditing = () => {
    setEditingMember(null);
  };

  // Función para guardar los cambios de la edición
  const saveEditing = (id) => {
    setMembers(
      members.map((member) =>
        member.id === id
          ? {
              ...member,
              role: editForm.role,
              weapon1: editForm.weapon1,
              weapon2: editForm.weapon2,
            }
          : member
      )
    );
    setEditingMember(null);
  };

  // Función para manejar cambios en el formulario de edición
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm({
      ...editForm,
      [name]: value,
    });
  };

  // Función para guardar todos los cambios en el backend
  const saveAllChanges = async () => {
    try {
      // Extraer solo los puntajes para enviar al backend
      const scores = members.map((member) => ({
        id: member.id,
        pvpScore: member.pvpScore,
        pveScore: member.pveScore,
      }));

      console.log("Enviando datos al backend:", scores);

      // Simulación de envío al backend
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Cambios guardados correctamente");
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      alert("Error al guardar los cambios");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Miembros del Gremio</h1>
        <button
          onClick={saveAllChanges}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Save className="w-4 h-4 mr-2" />
          Guardar Cambios
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rol
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Armas
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Puntaje PvP
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Puntaje PvE
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {members.map((member) => (
              <tr key={member.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {member.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingMember === member.id ? (
                    <select
                      name="role"
                      value={editForm.role}
                      onChange={handleEditChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      {options.roles.map((role) => (
                        <option key={role} value={role}>
                          {role.charAt(0).toUpperCase() + role.slice(1)}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="text-sm text-gray-900">
                      {member.role.charAt(0).toUpperCase() +
                        member.role.slice(1)}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editingMember === member.id ? (
                    <div className="flex flex-col space-y-2">
                      <select
                        name="weapon1"
                        value={editForm.weapon1}
                        onChange={handleEditChange}
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        {options.weapons.map((weapon) => (
                          <option key={weapon} value={weapon}>
                            {weapon}
                          </option>
                        ))}
                      </select>
                      <select
                        name="weapon2"
                        value={editForm.weapon2}
                        onChange={handleEditChange}
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        {options.weapons.map((weapon) => (
                          <option key={weapon} value={weapon}>
                            {weapon}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-900">
                      {member.weapon1}, {member.weapon2}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreasePvpScore(member.id)}
                      className="text-red-500 hover:text-red-700"
                      disabled={member.pvpScore <= 0}
                    >
                      <MinusCircle className="w-5 h-5" />
                    </button>
                    <span className="text-sm font-medium">
                      {member.pvpScore}
                    </span>
                    <button
                      onClick={() => increasePvpScore(member.id)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <PlusCircle className="w-5 h-5" />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreasePveScore(member.id)}
                      className="text-red-500 hover:text-red-700"
                      disabled={member.pveScore <= 0}
                    >
                      <MinusCircle className="w-5 h-5" />
                    </button>
                    <span className="text-sm font-medium">
                      {member.pveScore}
                    </span>
                    <button
                      onClick={() => increasePveScore(member.id)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <PlusCircle className="w-5 h-5" />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {editingMember === member.id ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => saveEditing(member.id)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Save className="w-5 h-5" />
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => startEditing(member)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {members.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">Cargando miembros...</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
