import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";

export default function SchoolComboBox({updateSelection, iTheme}) {
  const styles = makeStyles({
    option: {
      "&:hover": {
        backgroundColor: iTheme.palette.action.active
      }
    },
  });

  const dataOptions = [
    { label: 'Boise State University' },
    { label: 'Idaho State University'},
];
  return (
    <Autocomplete
        id="combo-box-demo"
        options={dataOptions}
        defaultValue={dataOptions[0]}
        classes={{
            option: styles.option
        }}
        getOptionLabel={(option) => option.label}
        onChange={(event, newSelection) => {
          if(newSelection == null){
            updateSelection('Boise State University');
          } else{
            updateSelection(newSelection.label);
          }
        }}
        style={{ width: 300 }}
        renderOption={(props, option) => {
            const { label } = option;
            return (
                <span {...props} >
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