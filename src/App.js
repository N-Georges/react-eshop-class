import React, { Component } from 'react';
import Article from './components/Article';
import iguane from './assets/iguane.jpeg';
import lezard from './assets/lezard.jpeg';
import cameleon from './assets/cameleon.jpg';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Panier from './components/Panier';


class App extends Component {
  state = {
    argent: 1000,

    panier : [],

    article : [
      {
        picture: iguane,
        name: 'Iguane',
        prix: 150,
        stock: 3
      },
      {
        picture: lezard,
        name: 'Lezard',
        prix: 190,
        stock: 4
      },
      {
        picture: cameleon,
        name: 'Cameleon',
        prix: 250,
        stock: 6
      },
    ]
  }
  
  acheter = (i) => {
    let copie = this.state;
    if (copie.argent < copie.article[i].prix || copie.article[i].stock === 0) {
      let a =  copie.argent < copie.article[i].prix ? "no money:": "pas de stock"
      return console.log(a)
    }
    copie.argent -= copie.article[i].prix
    copie.article[i].stock -= 1
    copie.panier.push(copie.article[i])
    this.setState(copie)
    console.log(copie.panier);
  }
  
  render() {
    return (
      <div>
        <Box sx={{ m:4 }}>
          <Typography gutterBottom variant="h4">
            Mon argent: { this.state.argent }$ 
          </Typography>
        </Box>
        <Container sx={{ display: 'flex', justifyContent: 'center', }}>
          {this.state.article.map((item, index) => (
            <Article
            onChildClick={()=>this.acheter(index)}
            key={`${item.name}-${index}`}
            picture={item.picture}
            name={item.name}
            prix={item.prix}
            stock={item.stock}
            />
          ))}
        </Container>
        <Typography sx={{ m:4 }} gutterBottom variant="h4">
          Mon panier:
        </Typography>
        {this.state.panier.map((item, index) => (
            <Panier
            key={`${item.name}-${index}`}
            name={item.name}
            prix={item.prix}
            stock={item.stock}
            />
          ))}
        {/* <Panier 
        
        /> */}
      </div>
    );
  }
}

export default App;
