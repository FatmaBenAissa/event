import React, { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import "./new.css";
import { useDispatch, useSelector } from "react-redux";
import { addcomm } from "../JS/commSlice";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";

function Description({ el }) {
  const user = useSelector((state) => state.user.user);
  const [modal, setModal] = useState(false);
  const date = new Date();
  const [newcomm, setnewcomm] = useState({
    nameclient: user?.name,
    nameproduct: el.name,
    date: date,
    price: el.price,
    status: "non -payé",
  });
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={() => setModal(true)} id="hi" variant="primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Button>
      <PureModal
        header={el.name}
        footer={
          <div>
            <button id="cann">Cancel</button>
            <button id="can"
              onClick={() => {
                dispatch(addcomm(newcomm));
                Swal.fire("Commande Validée");
              }}
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
          <div className="descbox1">
            <img src={el.img} />
          </div>

          <div className="descbox2">
            <h3>{el.name}</h3>
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              alias provident aperiam, corrupti a eveniet eum tempore adipisci,
              mollitia sit veritatis eaque quod molestiae deserunt ut! Porro,
              placeat sint. Accusantium.
            </p>
            <h6>price :</h6>
            {el.price}
          </div>
        </p>
      </PureModal>
    </>
  );
}

export default Description;
