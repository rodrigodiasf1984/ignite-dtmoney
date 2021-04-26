import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model } from 'miragejs';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id:1, 
          title: 'Freelance website', 
          type: 'deposit', 
          category: "Dev",
          amount: 6000, 
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id:2, 
          title: 'Freelance website', 
          type: 'deposit', 
          category: "Dev",
          amount: 5000, 
          createdAt: new Date('2021-03-12 09:00:00'),
        },
        {
          id:3, 
          title: 'Pagamento aluguel', 
          type: 'withdraw', 
          category: "Casa",
          amount: 1000, 
          createdAt: new Date('2021-10-12 10:00:00'),
        },
        {
          id:4, 
          title: 'Compras', 
          type: 'withdraw', 
          category: "Casa",
          amount: 3000, 
          createdAt: new Date('2021-06-12 11:00:00'),
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')             
    }); 

    this.post('/transactions', (schema, request)=>{
      const data= JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
