import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const UseStyles = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2)
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    border: '1px solid #ced4da',
    fontSize: 16,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));

export default function SchoolSelectionBox({updateSelection}) {
    const [innerSchool, setInnerSchool] = React.useState("Boise State University");
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="select-school-label" sx={{color: 'white', fontSize: '18px'}}>School</InputLabel>
        <Select
          id="school-select"
          value={innerSchool}
          onChange={(event, newSelection) => {
            if(newSelection == null){
              updateSelection('Boise State University');
              setInnerSchool('Boise State University');
            } else{
              updateSelection(event.target.value);
              setInnerSchool(event.target.value);
            }
          }}
          input={<UseStyles />}
          sx={{width: 200}}
          >
          <MenuItem value={"Boise State University"}>Boise State University</MenuItem>
          <MenuItem value={"Idaho State University"}>Idaho State University</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
