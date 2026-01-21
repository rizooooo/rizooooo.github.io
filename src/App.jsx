import "bootswatch/dist/cosmo/bootstrap.min.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaAndroid,
  FaApple,
  FaExternalLinkAlt,
  FaCode,
  FaMicrochip,
  FaDatabase,
  FaImage,
} from "react-icons/fa";

function App() {
  const experiences = [
    {
      company: "Damstra Technology",
      role: "React.js Developer",
      period: "2022 – Present",
      tech: "React, Vite, Node 22, C# .NET, Bitbucket Pipelines, Storybook",
      desc: "Migrated frontend from CRA to Vite, drastically reducing build times. Upgraded Node 12 to 22 LTS. Handling C# .NET backend tasks. Maintained component library with Storybook.",
    },
    {
      company: "Precision Technology Partners",
      role: "Frontend Developer",
      period: "Jun 2018 – Dec 2022",
      tech: "React, Angular, TypeScript, AWS, GoDaddy",
      desc: "Helped migrate an Angular project to React.js. Handled basic DevOps (EC2, Nginx, GoDaddy). Optimized frontend performance.",
    },
    {
      company: "98labs Inc.",
      role: "React Developer",
      period: "Mar 2021 – Nov 2021",
      tech: "React, TypeScript, Redux, AntD",
      desc: "Created reusable components and custom hooks. Optimized routing to reduce re-renders. Integrated backend APIs.",
    },
    {
      company: "Train Effective",
      role: "React Native Developer",
      period: "Apr 2021 – Nov 2021",
      tech: "React Native, iOS, Android, Firebase, Storybook",
      desc: "Converted complex Figma designs into mobile code. Documented UI components using Storybook. Handled A/B testing.",
      links: [
        {
          label: "Play Store",
          icon: <FaAndroid />,
          url: "https://play.google.com/store/apps/details?id=com.traineffective&hl=en",
        },
        {
          label: "App Store",
          icon: <FaApple />,
          url: "https://apps.apple.com/us/app/train-effective-soccer-academy/id1425844780",
        },
      ],
    },
    {
      company: "Zzagl",
      role: "React / React Native Developer",
      period: "2021",
      tech: "React, MUI, Semantic UI, Google Maps API, AWS Amplify",
      desc: "Engineered dynamic JSON-powered Form and Table generators to create reusable, data-driven dashboard components. Integrated Google Maps for user location features.",
    },
    {
      company: "Twist Resources",
      role: "Junior Software Developer",
      period: "Feb 2018 – June 2018",
      tech: "Java, jQuery, Facebook SDK",
      desc: "Maintained Java backend services for a large enterprise project. Implemented Facebook authentication.",
    },
    {
      company: "Lagility",
      role: "Software Engineer",
      period: "Apr 2017 – Feb 2018",
      tech: "PHP (CodeIgniter), AngularJS, jQuery, AWS Lightsail",
      desc: "Built web apps with PHP backend and AngularJS frontend. Managed simple cloud hosting and SSL setups.",
    },
    {
      company: "FourthShift Global Inc.",
      role: "Web Developer (OJT)",
      period: "Jun 2016 – Oct 2016",
      tech: "PHP (CodeIgniter), Bootstrap, jQuery",
      desc: "Gained real-world experience fixing major backend/frontend bugs for live websites. Implemented mobile responsiveness and integrated new modules.",
      links: [
        {
          label: "Project: Gabbyville",
          icon: <FaExternalLinkAlt />,
          url: "https://www.gabbyville.com/",
        },
      ],
    },
    {
      company: "Department of Trade and Industries (DTI)",
      role: "Intern",
      period: "Apr 2016 – Jun 2016",
      tech: "C# Windows Forms, MS Access",
      desc: "Developed a LAN Document Tracking System for the Foreign Trade Service Corps (FTSC). Designed database structures and maintained bureau applications.",
      image: "/images/dti.jpg",
    },
  ];

  const projects = [
    {
      title: "Notes App (Personal KM)",
      tech: "C# .NET, MongoDB, React, OpenAPI, TanStack",
      desc: "MacOS-style notes app with nested folders. Built this project to learn and practice C# .NET architecture. Auto-generated client SDK via OpenAPI.",
      links: [
        {
          label: "Client Repo",
          url: "https://github.com/rizooooo/macos-client-react",
          icon: <FaGithub />,
        },
        {
          label: "API Repo",
          url: "https://github.com/rizooooo/macos-notes-api",
          icon: <FaCode />,
        },
        {
          label: "Live Demo",
          url: "https://kind-cliff-0e74e5600.2.azurestaticapps.net",
          icon: <FaExternalLinkAlt />,
        },
      ],
    },
    {
      title: "Trip Expense Splitter",
      tech: "C# .NET, Entity Framework, React Vite, Azure, OpenAPI",
      desc: "Group travel finance tool built while learning C# .NET. Uses Entity Framework for data access and OpenAPI to sync backend/frontend.",
      links: [
        {
          label: "Client Repo",
          url: "https://github.com/rizooooo/tripclientexpense-client",
          icon: <FaGithub />,
        },
        {
          label: "API Repo",
          url: "https://github.com/rizooooo/tripexpense-api",
          icon: <FaCode />,
        },
        {
          label: "Live Demo",
          url: "https://jolly-glacier-054b5d21e-preview.westus2.3.azurestaticapps.net/login",
          icon: <FaExternalLinkAlt />,
        },
      ],
    },
    {
      title: "Delstream (Media Discovery)",
      tech: "React, Tailwind, TMDB API",
      desc: "Movie discovery app built rapidly using AI-assisted workflows (Cursor/Claude).",
      links: [
        {
          label: "Repository",
          url: "https://github.com/rizooooo/delstream-app",
          icon: <FaGithub />,
        },
        {
          label: "Live Demo",
          url: "https://delstream-app.vercel.app",
          icon: <FaExternalLinkAlt />,
        },
      ],
    },
    {
      title: "Villa Cassandra Website",
      tech: "Next.js, TailwindCSS, MongoDB",
      desc: "Showcase website for a private resort. Built with Next.js for SEO and fast loading.",
      links: [
        {
          label: "Repository",
          url: "https://github.com/rizooooo/villa-cassandra-app",
          icon: <FaGithub />,
        },
        {
          label: "Live Demo",
          url: "https://villa-cassandra-app.vercel.app/",
          icon: <FaExternalLinkAlt />,
        },
      ],
    },
    {
      title: "Simple Wordsearch Generator",
      tech: "Node.js",
      desc: "A script to generate crossword and word search puzzles for cognitive exercises.",
      links: [
        {
          label: "Repository",
          url: "https://github.com/rizooooo/simple-wordsearch-api",
          icon: <FaGithub />,
        },
      ],
    },
    {
      title: "Simple Expense Tracker",
      tech: "React Native, WatermelonDB, CodePush",
      desc: "Offline-first mobile finance tracker. Previously deployed to Play Store with OTA updates.",
      links: [
        {
          label: "Repository",
          url: "https://github.com/rizooooo/expenses-react-native-app",
          icon: <FaGithub />,
        },
      ],
    },
  ];

  const archiveProjects = [
    {
      title: "Pet Finder App (Thesis)",
      year: "2016",
      tech: "Java (Android), Arduino C, Google Maps API",
      desc: "An IoT-based tracking system. Built a custom GPS hardware device using Arduino & Adafruit GSM, linked to a native Android app to track lost pets.",
      icon: <FaMicrochip />,
      links: [
        {
          label: "Repository",
          url: "https://github.com/rizooooo/PetFinderThesis",
          icon: <FaGithub />,
        },
      ],
      images: [
        { label: "Map View", src: "/images/petfinder1.png" },
        { label: "AR View", src: "/images/petfinder2.png" },
        { label: "Location", src: "/images/petfinder3.png" },
        { label: "Device 1", src: "/images/petfinder4.png" },
        { label: "Device 2", src: "/images/petfinder5.png" },
        { label: "Demo", src: "/images/petfinder6.jpg" },
      ],
    },
    {
      title: "Barangay Management System",
      year: "2015",
      tech: "Visual Basic, XAMPP (Local Server)",
      desc: "A desktop management system for managing community records, automating clearance generation, and tracking resident history.",
      icon: <FaDatabase />,
      images: [
        { label: "Clearance", src: "/images/brgy1.jpg" },
        { label: "Add Record", src: "/images/brgy2.jpg" },
        { label: "Login", src: "/images/brgy3.jpg" },
        { label: "Reports", src: "/images/brgy5.jpg" },
      ],
    },
  ];

  const skillGroups = [
    {
      category: "Frontend Core & Mobile",
      items: [
        "React.js",
        "React Native",
        "TypeScript",
        "Next.js",
        "JavaScript (ES6+)",
        "Angular 2+",
        "AngularJS (Legacy)",
        "jQuery",
      ],
    },
    {
      category: "State Management & Data",
      items: ["Redux Toolkit", "MobX", "TanStack Query", "Context API"],
    },
    {
      category: "Backend & Database",
      // UPDATED HERE: Added Node ecosystem items
      items: [
        "Node.js",
        "NestJS",
        "Express.js",
        "Socket.io",
        "C# .NET",
        "OpenAPI",
        "MongoDB",
        "SQL",
        "Firebase",
        "PHP (CodeIgniter)",
      ],
    },
    {
      category: "Forms & Routing",
      items: [
        "React Hook Form",
        "Formik",
        "TanStack Form",
        "TanStack Router",
        "React Router",
      ],
    },
    {
      category: "UI Frameworks & CSS",
      items: [
        "Tailwind CSS",
        "Bootstrap 5",
        "MUI (Material UI)",
        "shadcn/ui",
        "Semantic UI",
        "Ant Design",
        "Storybook",
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        "AWS (EC2, S3, CloudFront)",
        "Azure (App Service, Static Web Apps)",
        "Docker",
        "Nginx",
        "Vite",
        "Bitbucket Pipelines",
        "GoDaddy",
      ],
    },
    {
      category: "Productivity (AI)",
      items: ["Cursor", "Claude", "GitHub Copilot"],
    },
  ];

  return (
    <div className="container py-5" style={{ maxWidth: "800px" }}>
      {/* HEADER */}
      <header className="mb-5 pb-3 border-bottom">
        <h1 className="fw-bold display-5">Darrell Carl Rizo Jose</h1>
        <p className="lead text-muted mb-2">
          Full Stack JavaScript & .NET Developer
        </p>
        <p className="small text-secondary fst-italic">
          "A Software Engineer."
        </p>

        <div className="d-flex flex-wrap gap-3 mt-3">
          <a
            href="https://github.com/rizooooo"
            target="_blank"
            className="text-dark text-decoration-none d-flex align-items-center gap-1"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/darrell-carl-rizo-jose-65361a11a"
            target="_blank"
            className="text-dark text-decoration-none d-flex align-items-center gap-1"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="mailto:drizojose0396@gmail.com"
            className="text-dark text-decoration-none d-flex align-items-center gap-1"
          >
            <FaEnvelope /> Email
          </a>
          <span className="text-dark d-flex align-items-center gap-1">
            <FaPhone /> +63 976 002 1496
          </span>
        </div>
      </header>

      {/* ABOUT */}
      <section className="mb-5">
        <h4 className="fw-bold mb-3 text-uppercase small letter-spacing-1">
          About
        </h4>
        <p className="text-secondary">
          Software Developer with over 8 years of experience building web and
          mobile applications. My core expertise is in <strong>React.js</strong>{" "}
          web development, and I also have experience building mobile apps using{" "}
          <strong>React Native</strong>. I am currently expanding my skills in{" "}
          <strong>C# .NET</strong> backend development.
        </p>
      </section>

      {/* SKILLS */}
      <section className="mb-5">
        <h4 className="fw-bold mb-4 text-uppercase small letter-spacing-1">
          Technical Skills
        </h4>
        <div className="row g-4">
          {skillGroups.map((group, index) => (
            <div key={index} className="col-md-6">
              <h6 className="fw-bold text-dark border-bottom pb-2 mb-2">
                {group.category}
              </h6>
              <div className="d-flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="badge bg-light text-secondary border fw-normal px-2 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-5">
        <h4 className="fw-bold mb-4 text-uppercase small letter-spacing-1">
          Experience
        </h4>
        <div className="ps-3 timeline-border">
          {experiences.map((job, index) => (
            <div key={index} className="mb-5 position-relative">
              <div className="d-flex justify-content-between align-items-baseline flex-wrap">
                <h5 className="fw-bold mb-1">{job.company}</h5>
                <span className="badge bg-light text-dark border">
                  {job.period}
                </span>
              </div>
              <p className="text-primary mb-2 small fw-semibold">{job.role}</p>
              <p className="text-muted small mb-2">{job.desc}</p>

              <div className="d-flex flex-wrap gap-2 mb-2">
                {job.links &&
                  job.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none border rounded px-2 py-1 d-flex align-items-center gap-1 text-secondary bg-white"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {link.icon} {link.label}
                    </a>
                  ))}

                {/* Single Image Display for DTI/Experience */}
                {job.image && (
                  <a
                    href={job.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none border rounded px-2 py-1 d-flex align-items-center gap-1 text-secondary bg-white"
                    style={{ fontSize: "0.75rem" }}
                  >
                    <FaImage /> View Screenshot
                  </a>
                )}
              </div>

              <p className="mb-0">
                <small
                  className="text-secondary fst-italic"
                  style={{ fontSize: "0.75rem" }}
                >
                  Stack: {job.tech}
                </small>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NOTABLE PROJECTS */}
      <section className="mb-5">
        <h4 className="fw-bold mb-3 text-uppercase small letter-spacing-1">
          Notable Projects
        </h4>
        <div className="row g-3">
          {projects.map((proj, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 border-0 bg-white shadow-sm">
                <div className="card-body">
                  <h6 className="fw-bold card-title">{proj.title}</h6>
                  <p className="card-text small text-muted">{proj.desc}</p>
                  <p className="card-text">
                    <small
                      className="text-primary"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {proj.tech}
                    </small>
                  </p>

                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {proj.links &&
                      proj.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn btn-sm ${link.label === "Live Demo" ? "btn-dark" : "btn-outline-dark"} d-flex align-items-center gap-1`}
                        >
                          {link.icon} {link.label}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHIVE */}
      <section className="mb-5">
        <h4 className="fw-bold mb-3 text-uppercase small letter-spacing-1 border-bottom pb-2">
          The Archive{" "}
          <small className="text-muted fw-normal" style={{ fontSize: "0.6em" }}>
            (2015-2016)
          </small>
        </h4>
        <p className="small text-muted mb-4">
          Where it started. Before modern frameworks, I was building full
          systems with Visual Basic, C#, and native Android/IoT.
          <br />
          <em>(Screenshots from my college archives).</em>
        </p>

        <div className="row g-3">
          {archiveProjects.map((proj, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 border-0 bg-light">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="fw-bold card-title mb-0 d-flex align-items-center gap-2">
                      {proj.icon} {proj.title}
                    </h6>
                    <span className="badge bg-secondary">{proj.year}</span>
                  </div>
                  <p className="card-text small text-muted">{proj.desc}</p>
                  <p className="card-text">
                    <small
                      className="text-dark fw-semibold"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {proj.tech}
                    </small>
                  </p>

                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {proj.links &&
                      proj.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"
                        >
                          {link.icon} {link.label}
                        </a>
                      ))}

                    {/* Multiple Images Display for Archive */}
                    {proj.images &&
                      proj.images.map((img, i) => (
                        <a
                          key={i}
                          href={img.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"
                        >
                          <FaImage /> {img.label}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-4 border-top text-center text-muted small">
        <p className="mb-1">
          Darrell Carl Rizo Jose &copy; {new Date().getFullYear()}
        </p>
        <p className="mt-2 fst-italic" style={{ fontSize: "0.7rem" }}>
          Built with React, Vite & Bootstrap.
        </p>
      </footer>
    </div>
  );
}

export default App;
