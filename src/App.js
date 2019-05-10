// in src/App.js
import React from 'react';
import { Admin, Resource,} from 'react-admin';
import { UserList } from './user';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  // <Admin dataProvider={dataProvider}>
  // <Resource name="users" list={UserList} />
  // </Admin>
    <React.Fragment>
      <h1>Hello 1</h1>
      <h1>Hello 2</h1>
    <Admin dataProvider={dataProvider}>
    <h1>Hello 3</h1>
      <h1>Hello 4</h1>
    <Resource name="users" list={UserList} />
    <h1>Hello 5</h1>
      <h1>Hello 6</h1>
    </Admin>
    <h1>Hello 7</h1>
      <h1>Hello 8</h1>
    </React.Fragment>
);

export default App;