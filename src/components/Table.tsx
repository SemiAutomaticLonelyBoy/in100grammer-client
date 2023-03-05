import React, {useEffect, useState} from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {UserProps, ValueProps} from "../types/types";
import {DefaultApi} from "../services/api";

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'username', headerName: 'Имя пользователя', width: 100},
    {field: 'fullName', headerName: 'Полное имя', width: 100},
    {field: 'description', headerName: 'Описание', width: 100},
    {field: 'followers', headerName: 'Подписчики', width: 100},
    {field: 'following', headerName: 'Подписки', width: 100},
    {field: 'postsAmount', headerName: 'Количество постов', width: 100},
    {field: 'lastPost', headerName: 'Последний пост', width: 100},
    {field: 'phone', headerName: 'Телефон', width: 100},
    {field: 'email', headerName: 'Почта', width: 100},
    {field: 'site', headerName: 'Сайт', width: 100},
    {field: 'potentiallyBusiness', headerName: 'Потенциально бизнес', width: 100},
    {field: 'business', headerName: 'Бизнес', width: 100},
    {field: 'businessCategory', headerName: 'Категория бизнеса', width: 100},
    {field: 'countryCode', headerName: 'Код страны', width: 100},
    {field: 'countryReason', headerName: 'Почему', width: 100},

];

interface TableProps {
    value: ValueProps;
}

const Table: React.FC<TableProps> = ({value}) => {
    const defaultApi = new DefaultApi();
    const [page, setPage] = React.useState(0);
    const [pageSize, setPageSize] = React.useState(10);
    const [users, setUsers] = useState<UserProps[]>([]);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        getUsers(page, pageSize, value);
    }, [page, pageSize, value]);

    async function getUsers(page: number, pageSize: number, value: ValueProps) {
        try {
            const response = await defaultApi.appControllerGetAllUsers({
                skip: page * pageSize,
                take: pageSize,
                cursor: {},
                orderBy: {},
                business: value.isBusiness,
                hasPhone: value.isPhone,
                hasEmail: value.isEmail,
                hasSite: value.isSite,
                country: value.userCountry?.code,
                hasCountry: value.isCountry,
                followersMax: String(value.maxFollowers),
                followersMin: String(value.minFollowers),
                ...(value.filterKey !== '' && {[value.filterKey] : value.filterValue}),
            });
            setUsers(response.data.results ?? []);
            setTotal(response.data.total);
        } catch (error) {
            console.error(error);
        }
    }


    console.log(users);
    return (
        <div>
            <div style={{height: '500px', width: '100vw', padding: '30px'}}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    rowCount={total}
                    rowsPerPageOptions={[5]}
                    paginationMode={"server"}
                    onPageChange={(newPage) => setPage(newPage)}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    pagination
                    page={page}
                    pageSize={pageSize}
                />
            </div>
        </div>
    );
};

export default Table;