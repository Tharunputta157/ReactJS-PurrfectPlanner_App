import {Link } from 'react-router-dom';
export const Navbar = () =>{
    return(
        <nav className='Navbar'>
            <div className='nav-container'>
                
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <Link  to='/' class = "navlink">Home</Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link  to='/todo' class= "navlink">📋Todo</Link>

                        </li>
                        <li className='nav-item'>
                            <Link  to ='/Catfact' class= "navlink" >🐾Catfact</Link>
                        </li>
                        <li className='nav-item'>
                            <Link  to ='/Login' class="navlink">🔐Login</Link>
                        </li>
                
                    
                    
                
                    </ul>
                </div>
                
                
            
        </nav>
    )
    
}