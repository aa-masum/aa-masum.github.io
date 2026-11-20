// Edit this file to change the content of the whole site.
export const site = {
  name: 'Abdullah Al Masum',
  role: 'Robotics, IoT and cyber-physical systems',
  headline: 'EEE Graduate | Prospective PhD Student | Robotics & AI',
  tagline: 'EEE graduate building autonomous robots and connected sensors, and learning how to secure them.',
  email: 'aamasum027@gmail.com',

  // Images: put the file in public/images/ and write its path here, e.g. '/images/hero.jpg'.
  // While a value is null, a placeholder drawing (hero) or nothing (about) is shown.
  heroBackground: '/images/farewell.png',  // full-width background photo of the front banner
  heroBackgroundPosition: '50% 30%',  // second number: 0% = show the top of the photo, 100% = show the bottom
  heroImage: null,              // keep null to show the drone on the right
  aboutImage: '/images/photo.jpg',  // photo on the left of the About Me text

  links: [
    { label: 'GitHub', href: 'https://github.com/aa-masum' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdullah-al-masum-7156b7222/' },
    // TODO: add your LinkedIn and Google Scholar links here
  ],

   about: [
    'I am an Electrical and Electronic Engineering graduate from Chittagong University of Engineering & Technology (CUET), Bangladesh, passionate about research and innovation in Robotics, Autonomous Systems, and IoT.',
    'My research interests include Robotics and Autonomous Systems, Artificial Intelligence and Machine Learning, Multi-Robot Systems and Swarm Robotics, Internet of Things (IoT), and Cyber-Physical Systems. I am particularly interested in intelligent robotics, autonomous navigation, embedded systems, and AI-driven applications.',
    'During my undergraduate studies, I worked on interdisciplinary engineering projects involving autonomous robotics, IoT-based monitoring, machine learning, and embedded systems. My research experience also includes an undergraduate thesis on neuro-fuzzy-controlled power electronic converters and research on IoT-based food quality monitoring.',
    'I aspire to pursue a Ph.D. to advance my research expertise and contribute to innovative solutions in intelligent and autonomous technologies.',
  ],

  // Research interests: add or remove lines freely
  interests: [
    'Robotics and Autonomous Systems',
    'Artificial Intelligence and Machine Learning',
    'Multi-Robot Systems and Swarm Robotics',
    'Internet of Things (IoT)',
    'Cyber-Physical Systems',
  ],

  skills: [
    { group: 'Programming & Machine Learning', icon: 'code', color: 'blue', items: ['Python', 'C', 'Bash/Shell', 'TensorFlow', 'PyTorch', 'Scikit-learn'] },
    { group: 'Robotics & Embedded Systems', icon: 'robot', color: 'green', items: ['ROS 2', 'Gazebo', 'Arduino', 'ESP32'] },
    { group: 'Simulation & Engineering Design', icon: 'chip', color: 'gray', items: ['MATLAB', 'Proteus', 'EasyEDA', 'AutoCAD', 'ADS', 'PowerWorld Simulator', 'OPAL-RT'] },
    { group: 'Cybersecurity Tools', icon: 'shield', color: 'orange', items: ['Burp Suite', 'Nmap', 'Metasploit', 'Nessus', 'Wireshark', 'Nuclei', 'Splunk'] },
    { group: 'Operating Systems', icon: 'monitor', color: 'gray', items: ['Linux', 'Windows'] },
  ],
};



export const publications = [
  {
    year: '',
    status: 'Under review',
    title: 'Design of a Neuro-Fuzzy Controlled Single-Phase Bridgeless Ćuk AC–DC Converter with Improved Power Quality',
    venue: 'Journal of Power Electronics',
    authors: 'Dinobondhu Ray, Abdullah-al Masum*, Pritam Bol, Mohammad Rubaiyat Tanvir Hossain',
    href: null,
  },

  {
    year: '',
    status: 'Manuscript ready',
    title: 'Development and Experimental Assessment of a Low-Cost IoT-Based Multi-Sensor Framework for Real-Time Food Spoilage Monitoring',
    venue: '',
    authors: '',
    href: null,
  },
];

export const education = [
  {
    logo: '/images/cuet monogram.jpeg',
    when: 'February 2020 – September 2025',
    title: 'B.Sc. in Electrical and Electronic Engineering',
    place: 'Chittagong University of Engineering and Technology (CUET)',
    thesis: 'Design of a Neuro Fuzzy Controlled Single-Phase Bridgeless CUK AC-DC Converter with Improved Power Quality',
    note: '',
  },
  {
    logo: '/images/mc-college.jpg',
    when: 'Session: 2017-2018  HSC: 2019',
    title: 'Higher Secondary School Certificate (HSC)',
    place: 'MC College, Sylhet',
    note: 'Board Scholarship for outstanding academic performance.',
  },
  {
    logo: '/images/sjisc.jpg',
    when: 'Session: 2015-2016  SSC: 2017',
    title: 'Secondary School Certificate (SSC)',
    place: 'Shahjalal Jamia Islamia School and College, Sylhet',
    note: '',
  },
];





// Certificates. The Certificates section stays hidden while this list is empty.
// Example: { when: '2025', title: 'Certificate name', place: 'Issuer', note: '' },
export const certificates = [
];

// "In motion" strip on the Projects page: photos, GIFs or short videos. Hidden while the list is empty.
// type: 'image' (jpg, png, webp, gif) or 'video' (mp4, plays automatically in a loop)
// Example: { type: 'video', src: '/videos/robot-test.mp4', caption: 'Gas robot field test' },
export const gallery = [
];

// Featured videos on the Home page. The section stays hidden while this list is empty.
// youtube: the ID from the video link (youtube.com/watch?v=THIS_PART) | video: '/videos/name.mp4'
// Use only one of youtube or video per item. autoplay: true plays a silent loop with no controls.
// Example:
// { title: 'Gas source localization robot', caption: 'Field test of the prototype.', youtube: 'dQw4w9WgXcQ', video: null, poster: null, autoplay: false },
export const featuredVideos = [
  {
    title: 'Remote-Controlled Four-Wheel Robot Car',
    caption: '',
    youtube: null,
    video: '/videos/feature-video-1.mp4',
    poster: null,
    autoplay: false,
  },
  {
    title: 'Wave Generator',
    caption: '',
    youtube: null,
    video: '/videos/Feature-video-2.mp4',
    poster: null,
    autoplay: false,
  },
];

export const projects = [
  {
    title: 'IoT Based Automated Waste Disposal System with Integrated pH Monitoring for Drainage Water',
    description: [
      'An IoT-enabled automated system designed to collect drainage waste and continuously monitor water pH levels in real-time. The system automatically removes waste from drains, notifies authorities when the bin is full, and alerts them when water pH becomes abnormal.',
      
    ],
    tags: [' '],
    href: 'https://github.com/aa-masum/IoT-Based-Automated-Waste-Disposal-System-with-Integrated-pH-Monitoring-for-Drainage-Water',
    media: [
      { type: 'image', src: '/images/waste-disposal-1.jpg', caption: '' },
      { type: 'image', src: '/images/waste-disposal-3.jpg', caption: '' },
    ],
  },
  {
    title: 'Wave Generator and Analyzer',
    description: 'This project presents a Wave Generation and Analysis System developed for experimental applications in the Water Resources Engineering (WRE) Department at CUET. The system integrates hardware-based wave generation with sensor-driven data acquisition and MATLAB-based signal analysis.',
    tags: [ ],
    href: 'https://github.com/aa-masum/Wave-Generator-and-Analyzer-CUET-WRE-Department-',
    media: [
      { type: 'video', src: '/videos/Feature-video-2.mp4', caption: '' },
      { type: 'image', src: '/images/wave-analyzer-setup.jpg', caption: '' },
    ],
  },

  {
    title: 'Line Following Robot (LFR) ',
    description: 'A compact  line-following robot designed to navigate predefined paths by detecting black lines on a contrasting surface. Using infrared (IR) sensors and a microcontroller-based control system, the robot continuously tracks the path and automatically adjusts its motor movements to navigate straight lines, curves, and turns without manual control.',
    tags: [ ],
    href: null,
    media: [
      { type: 'video', src: '/videos/LFR.mp4', caption: '' },
    ],
  },

  {
    title: 'Autonomous gas-leak localization robot with LiDAR occupancy mapping (MATLAB simulation)',
    description: 'A simulated differential-drive robot explores a room with walls, builds an occupancy-grid map from a 72-beam LiDAR, and uses five gas sensors to follow the concentration gradient to a hidden leak while avoiding obstacles.',
    tags: [ ],
    href: 'https://github.com/aa-masum/GasLeakBot',
    media: [
      
      { type: 'video', src: '/videos/gasleakbot.mp4', caption: '' },
    ],
  },



    {
    title: 'AC Voltage Measurement System (250V RMS)',
    description: 'This project presents a safe, compact, and accurate AC voltage measurement system capable of measuring up to 250V RMS using a PIC microcontroller, ZMPT101B voltage sensor, a custom-designed PCB, and an LCD display for real-time monitoring.',
    tags: [ ],
    href: 'https://github.com/aa-masum/AC-Voltage-Measurement-System-250V-RMS-',
    media: [
      { type: 'image', src: '/images/RMS voltage measure.jpg', caption: '' },
    ],
  },


];




// Course Instruction. photos: up to 4 images, put the files in public/images/workshop/
export const instructing = [
  {
    role: 'Instructor',
    workshop: 'Innovabotics: Road to Robotics',
    organizer: 'Andromeda Space and Robotics Research Organisation (ASRRO), CUET',
    description: 'Conducted an instructional session at Innovabotics, a four-day basic robotics workshop organized by the Andromeda Space & Robotics Research Organization. Introduced participants to fundamental robotics concepts through practical demonstrations and hands-on projects, encouraging experiential learning and interest in robotics.',
  photos: [
  { src: '/images/innstructor at ASRRO.jpg', caption: '' },
  ],
  },
];

// Industrial Training. logo: put the file in public/images/logos/ and write '/images/logos/name.png'
export const industrialTraining = [
  {
    logo: '/images/btcl.jpg',
    title: 'Bangladesh Telecommunications Company Limited (BTCL)',
    when: 'Nov – Dec 2024 (Two Weeks)',
    place: '',
    note: "Bangladesh's state-owned telecommunications service provider, responsible for operating and maintaining nationwide telecommunications infrastructure, telephone, internet, and data communication services."
  },
  {
    logo: '/images/kaptai.avif',
    title: 'Karnaphuli Hydropower Station',
    when: 'Apr 2025 (One Day)',
    place: '',
    note: "Bangladesh's only hydroelectric power station, located in Kaptai, Rangamati. The facility generates electricity through hydroelectric turbines and plays an important role in the country's renewable energy generation."
  },
  {
    logo: '/images/gemco.jpg',
    title: 'General Electric Manufacturing Company Limited (GEMCO)',
    when: 'Jan 2023 (One Day)',
    place: '',
    note: "A state-owned electrical engineering and manufacturing enterprise specializing in the production, installation, maintenance, and repair of electrical equipment, including power and distribution transformers."
  },
];

// Courses & Workshops attended
export const courses = [
  { logo: '/images/EDGE_Certificate.jpg', photo: true, title: 'Engineering Design & Analysis with MATLAB', when: 'Jun 2024', place: 'Bangladesh Computer Council and ICT Division', note: '' },
  { logo: '/images/Matlab_2nd_Position.jpg', photo: true, title: 'MATLAB Crash Course', when: '', place: 'Andromeda Space and Robotics Research Organisation (ASRRO)', note: '' },
];

// Organizations. logo works the same way as in training.
export const leadership = [
  { logo: '/images/RMA.jpg', title: 'Joint General Secretary', when: '2024 – 2025', place: 'Robo Mechatronics Association, CUET', note: '' },
  { logo:'/images/ssf.jpg', title: 'General Secretary', when: '2024 – 2025', place: 'Sylhet Students’ Forum, CUET', note: '' },
];