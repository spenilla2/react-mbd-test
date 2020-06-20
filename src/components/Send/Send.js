import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSend from "../FormSend";
import fireDb from "../../firebase-config";
import { CARDS_STORAGE } from "../../utils/constants";
import "./Send.scss";

export default function Send(props) {
  const { setToastProps, allCards } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const send = (event, formValue) => {
    event.preventDefault();
    const { name, observation, picture, price, wifi, pets, couple, avaible, state } = formValue;
    let allCardsArray = [];

    if (allCards) {
      allCardsArray = allCards;
    }

    if (!name || !observation) {
      setToastProps({
        open: true,
        text: "WARNING: Todos los campos son obligatorios!"
      });
    } else {
      formValue.time = moment();
      allCardsArray.push(formValue);
      var min = 1;
      var max = 10000000;
      var rand =  min + (Math.random() * (max-min));
      console.log(formValue.observation);
      fireDb.child('propiedades').push(
          {
            "_id":Math.floor(rand),
            "name":formValue.name,
            "observation":formValue.observation,
            "picture":formValue.picture,
            "price":formValue.price,
            "wifi":formValue.wifi,
            "pets":formValue.pets,
            "couple":formValue.couple,
            "avaible":formValue.avaible,
            "state":formValue.state,
            "createDate":formValue.time.toString()
          },

          err =>{
            if(err)
              console.log(err);
          }
        
        )
      localStorage.setItem(CARDS_STORAGE, JSON.stringify(allCardsArray));
      setToastProps({
        open: true,
        text: "Datos Almacenados Correctamente correctamente."
      });
      setIsOpenModal(false);
    }
    allCardsArray = [];
  };

  return (
    <div className="send">
      <Fab
        className="send__open-form"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSend send={send} />
      </ModalContainer>
    </div>
  );
}
