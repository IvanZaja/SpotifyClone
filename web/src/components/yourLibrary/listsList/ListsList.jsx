
function ListsList({ lists }) {
  return (
    <div>
        {lists.map((list) => (
          <a href={`/list/${list.id}`} key={list.id} className="flex items-center space-x-2 py-2">
            <img src={list.images[2].url} alt={list.name} className="w-8 h-8 rounded-full" />
            <h1 className="text-sm">{list.name}</h1>
          </a>
        ))}
    </div>
  )
}

export default ListsList