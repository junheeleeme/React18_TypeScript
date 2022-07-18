import contentsType from '@/Interface/home'

const ListItem = ({ content }: { content: contentsType }) => {
  console.log(content)
  return (
    <article>
      <h3>{content.title}</h3>
      <ul>
        {content.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <p>{content.date}</p>
    </article>
  )
}

export default ListItem
