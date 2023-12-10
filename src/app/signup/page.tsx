import Typography from "@mui/material/Typography";

const SignupPage = async () => {
  const fetchAction = async (): Promise<any> => {
    const action = await fetch("http://localhost:5000/api/user/login", {
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
      <Typography sx={{ color: "white" }}>{data?.name}</Typography>
    </div>
  );
};
export default SignupPage;
