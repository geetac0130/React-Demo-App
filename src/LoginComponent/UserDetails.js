import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function UserDetails() {
  const userData = useSelector((state) => state.user);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Typography>Display User's Information</Typography>
      <Typography>Logged in user {userData.email}</Typography>
    </>
  );
}
