import React, { useState } from "react";
import {
  alpha,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormProvider, FTextField } from "../components/form";
import useAuth from "../hooks/useAuth";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const defaultValues = {
  username: "",
  password: "",
};

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (data) => {
    let from = location.state?.from?.pathname || "/";
    let username = data.username;

    auth.login(username, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} sx={{ minWidth: "350px" }}>
        <Typography
          variant="h4"
          textAlign="left"
          color="#FFF"
          fontSize="32px"
          fontWeight="bold"
        >
          Sign In
        </Typography>
        <FTextField
          name="username"
          label="Username"
          defaultvalues={defaultValues.username}
          InputProps={{ style: { color: "#959595" } }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: alpha("#383838", 0.5),
            },
            borderRadius: "10px",
          }}
        />

        <FTextField
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: alpha("#383838", 0.5),
            },
            borderRadius: "10px",
          }}
          InputProps={{
            style: { color: "#959595" },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: (theme) => theme.palette.primary.main,
            borderRadius: "20px",
          }}
        >
          Login
        </Button>
      </Stack>
    </FormProvider>
  );
}

export default LoginPage;
