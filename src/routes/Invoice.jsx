import {useParams} from 'react-router-dom';

export default function Invoice(){
  let params = useParams();
  return(<div><h2>Inovoice: {params.invoiceId} </h2></div>)
}

