"use client";

import { useRouter } from "next/navigation";

const LearnUseRouter = () => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push("/admin/dashboard")}>
        Go to Admin Dashboard
      </button>
    </>
  );
};

export default LearnUseRouter;
