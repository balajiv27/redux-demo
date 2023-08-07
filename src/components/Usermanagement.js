import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUsers as fetchUsers} from "../api/details"
import {getUsersAction} from "../redux/action"

const Usermanagement = () =>{
    const usersList = useSelector((state) => state.details);
    const dispatch = useDispatch();
    const getUsers = async () =>{
        const responseData =await fetchUsers()
        console.log('dispatched')
        dispatch(getUsersAction(responseData))
        console.log('user',usersList)
    }

    return (
        <div>
            <h1>User Management</h1>
            <button onClick={getUsers}>Get Users</button>
            {
                usersList && usersList.map((item,index)=>(
                    <ul key={index}>
                        {item.name}
                    </ul>
                )
                )
            }

        </div>
    )
}

export default Usermanagement;