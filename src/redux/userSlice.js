import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import BASE_URL = import.meta.env.BASE_URL

export const fetchUsers = createAsyncThunk('user/fetchUsers',async ()=>{
    const response = await axios.get('https://ca308a79edc058bfc7ba.free.beeceptor.com/api/users/')
    return response.data
})

export const adduser = createAsyncThunk('user/addUser',async (user)=>{
    const response = await axios.post('https://ca308a79edc058bfc7ba.free.beeceptor.com/api/users/',user)
    return response.data
})

const userSlice = createSlice({
    name:"users",
    initialState:{
        userList:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
       builder
       .addCase(fetchUsers.pending,(state)=>{
        state.loading = false
       })
       .addCase(fetchUsers.fulfilled,(state,action)=>{
        state.loading = true
        state.userList = action.payload
       })
       .addCase(adduser.pending,(state)=>{
        state.loading = false
       })
       .addCase(adduser.fulfilled,(state,action)=>{
        state.loading = true
        state.userList.push(action.payload)  
       })
    }
    
    
})

export default userSlice.reducer