import React from "react";

const AdminPage = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <div className="bg-base-100 rounded-lg shadow-lg w-full h-[calc(100vh-6rem)]">
          
          <div className="flex h-full rounded-lg overflow-hidden">
            <div className="hidden md:block md:w-48 lg:w-64 border-r border-base-300 p-4">
              Sidebar
            </div>

            <div className="flex-1 p-4">
              Content
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminPage;