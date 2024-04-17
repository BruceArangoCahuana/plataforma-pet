import { Link } from "react-router-dom";
import { dataMiniNav } from "../Interfaces/dataMiniNav";

export default function Footer(){
    return(
        <>
            <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
                <div className="pt-5" style={{display:'flex',justifyContent:"space-between"}}>
                    <div className="col-lg-4 col-md-12 mb-5">
                        <h1 className="mb-3 display-5 text-capitalize text-white"><span className="text-primary">Colitas y</span> Amor</h1>
                        <p className="m-0">
                            El Refugio Colitas y Amor, fundado por Luis Pereda Roque, es una entidad sin 
                            fines de lucro dedicada a ayudar en el control de animales en abandono. Su misión
                            principal es brindarles un hogar permanente a estos animales, ofreciéndoles cuidado,
                            protección y amor.
                        </p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                             <div className="col-md-4 mb-5">
                                <h5 className="text-primary mb-4">Ubicanos</h5>
                                <p><i className="fa fa-map-marker-alt mr-2"></i>Callao</p>
                                <p><i className="fa fa-phone-alt mr-2"></i>+51 981557865</p>
                                <p><i className="fa fa-envelope mr-2"></i>refugiocolitasyamor@gmail.com</p>
                                <div className="d-flex justify-content-start mt-4">
                                    {
                                        dataMiniNav.map((item:any) => (
                                            <Link  key={item.id}   target="_blank" className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width: '36px', height: '36px'}} to={item.url}><i className={`fab ${item.icon}`}></i></Link>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="text-primary mb-4">Doname</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link className="text-white mb-2" to={'https://www.paypal.com/paypalme/LPeredaroque'} target="_blank">
                                        <i className="fa fa-angle-right mr-2"></i> <i className="fab fa-paypal mr-2"></i>Paypal
                                    </Link>
                                    <Link className="text-white mb-2" to={'https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_0d660a790034987b932d408b29dd22b2.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1712510013&Signature=BEhDivb9FTEf5qOQX%2FbUhbjfqJk%3D'} target="_blank">
                                        <i className="fa fa-angle-right mr-2"></i><i className="fa-solid fa-qrcode mr-2"></i>Yape
                                    </Link>
                                    <Link className="text-white mb-2" to={'https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_e9aa09120428387ad38a59d17ef4e2e3.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1712510045&Signature=H17zCSHMCU4hsr%2FPSF%2FkuZQt0Vc%3D'} target="_blank">
                                        <i className="fa fa-angle-right mr-2"></i><i className="fa-solid fa-credit-card mr-2"></i>BCP
                                    </Link>
                                    <Link className="text-white mb-2" to="https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_868ffe7ed4c12460f252dab0c5337942.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1712510133&Signature=Rt5WKlyaGkklvwk%2FJ0LoqlkcKBc%3D" target="_blank">
                                        <i className="fa fa-angle-right mr-2"></i><i className="fa-solid fa-credit-card mr-2"></i>Interbank
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="text-primary mb-4">Contactanos</h5>
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control border-0" placeholder="Ingresa tu nombre" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control border-0" placeholder="Ingresa tu correo"  />
                                    </div>
                                    <div className="form-group">
                                        <textarea  className="form-control border-0" placeholder="Ingresa tu duda"  />
                                    </div>
                                    <div>
                                        <button className="btn btn-lg btn-primary btn-block border-0" type="submit">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}