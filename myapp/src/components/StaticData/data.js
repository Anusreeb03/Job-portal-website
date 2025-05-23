const fetchedData = [
        { title: "Software Engineer",company:"XYZ company", type: "full-time", location: "Kochi", department: "engineering",
       experience: "mid-level",rating:4.2,reviews:587,description:"Willingness to relocate",day:1,skills:"Sales-Field Sales Executive" },
       { title: "Front-end-developer",company:"XYZ company", type: "work from home", location: "Indore", department: "Web Development",
        experience: "entry-level",rating:3.9,reviews:129,description:"Should be available on working hours",day:2,skills:"HTML, CSS, JavaScript, Ajax, JQuery, React Js, Angular, Redux" },
       { title: "Business Development executive",company:"XYZ company", type: "contract", location: "Thiruvanathapuram", department: "marketing",
        experience: "senior-level",rating:3.7,reviews:341,description:"Willingness to relocate",day:29,skills:"Good English communication, Interpersonal skills, Ability to achieve targets" },
       { title: "Data Analyst",company:"XYZ company", type: "full-time", location: "Kolkata", department: "Data Analysis",experience: "entry-level",rating:4.5,
        reviews:701,description:"Willingness to relocate",day:13,skills:"Structured Query Language (SQL), Microsoft Excel, Critical thinking,R or Python statistical programming, Data visualization, Presentation skills, Machine learning" },
       { title: "HR Intern",company:"XYZ company", type: "full-time", location: "Chennai", department: "sales",
        experience: "mid-level",rating:3,reviews:98,description:"15 days internship",day:0.5,skills:"MBA in sales, Good communication skills" },
       { title: "Web Designer",company:"XYZ company", type: "full-time", location: "Kozhikode", department: "UI/UX Designer",
        experience: "entry-level",rating:4,reviews:358,description:"Any Degree, Good understanding of Web Design Principles, Familarity with Modrn JavaScript Frameworks (React, Next js)",day:8,skills:"HTML, CSS, JavaScript, Figma, Photoshop, Adobe XD" },
      { title: "Software Intern",company:"XYZ company", type: "contract", location: "Guwahati", department: "engineer",
        experience: "entry-level",company:"XYZ company",rating:4.1,reviews:257,description:"BSC/MSC computerscience, BTech/Mtech CS & IT",day:4,skills:"C,C++, Java, Python, PHP, Larvel" },
      { title: "Node.js Backend Developer",company:"XYZ company", type: "work from home", location: "Shimla", department: "Web Development",
       experience: "senior-level",rating:4.6,reviews:523,description:"Any Degree, Willingness to relocate",day:11,skills:"Good understanding of Web Design Principles, Familarity with Modrn JavaScript Frameworks (React, Next js), SQL, MongoDB, Express js, Node js" },
       { title: "Flutter Developer Intern",company:"XYZ company", type: "part-time", location: "Mumbai", department: "App Development",
        experience: "entry-level",rating:4.0,reviews:120,description:"3 months unpaid internship",day:6,skills:"Provicency in HTML, CSS, JavaScript, Flutter, Python, C, C++" },
      { title: "HR trainee",company:"XYZ company", type: "full-time", location: "Kozhikode", department: "marketing",
        experience: "entry-level",rating:3.5,reviews:145,description:"1 year training with a monthly stipend of 8000/-",day:18,skills:"Sales-Field, Sales Executive" },
      { title: "Technical sales & Project Coordinator",company:"XYZ company", type: "full-time", location: "Bangalore", department: "sales",
        experience: "mid-level",rating:4.2,reviews:871,description:"Willingness to relocate",day:1,skills:"Sales-Field" },
      { title: "Java Developer",company:"XYZ company", type: "part-time", location: "Bangalore", department: "Web Development",
        experience: "mid-level",rating:4.8,reviews:320,description:"Highly proficient in web development, Adaptable and high problem solving skills required",day:14,skills:"Java, C++, C, Larvel, PHP, SQL, Oracle Transportation" },
      { title: "IT Officer",company:"XYZ company", type: "full-time", location: "Bangalore", department: "Finance & Banking",
        experience: "entry-level",rating:4.4,reviews:630,description:"Upper Age Criteria - 28 years, Willingness to work in all branches",day:0,skills:"Mtech/ME/MSc(CS or IT)/MCA, Btech/BE" },
      { title: "Game developer",company:"XYZ company", type: "full-time", location: "Chennai", department: "web Development",
        experience: "entry-level",rating:3.5,reviews:121,description:"Willingness to work accoring to company policies",day:7,skills:"C, C++, C sharp, Java, Python, PHP" },
      { title: "Backend-Developer",company:"XYZ company", type: "full-time", location: "Kochi", department: "Web Development",
        experience: "senior-level",rating:4.7,reviews:1871,description:"Willingness to relocate",day:1,skills:"Familarity with Modrn JavaScript Frameworks (React, Next js), SQL, MongoDB, Express js, Node js, Angular/React, .NET" },
      { title: "QA Engineers",company:"XYZ company", type: "full-time", location: "Kolkata", department: "App Development",
        experience: "senior-level",rating:4.6,reviews:1255,description:"immediate joiners with 3-5+ years experience preferred ",day:1,skills:"iOS & Android" },
      { title: "ReactJS Developer",company:"XYZ company", type: "work from home", location: "New Delhi", department: "Web Development",
        experience: "mid-level",rating:4.7,reviews:112,description:"Reliably commute or planning to  relocate before starting work (Required",day:2,skills:"Diploma preferred" },
      { title: "Mern stack Developer",company:"XYZ company", type: "contract", location: "Kozhikode", department: "Web Development",
        experience: "entry-level",rating:3.4,reviews:105,description:"Candidates from Kozhikode region is preferred",day:35,skills:"Familarity with SQL, MongoDB, Express js, Node js, Angular/React, .NET" },
      { title: "Python-Internship",company:"XYZ company", type: "full-time", location: "Mumbai", department: "Web Development",
        experience: "entry-level",rating:3.6,reviews:452,description:"Willingness to work in shifts",day:6,skills:"Python, C, C++, React/Angular, .NET, PHP, React native, Django"},
      { title: "Operation growth associate",company:"XYZ company", type: "full-time", location: "Mumbai", department: "Business Development Executives",
        experience: "entry-level",rating:4.7,reviews:1871,description:"Candidates must reside within 30km of our Mumbai Office, Proficiency in English (oral and written)",day:8,skills:"Strong knowledge in Java/React/Next js,Manual Testing/ AWS/ Automation Testing,Flutter"},
      { title: "AWS DevOps Engineer",company:"XYZ company", type: "full-time", location: "Indore", department: "engineer",
        experience: "mid-level",rating:3.6,reviews:71,description:"Willingness to relocate",day:19,skills:"SQL, MongoDB, Express js, Node js, Angular/React, .NET, Manual Testing/ AWS/ Automation Testing"},
      { title: "Full stack developer",company:"XYZ company", type: "full-time", location: "Indore", department: "Web Development",
        experience: "senior-level",rating:4.9,reviews:1031,description:"Candidates with an experience of 10+ years preferred",day:8,skills:"knowledge in Java/React/Next js, Flutter, Python, HTML5, CSS3, Jquery, Ajax, Express,Node js, SQL, MongoDB"},

  ];
  
  export default fetchedData; 
  