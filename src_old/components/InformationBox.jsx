const InformationBox = ({children}) => {
  return (
    <div className="border border-[#000] my-3 rounded">
      {children}
    </div>
  )
}

InformationBox.Title = ({children, background = "bg-slate-200"}) => {

  return (
    <h2 className={`font-semibold ${background} d-block w-full p-2`}>{children}</h2>
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
