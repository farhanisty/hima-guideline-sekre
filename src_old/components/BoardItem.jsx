const BoardItem = ({children}) => {
  return (
    <article className="border w-full min-h-[200px] md:w-[19%] md:h-[150px] rounded-lg overflow-hidden">
      {children}
    </article>
  )
}

BoardItem.Header = ({children}) => {
  return <h1 className="bg-slate-200 p-3 font-semibold">{children}</h1>
}

BoardItem.Body = ({children}) => {
  return <div className="p-3 text-xs">{children}</div>
}

export default BoardItem;
