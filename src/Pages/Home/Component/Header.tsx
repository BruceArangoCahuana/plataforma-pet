import { Link, NavLink } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { dataHeader } from "../Interfaces/dataHeader";

export default function Header(){
    return(
        <Fragment>
             <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
                    
                    <Link to="/" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-5 text-capitalize  text-white"><span className="text-primary">Colitas</span> & Amor</h1>
                    </Link>
                    
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            {
                                dataHeader.map((item:any) => (
                                    <NavLink key={item.id} to={item.path} className={({isActive})=> isActive?'nav-item nav-link active':'nav-item nav-link'} style={{color:'white'}}>{item.name}</NavLink>
                                ))
                            }
                     
                        </div>
                        <a href="" className="btn btn-lg btn-primary px-3 d-none d-lg-block">Get Quote</a>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}