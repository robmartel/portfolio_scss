import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaGitSquare, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  {
    id: 1, 
    icon: <FaGithubSquare />,
    value: "https://github.com/robmartel?tab=repositories"
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    value: "https://www.linkedin.com/in/rob-martel-1a8533b3/?originalSubdomain=ca"
  }
    // <FaInstagram />,

]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Rob Martel"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+1 234 567 890"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "rob.martel32@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <FaReact />, <FaNodeJs />, <FaSass />, <SiMongodb />, <FaGitSquare />]

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Freelance Web Developer",
    company: "Self Employed"
  },
  {
    id: 2,
    year: "2022",
    position: "Graduated from Front-end, Back-end and Fullstack bootcamp",
    company: "Nucamp"
  },
  {
    id: 3,
    year: "2021",
    position: "Beginning of my Journey",
    company: "Nucamp"
  }
]
export const highlights = [
  {
    id: 1,
    number: '2+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "20+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "15+",
    itemName: "Projects"
  },
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
   {
    id: 1,
    icon: <FaPaperPlane />,
    infoText: "rob.martel32@gmail.com"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    infoText: "+1 123-456-7890"
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    infoText: "Canada"
  },
]