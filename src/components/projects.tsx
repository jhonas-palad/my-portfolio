
import ProjectCard, {ProjectcardProp} from './project-card'
import qrcodeimg from '../assets/img/projects/qrcodeimg.png'
import vcardimg from '../assets/img/projects/vcardimg.png'
import chatbot from '../assets/img/projects/chatbotimg.png'
import ytimg from '../assets/img/projects/ytimg.png'
import SectionHeader from './sectionheader'


const PROJECTS : Array<ProjectcardProp>  = [
  {
      title: "QR Code Generator",
      description: "A web app tool to simplify data sharing by encoding the information in a format that is easy to distribute and access using smartphones and other devices equipped with QR code readers.",
      githublink: "https://github.com/jhonas-palad/cbi-vcard-qrcode.git",
      demolink: "https://qrcode.ubcbi.com",
      img: qrcodeimg,
  },
  {
      title: "VCard QR Code generator",
      description: "specific type of QR code generator that is designed to create QR codes containing contact information in the VCard (Virtual Contact File) format. VCard QR codes are particularly useful for quickly sharing contact details.",
      githublink: "https://github.com/jhonas-palad/cbi-url-qrgenerator.git" ,
      demolink: "https://vcard.ubcbi.com",
      img: vcardimg
    },
  {
      title: "AI College Inquiry Chatbot Mobile app for University of Batangas",
      description: "An intelligent and user-friendly chatbot designed to assist prospective students, parents, and anyone interested in gaining information about the University. Focusing on its core functionality it was implemented using a feedforward neural network.",
      githublink: "https://github.com/jhonas-palad/Chatbot-MobileApp.git",
      img:chatbot
    },
    {
      title: "Youtube to MP3 Converter",
      description: "Converting audio from YouTube videos into MP3 audio files. This conversion allows users to extract the audio content from YouTube videos and save it in a more portable and versatile format, namely the MP3 file format.",
      githublink: "https://github.com/jhonas-palad/yt2mp3.git", 
      img: ytimg
    }

]

const Projects = () => {
  return (
    <div className='h-full min-h-[100vh] py-10 lg:px-0 px-10 flex flex-col items-center justify-center'>
      <SectionHeader title='Projects'>
      Take a look at something I've worked on, such as a case
        study, real project, and more
      </SectionHeader>
      <div className='projects mt-10 flex flex-wrap'>
        {
          PROJECTS.map((project, index)=>(
            <ProjectCard key={index} {...project}/>
          ))
        }
      </div>
    </div>
    
  )
}

export default Projects