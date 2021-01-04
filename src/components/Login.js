function Login(props) {
    function handleUsername(e){
      props.userName(e.target.value)
    }
    function handlePassword(e){
      props.userpassword(e.target.value)
    }
    return (
      <form>
        <h1>Login to start creating a burger!</h1>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" autoComplete="off" onInput={handleUsername} />
        <br/>
        <label htmlFor="user-pw">Password: </label>
        <input id="user-pw" type="password" name="user-pw" onInput={handlePassword} />
        <br/>
        <input type="button" value="Login" onClick={props.checkUser}/>
      </form>
    )
  }
  
  export default Login;