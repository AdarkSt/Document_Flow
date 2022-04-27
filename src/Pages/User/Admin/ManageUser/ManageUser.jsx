import { useCallback, useState, useEffect } from "react";
import UsersService from "../../../../Services/UsersService";
import { Table } from "../../../../Components/Material/DataDisplay/Table/Table";
import { Loading } from "../../../../Components/Loading/Loading";
import { EditDialog } from "../EditDialog/EditDialog";
import {toast} from "react-toastify"

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import "./ManageUser.css"
import { DeleteDialog } from "../DeleteDialog/DeleteDialog";
import { useLocation } from "react-router-dom";
import { CreateDialog } from "../CreateDialog/CreateDialog";

export const ManageUser = props => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation()
    const globalUser = location.state

    const fetchUsers = useCallback(async()=> {
        try{
            setLoading(true)
            const response = await UsersService.getUsers()
            const data = await response.json()
            setData(data.filteredUsers)
            setLoading(false)
        }
        catch (error) {
            toast.error("Կապի խափանում")
        }
    }, [])
    
    const handleEdit = async (formValue) => {
        try{
            const res = await UsersService.updateUser(formValue)
            if(res.status === 404){
                toast.error("Աշխատակիցը գոյություն չունի բազայում")
            } else {
                setLoading(true)
                await fetchUsers()
                setLoading(false)
                toast.success("Թարմացված է հաջողությամբ")
            }
        } 
        catch (error) {
            toast.error("Կապի խափանում")
        }
    }

    const handleDelete = async (user) => {
        try{
            const res = await UsersService.deleteUser(user)
            if(res.status === 404){
                toast.error("Աշխատակիցը գոյություն չունի բազայում")
            } else {
                setLoading(true)
                await fetchUsers()
                setLoading(false)
                toast.success("Ջնջված է հաջողությամբ")
            }
        }
        catch (error) {
            toast.error("Կապի խափանում")
        }
    }

    const handleCreate = async (newUser) => {
        try{
            const res = await UsersService.createUser(newUser)
            if(res.status === 401){
                toast.error("Կայքի աշխատանքը խափանված է")
            } else {
                setLoading(true)
                await fetchUsers()
                setLoading(false)
                toast.success("Ավելացված է հաջողությամբ")
            }
        } 
        catch (error) {
            toast.error("Կապի խափանում")
        }
    }

    const tableData = data.map(item => ({
        id: item.id,
        first_name: item.first_name,
        last_name:item.last_name,
        email: item.email,
        position: item.position,
        role: item.role === "user" ? "օգտ․" : "համ․",
        action: <div>
                    <EditDialog openBtn={<EditIcon/>} handleAccept={handleEdit} user={item} acceptBtn="Թարմացնել" dialogTitle="Ներմուծեք աշխատակցի նոր տվյալներ" denyBtn="Չեղարկել"/>
                    <DeleteDialog openBtn={<DeleteForeverIcon/>} user={item} handleAccept={handleDelete} acceptBtn="Ջնջել" dialogTitle="Համոզված ե՞ք որ ուզում եք ջնջել տվյալ աշխատակցին" denyBtn="Չեղարկել"/>
                </div>
    })).filter((user) => user.id !== globalUser.id)
    
    const colls = [
        {
            key: "first_name",
            label: "Անուն"
        },
        {
            key: "last_name",
            label: "Ազգանուն",
        },
        {
            key: "email",
            label: "Էլ․ հասցե"
        },
        {
            key: "position",
            label: "Բաժին"
        },
        {
            key: "role",
            label: "Դիրք"
        },
        {
            key: "action",
            label: "Ղեկավարում"
        }
    ]

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);

    return(
        
        <>
            <CreateDialog openBtn={<span><GroupAddIcon/> Ավելացնել աշխատակից</span> } handleAccept={handleCreate} acceptBtn="Ստեղծել" denyBtn="Չեղարկել" dialogTitle="Ներմուծեք նոր աշխատակցի տվյալները"/>
            <div className="tableContainer scrollbar-rare-wind">
                {loading ? <Loading/> :<Table colls={colls} data={tableData}/>}
            </div>
        </>
        
    )
}