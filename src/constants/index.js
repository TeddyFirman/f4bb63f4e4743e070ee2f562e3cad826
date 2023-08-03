import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    tensorflow,
    php,
    laravel,
    bootstrap,
    html,
    mysql,
    postgres,
    opencv,
    go,
    android,
    css,
    tailwind,
    nodejs,
    git,
    java,
    bangkit,
    kompas,
    kompeten,
    medcom,
    freelance,
    carrent,
    univini,
    firstporto,
    jobit,
    facemask,
    freshcam,
    apps,
    perpus,
    exibition,
    quizApps,
    reservation,
    rental,
    rest,
    simpleEcom,
    autotag,
    tripguide,
    mongodb,
    docker,
    reactjs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Backend Tech",
      icon: mobile,
    },
    {
      title: "Google Certified TensorFlow Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Rest-API",
      icon: rest,
    },
    {
      name: "MySQL",
      icon: mysql
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "Go",
      icon: go
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python
    },
    {
      name: "Tensorflow",
      icon: tensorflow
    },
    {
      name: "HTML",
      icon: html
    },
    {
      name: "CSS",
      icon: css
    },
    {
      name: "Docker",
      icon: docker
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "PostGres",
      icon: postgres,
    },
    {
      name: "Android Studio",
      icon: android,
    },
    {
      name: "Java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Support Technician",
      company_name: "CV Media Computer",
      icon: medcom,
      iconBg: "#fff",
      date: "Jan 2017 - Apr 2017",
      points: [
        "Fixing computer.",
        "Modify and Fix the printers.",
        "Checking printers and computers to the relevant agencies that call our services.",
        "Ghost and Service laptops.",
      ],
    },
    {
      title: "AI/ML Developer",
      company_name: "Kompas Gramedia",
      icon: kompas,
      iconBg: "#E6DEDD",
      date: "Agu 2021 - Feb 2022",
      points: [
        "Collaborate with software teams to create DAM System(Digital Asset Management).",
        "Develop Automated Image Tagging system using CNN(Convolutional Neural Network).",
        "Research Auto Tagging Multimedia method(especially image and video).",
        "Implementing Machine Learning API with FastAPI.",
      ],
    },
    {
      title: "Data Scientist",
      company_name: "Kompeten Co",
      icon: kompeten,
      iconBg: "#383E56",
      date: "Jan 2022 - Apr 2022",
      points: [
        "Find the sources of the right materials and analyze platform materials.",
        "Crawl and Scraping data from the right materials.",
        "CRUD(Create, Update, Read, Delete) data in the database with MongoDB.",
        "Labelling the data from the right materials in JSON form.",
      ],
    },
    {
      title: "Machine Learning-Dev",
      company_name: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      icon: bangkit,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Jul 2022",
      points: [
        "Master the key concepts and applications of AI to solve a wide range of ML problems.",
        "Applying the concept of machine learning to develop an application for detecting rotten or fresh fruit with an accuracy rate of 94%.",
        "Received 5 certificates related to Machine Learning and 1 certificate related to Data Analyst through Coursera.",
        "Received a TensorFlow Developer Certificate.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#383E56",
      date: "Jul 2022 - Present",
      points: [
        "Receive more applications development from the backend side and REST API.",
        "Develop applications using tech, especially laravel.",
        "Currently studying Golang.",
        "Implementation of the Rest API concept in various programming languages and studying Architectural Design."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Univ Ini",
      description:
        "This is a web-based student management system project, which has a system like facebook, I develop with html css js and php (native).",
      tags: [
        {
          name: "HTML",
          color: "red-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "PHP",
          color: "indigo-text-gradient",
        },
      ],
      image: univini,
      source_code_link: "https://github.com/",
    },
    {
      name: "Auto Tag Image",
      description:
        "Project to help auto tag news in the form of images/videos that have been made with machine learning.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "orange-text-gradient",
        },
        {
          name: "FastAPI",
          color: "green-text-gradient",
        },
        {
          name: "Postgres",
          color: "indigo-text-gradient",
        },
      ],
      image: autotag,
      source_code_link: "https://github.com/",
    },
    {
      name: "Freshcam",
      description:
        "The final project of learning Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka, an application to detect whether the scanned fruit is fresh or rotten, and I as a machine learning engineer create machine learning models with accuracy 94%.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "orange-text-gradient",
        },
        {
          name: "Keras",
          color: "red-text-gradient",
        },
      ],
      image: freshcam,
      source_code_link: "https://github.com/",
    },
    {
      name: "First Apps",
      description:
        "The first application that I developed using Android Studio with the Java, which focuses on increasing knowledge about Entity Relationship Diagram.",
      tags: [
        {
          name: "Java",
          color: "orange-text-gradient",
        },
        {
          name: "XML",
          color: "gray-text-gradient",
        },
        {
          name: "AndroidStudio",
          color: "green-text-gradient",
        },
      ],
      image: apps,
      source_code_link: "https://github.com/",
    },
    {
      name: "Web Perpustakaan",
      description:
        "Library web that has 3 user authentication Admin, Petugas and Peminjam, has CRUD Category, Book, Publisher, Shelf and display a chart of all transactions in the library.",
      tags: [
        {
          name: "Laravel",
          color: "pink-text-gradient",
        },
        {
          name: "Livewire",
          color: "pink-text",
        },
        {
          name: "Bootstrap",
          color: "purple-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text",
        },
      ],
      image: perpus,
      source_code_link: "https://github.com/",
    },
    {
      name: "Web Exhibition Design",
      description:
        "Web exhibition to display design works, that have Admin, Student Authentication. CRUD Categories and Desaigns for Students, while the Admin publishes works.",
      tags: [
        {
          name: "Laravel",
          color: "pink-text-gradient",
        },
        {
          name: "Livewire",
          color: "pink-text",
        },
        {
          name: "Bootstrap",
          color: "purple-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text",
        },
      ],
      image: exibition,
      source_code_link: "https://github.com/",
    },
    {
      name: "Web Quiz",
      description:
        "Web quiz to test student's understanding of learning material and quizzes. Has 2  authentications student and admin, where students can only work on quizzes and submit assignments, and admins can CRUD quizzes, assignments and review them.",
      tags: [
        {
          name: "Laravel",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "purple-text-gradient",
        },
        {
          name: "AJAX",
          color: "yellow-text-gradient",
        },
        {
          name: "JQuery",
          color: "indigo-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text",
        },
      ],
      image: quizApps,
      source_code_link: "https://github.com/",
    },
    {
      name: "Web Reservation Restaurant/Cafe",
      description:
        "Reservation website for places and menus where guests can see menus and places that are still available, while the admin can CRUD menus, places and receive the reservation.",
      tags: [
        {
          name: "Laravel",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text",
        },
      ],
      image: reservation,
      source_code_link: "https://github.com/",
    },
    {
      name: "Web Rental Mobil",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Laravel",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text",
        },
      ],
      image: rental,
      source_code_link: "https://github.com/",
    },
    {
      name: "Simple E-Commerce",
      description:
        "Simple e-commerce website that allows users to search, order, and buy products from various categories provided by admin.",
      tags: [
        {
          name: "Laravel",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text",
        },
      ],
      image: simpleEcom,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };