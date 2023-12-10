const SignupPage = async () => {
  const fetchAction = async (): Promise<any> => {
    const action = await fetch("http://192.168.0.66:5000/api/user/login", {
      method: "post",
      body: JSON.stringify({
        id: "clamos",
        password: "clamos",
        name: "관리자",
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then();
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
