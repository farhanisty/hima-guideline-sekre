const InformationBox = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

InformationBox.Title = ({children}) => {
  return (
    <h2 className="font-semibold bg-secondary d-block w-full p-2">{children}</h2>
  )
}

InformationBox.Body = ({children}) => {
  return (
    <ul className="p-5 list-disc">
      {children}
    </ul>
  )
}

InformationBox.Item = ({children}) => {
  return <li className="mb-2">{children}</li>
}

export default InformationBox;
