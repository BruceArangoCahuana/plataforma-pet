import { Box, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import urlBase from "../../../config/index"
import axios from "axios";
import React, { useState } from "react";
import moment from "moment";
import 'moment/locale/es'
import CloseIcon from '@mui/icons-material/Close';
interface props {
    idDetil:any
    setOpenModa:any
}
export default  function DetailPerdido ({idDetil,setOpenModa}:props) {
    const[perdido,setPerdido] = useState<any>("")
    const getByIdPerdidos = async() =>{
        const url =  urlBase.pathBase+"/perdidos/detail/"+idDetil
        axios.get(url)
        .then((response) => {
          const{data} = response.data
          console.log("data",data)
          setPerdido(data[0])
        })
        .catch(e => console.log(e.message))
    }
    console.log("perdido",perdido)
    React.useEffect(() =>{
        getByIdPerdidos()
    },[])
    return(
        <>
            <Box sx={{py:2, display:'flex',justifyContent:'space-between'}}>
                <Typography variant="body1" sx={{fontSize:'24px',fontWeight:"bolder",color:'black'}}>
                    {perdido.Nombre}
                </Typography>
                <CloseIcon sx={{cursor:'pointer'}} onClick={() => setOpenModa(false)} />
            </Box>
            <Paper sx={{py:2 , px:1}}>
                <List
                sx={{ width: 'auto', maxWidth: 360, bgcolor: 'background.paper',display:'flex',justifyContent:'center',margin:'auto',alignItems:'center',flexDirection:'column' }}
                aria-label="contacts"
                >
                     <ListItem disablePadding>
                        <img src={"/img/"+perdido.foto}  />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText 
                            primary={
                                <Typography
                                sx={{
                                    py:1,
                                    textTransform:'capitalize',
                                    fontWeight:700,
                                    color:'#ED6436'
                                }}  
                                >{perdido.genero?.descripcion}</Typography>
                            }    
                        />
                        <ListItemText 
                            primary={
                                <Typography
                                sx={{
                                    py:1,
                                    textTransform:'capitalize',
                                    fontWeight:700,
                                    color:'#65C178'
                                }} 
                                >
                                    {perdido.tipo?.descripcion}
                                    </Typography>}
                        
                      />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary={<Typography
                        sx={{fontWeight:700}} 
                        >Edad: <span style={{fontWeight:300}}>{perdido.Edad} año</span></Typography>}  />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary={<Typography
                        sx={{fontWeight:700}} 
                        >Observaciones: <span style={{fontWeight:300}}>{perdido.Observaciones}</span></Typography>}  />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary={<Typography
                        sx={{fontWeight:700}} 
                        >Fecha extravio: <span style={{fontWeight:300}}>{moment(perdido.Fecha_Extravio).format('LL')}</span></Typography>}  />
                    </ListItem>
                </List>
            </Paper>
        </>
    )
}