/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
import React from 'react'

import {useState} from 'react'

//import createAPI from  './createLeadAPI'

import { postLeadsAPI } from './resources/'

import { Lead } from './commons/interfaces'

import { useForm} from 'react-hook-form'

import { Form } from './components/Form/stylesForm'

// eslint-disable-next-line react/prefer-stateless-function
// eslint-disable-next-line @typescript-eslint/naming-convention
// eslint-disable-next-line react/prefer-stateless-function

const leadForm: React.FC = () => { //formulário para cadastro de leads

  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true }); //usando o hook useForm
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    const onSubmit = handleSubmit((clientdata) =>{ //ao submeter os dados, eles são armazenados
      // é feita uma chamada para API gateway, que armazena os dados no dynamo.db
  //  const clientStore = JSON.stringify(clientdata);
    //localStorage.setItem('@client', clientStore);
     setLoading(true);
  //  createAPI(id, clientdata.name, clientdata.phone, clientdata.email);
   let lead:Lead =  {email: clientdata.email, phone: clientdata.phone, name: clientdata.name}
   postLeadsAPI (lead)
  })

    return (
      <div key="leadForm" className="leadFormContainer">
        <Form method="post" action="" onSubmit={onSubmit}>
          <h1>Cadastro</h1>

          <p> Nome
            <input
                                  {...register("name", { required: "Por favor, insira seu nome." })}
                      />
          </p>

          <p> E-mail
            <input type="email"
                      {...register("email", { required: "Por favor, insira seu e-mail." })}
                      />
          </p>

          <p> Telefone
          <input
                      {...register("phone", { required: "Por favor, insira seu telefone." })}
                      />
          </p>

          <p>
            <button type="submit"> {loading ? 'Cadastrando...' : 'Cadastro'} </button>
          </p>
        </Form>
      </div>
    )
  }


export default leadForm
