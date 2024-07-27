import { useFormContext, Controller } from "react-hook-form";
import { colors, styled, TextField } from "@mui/material";

function FTextField({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          InputLabelProps={{ style: { color: "#959595" } }}
          InputProps={{ style: { color: "#959595" } }}
          {...other}
        />
      )}
    />
  );
}

export default FTextField;
