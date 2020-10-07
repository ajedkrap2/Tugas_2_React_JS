import React from 'react';
import "./App.css"

import Header from "./Pages/header"
import Footer from "./Pages/footer"
import MenuUtama from "./Pages/MenuUtama"
import MenuTentangKami from "./Pages/MenuTentangKami"
import MenuMakanan from "./Pages/MenuMakanan"
import MenuKontak from "./Pages/MenuKontak"

function App() {
  return (
    <div>
      <Header />
      <MenuUtama />
      <MenuMakanan />

      <MenuTentangKami />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
