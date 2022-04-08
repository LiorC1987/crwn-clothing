import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop.component";
function App() {
return (
  <Routes>
    <Route path='/' element={  <Navigation />}>
      <Route index element={<Home />} />
      <Route path='sign-in' element={<Authentication />} />
      <Route path='shop' element={<Shop />} />
      </Route>
  </Routes>

)

}

export default App;
