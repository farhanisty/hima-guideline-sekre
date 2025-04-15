import LogoGdrive from "../assets/logo-gdrive.png"
import { IoCopyOutline } from "react-icons/io5"
import { useState } from "react"
import { Toast } from "radix-ui";

export default function CardDrive({title, link}) {
  const [openCopyToast, setOpenCopyToast] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.error('Gagal menyalin teks:', err);
    }
  };


  return (
      <a href={link} className="rounded w-full flex items-center justify-between bg-slate-100 hover:bg-slate-200 cursor-pointer p-3" target="_blank">
        <div className="flex gap-5">
          <img src={LogoGdrive} alt="Logo Google Drive" className="w-[40px] h-[40px]"/>
          <h3>{title}</h3>
        </div>
        <button className="hover:bg-slate-500 p-2 group rounded" onClick={handleCopy}>
          <IoCopyOutline className="w-[25px] h-[25px] group-hover:text-white" />
        </button>
      </a>
  )
}
