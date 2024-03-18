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
import { useRegisterUserMutation } from "../apis/userAuthenAPI";
import { responseModel } from "../interfaces";
import { SD_Roles } from "../utility/SD";
import { Send } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const StyleGrid = styled(Grid)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  flexDirection:"column",
  mt: 3,
});
function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  // const [navigate] = useNavigate();
  const [userInput, setUserInput] = useState({
    userName: "",
    name: "",
    password: "",
    role: "",
  });
  const [registerUser] = useRegisterUserMutation();
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
    const response: responseModel = await registerUser({
      useName: userInput.userName,
      name: userInput.name,
      password: userInput.password,
      role: userInput.role,
    });
    if (response.data) {

      // console.log(response);
    } else if (response.error) {
      // console.log(response);
    }
    setIsLoading(false);
    /// xu ly place order
    // setIsLoading(false);
  };
  return (
    <StyleGrid item flex={3} pt={"20px"}>
      <div style={{ height: "50px", display:"flex", justifyContent:"center" }}>
        <Typography variant="h3" className="text-success">
          Register Page
        </Typography>
      </div>
      <div className="row" style={{ display: "flex", justifyContent:"center" }}>
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
              Name / Email
              <TextField
                value={userInput.name}
                name="name"
                margin="normal"
                fullWidth
                label="name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputValue(e)
                }
                // id="fullWidth"
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
                // id="fullWidth"
              />
            </Typography>
            <select
              className="form-control form-select"
              name="role"
              value={userInput.role}
              style={{marginTop:"20px"}}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleInputValue(e)
              }
            >
              <option value={SD_Roles.ADMIN}>Admin</option>
              <option value={SD_Roles.CUSTOMER}>Customer</option>
            </select>
            {/* <Button
            onSubmit={() => handleSubmitForm}
            disabled={isLoading}
            sx={{ mt: "15px" }}
            variant="contained"
            endIcon={<Send />}
          >
            {isLoading ? (
              <MiniLoader />
            ) : (
              <Typography variant="h6">Send</Typography>
            )}
          </Button> */}
            {/* Send */}
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

export default RegisterPage;
