import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice/userSlice";
import Table from "react-bootstrap/Table";
import { deletecomm } from "../JS/commSlice";
import Edituser from "../commponents/Edituser";

function Profil({ ping, setping }) {
  const user = useSelector((state) => state.user?.user);
  const commandes = useSelector((state) => state.comm?.commList);
  console.log(commandes);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="profile-nav col-md-3">
            <div className="panel">
              <div className="user-heading round">
                <a href="#">
                  <img src={user ? user.img : <h1>...Loading</h1>} />
                </a>
                <h1>{user ? user.name : <h1>...Loading</h1>}</h1>
                <p>{user ? user.email : <h1>...Loading</h1>}</p>
              </div>
              <ul className="nav nav-pills nav-stacked">
                <li className="active">
                  <a href="#">
                    {" "}
                    <i className="fa fa-user" /> Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-calendar" /> Recent Activity{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-edit" />
                    <Edituser ping={ping} setping={setping} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="pane" className="panel">
            <div className="bio-graph-heading">
              <h1>Vos Commande</h1>

              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>img</th>
                    <th>nameproduct</th>
                    <th>price</th>
                    <th>date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {commandes
                    ?.filter((el) => el.nameclient == user?.name)
                    .map((el) => (
                      <tr>
                        <td>
                          <img
                            src={el?.img}
                            style={{ width: "25px", height: "25px" }}
                          />
                        </td>
                        <td>{el?.nameproduct}</td>
                        <td>{el?.price}</td>
                        <td>{el?.date}</td>
                        <td>
                          {" "}
                          <button
                            onClick={() => {
                              dispatch(deletecomm(el._id));
                              setping(!ping);
                            }}
                          >
                            x
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
            <div className="panel-body bio-graph-info">
              <div className="row">
                <div className="bio-row">
                  <p>
                    <span>First Name :</span>
                    {user ? user.name : <h1>...Loading</h1>}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Last Name :</span>
                    {user ? user.LastName : <h1>...Loading</h1>}
                  </p>
                </div>
                <div className="bio-row">
                  <p id="bi">
                    <span> Email :</span>
                    {user ? user.email : <h1>...Loading</h1>}
                  </p>
                </div>
                <div className="bio-row">
                  <p id="pass">
                    <span>password :</span>
                    {user ? user.password : <h1>...Loading</h1>}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
