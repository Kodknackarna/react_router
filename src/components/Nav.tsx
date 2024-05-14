import {Link} from 'react-router-dom'; 

function Nav() {

    return (
        <>
            <Link to="/"> Home </Link>
            <Link to="/about"> About</Link>
            <Link to="/login"> Login </Link>
        </>
    )
}
export default Nav 