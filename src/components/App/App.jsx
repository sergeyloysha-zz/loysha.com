import React, { Component } from 'react';
import './App.css';

import photo from 'images/photo.png';
import email from 'images/icons/email.svg';
import github from 'images/icons/github.svg';
import dribbble from 'images/icons/dribbble.svg';
import telegram from 'images/icons/telegram.svg';

const contacts = [
  {
    title: 'Send me email',
    url: 'mailto:sergeyloysha@gmail.com',
    source: email
  },
  {
    title: 'GitHub',
    url: 'https://github.com/sergeyloysha',
    source: github
  },
  {
    title: 'Dribbble',
    url: 'https://dribbble.com/loysha',
    source: dribbble
  },
  {
    title: 'Telegram',
    url: 'https://t.me/loysha',
    source: telegram
  },
]

const Header = (props) => {
  return (
    <header className="header app__header">
      <div className="photo header__photo">
        <img src={photo} alt="Sergey Loysha" className="photo__src"/>
      </div>
      <div className="info header__info">
        <h1 className="info__name">Sergey Loysha</h1>
        <div className="info__position">Front-end Developer / Digital Product Designer</div>
      </div>
    </header>
  );
}

const Copy = (props) => {
  return (
    <div className="copy app__copy">Currently front-end developer at <div className="copy__br"></div><a href="http://darwinapps.com" className="copy__link">@darwinapps</a>&nbsp;&nbsp;Also crafting front-end & <div className="copy__br"></div>design for digital products – exclusively for <div className="copy__br"></div>founders and startups.</div>
  );
}

const Contact = (props) => {
  return (
    <div className="contacts__item">
      <a href={ props.contact.url } target="_blank" className="contact contacts__link">
        <img src={ props.contact.source } title={ props.contact.title } className="contact__source"/>
      </a>
    </div>
  );
}

const Contacts = (props) => {
  return (
    <div className="contacts app__contacts">
      <div className="contacts__list">
        { props.list.map((contact, index) => <Contact key={index} contact={contact} /> ) }
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="section app__section">
          <div className="section__content">
            <Header />
            <Copy/>
            <Contacts list={ contacts } />
          </div>
        </section>
      </div>
    );
  }
}

export default App;