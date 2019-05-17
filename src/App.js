// in src/App.js
import React from 'react';
import { Admin, Resource,} from 'react-admin';
import { UserList } from './user';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
  <Resource name="users" list={UserList} />
  </Admin>
);

export default App;