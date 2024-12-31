// src/components/profile/Profile.tsx
import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useAuth } from "../../../contexts/useAuth";
import { supabase } from "../../../lib/supabaseClient";

export function Profile() {
  const { user } = useAuth();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    window.location.href = "/";
  };
  return (
    <div className="max-w-3xl p-6 mx-auto mt-20">
      <Card title="Perfil do Usuário" className="shadow-lg heander">
        <div className="flex items-center space-x-6">
          <Avatar
            icon="pi pi-user"
            shape="circle"
            className="w-10 h-10 bg-gray-200 hover:shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-bold">{user?.name || "Visitante"}</h3>
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