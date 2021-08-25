/* eslint-disable react/prefer-stateless-function */
/* eslint-disable @typescript-eslint/naming-convention */

import React from 'react'

class whatsappComp extends React.Component {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    return (
      <a href="https://api.whatsapp.com/send?phone=5511964335064&text=Suporte%20UpMedal">
        <img
          src="https://desafio3-gama-academy-pri-upmedal.s3.sa-east-1.amazonaws.com/3721678-whatsapp_108065.png"
          alt="Suporte do WhatsApp"
        />
      </a>
    )
  }
}

export default whatsappComp
