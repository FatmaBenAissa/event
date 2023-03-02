import React, { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import "./new.css";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";

import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import { edituser } from "../JS/userSlice/userSlice";

function Edituser({ ping, setping }) {
  const user = useSelector((state) => state.user.user);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const [edit, setedit] = useState({
    name: user?.name,
    LastName: user?.LastName,
    email: user?.email,
    password: user?.password,
    img: user?.img,
  });
  return (
    <div>
      <>
        <Button onClick={() => setModal(true)} id="hi" variant="primary">
          edit
        </Button>
        <PureModal
          header="Edit user"
          footer={
            <div>
              <button id="cann">Cancel</button>
              <button
                id="can"
                onClick={() => {
                  dispatch(edituser({ id: user._id, edit }));
                  setping(!ping);
                  Swal.fire("Profil updated");
                }}

                // onClick={() => {
                //   dispatch(addcomm(newcomm));
                //   Swal.fire("Commande Validée");
                // }}
              >
                Commander
              </button>
            </div>
          }
          isOpen={modal}
          width="758px"
          closeButton="close"
          closeButtonPosition="bottom"
          onClose={() => {
            setModal(false);
            return true;
          }}
        >
          <p className="descbox">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>user name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user?.name}
                  onChange={(e) => setedit({ ...edit, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>user lastname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user?.LastName}
                  onChange={(e) =>
                    setedit({ ...edit, LastName: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>user email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user?.email}
                  onChange={(e) => setedit({ ...edit, email: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>user password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user?.password}
                  onChange={(e) =>
                    setedit({ ...edit, password: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>user image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user?.img}
                  onChange={(e) => setedit({ ...edit, img: e.target.value })}
                />
              </Form.Group>
            </Form>
          </p>
        </PureModal>
      </>
    </div>
  );
}

export default Edituser;
