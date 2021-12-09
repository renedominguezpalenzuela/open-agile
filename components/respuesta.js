import * as React from 'react';
import Radio from '@mui/material/Radio';

import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';


export default function Respuesta({
  id,
  texto,
  valor

}) {
  return (
<>



         <Radio  checked="true"    value="a"    name="radio-buttons"  label={texto}  inputProps={{ 'aria-label': 'A' }} />





</>
  );
}
