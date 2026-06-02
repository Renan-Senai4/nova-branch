import "./Sidebar.css";
import { LayoutDashboard, User } from 'lucide-react';

export function Sidebar({ activeTab, setActiveTab }) {
    return (
        <aside className="kuchi-sidebar">
            <h2 className="logo">Kuchi_</h2>

            <nav>
                <div className={`nav-item ${activeTab === 'dash' ? 'active' : ''}`} onClick={() => setActiveTab('dash')} >

                    <LayoutDashboard size={20} />Menu</div>

                <div className={`nav-item ${activeTab === 'favorites' ? 'active' : ''}`} onClick={() => setActiveTab('favorites')} >

                    Carrinho</div>

                <div className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')} >

                    <User size={20} />Perfil</div>

            </nav>

        </aside>
    )
}

