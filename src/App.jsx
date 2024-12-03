import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'daninass',
    name: 'Daniel García Guerrero',
    isFollowing: true
  },
  {
    userName: 'popa',
    name: 'Sofía Nieto Alonso',
    isFollowing: false
  },
  {
    userName: 'Patt',
    name: 'Patricia Sánchez Mòlla',
    isFollowing: true
  },
  {
    userName: 'Arlette',
    name: 'Arlet Mòlla García',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}