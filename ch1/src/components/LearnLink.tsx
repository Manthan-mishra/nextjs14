import Link from "next/link";

const LearnLink = () => {
  const id = 2;
  return (
    <>
      <Link href="/admin/dashboard">Go to admin dashboard</Link>
      <Link href={`/users/profiles/${id}`}>Go to user profile</Link>
    </>
  );
};

export default LearnLink;
