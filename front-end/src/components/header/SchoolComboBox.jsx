import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    option: {
      "&:hover": {
        backgroundColor: "#2196f3 !important"
      }
    }
  });

  const dataOptions = [
    { label: 'Boise State University', color:"#EF5350" },
    { label: 'Idaho State University', color:"#EF5350" },
];

export default function SchoolComboBox() {
  const styles = useStyles();  
  return (
    <Autocomplete
        id="combo-box-demo"
        options={dataOptions}
        defaultValue={dataOptions[0]}
        classes={{
            option: styles.option
        }}
        getOptionLabel={(option) => option.label}
        style={{ width: 300 }}
        renderOption={(props, option) => {
            const { label, color } = option;
            return (
                <span {...props} style={{ backgroundColor: color }}>
                {label}
                </span>
            );
        }}
        renderInput={(params) => {
        return (
            <TextField
                {...params}
                label="Schools"
                variant="outlined"
                fullWidth
            />
        );
        }}
    />
  );
}