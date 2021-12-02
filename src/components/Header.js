import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CartSummary from "./CartSummary";


function Header() {
    return (
        <>
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            noWrap
            color="primary"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
          <Button variant="h3">
            <Link className="button-header" to="/Book-Henri-Potier/">La bibliothèque d'Henri Potier</Link>
          </Button>
          </Typography>
          <Link to="/Book-Henri-Potier/cart" className="flex-cart" variant="h3">
              <LocalMallIcon name="cart" size="small" /> <CartSummary />
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
</>
    )
}

export default Header