import { Fragment } from "react/jsx-runtime";
import { dataPlan } from "../Interfaces/dataPlan";
import { Link } from "react-router-dom";

export default function Plan() {
  console.log("dataPlan", dataPlan);
  return (
    <Fragment>
      {dataPlan.map((item: any,index:any) => {
        const { aporte } = item;
        return (
          <div className="col-lg-4 mb-4" key={item.id}>
            <div className="card border-0">
              <div className="card-header position-relative border-0 p-0 mb-4">
                <img className="card-img-top" src={item.urlImg} alt="" />
                <div
                  className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    background: "rgba(0, 0, 0, .6)",
                  }}
                >
                  <h3 className="text-secondary mb-3">{item.name}</h3>
                  <h1 className="display-4 text-white mb-0">
                    <small
                      className="align-top"
                      style={{ fontSize: "22px", lineHeight: "45px" }}
                    >
                      s/.
                    </small>
                    {item.price}
                    <small
                      className="align-bottom"
                      style={{ fontSize: "16px", lineHeight: "40px" }}
                    >
                      / {item.type}
                    </small>
                  </h1>
                </div>
              </div>
              <div className="card-body text-center p-0">
                <ul className="list-group list-group-flush mb-4">
                  {aporte.map((item: any) => (
                    <li className="list-group-item p-2" key={item.id}>
                      <i className="fa fa-check text-secondary mr-2"></i>{item.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer border-0 p-0">
                <Link
                  to="#"
                  className={item.id ==2? "btn btn-primary btn-block p-3":"btn btn-secondary btn-block p-3" }
                  style={{ borderRadius: 0 }}
                >
                  Signup Now
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}
