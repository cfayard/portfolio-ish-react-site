import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Nav from './Nav';

const headerContent = 'Best website ever!'

const linkNames = [
  'Home',
  'Portfolio',
  'Cat Pictures',
  'Contact'
];

const footerLinks = [
  {
    href: "mailto:me@me.com",
    text: "Email me!"
  }
]

const mainContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error cupiditate fugiat, doloremque consequatur, soluta maiores in tempora quo aliquid veniam blanditiis aliquam, sit sapiente nobis nisi accusamus eveniet maxime!'

function App() {
  return (
    <div className="container-fluid"> 
      {/* select div to style entire page like body */}
    <Header
      title={headerContent}
    />
    <Nav
      links={linkNames}
     />
    <MainContent
      content={mainContent}
    />
    <Footer />
    
    </div>
  );
}

export default App;
