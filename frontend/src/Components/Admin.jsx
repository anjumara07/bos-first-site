import {Login} from './Login';
import {useSelector} from 'react-redux'

export const Admin =()=>{
    const isLoggedIn = useSelector((store) => store.reducer.isLoggedIn)
    return (
        <>
           {isLoggedIn ? <h1>Admin</h1>:<Login />}
        </>
    )
}