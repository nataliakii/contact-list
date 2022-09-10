/* eslint-disable react/prop-types */
// route component whic is itself a contact list , which is switching to adding new ones and displaying a contact list on clicking the name/photo???

import { Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import Adding from './Adding';
import ContactList from './ContactList';

const Contacts = ({ contacts, addContact }) => (
  <Switch>
    <Route
      exact
      path="/contacts"
      render={() => <ContactList contacts={contacts} />}
    />

    <Route
      path="/contacts/new"
      render={(routerProps) => (
        <Adding
          history={routerProps.history}
          contacts={contacts}
          addContact={addContact}
        />
      )}
    />
    <Route
      path="/contacts/:id"
      render={(routerProps) => (
        <Contact
          contactId={parseInt(routerProps.match.params.id, 10)}
          contacts={contacts}
        />
      )}
    />
  </Switch>
);

export default Contacts;
