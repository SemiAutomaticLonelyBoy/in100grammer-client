import React from 'react';
import {Autocomplete, Box, Button, Checkbox, FormControlLabel, InputLabel, Stack, TextField} from "@mui/material";
import {ValueProps} from "../types/types";
import {countries} from "../countries";
import UserFilter from "./UserFilter";

interface InputProps {
    value?: ValueProps;
    setValue: (value: any) => void;
    clickHandler: () => void;
}

const Input: React.FC<InputProps> = ({value, setValue, clickHandler}) => {

    const [inputValue, setInputValue] = React.useState({code: "", label: "", phone: ""});
    const countryFunction = (e: any, newValue: any) => {
        if (newValue === null) {
            setValue({...value, userCountry: {code: "", label: "", phone: ""}})
        } else {
            setValue({...value, userCountry: newValue})
        }
        ;
    };

    return (
        <Stack direction="column" spacing={2} p={2} width={"100%"} alignItems={"center"} justifyContent={"center"}>
            <Stack direction="row" spacing={2} p={2} width={"60%"} alignItems={"center"} justifyContent={"center"}>
                <TextField type="number" label="ID аккаунта" variant="outlined" fullWidth value={value?.query}
                           onChange={e => setValue({...value, query: e.target.value})}/>
                <Button variant="contained" sx={{height: "55px"}} onClick={clickHandler}>Парсинг</Button>
            </Stack>

            <Stack direction="row" spacing={2} width={"100%"} justifyContent="center">

                <Stack direction="column">
                    <InputLabel sx={{marginBottom: "10px"}}>Фильтры</InputLabel>
                    <FormControlLabel control={<Checkbox checked={value?.isBusiness} onChange={e => setValue({
                        ...value,
                        isBusiness: e.target.checked
                    })}/>} label="Бизнес"/>
                    <FormControlLabel control={<Checkbox checked={value?.isPhone} onChange={e => setValue({
                        ...value,
                        isPhone: e.target.checked
                    })}/>} label="Телефон"/>
                    <FormControlLabel control={<Checkbox checked={value?.isEmail} onChange={e => setValue({
                        ...value,
                        isEmail: e.target.checked
                    })}/>} label="Почта"/>
                    <FormControlLabel control={<Checkbox checked={value?.isSite} onChange={e => setValue({
                        ...value,
                        isSite: e.target.checked
                    })}/>} label="Сайт"/>
                    <FormControlLabel control={<Checkbox checked={value?.isCountry} onChange={e => setValue({
                        ...value,
                        isCountry: e.target.checked
                    })}/>} label="Страна"/>
                </Stack>

                <Stack direction="column" spacing={2}>
                    <InputLabel>Страна и поиск по полям</InputLabel>
                    <Autocomplete
                        value={value?.userCountry}
                        onChange={countryFunction}
                        inputValue={inputValue.label}
                        onInputChange={(event, newInputValue) => {
                            setInputValue((prev) => ({...prev, label: newInputValue}));
                        }}
                        id="controllable-states-demo"
                        options={countries}
                        sx={{width: 300}}
                        renderInput={(params) => <TextField {...params} label="Выбор страны"/>}
                    />
                    <UserFilter value={value} setValue={setValue}/>
                </Stack>

                <Stack direction="column" spacing={2}>
                    <InputLabel>Поиск по количеству подписчиков</InputLabel>
                    <TextField type="number" label="Минимальное" variant="outlined" fullWidth
                               value={value?.minFollowers}
                               onChange={e => setValue({...value, minFollowers: e.target.value})} sx={{width: 300}}/>
                    <TextField type="number" label="Максимальное" variant="outlined" fullWidth
                               value={value?.maxFollowers}
                               onChange={e => setValue({...value, maxFollowers: e.target.value})} sx={{width: 300}}/>
                </Stack>
            </Stack>

        </Stack>
    );
};

export default Input;