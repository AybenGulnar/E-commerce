import React, {useState} from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';


export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item name="home" onClick={() => history.push('/')}/>
            <Menu.Item name="Shop" onClick={() => history.push('/product/add')}/>
            <Menu.Item name="Order" onClick={() => history.push('/order')} />
            <Menu.Item name="Product" onClick={() => history.push('/api/products')}/>
            <Menu.Item name="Payment" onClick={() => history.push('/payment')} />

            <Menu.Menu position="right">
              {cartItems.length>0&&<CartSummary/>}
              {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>
                  :<SignedOut signIn={handleSignIn}/>}
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
  );
}