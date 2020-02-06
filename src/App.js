import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Nav from './Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const headerContent = 'Best website ever!'

const linkNames = [
  {
    text: 'Home',
    path: '/'
}, 
{
  text: 'Blog',
  path: '/blog'
}
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
    <Router>
     <Nav
      links={linkNames}
      />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h1>You are Home</h1>
}
function Blog() {
  return <h1>You are on the blog!</h1>
}


export default App;
