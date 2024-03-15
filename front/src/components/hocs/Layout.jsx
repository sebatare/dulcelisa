import Navbar from '../navigation/Navbar.jsx'
const Layout = (props) =>{
    return(
        <div>
            <Navbar/>
            {props.children}
        </div>
    );
}
export default Layout;