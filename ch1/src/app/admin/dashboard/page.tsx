"use client";

import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();
  return (
    <>
      <div>Admin Dashboard</div>
      <button onClick={() => router.push("/")}>Go to home page</button>
    </>
  );
};

export default AdminDashboard;
