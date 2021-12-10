import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

const CardItem=({title,update,cases,color,type})=>{
  
    return(
       < Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize:"2rem" ,}} color="text.secondary" gutterBottom>
            
          </Typography>
          <Typography sx={{color,fontSize:"2rem",fontWeight:"300"}} variant="h5" component="div">
          {title}
          </Typography>
          <Typography sx={{ mb: 1.5 ,color,fontSize:"1.5rem"}} color="text.secondary">
            {cases}
            
            
          </Typography>
          <Typography sx={{color,fontWeight:"bold",fontSize:"1.4rem"}} variant="body2">
            + {update} {type}
            
            
          </Typography>
        </CardContent>
        <CardActions>
      
        </CardActions>
      </Card>
  
    )
}
export default CardItem