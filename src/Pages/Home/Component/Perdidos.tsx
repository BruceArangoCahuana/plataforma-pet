import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { dataPerdidos } from "../Interfaces/dataPerdido";
import moment from "moment";
import React from "react";
import { Box, Modal } from "@mui/material";
import DetailPerdido from "../Modal/DetailPerdido";
 interface props{
    perdidosRecientes:any
 }
export default function Perdidos({perdidosRecientes}:props){
   const[openModal,setOpenModa] = React.useState<boolean>(false)
   const[idDetil,setDetail] = React.useState<any>("")

   const modalDetail = () =>{
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
        '& .css-1cq8kt0':{
            border:'none'
        },
      };
      
      return(
        <Modal
        open={openModal}
        onClose={() => setOpenModa(false)}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width:700 }}>
            <DetailPerdido
                idDetil={idDetil}
                setOpenModa={setOpenModa}
            />
        </Box>
      </Modal>
      )
   }
    return(
        <Fragment>
            {
                perdidosRecientes.map((item:any)=>{
                    return(
                        <div className="col-lg-3 col-md-6" key={item.idmascotaperdida}
                        onClick={() => {
                            setOpenModa(true)
                            setDetail(item.idmascotaperdida)
                        }}
                        >
                            <div className="team card position-relative overflow-hidden border-0 mb-4">
                            <img className="card-img-top" src={"/img/"+item.foto} alt={item.foto} />
                            <div className="card-body text-center p-0">
                                <div className="team-text d-flex flex-column justify-content-center bg-light">
                                <h5>{item.Nombre}</h5>
                                </div>
                                <div className="team-social py-1 bg-light">
                                <h6 style={{fontWeight:300,fontSize:'14px'}}>Contactos</h6>
                                <h6>Fecha extravio: <span style={{fontWeight:300,fontSize:'14px'}}>{moment(item.Fecha_Extravio).format('L')}</span></h6>
                                <div className="d-flex align-items-center justify-content-center bg-dark py-2">
                                     <Link
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0 mb-3"
                                            style={{
                                            width: '36px', height: '36px'
                                            }}
                                            to={item.dueno.facebook}
                                            target="_blank"
                                        >
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                        <Link
                                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0 mb-3"
                                            style={{
                                            width: '36px', height: '36px'
                                            }}
                                            to={item.dueno.instagram}
                                            target="_blank"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })      
            }
            {modalDetail()}
        </Fragment>
    )
}