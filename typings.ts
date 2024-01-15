export interface IUrl {
  url: string;
}

export interface IText {
  text: string;
}

export interface ISkills {
  id: string;
  uniqueId: number;
  proficient: boolean;
  skill: string;
  url: string;
  fieldType: string | null;
  image: IUrl;
}

export interface IJobs {
  id: string;
  company: string;
  designation: string;
  companyLinkedin: string;
  companyUrl: string;
  from: string;
  to: string;
  logo: IUrl;
}

export interface IProjects {
  id: string;
  title: string;
  uniqueId: number;
  description: string;
  demoLink: string;
  githubLink: string;
  techStack: Array<IText>;
  image: IUrl;
}

export interface IFormFields {
  value: string;
  errorMessage: string;
}
export interface IFormData {
  name: IFormFields;
  email: IFormFields;
  message: IFormFields;
}

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

export type Theme = "light" | "dark";

export enum Months {
  Jan = 1,
  Feb = 2,
  Mar = 3,
  Apr = 4,
  May = 5,
  Jun = 6,
  Jul = 7,
  Aug = 8,
  Sep = 9,
  Oct = 10,
  Nov = 11,
  Dec = 12,
}

export const SKILLSET = {
  LANGUAGES: "languages",
  FRONTEND: "frontend",
  UI_LIBRARIES: "uilibraries",
  HEADLESS_CMS: "headless cms",
  TESTING: "testing",
  TOOLS: "tools",
};

export const TECHSTACK = {
  ALL: "all",
  CPP: "c++",
  PHP: "php",
  JAVASCRIPT: "javascript",
  TYPESCRIPT: "typescript",
  REACT: "react",
  NEXTJS: "nextjs",
};

export const SECTION = {
  ABOUT: "about",
  JOBS: "jobs",
  PROJECTS: "projects",
  SKILLS: "skills",
  CONTACT: "contact",
};
export const workHistory = [
  {
    company: "Webotiks",
    companyLinkedin: "https://www.linkedin.com/company/webotiks/",
    companyUrl: "https://webotiks.com/",
    designation: "Senior React Native Developer",
    from: "2023-06-01",
    to: null,
    id: "8851sww135",
    logo: {
      url: "https://webotiks.com/wp-content/uploads/2022/04/Webotiks-removebg-preview-1.png"
    }
  }, {
    company: "Digital Auxilius",
    companyLinkedin: "https://www.linkedin.com/company/digital-auxilius/",
    companyUrl: "https://digitalauxilius.com/",
    designation: "Senior React Native Developer",
    from: "2021-11-01",
    to: "2023-06-01",
    id: "88551144778855446545",
    logo: {
      url: "https://digitalauxilius.com/wp-content/uploads/2021/03/logo-2.png"
    }
  }, {
    company: "Mean3 Pvt Ltd",
    companyLinkedin: "https://www.linkedin.com/company/mean3/",
    companyUrl: "https://mean3.com/",
    designation: "React Native Developer",
    from: "2020-05-01",
    to: "2021-11-01",
    id: "55322112151588",
    logo: {
      url: "https://mean3.com/wp-content/uploads/2020/09/118702631_846413835893354_8970263783043462686_n.png"
    }
  }, {
    company: "NextGeneSol",
    companyLinkedin: "https://www.linkedin.com/company/nextgenesol/",
    companyUrl: "https://www.nextgenesol.com/",
    designation: "Mobile Application Developer",
    from: "2018-02-10",
    to: "2020-05-01",
    id: "546546545648648646",
    logo: {
      url: "https://media.licdn.com/dms/image/C4D0BAQG_gB04KSBzkA/company-logo_200_200/0/1631305046467?e=2147483647&v=beta&t=lxW-fm6yPSqXTeo9Tr29ETg9LLpw2jMHMuESvT5wrnk"
    }
  }
]

export const projects = [
  {
      title: "Shuma Taxi App, South Africa",
      description: "Taxi React Native mobile app. You can request a cab online and get cheap taxi. Request a cab online near and far when you need it in Shuma taxi app South Africa",
      id: "11zxc22w",
      uniqueId: 0,
      techStack: [ { text: "React Native" }, { text: "Stripe" }, { text: "Cross Platform" }],
      image: require('./assets/projects/ShumaTaxi.png')
  }, {
      title: "Go Delivery",
      description: "Go Delivery used to delivery food/grocery practicular store to town",
      id: "552211111122",
      uniqueId: 1,
      techStack: [ { text: "React Native" }, { text: "Node js" }, { text: "Cross Platform" }],
      image: require('./assets/projects/96bb7d175288691.6517445419898.png')
  }, {
      title: "EaziStore",
      description: "Free Lancer delivery app",
      id: "22sswwqq22",
      uniqueId: 2,
      techStack: [ { text: "React Native" }, { text: "React-native-maps" }, { text: "Node js" }, { text: "Cross Platform" }],
      image: require('./assets/projects/177b22132577359.61abe0c5985c2.png')
  }, {
      title: "Dammam Online Food Project",
      description: "Food delivery app based in Dammam",
      id: "221ssdawdaw",
      uniqueId: 3,
      techStack: [ { text: "React Native" }, { text: "React-native-maps" }, { text: "Node js" }, { text: "Cross Platform" }, {text: "Google-pay"}],
      image: require('./assets/projects/d63875188440563.659c4c74c523b.png')
  }, {
      title: "Tow Movit",
      description: "Tow Movit is the first location-based, on-demand, 24/7 roadside assistance app. The only roadside assistance platform that gives the stranded motorist access to the tow truck closest to the stranded vehicle",
      id: "sss22xx333",
      uniqueId: 4,
      techStack: [ { text: "React Native" }, { text: "React-native-maps" }, { text: "Node js" }, { text: "Cross Platform" },],
      image: require('./assets/projects/hqdefault.jpg')
  }
]

export const dataTech = [
  {skill: "React Native", id: 0},
  {skill: "JavaScript", id: 1},
  {skill: "Redux", id: 2},
  {skill: "REST APIs", id: 3},
  {skill: "Git", id: 4},
  {skill: "Node.js, MongoDB and Express.js", id: 5},
  {skill: "Google SignIn", id: 6},
  {skill: "Facebook Auth", id: 7},
  {skill: "Firebase Auth", id: 8},
  {skill: "Firebase Cloud Messaging (Push Notifications)", id: 9},
  {skill: "Firebase Realtime Database", id: 10},
  {skill: "Google Maps (Tracking / Routing)", id: 11},
  {skill: "React-Navigation", id: 12},
  {skill: "Stripe", id: 13},
  {skill: "File System & Cache files", id: 14},
  {skill: "React-Native-Track-player", id: 15},
  {skill: "Encrypt and Dencrpt", id: 16},
  {skill: "Google-pay", id: 17},
]