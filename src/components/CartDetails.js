import React, { useContext } from "react";
import { Table, Container } from "semantic-ui-react";
import { CartContext } from "../App";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function CartDetails() {
  const {
    cart,
    addToCart,
    removeFromCart,
    emptyCart,
    counttotalPrice,
    cartDiscount,
  } = useContext(CartContext);

   if (counttotalPrice() === 0) {
     return (
       <Container>
         <h1 className="is-size-1">Votre panier est vide</h1>
       </Container>
     );
   }

  return (
    <>
      <Container>
        <div className="flex-delete">
          {" "}
          <DeleteOutlineIcon
            name="trash alternate"
            onClick={emptyCart}
            style={{ cursor: "pointer" }}
          />
          <span>Vider le panier</span>
        </div>

        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine textAlign="center">
                Quantité
              </Table.HeaderCell>
              <Table.HeaderCell>Titre</Table.HeaderCell>
              <Table.HeaderCell textAlign="right">
                Prix unitaire
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="right">Prix total</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {Object.keys(cart).map((key) => (
              <Table.Row key={cart[key].isbn}>
                <Table.Cell className="add-cart">
                  <RemoveIcon
                    name="minus square outline"
                    onClick={() => removeFromCart(cart[key])}
                    style={{ cursor: "pointer" }}
                  />
                  {cart[key].quantity}{" "}
                  <AddIcon
                    name="plus square outline"
                    onClick={() => addToCart(cart[key])}
                    style={{ cursor: "pointer" }}
                  />
                </Table.Cell>
                <Table.Cell singleLine>{cart[key].title}</Table.Cell>
                <Table.Cell textAlign="right">{cart[key].price} €</Table.Cell>
                <Table.Cell textAlign="right">
                  {(cart[key].quantity * cart[key].price).toFixed(2)} €
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <h5> Le total de votre panier est de {counttotalPrice()} €</h5>
        <h5>La remise de votre panier est de {cartDiscount} €</h5>
        <h1>Le prix final de votre panier est de {counttotalPrice() - cartDiscount} €</h1>
      </Container>
    </>
  );
}
