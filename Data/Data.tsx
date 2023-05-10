import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from "@/Types";
import { BsCode } from "react-icons/bs";


const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const services: ServiceProps[] = [
  
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 10 },

];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 1,
    text: "Years of Experience",
  },
  {
    id: 5,
    number: 5,
    text: "Satisfied Customers",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/projects/tripzygo.png",
    name: "TripzyGo Travel Website",
    tools: ["ReactJs", "NextJs", "Bootstrap CSS", "AWS EC2", "MongoDB"],
    githubLink: "",
    deployedLink: "https://www.tripzygo.in",
  },
  {
    id: 2,
    img: "/projects/snippet.png",
    name: "NextJs Full Stack App - SnippetIo",
    tools: ["NextJs", "TypeScript", "Tailwind CSS", "NextAuth", "MongoDB"],
    githubLink: "https://github.com/kunal-joshi06/full-stack-snippets",
    deployedLink: "https://full-stack-snippets.vercel.app",
  },
  {
    id: 3,
    img: "projects/portfolio.png",
    name: "My Portfolio Site",
    tools: ["ReactJs", "NextJs", "TypeScript", "FramerMotion", "TailWind CSS"],
    githubLink: "",
    deployedLink: "",
  },
  {
    id: 4,
    img: "projects/notes.png",
    name: "NotesKeep App",
    tools: ["ReactJs", "Bootstrap CSS", "LocalSessionStorage"],
    githubLink: "https://github.com/kunal-joshi06/notes-app",
    deployedLink: "https://notes-app-p1xxu.vercel.app",
  },
  {
    id: 5,
    img: "projects/weatherApp.png",
    name: "Weather Forecast Website",
    tools: ["ReactJs", "Bootstrap CSS", "Axios"],
    githubLink: "https://github.com/kunal-joshi06/weather-app",
    deployedLink: "https://weather-app-p1xxu.vercel.app",
  },
  {
    id: 6,
    img: "projects/pbk.png",
    name: "Paintings By Kasana (FreeLance Work)",
    tools: ["ReactJs", "ViteJs", "Bootstrap CSS", "Whatsapp API Integration"],
    githubLink: "",
    deployedLink: "https://www.paintingsbykasana.com",
  },
  {
    id: 7,
    img: "projects/cae.png",
    name: "Cooling Air Engineering (FreeLance Work)",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap CSS", "Whatsapp API Integration"],
    githubLink: "",
    deployedLink: "https://caengineering.github.io/",
  },
  {
    id: 8,
    img: "projects/tic-tac-toe.png",
    name: "Tic-tac toe",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap CSS"],
    githubLink: "https://github.com/kunal-joshi06/tic-tac-toe",
    deployedLink: "https://tic-tac-toe-p1xxu.vercel.app",
  },
];

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 60 },
  { name: "ReactJS", level: 75 },
  { name: "NextJS", level: 65 },
  { name: "MongoDb", level: 60 },
  { name: "TailWind CSS", level: 60 },
];

const contacts: ContactsProps[] = [
  { id: 2, title: "Phone", text: "+91-9354878069" },
  { id: 3, title: "Email", text: "kunaljoshi0603@gmail.com" },
];

export {navLinks, projects, countUpItems, services, skills, contacts };
