import { useState } from 'react'
import ListItem from './Components/ListItem'
import contentsType from '@/Interface/home'

const Home = () => {
  const [contents, setContents] = useState<contentsType[]>([
    {
      id: '0',
      title: '제목1',
      tags: ['JavaScript', 'Node', 'HTML', 'React'],
      date: '2022-07-15',
    },
  ])

  return (
    <section>
      {contents.map((c) => (
        // <ListItem key={c.id} id={c.id} title={c.title} tags={c.tags} date={c.date} />
        <ListItem key={c.id} content={c} />
      ))}
    </section>
  )
}

export default Home
