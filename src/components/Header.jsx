import './Header.css';
import { Bell, Zap } from 'lucide-react';

export function Header(){
    return(
        <header className='supernova-header'>
<div className="user-info">
<h3>Bem vindo, <span className="destaque">Renan</span></h3>
<p>Status: Online no Level 1</p>
       </div> 
       
       
       <div className="header-actions">
        <div className='badge'>
            <Zap size={14}/>
            <span>PRO PLAYER</span>
        </div>
        <button className='notificacoes'>
            <Bell size={20}/>
        </button>
       </div>
       </header>
    )
}