const Card = ({children, className}) => {
  return (
    <div className={`bg-primary rounded-xl p-3 text-white ${className}`}>
      {children}
    </div>
  )
}

Card.Header = ({title}) => {
  return <h2 className="text-[2rem] font-['Cormorant_Garamond'] font-bold italic">{title}</h2>
}

Card.Body = ({children}) => {
  return <div>{children}</div>
}

export default Card;
