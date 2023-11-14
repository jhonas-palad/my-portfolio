import {FiDownload} from 'react-icons/fi'
import '../assets/css/downloadbtn.css'
const DownloadBtn = () => {
  return (
    <a className="downloadbtn text-white" target='_blank' href='https://drive.google.com/file/d/1z_dd4FZecGBqWdC5TjgLEJ-3hXF_R4xC/view?usp=sharing'>
      <p className="text text-white text-xs md:text-sm font-light">Download CV</p>
      <span className="icon-container"> 
        <FiDownload className="text-white text-base"/>
      </span>
    </a>
  )
}

export default DownloadBtn