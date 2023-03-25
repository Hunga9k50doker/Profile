import {
  project_1_img_01,
  project_1_img_02,
  project_1_img_03,
  project_1_img_04,
  project_1_img_05,
  project_2_img_01,
  project_2_img_02,
  project_2_img_03,
  project_4_img_01,
  project_4_img_02,
  project_4_img_03,
  project_6_img_01,
  project_6_img_02,
  project_6_img_03,
  project_6_img_04,
  project_6_img_05,
} from "../img";

const arrProj = [
  {
    title: "Cimigo",
    img: project_6_img_01,
    thumb: [project_6_img_02, project_6_img_03, project_6_img_04, project_6_img_05],
    path: "https://rapidsurvey.cimigo.com/project",
    desc: "Market Survey website",
    frontend: "ReactJs, TypeScript,Redux, SASS, MUI,...",
    backend: "Nodejs, Mysql,...",
    otherDesc: "I joined the project as a web Front-end role. My mission is to customize, upgrade, and optimize the website",
  },
  {
    title: "Price Guide",
    img: project_4_img_01,
    thumb: [project_4_img_01, project_4_img_02, project_4_img_03],
    path: "https://www.priceguide.cards/",
    desc: "Collection pricing website",
    frontend: "NextJs, TypeScript, SASS,...",
    backend: "Python, Docker, Firebase,...",
    otherDesc:
      "Nothing!!!",
  },
  {
    title: "Setsail",
    img: project_1_img_01,
    thumb: [project_1_img_02, project_1_img_03, project_1_img_04, project_1_img_05],
    path: "https://setail.vercel.app/",
    desc: "This travel website is my first product, taking UI ideas from an existing teamplate and I developed it on the React JS library platform. There is currently no Backend section. You can check out the website using the link below. Thanks!",
    frontend: "HTML, CSS, JS, ReactJs",
    backend: "Coming soon",
    otherDesc: "Nothing!!!",
  },
  {
    title: "Diamond",
    img: project_2_img_01,
    thumb: [project_2_img_01, project_2_img_02, project_2_img_03],
    path: "https://fe-shop-trang-suc.vercel.app/",
    desc: "This is a website that sells jewelry. Features like login, register, adding, editing, deleting, searching, add review, filter, order management, invoice details ...",
    frontend: "HTML , JSX , JS, CSS(SCSS), ReactJs ",
    backend: "Nodejs-ExpressJs, MongoDB",
    otherDesc: "Nothing!!!",
  },
];

export default arrProj;
