import TextField from '@mui/material/TextField';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import { withStyles } from '@material-ui/core/styles';
// import theme from '../src/theme';



// const styles = {
//     root: {                           // - The TextField-root
//         border: 'solid 3px #0ff',     // - For demonstration: set the TextField-root border
//         padding: '3px',               // - Make the border more distinguishable

//         // (Note: space or no space after & matters. See SASS "parent selector".)
//         '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
//             '& fieldset': {            // - The <fieldset> inside the Input-root
//                 borderColor: 'pink',   // - Set the Input border
//             },
//             '&:hover fieldset': {
//                 borderColor: 'yellow', // - Set the Input border when parent has :hover
//             },
//             '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
//                 borderColor: 'green',
//             },
//         },
//     },
// };



export default function FormularioContacto2() {


const styles2 = theme => ({
    multilineColor:{
        color:'red'
    }
});


 // '& .MuiInput-underline:before': { borderBottom: `1px solid #e50067` },
    // '& .MuiInput-underline:after': { borderBottom: `1px solid #ffffff` },
    //  '& .MuiInput-underline:hover': { borderBottom: `1px solid  #00ffffff` },
     

  const styles =  {
    
'.MuiInput-root': {
borderBottom: '1px solid #e42078'

}
,
'.MuiInput-root:before': {
borderBottom: '1px solid #e50067'

},

'.MuiInput-root:after': {
borderBottom: '1px solid #ffffff'

}
   
  

     

  }



    return (
<>
      <div className="row mt-5  d-flex  justify-content-center">
        <div className="col-8 color_background  ">

            <div className="row d-flex mt-3 font_titulo_formulario justify-content-center">
                    LASS UNS IN KONTAKT BLEIBEN         
            </div>

            <div className="row d-flex mt-1 mb-4 font_subtitulo_formulario justify-content-center color_magenta">
                     OPEN AGILE NEWSLETTER        
            </div>

            <div className="row  g-0 d-flex align-items-center    justify-content-center mt-1">
                <div className="col-4   ">
                   <div className="group row ">
                     <TextField id="standard-basic" label="Name eingeben" variant="standard" sx={styles}  />
                   </div>

                   <div className="group mt-4 row">
                  
                     <TextField  id="standard-basic" label="E-Mail eingeben" variant="standard" sx={styles}  />
                  
                   </div>
                
            </div>


            <div className="row g-0  d-flex align-items-center   justify-content-center mt-3 ">
                <div className="inputgrupo   d-flex align-items-center   justify-content-center ">
                    <input className="me-2" type="checkbox" value=""/> 
                         <span className="font_texto_formulario color_magenta">
                           Ja, ich bin mit dem AGBs des Newsletters einverstanden
                         </span>
                    
                </div>
            </div>
            


            </div>
            <div className="row g-0  d-flex align-items-center   justify-content-center mt-1 ">
          

                    <div className="group w-25 mt-4 mb-4 ">
                        <button type="button" className="btn boton_card_magenta  w-100 font_facit_boton_small">
                                    ANMELDEN
                        </button>
                    </div>
             


            </div>

           
</div>
</div>
</>

    )
}