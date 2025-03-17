const ContentBox = ({children}) => {
  return (
      <section className="mt-3">
        {children}
      </section>
  )
}

ContentBox.Header = ({children}) => {
  return (
    <header className="border-b flex justify-between">
      {children}
    </header>
  )
}

ContentBox.Header.Title = ({children}) => {
  return <h2 className="uppercase font-semibold text-xl mb-3">{children}</h2>
}

ContentBox.Header.Right = () => {
  return <div>
    <input className="border rounded px-2 py-1 focus:outline-none" type="text" placeholder="search..." />
  </div>
}

ContentBox.Body = ({children}) => {
  return (
    <div className="pt-3">
      {children}
    </div>
  )
}

export default ContentBox;
