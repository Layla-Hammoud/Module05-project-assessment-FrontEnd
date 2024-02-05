import { Link } from 'react-router-dom'
import style from "./ProductsCard.js"
import { useContext,useState } from 'react';
import { AuthContext } from '../Context/AuthContext.js';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
 const ProductCard =({image,name,unitPrice})=> {
    const { user, setUser } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const checkout = () =>{
        if(!user){
            alert('you have to log in to by a product')
        }
    }
  return (
    <>
      <article className={style.cardContainer}>
        <img src={`http://localhost:4000/images/${image}`} alt={name} className={style.productImage}></img>
        <p className={style.name}>{name}</p>
        <p>{unitPrice}$</p>
        <button onClick={checkout}>Buy Me</button>
      </article>

    </>
  )
}
export default ProductCard