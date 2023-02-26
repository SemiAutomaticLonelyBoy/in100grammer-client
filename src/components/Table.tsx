import React from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {UserProps} from "../types/types";


const rows: UserProps[] = [
    { id: '1', username: 'Snow', fullName: 'Jon', description: 'Jon',followers: 123, following: 123, postsAmount: 123, lastPost: new Date(),
        phone: '123', email: '123', site: '123', potentiallyBusiness: true, business: true, businessCategory: '123', countryCode: '123', countryReason: '123'},

];

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'username', headerName: 'username', width: 100 },
    { field: 'fullName', headerName: 'fullName', width: 100 },
    { field: 'description', headerName: 'description', width: 100 },
    { field: 'followers', headerName: 'followers', width: 100 },
    { field: 'following', headerName: 'following', width: 100 },
    { field: 'postsAmount', headerName: 'postsAmount', width: 100 },
    { field: 'lastPost', headerName: 'lastPost', width: 100 },
    { field: 'phone', headerName: 'phone', width: 100 },
    { field: 'email', headerName: 'email', width: 100 },
    { field: 'site', headerName: 'site', width: 100 },
    { field: 'potentiallyBusiness', headerName: 'potentiallyBusiness', width: 100 },
    { field: 'business', headerName: 'business', width: 100 },
    { field: 'businessCategory', headerName: 'businessCategory', width: 100 },
    { field: 'countryCode', headerName: 'countryCode', width: 100 },
    { field: 'countryReason', headerName: 'countryReason', width: 100 },

];
interface TableProps {
    users: UserProps[];
}
const Table:React.FC<TableProps> = (users) => {
    console.log(users);
    return (
        <div>
            <div style={{ height: '500px', width: '100vw', padding: '30px'}}>
                <DataGrid
                    rows={users.users}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </div>
    );
};

export default Table;