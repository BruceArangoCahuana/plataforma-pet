import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { dataPerdidos } from "../Interfaces/dataPerdido";

export default function Perdidos(){
    return(
        <Fragment>
            {
                dataPerdidos.map((item:any)=>{
                    return(
                        <div className="col-lg-3 col-md-6" key={item.id}>
                            <div className="team card position-relative overflow-hidden border-0 mb-4">
                            <img className="card-img-top" src={item.urlimg} alt="" />
                            <div className="card-body text-center p-0">
                                <div className="team-text d-flex flex-column justify-content-center bg-light">
                                <h5>{item.mascota}</h5>
                                </div>
                                <div className="team-social py-1 bg-light">
                                <h6>Contactos</h6>
                                <div className="d-flex align-items-center justify-content-center bg-dark py-3">
                                <Link
                                    className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                    style={{
                                    width: '36px', height: '36px'
                                    }}
                                    to="#"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link
                                    className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                                    style={{
                                    width: '36px', height: '36px'
                                    }}
                                    to="#"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}