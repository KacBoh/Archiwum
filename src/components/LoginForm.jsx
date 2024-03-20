import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';


function LoginForm(){
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
        <form method="POST" action="http://localhost:8000/logowanie.php" encType="multipart/form-data">

            <FormControl sx={{ m: 0.5, width: '25ch' }} variant="outlined">
                <TextField id="loginInput" label="Login" variant="outlined" name="loginInput"/>
            </FormControl>
            
            <br/>

            {/* /////////// Password Input ///////////////////// */}
            <FormControl sx={{ m: 0.5, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="passwdInput">Password</InputLabel>
                <OutlinedInput
                  id="passwdInput"
                  name="passwdInput"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
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
                  }
                  label="Password"
                />
            </FormControl>
            <br/>
            <FormControl sx={{ m: 0.5, width: '25ch' }} variant="outlined">
                <Button variant="contained" type="submit" name="submit">Zaloguj się</Button>
            </FormControl>
            
            
            
            
        </form>
    )
}

export default LoginForm;

<input type="text" name="loginInputt" id="loginInput" required></input>