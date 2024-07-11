import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInfo } from "./Store/action";
import useStyles from "./style";

export default function LoginComponent() {
  // const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userdetails = useSelector((state) => state.user);
  const classes = useStyles();

  const login = () => {
    const userData = { email, password };
    dispatch(loginInfo(userData)).then((res) => {
      console.log(res);
      window.location.href = "/userDetails";
    });
    // window.location.href = "/userDetails";
  };

  return (
    <>
      <Typography className={classes.headingStyle}>
        Welcome to Login Screen
      </Typography>
      <br></br>
      <Typography>Email:</Typography>
      <br></br>
      <TextField
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextField>
      <br></br>
      <br></br>
      <Typography>Password:</Typography>
      <br></br>
      <TextField
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextField>
      <br></br>
      <br></br>
      <Button
        className={classes.mediaButtonApply}
        onClick={login}
        variant="outlined"
      >
        Submit
      </Button>
    </>
  );
}
