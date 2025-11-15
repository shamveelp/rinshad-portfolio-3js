import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "work",
    title: "Works",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Content Creator",
    icon: <FullStackIcon />,
  },
  {
    title: "Script Writer",
    icon: <FrontendIcon />,
  },
  {
    title: "Video Editor",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Visual Storyteller",
    icon: <FreelancerIcon />,
  },
];

const technologies = {
  videoEditing: [
    {
      name: "Premiere Pro",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
      link: "https://www.adobe.com/products/premiere.html",
    },
    {
      name: "DaVinci Resolve",
      icon: "https://www.blackmagicdesign.com/images/products/davinciresolve/logo.png",
      link: "https://www.blackmagicdesign.com/products/davinciresolve",
    },
    {
      name: "CapCut",
      icon: "https://lf16-capcut.bytedanceapi.com/obj/capcut-official-us/website_static/img/favicon.ico",
      link: "https://www.capcut.com/",
    },
    {
      name: "Final Cut Pro",
      icon: "https://www.apple.com/v/final-cut-pro/images/overview/icon_final_cut_pro__fq8q3q7x8x2a_large.png",
      link: "https://www.apple.com/final-cut-pro/",
    },
    {
      name: "After Effects",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Adobe_After_Effects_CC_icon.svg",
      link: "https://www.adobe.com/products/aftereffects.html",
    },
    {
      name: "Filmora",
      icon: "https://www.wondershare.com/images/filmora/favicon.ico",
      link: "https://filmora.wondershare.com/",
    },
  ],
  motionGraphics: [
    {
      name: "After Effects",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Adobe_After_Effects_CC_icon.svg",
      link: "https://www.adobe.com/products/aftereffects.html",
    },
    {
      name: "Motion",
      icon: "https://www.apple.com/v/motion/images/overview/icon_motion__fq8q3q7x8x2a_large.png",
      link: "https://www.apple.com/motion/",
    },
    {
      name: "Blender",
      icon: "https://www.blender.org/wp-content/uploads/2019/07/blender_logo_socket.png",
      link: "https://www.blender.org/",
    },
  ],
  audioEditing: [
    {
      name: "Audition",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Audition_CC_icon.svg",
      link: "https://www.adobe.com/products/audition.html",
    },
    {
      name: "Pro Tools",
      icon: "https://www.avid.com/favicon.ico",
      link: "https://www.avid.com/pro-tools",
    },
    {
      name: "GarageBand",
      icon: "https://www.apple.com/v/garageband/images/overview/icon_garageband__fq8q3q7x8x2a_large.png",
      link: "https://www.apple.com/garageband/",
    },
  ],
  designTools: [
    {
      name: "Photoshop",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
      link: "https://www.adobe.com/products/photoshop.html",
    },
    {
      name: "Illustrator",
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
      link: "https://www.adobe.com/products/illustrator.html",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Canva",
      icon: "https://www.canva.com/favicon.ico",
      link: "https://www.canva.com/",
    },
  ],
  contentTools: [
    {
      name: "CapCut",
      icon: "https://lf16-capcut.bytedanceapi.com/obj/capcut-official-us/website_static/img/favicon.ico",
      link: "https://www.capcut.com/",
    },
    {
      name: "InShot",
      icon: "https://inshot.com/favicon.ico",
      link: "https://inshot.com/",
    },
    {
      name: "Canva",
      icon: "https://www.canva.com/favicon.ico",
      link: "https://www.canva.com/",
    },
    {
      name: "VSCO",
      icon: "https://vsco.co/favicon.ico",
      link: "https://vsco.co/",
    },
  ],
  collaboration: [
    {
      name: "Frame.io",
      icon: "https://frame.io/favicon.ico",
      link: "https://frame.io/",
    },
    {
      name: "Google Drive",
      icon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png",
      link: "https://drive.google.com/",
    },
    {
      name: "Dropbox",
      icon: "https://cfl.dropboxstatic.com/static/images/favicon-vflUeLeeY.ico",
      link: "https://www.dropbox.com/",
    },
  ],
};

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Intern at Curowell Healthcare Private Ltd",
    icon: "/assets/company/curowell-logo.svg",
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [
      "Developing a healthcare SaaS platform using Next.js, TypeScript, and Tailwind CSS, significantly enhancing user experience.",
      "Maintaining an efficient codebase under senior guidance, ensuring adherence to best practices in software development.",
      "Contributing to the DND form microfrontend, improving user interaction by 30%.",
      "Collaborating in UI/UX design efforts, leading to a 25% reduction in component development time.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Intern at DRDO CABS",
    icon: "/assets/company/drdo-cabs.png",
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [
      "Developed a Facility Bookings Manager for DRDO CABS using TypeScript, React, Node.js, Express, Prisma, and MySQL within a month.",
      "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
      "Led the design and implementation of the frontend, providing a user-friendly interface for efficient facility management.",
      "Collaborated with a backend intern throughout the internship to deliver a comprehensive solution tailored to DRDO CABS's needs.",
    ],
  },
];

const testimonials = [
  
];

const projects = [
  {
    name: "Instagram Reel – Kerala Vibes",
    description:
      "A dynamic Instagram reel edited with smooth transitions, color grading, and engaging pacing. Showcases lifestyle moments and creative storytelling.",
    tags: [
      { name: "reels-editing", color: "blue-text-gradient" },
      { name: "color-grading", color: "green-text-gradient" },
      { name: "premiere-pro", color: "pink-text-gradient" },
      { name: "content-creation", color: "yellow-text-gradient" },
    ],
    embed: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DQqjeovDypE/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DQqjeovDypE/?utm_source=ig_embed&utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DQqjeovDypE/?utm_source=ig_embed&utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Rinshad (@rinshadpottengaden)</a></p></div></blockquote>`,
    deployed_link: "https://www.instagram.com/reel/DQqjeovDypE/",
    source_code_link: "",
  },
  {
    name: "Product Ad Edit – SmartWatch Promo",
    description:
      "A high-impact advertisement edit featuring motion graphics, fast-paced cuts, and attention-grabbing visuals to highlight product features effectively.",
    tags: [
      { name: "ad-editing", color: "blue-text-gradient" },
      { name: "motion-graphics", color: "green-text-gradient" },
      { name: "after-effects", color: "pink-text-gradient" },
      { name: "promo-video", color: "yellow-text-gradient" },
    ],
    image: "https://res.cloudinary.com/demo/image/upload/v1234567890/watch-ad.jpg",
    deployed_link: "https://drive.google.com/your-video-link",
    source_code_link: "",
  },
  // Add more with similar structure...
];


const socials = [
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/rinshadpottengaden/",
  },
];

const heroTexts = [
  "Content Creator",
  500,
  "Script Writer",
  500,
  "Video Editor",
  500,
  "Visual Storyteller",
  500,
  "Creative Professional",
  500,
];


export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};

