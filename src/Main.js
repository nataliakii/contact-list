import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import Contacts from './Contacts';
import './App.css';

const Main = () => {
  const [contacts, setContacts] = useState([
    {
      id: 70219577,
      name: 'Johnny Depp',
      imageUrl:
        'https://i0.wp.com/www.giantfreakinrobot.com/wp-content/uploads/2022/05/johnny-depp-benny-joon.jpg?ssl=1',
      email: 'johnny@example.com',
      phoneNumber: '1555',
    },
    {
      id: 70219578,
      name: 'Albert Einstein',
      imageUrl: 'https://scx1.b-cdn.net/csz/news/800a/2015/alberteinste.jpg',
      email: 'aeinstein@example.com',
      phoneNumber: '155',
    },
  ]);

  const addContact = (contact) => {
    const newContacts = [...contacts, contact];
    return setContacts(newContacts);
  };
  console.log(contacts);

  return (
    <main>
      <Switch>
        <Route
          path="/contacts"
          render={() => (
            <Contacts contacts={contacts} addContact={addContact} />
          )}
        />
      </Switch>
    </main>
  );
};

Main.propTypes = {
  contacts: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    imageUrl: urlPropType.isRequired,
  }),
};

export default Main;
