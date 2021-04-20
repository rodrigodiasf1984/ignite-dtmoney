import React, { useState } from "react";
import {NewTransactionModal} from './components/NewTransactionModal';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const[isNewTransactionModalOpen,setIsNewTransactionModalOpen]=useState(false);

  const handleOpenNewTransactionModal=()=>{
    setIsNewTransactionModalOpen(true);
  }
  const handleCloseNewTransactionModal=()=>{
    setIsNewTransactionModalOpen(false);
  }
  return (    
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}  />
      <GlobalStyle/>
      <h1>Hello World</h1>
    </>
  );
}
