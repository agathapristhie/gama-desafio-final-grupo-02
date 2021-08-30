/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
import * as React from 'react'

import { Container } from './components/Button/styles'

// eslint-disable-next-line react/prefer-stateless-function
// eslint-disable-next-line @typescript-eslint/naming-convention
// eslint-disable-next-line react/prefer-stateless-function
class detailsButton extends React.Component {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    return (
      <div key="detailsButton" className="buttonUPContainer">
        <Container>
          <span>VER DETALHES</span>
        </Container>
      </div>
    )
  }
}

export default detailsButton
