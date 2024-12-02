import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard  userName="daninass">
            Daniel García
            </TwitterFollowCard>

            <TwitterFollowCard  userName="Popa">
            Sofia Nieto Alonso
            </TwitterFollowCard>
     
        </section>
    )
}