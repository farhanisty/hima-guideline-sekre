const ContentBox = ({children}) => {
  return (
    <section className="mt-3 px-3 md:p-0 rounded border border-[#000]">
      {children}
    </section>
  )
}

ContentBox.Header = ({children}) => {
  return (
    <header className="border-b border-[#000] flex justify-between">
      {children}
    </header>
  )
}

ContentBox.Header.Title = ({children}) => {
  return <h2 className="uppercase font-semibold text-xl p-2">{children}</h2>
}

ContentBox.Header.Right = () => {
  return <div>
    <input className="border rounded px-2 py-1 focus:outline-none" type="text" placeholder="search..." />
  </div>
}

ContentBox.Body = ({children}) => {
  return (
    <div className="p-3">
      {children}
    </div>
  )
}

export default ContentBox;
