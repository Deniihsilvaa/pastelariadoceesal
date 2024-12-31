// src/components/profile/Profile.tsx
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useAuth } from "../../../contexts/useAuth";

export function Profile() {
  const { user,signOut } = useAuth();

  return (
    <div className="max-w-3xl p-6 mx-auto mt-20">
      <Card title="Perfil do Usuário" className="shadow-lg ">
        <div className="flex items-center space-x-6 ">

          <div>
            <h3 className="text-2xl font-bold">{user?.email || "Visitante"}</h3>
            <p className="text-gray-600">
              {user?.email || "email@example.com"}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <Button
            label="Editar Perfil"
            icon="pi pi-user-edit"
            className="w-full p-button-rounded p-button-outlined"
          />
          <Button
            label="Sair"
            icon="pi pi-sign-out"
            className="w-full p-button-danger"
            onClick={() => signOut()}
          />
        </div>
      </Card>
    </div>
  );
}