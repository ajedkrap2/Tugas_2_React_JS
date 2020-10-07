import React, { Component } from 'react';

import ListMakanan from "../ListData/ListMakanan"

import NasiKentut from "../Assets/nasi-kentut.webp"
import NasiKuning from "../Assets/nasi-kuning.jpg"
import NasiPadang from "../Assets/nasi-padang.jpg"
import SateAyam from "../Assets/sate.png"
import SotoLamongan from "../Assets/sotolamongan.png"

class MenuMakanan extends Component {


  render() {
    return (
      <div>
        <h3>Daftar Makanan yang disediakan : </h3>
        <td>
          <ListMakanan pic={NasiPadang} />
        </td>
        <td>
          <ListMakanan pic={SateAyam} />
        </td>
        <td>
          <ListMakanan pic={SotoLamongan} />
        </td>
        <td>
          <ListMakanan pic={NasiKentut} />
        </td>
        <td>
          <ListMakanan pic={NasiKuning} />
        </td>
      </div>
    );
  }
}


export default MenuMakanan;
