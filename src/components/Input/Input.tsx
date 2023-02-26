import React from 'react';
import {Button, Stack, TextField} from "@mui/material";

interface InputProps {
    value?: string;
    setValue: (value: string) => void;
}

const Input: React.FC<InputProps> = ({value, setValue}) => {
    const clickHandler = () => {
        console.log(value);
    };

    return (
        <Stack direction="row" spacing={2} p={2} width={"60%"} alignItems={"center"} justifyContent={"center"}>
            <TextField label="Поиск" variant="outlined" fullWidth value={value}
                       onChange={e => setValue(e.target.value)}/>
            <Button variant="contained" size={"large"} sx={{height: "55px"}} onClick={clickHandler}>Найти</Button>
        </Stack>
    );
};

export default Input;