import { ordersAPIteste } from './components/hook'
import React from 'react';

let mostrarnatela = "Ou ou";

const ordersTela = () => { //formulário para cadastro de leads

  setLoading(true);
   mostrarnatela = ordersAPIteste('priscilapportes@gmail.com');

    return (
      <div key="leadForm" className="leadFormContainer">
       {mostrarnatela}
      </div>
    )
  }


export default ordersTela
