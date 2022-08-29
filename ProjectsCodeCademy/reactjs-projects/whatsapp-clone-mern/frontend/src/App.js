import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
//import { Button } from "@chakra-ui/react"; // provides some UI components.


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/chats" element={<ChatPage />} />
        {/* <Route path='/login' element={<Login />} />
          <Route path='/orders' element={[<Header />, <Orders />]} />
          <Route path='/checkout' element={[<Header />, <Checkout />]} />
          <Route path='/payment' element={[<Header />, <Elements stripe={stripePromise} > <Payment/> </Elements>]} /> {/*whole component PAYMENT you're showing here should be wrapped by Elements, not some part of. <Elements stripe={stripePromise} > <Payment/> </Elements> */}
        {/* <Route path="/" element={[<Header />, <Home />]} /> */}
      </Routes>
      {/* <Button colorScheme="pink">Button</Button> */}
    </div>
  );
}

export default App;
