import React, {useEffect} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {ValueProps} from "../types/types";

interface UserFilterProps {
    value?: ValueProps;
    setValue: (value: any) => void;
}
const UserFilter:React.FC<UserFilterProps> = ({value, setValue}) => {
    const [filter, setFilter] = React.useState("");
    const [finder, setFinder] = React.useState("");

    useEffect(() => {
    // @ts-ignore
        setValue((prev: ValueProps)=>({...prev, filterKey: filter, filterValue: finder}))
    }, [finder, filter]);
    const handleChange = (event: SelectChangeEvent) => {
        setFilter(String(event.target.value));
        setFinder('');
    };

    return (

        <FormControl fullWidth sx={{display: "flex", gap: "20px"}}>
            <InputLabel>Поиск по полю</InputLabel>
            <Select
                value={filter}
                label="Поиск по полю"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"filterUsername"}>Имя пользователя</MenuItem>
                <MenuItem value={"filterFullName"}>Полное имя</MenuItem>
                <MenuItem value={"filterEmail"}>Почта</MenuItem>
                <MenuItem value={"filterSite"}>Сайт</MenuItem>
                <MenuItem value={"filterBusinessCategory"}>Категория бизнеса</MenuItem>
            </Select>
            {filter === "" ? <></> : <TextField value={finder} onChange={event => setFinder(event.target.value)} label="Значение"/>}
        </FormControl>


    );
};

export default UserFilter;