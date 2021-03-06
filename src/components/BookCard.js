
import React, { useContext, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Card, Image } from "semantic-ui-react";
import { CartContext } from "../App";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Button }from '@mui/material';

export default function BookCard({ data }) {
  const { addToCart } = useContext(CartContext);
  const [anim, setAnim] = useState(false);
  const props = useSpring({ to: { x: anim ? 0 : 1 } });

  function handleAddToCart(data) {
    setAnim(!anim);
    addToCart(data);
  }


    return (
      <Card style={{ height: "100%" }}>
        <Image src={data.cover} wrapped ui={false} style={{ width: "100%" }} />
        <Card.Content>
          <Card.Header className="title-book">{data.title}</Card.Header>
          <Card.Meta>
            <span>Prix : {data.price} €</span>
          </Card.Meta>
          <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content extra>
        <animated.div
          style={{
            transform: props.x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.95, 1.1, 0.95, 1.1, 1.03, 1]
              })
              .interpolate(x => `scale(${x})`)
          }}
        >
          <Button
            name="Ajouter au panier"
            size="big"
            onClick={() => handleAddToCart(data)}
            style={{ cursor: "pointer" }}
            > 
            <LocalMallIcon />
            Ajouter au panier
          </Button>
        </animated.div>
      </Card.Content>
    </Card>
  );
}