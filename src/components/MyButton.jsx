import { Button } from "@mui/material";
import { Link } from "react-router-dom";


function MyButton() {
    

    return(
        <>
            <Button variant="Contained" color="error">
                <Link to="/1" >Jebać czarnych</Link>
            </Button>
        </>
    );
}

export default MyButton;