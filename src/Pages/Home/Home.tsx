import { Fragment } from "react/jsx-runtime";
import Nav from "./Component/Nav";
import { Link } from "react-router-dom";
import Header from "./Component/Header";
import Hero from "./Component/Hero";

export default function Home() {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row py-3 px-lg-5">
                    <div className="col-lg-4">
                        <Link to="/" className="navbar-brand d-none d-lg-block">
                            <h1 className="m-0 display-5 text-capitalize"><span className="text-primary">Colitas</span>& Amor</h1>
                        </Link>
                    </div>
                    <Nav />
                </div>
            </div>
            <Header />
            <Hero />
        </Fragment>
    )
}