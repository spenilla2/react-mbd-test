import React,{ useState }  from "react";
import { Card, CardContent } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSee from '../FormSee';

import "./Cards.scss";

export default function Cards(props) {
  const {
    cards: {name, observation, picture, price, wifi, pets, couple, avaible, state,_id,time}
  } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  var Obj = Object.create({});
  Obj.name=name;
  Obj.observation=observation;
  Obj.picture=picture;
  Obj.price=price;
  Obj.wifi=wifi;
  Obj.pets=pets;
  Obj.couple=couple;
  Obj.avaible=avaible;
  Obj.state=state;
  Obj._id=_id;
  Obj.time=time;
  return (
    <Card className="cards">
      <CardContent>
        <div className="cards__header">
          <h5>{name}</h5>
          <Visibility onClick={openModal}/>
        </div>
        <p>{observation}</p>
        <p>$ {price}</p>
        <div className="cards__date-add-card">
          {moment(time).format("DD/MM/YYYY HH:mm")}
        </div>

      </CardContent>
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSee forminfo={Obj}></FormSee>
      </ModalContainer>
    </Card>
  );
}
