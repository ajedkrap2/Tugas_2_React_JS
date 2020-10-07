import React, { Component } from 'react';
import ListMenuUtama from "../ListData/ListMenuUtama"
import bg from "../Assets/food1.jpg"

class MenuUtama extends Component {

  render() {
    return (
      <div>
        <ListMenuUtama background={bg} />
      </div>
    );
  }
}


export default MenuUtama;
