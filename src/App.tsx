import React, {useEffect, useState} from 'react';
import './App.css';
import Input from "./components/Input";
import {Container} from "@mui/material";
import Table from "./components/Table";
import axios from "axios";
import {UserProps, ValueProps} from "./types/types";
import {DefaultApi} from "./services/api";
import UserFilter from "./components/UserFilter";


const App = () => {
    const defaultApi = new DefaultApi();
    const [value, setValue] = useState<ValueProps>({
        query: '',
        isBusiness: false,
        isPhone: false,
        isEmail: false,
        isSite: false,
        userCountry: {code: '', label: '', phone: ''},
        isCountry: false,
        filterKey: '',
        filterValue: '',
        maxFollowers: "",
        minFollowers: "",
    });


    async function postUser() {
        try {
            const response = await defaultApi.appControllerEnqueue({id: value.query});
            console.log(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    const clickHandler = () => {
        postUser();
    };


    return (
        <Container sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <Input value={value} setValue={setValue} clickHandler={clickHandler}/>

            <Table value={value}/>
        </Container>
    );
};

export default App;