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



        {/* <FormControlLabel value="female" control={<Radio />} label={texto} />         */}
 {/*onChange={handleChange} */} 
         <Radio  checked="true"    value="a"    name="radio-buttons"  label={texto}  inputProps={{ 'aria-label': 'A' }} />



{/*     
    <label class="radiocontainer checkedlabel" id="label3"> 
        {texto}
        <input type="radio" name="quiz" id={id}  value={valor}/>
        <span class="checkmark"></span>
    </label> */}



</>
  );
}
