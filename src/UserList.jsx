import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchUsers,adduser } from "./redux/userSlice"

const UserList = () =>{
    const dispatch = useDispatch()
    const {userList, loading, error } = useSelector(state => state.users)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    
    const handleDelete = (id) =>{
        console.log("Delete id :"+id)
    }

    return(
        <>
            <h3>User List</h3>    
                <ul className="list-group">        
                    {userList.map(user => (
                        <li key={user.id} className="list-group-item">
                            {user.name} {user.email}
                            <button type="button" className="btn btn-danger btn-sm ms-3"
                            onClick={()=>handleDelete(user.id)}>Delete</button>
                            </li>
                       
                    ))}
                </ul>
        </> 
    )
}

export default UserList