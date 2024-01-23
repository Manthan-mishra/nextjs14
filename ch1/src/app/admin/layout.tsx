import AdminHeader from "@/components/AdminHeader";

const AdminLayout = ({ children }: any) => {
  return (
    <main>
      <AdminHeader />
      {children}
    </main>
  );
};

export default AdminLayout;
