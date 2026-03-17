import './Sidebar.css'
import {LayoutDashboard, Gamepad2, User } from 'lucide-react';


export function Sidebar(){
    return(
        <aside className="supernova-sidebar">

<h2 className="logo">SUPERNOVA</h2>
            
            <nav>
                <div className="nav-item active"> <LayoutDashboard size={20} />Dashboard</div>
                <div className="nav-item active"> <Gamepad2 size={20} />Jogos</div>
            <div className="nav-item active"> <User size={20} />Perfil</div>
            



            </nav>

        </aside>
    )
}