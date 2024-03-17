import { Fragment } from "react";
import { dataHero } from "../Interfaces/dataHero";
import { Link, NavLink } from "react-router-dom";

export default function Hero() {
    return (
        <Fragment>
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {
                            dataHero.map((item: any, index: number) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <NavLink to="#">
                                        <img className="w-100" src={item.urlimg} alt="Image" />
                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                            <div className="p-3" style={{
                                                maxWidth: '900px'
                                            }}>
                                                <h3 className="text-white mb-3 d-none d-sm-block">{item.mainheader}</h3>
                                                <h1 className="display-3 text-white mb-3">{item.maintitle}</h1>
                                                <h5 className="text-white mb-3 d-none d-sm-block">{item.mainfooter}</h5>
                                                <Link to="#" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4" style={{marginRight:'10px'}}>Adoptar</Link>
                                                <Link to="" className="btn btn-lg btn-secondary mt-3 mt-md-4 px-4">Ayudar</Link>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                    <Link className="carousel-control-prev" to="#header-carousel" data-slide="prev">
                        <div className="btn btn-primary rounded" style={{
                            width: '45px', height: '45px'
                        }}>
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </Link>
                    <Link className="carousel-control-next" to="#header-carousel" data-slide="next">
                        <div className="btn btn-primary rounded" style={{
                            width: '45px', height: '45px'
                        }}>
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}
