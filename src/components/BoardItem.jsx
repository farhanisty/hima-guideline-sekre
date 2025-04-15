import { AlertDialog } from "radix-ui";

const BoardItem = ({children, header}) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <div className="group h-[250px] overflow-hidden bg-white rounded-xl p-5 cursor-pointer hover:bg-secondary hover:text-white hover:-rotate-1 transition-transform">
          <BoardItem.Header>{header}</BoardItem.Header>
          {children}
        </div>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-slate-600 bg-opacity-80 data-[state=open]:animate-overlayShow" />
        <AlertDialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] overflow-scroll min-w-[40vw] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[#fff] focus:outline-none data-[state=open]:animate-contentShow">
          <AlertDialog.Title className="m-0 text-[17px] font-medium text-mauve12">
          <BoardItem.Header>{header}</BoardItem.Header>
          </AlertDialog.Title>
          <AlertDialog.Description className="mb-5 mt-[15px] text-[15px] leading-normal text-mauve11">
            {children}
          </AlertDialog.Description>
          <div className="flex justify-end gap-[25px]">
            <AlertDialog.Cancel asChild>
              <button className="inline-flex h-[35px] items-center justify-center rounded bg-mauve4 px-[15px] font-medium leading-none text-mauve11 outline-none outline-offset-1 hover:bg-mauve5 focus-visible:outline-2 focus-visible:outline-mauve7 select-none">Close</button>
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>

  )
}

BoardItem.Header = ({children}) => {
  return <h2 className="group-hover:text-white font-semibold text-secondary text-lg">{children}</h2>
}

BoardItem.Body = ({children}) => {
  return <div className="pt-2">{children}</div>
}

export default BoardItem;
