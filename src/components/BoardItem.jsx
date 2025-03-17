const BoardItem = ({children}) => {
  return (
    <article className="bg-slate-200 md:w-[20%] md:h-[150px] rounded-lg overflow-hidden">
      {children}
    </article>
  )
}

BoardItem.Header = ({children}) => {
  return <h1 className="bg-slate-400 p-3">{children}</h1>
}

BoardItem.Body = ({children}) => {
  return <div className="p-3 text-xs">{children}</div>
}

export default BoardItem;
