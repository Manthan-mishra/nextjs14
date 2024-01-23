const MyProfile = ({ params }: any) => {
  console.log("params ", params.id);

  return <>MyProfile {params.id}</>;
};

export default MyProfile;
