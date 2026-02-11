

const Login = () => {
  const handleLogin = () => {
    // fake login
    sessionStorage.setItem("token", "abc123");
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
