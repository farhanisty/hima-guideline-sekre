const BoardItem = ({children}) => {
  return (
    <div className="bg-white rounded-xl p-5 hover:bg-secondary hover:text-white hover:-rotate-1 transition-transform">
      {children}
    </div>
  )
}

BoardItem.Header = ({children}) => {
  return <h2 className="font-semibold text-secondary text-lg">{children}</h2>
}

BoardItem.Body = ({children}) => {
  return <div className="pt-2">{children}</div>
}

export default BoardItem;
