const postFilterVtex = () => {

const url = 'https://priscila01--hiringcoders202102.myvtex.com/api/orders/hook/config';
const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
  body: JSON.stringify(
    {
      filter: {
        type: 'FromWorkflow',
        status: ['on-order-completed'],
        disableSingleFire: false
    }
  }
    )

};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
}

export default postFilterVtex;
