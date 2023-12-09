const SignupPage = async () => {
  const fetchAction = async (): Promise<any> => {
    const action = await fetch(
      "http://localhost:5000/api/user/mapper/get/admin",
    ).then();
    return await action.json();
  };
  const { data } = await fetchAction();

  return (
    <div className="text-white">
      {Object?.entries(data)?.map(([key, value]: any, index) => (
        <>
          <div>{key}</div>
          <div>{value}</div>
        </>
      ))}
    </div>
  );
};
export default SignupPage;
