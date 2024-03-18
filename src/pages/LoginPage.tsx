import {
  Button,
  Grid,
  InputLabel,
  NativeSelect,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { MiniLoader } from "../components/common";
import { inputHelper } from "../components/helper";
import { useLoginUserMutation, useRegisterUserMutation } from "../apis/userAuthenAPI";
import { responseModel, userModel } from "../interfaces";
import { SD_Roles } from "../utility/SD";
import { Send } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUserInformation } from "../storage/redux/userAuthenSlice";
const StyleGrid = styled(Grid)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  flexDirection: "column",
  mt: 3,
});
function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    userName: "",
    password: "",
  });
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const handleInputValue = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const temptData = inputHelper(e, userInput);
    setUserInput(temptData);
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(user)
    const response: responseModel = await loginUser({
      useName: userInput.userName,
      password: userInput.password,
    });
    if (response.data) {
      // console.log(response.data);
      // localStorage.setItem("token", response.data.result!.token)

      //or can do with that
      const {token} = response.data.result!;
      localStorage.setItem("token", token);
      const { fullName,role,email,id} : userModel = jwt_decode(token);
      console.log({ fullName,role,email,id});
      dispatch(setUserInformation({ fullName,role,email,id}));
      navigate("/");
    } else if (response.error) {
      console.log(response.error);
    }
    setIsLoading(false);
  };
  return (
    <StyleGrid item flex={3} pt={"20px"}>
      <div
        style={{ height: "50px", display: "flex", justifyContent: "center" }}
      >
        <Typography variant="h3" className="text-success">
          Login Page
        </Typography>
      </div>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-8">
          <form
            onSubmit={handleSubmitForm}
            style={{ width: "100%", height: "500px" }}
          >
            <Typography variant="h6">
              UserName
              <TextField
                value={userInput.userName}
                name="userName"
                margin="normal"
                fullWidth
                label="User Name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputValue(e)
                }
              />
            </Typography>
            <Typography variant="h6">
              Password
              <TextField
                value={userInput.password}
                name="password"
                margin="normal"
                fullWidth
                label="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputValue(e)
                }
              />
            </Typography>
            <div className="mt-5">
              <button type="submit" className="btn btn-success">
                {isLoading ? (
                  <MiniLoader />
                ) : (
                  <Typography variant="h6">Send</Typography>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </StyleGrid>
  );
}

export default LoginPage;
