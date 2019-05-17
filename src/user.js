import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = (props) => (
    <React.Fragment>
    <h1>Hello</h1>
    <div style={{borderWidth: '1px', borderColor:"black", backgroundColor: "violet"}}>
    </div>
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List> 
    </React.Fragment>
);