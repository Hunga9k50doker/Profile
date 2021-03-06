import {
  project_1_img_01,
  project_1_img_02,
  project_1_img_03,
  project_1_img_04,
  project_1_img_05,
  project_2_img_01,
  project_2_img_02,
  project_2_img_03,
} from "../img";

const arrProj = [
  {
    title: "Setsail",
    img: project_1_img_01,
    thumb: [
      project_1_img_02,
      project_1_img_03,
      project_1_img_04,
      project_1_img_05,
    ],
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
