import React, {useState} from 'react';
import './App.css';
import Input from "./components/Input/Input";
import {Container} from "@mui/material";
import Table from "./components/Table";
import axios from "axios";
import {UserProps} from "./types/types";

const App = () => {
    const [value, setValue] = useState<string>("");
    const [users, setUsers] = useState<UserProps[]>([{ id: '1', username: 'Snow', fullName: 'Jon', description: 'Jon',followers: 123, following: 123, postsAmount: 123, lastPost: new Date(),
        phone: '123', email: '123', site: '123', potentiallyBusiness: true, business: true, businessCategory: '123', countryCode: '123', countryReason: '123'},]);

    async function getUsers() {
        try {
            const response = await axios.get('http://localhost:3000/enqueue/' + value);
            console.log(response.data);
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <Input value={value} setValue={setValue}/>
            <Table users={users}/>
        </Container>
    );
};

export default App;