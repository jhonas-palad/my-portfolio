import DownloadBtn from './downloadbtn'
import { TypeAnimation } from 'react-type-animation'
const MyDescription = () => {
  return (
    <div className='my-description'>
      <p className='text-left'>
        - About me
      </p>
        <TypeAnimation
        className='typing hidden'
          style={{display:'inline-block', whiteSpace:'pre-line'}}
          sequence={
            ['Programmer and Developer, based in Philippines.', 2000]
          }
        />
      <p>
      Passionate about turning lines of code into functional solutions. Always seeking new challenges and opportunities for growth.
      </p>
        <div className='mt-4'>
          <DownloadBtn/>
        </div>
      </div>
  )
}

export default MyDescription