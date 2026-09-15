/**
 * Portfolio Data Source of Truth - Kavish Shanilka
 * Strictly matches CV details without fabrication.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Kavish Shanilka",
    role: "Electrical Engineering Undergraduate",
    institution: "University of Moratuwa, Sri Lanka",
    department: "Department of Electrical Engineering",
    period: "Feb. 2024 – Present",
    gpa: "3.85 / 4.00",
    phone: "+94 77 854 7926",
    email: "wimalasiriwaks.23@uom.lk",
    linkedin: "https://www.linkedin.com/in/kavish-shanilka-196947276",
    linkedinHandle: "kavish-shanilka-196947276",
    github: "https://github.com/kavishshanilka",
    githubHandle: "kavishshanilka",
    cvUrl: "assets/cv/Kavish_Shanilka_CV.pdf",
    tagline: "Building intelligent systems at the intersection of power, embedded hardware and automation.",
    aboutBio: "Electrical engineering undergraduate at the University of Moratuwa passionate about research, intelligent systems, embedded hardware, and power electronics. Currently serving as Co-Director of Club Service at Rotaract Alumni University of Moratuwa and an active Rotaractor Award recipient at Rotaract Club of University of Moratuwa.",
    areasOfInterest: [
      "Power Electronics",
      "Embedded Systems",
      "Autonomous Systems",
      "Digital Signal Processing",
      "IoT",
      "Robotics"
    ]
  },

    featuredProject: {
    id: "gridguard",
    title: "GridGuard",
    subtitle: "Autonomous Edge-Coordinated Energy Management System",
    category: "iot-power",
    architectureCaption: "DECOUPLED GRID LOAD-SHIFTING & DISAGGREGATION ARCHITECTURE",
    architectureDiagram: `<svg viewBox="0 0 720 220" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
  <!-- Grid AC Input -->
  <rect x="15" y="70" width="110" height="70" rx="8" fill="#151020" stroke="#7C3AED" stroke-width="2"/>
  <text x="70" y="100" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="13" text-anchor="middle">230V AC Mains</text>
  <text x="70" y="122" fill="#D8B4FE" font-family="monospace" font-size="11" text-anchor="middle">50 Hz Utility Supply</text>

  <!-- Flow to Main DB -->
  <line x1="125" y1="105" x2="165" y2="105" stroke="#A855F7" stroke-width="2.5"/>
  <polygon points="165,100 175,105 165,110" fill="#A855F7"/>

  <!-- Main DB Meter Node -->
  <rect x="175" y="60" width="140" height="90" rx="8" fill="#1E1435" stroke="#A855F7" stroke-width="2.5"/>
  <text x="245" y="90" fill="#38BDF8" font-family="sans-serif" font-weight="800" font-size="13" text-anchor="middle">PZEM-004T Meter</text>
  <text x="245" y="112" fill="#FFFFFF" font-family="monospace" font-size="11" text-anchor="middle">Whole-DB Sensing</text>
  <text x="245" y="132" fill="#94A3B8" font-family="monospace" font-size="10" text-anchor="middle">V, I, P, Power Factor</text>

  <!-- Flow to Central Brain -->
  <line x1="315" y1="105" x2="355" y2="105" stroke="#A855F7" stroke-width="2.5"/>
  <polygon points="355,100 365,105 355,110" fill="#A855F7"/>

  <!-- Raspberry Pi Central Hub -->
  <rect x="365" y="30" width="170" height="150" rx="10" fill="#251648" stroke="#D8B4FE" stroke-width="2.5"/>
  <text x="450" y="62" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="14" text-anchor="middle">Raspberry Pi Hub</text>
  <text x="450" y="88" fill="#FBBF24" font-family="monospace" font-weight="700" font-size="11.5" text-anchor="middle">&#916;P Surge Detection</text>
  <text x="450" y="112" fill="#38BDF8" font-family="monospace" font-size="11" text-anchor="middle">Peak Tariff Engine</text>
  <text x="450" y="134" fill="#34D399" font-family="monospace" font-size="11" text-anchor="middle">LKR Cost Forecaster</text>
  <text x="450" y="156" fill="#D8B4FE" font-family="monospace" font-size="10" text-anchor="middle">MQTT Broker / Web Host</text>

  <!-- Flow Lines to Loads -->
  <path d="M535 70 H575 V35 H595" stroke="#34D399" stroke-width="2.2"/>
  <polygon points="595,30 605,35 595,40" fill="#34D399"/>

  <path d="M535 105 H595" stroke="#FBBF24" stroke-width="2.2"/>
  <polygon points="595,100 605,105 595,110" fill="#FBBF24"/>

  <path d="M535 140 H575 V175 H595" stroke="#38BDF8" stroke-width="2.2"/>
  <polygon points="595,170 605,175 595,180" fill="#38BDF8"/>

  <!-- Output 1: Lighting Bypass -->
  <rect x="605" y="15" width="105" height="42" rx="6" fill="#0E2E1E" stroke="#34D399" stroke-width="2"/>
  <text x="657" y="36" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="11" text-anchor="middle">Lighting Circuit</text>
  <text x="657" y="50" fill="#34D399" font-family="monospace" font-size="9.5" text-anchor="middle">0s Latency Bypass</text>

  <!-- Output 2: Smart Plugs / Relays -->
  <rect x="605" y="84" width="105" height="42" rx="6" fill="#312206" stroke="#FBBF24" stroke-width="2"/>
  <text x="657" y="105" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="11" text-anchor="middle">ESP32 Plugs</text>
  <text x="657" y="119" fill="#FBBF24" font-family="monospace" font-size="9.5" text-anchor="middle">Peak Delay / Override</text>

  <!-- Output 3: Web Simulator & Telegram -->
  <rect x="605" y="154" width="105" height="42" rx="6" fill="#0C2538" stroke="#38BDF8" stroke-width="2"/>
  <text x="657" y="175" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="11" text-anchor="middle">Simulator UI</text>
  <text x="657" y="189" fill="#38BDF8" font-family="monospace" font-size="9.5" text-anchor="middle">LKR Prediction</text>
</svg>`,
    awardBadge: "Semi-Finalist · Spark Challenge 2025–2026",
    simulatorUrl: "https://kavishshanilka.github.io/gridguard/",
    repoUrl: "https://github.com/kavishshanilka/gridguard/",
    image: "assets/images/projects/gridguard-sim.png",
    keyMetric: {
      value: "> 30%",
      label: "Peak Tariff & Fuel Burden Reduction",
      description: "Demonstrated through autonomous load-shifting and real-time whole-home power delta tracking"
    },
    overview: "Addressing Sri Lanka's costly peak-hour fossil fuel generation crisis by flattening residential demand curves through an intelligent, low-cost edge load-shifting ecosystem.",
    technologies: [
      "Raspberry Pi Central Controller",
      "ESP32 Edge Switch Nodes",
      "PZEM Whole-Home Metering",
      "Delta-P Load Identification",
      "Autonomous Load Shifting",
      "User-First Override Engine",
      "Live Interactive Simulator",
      "LKR Bill & Tariff Forecasting"
    ],
    modalDetails: {
      problem: "In Sri Lanka, evening peak hours (6:30 PM – 10:30 PM) create sharp surges in electricity demand that hydro and renewables cannot meet alone. To bridge this gap, the national utility is forced to fire up expensive, imported thermal fossil fuel plants (diesel and heavy furnace oil), heavily draining foreign currency reserves, inflating consumer tariffs, and generating massive carbon emissions. Traditional commercial smart plugs with built-in power meters are prohibitively expensive for widespread residential deployment.",
      solution: "Engineered GridGuard, a high-impact, low-cost decentralized demand-response system designed to flatten the national demand curve. Rather than outfitting every plug with costly energy-monitoring ICs, GridGuard decouples control from measurement: low-cost intelligent plug/switch nodes handle physical control, while a single central PZEM node monitors aggregate home power at the main distribution board. The central Raspberry Pi brain observes step-change power surges (ΔP) to identify active appliances in real time. Essential lights are never delayed, while heavy loads (>1000W like kettles or heaters) are autonomously delayed during peak windows with an immediate 1-tap user override safeguard, timer scheduling, and real-time LKR bill prediction.",
      engineeringContribution: [
        "Architected an innovative decoupled hardware topology: ultra-low-cost ESP32 switching nodes paired with a single whole-home PZEM meter at the main DB, eliminating expensive per-socket metering chips.",
        "Formulated real-time power delta (ΔP) step-change identification algorithms on the Raspberry Pi central controller to instantly identify high-draw appliances from baseline telemetry.",
        "Implemented autonomous demand-response rules: lighting and low-power electronics are never interrupted, while heavy loads are intercepted during peak hours to protect grid stability.",
        "Integrated an immediate User-First Override system: users can bypass delays with a single button tap on the web interface or physical pushbutton switch.",
        "Built countdown timers (15m, 30m, 60m) and daily off-peak scheduling to allow effortless appliance automation.",
        "Designed real-time Time-of-Use tariff analytics and predictive monthly bill forecasting in Sri Lankan Rupees (LKR).",
        "Developed a standalone client-side interactive simulator reproducing the full physical state machine and live event telemetry."
      ],
      impact: "Successfully flattens the peak demand curve by shifting heavy loads to off-peak periods, reducing consumer electricity bills by > 30% and directly decreasing the nation's reliance on carbon-intensive thermal power plants. Awarded national Semi-Finalist in the Spark Challenge (2025–2026)."
    }
  },

  projects: [
    {
      id: "apfc-panel",
      image: "assets/images/projects/apfc-panel.jpg",
      detailImage: "assets/images/projects/apfc-detail.jpg",
      title: "Smart Automatic Power Factor Corrector (APFC) Panel",
      tagline: "Closed-Loop Dynamic Capacitor Switching & Real-Time Telemetry",
      category: "power",
      categoryLabel: "Power Electronics & Instrumentation",
      linkedinUrl: "https://www.linkedin.com/posts/kavish-shanilka-196947276_electricalengineering-powersystems-powerfactorcorrection-activity-7490728752138788864-vGe6",
      summary: "Engineered an automated Power Factor Corrector panel featuring CT/VT sensing circuits and dynamic capacitor bank switching, integrated with LabVIEW dashboards and ESP32 OLED Telegram alerts.",
      techStack: ["CT/VT Sensing", "Capacitor Bank Switching", "LabVIEW", "NI DAQ", "ESP32", "OLED Display", "Telegram Alerts"],
      highlights: [
        "Precision CT/VT voltage and current phase-angle sensing",
        "Dynamic multi-stage capacitor bank switching logic",
        "Virtual instrumentation dashboard using NI DAQ and LabVIEW",
        "ESP32-driven OLED telemetry and automated Telegram bot alerts"
      ],
      modalDetails: {
        problem: "Heavy inductive industrial equipment degrades the operational power factor, wasting electrical capacity, heating distribution wiring, and triggering steep utility power factor penalty tariffs.",
        solution: "Engineered an autonomous closed-loop APFC system that monitors the phase displacement between voltage and current in real time, automatically staging reactive power compensation via capacitor bank switching.",
        engineeringContribution: [
          "Designed analogue conditioning circuits for Current Transformers (CT) and Voltage Transformers (VT) to reliably extract phase zero-crossings.",
          "Integrated high-speed National Instruments (NI) DAQ with a custom LabVIEW monitoring cockpit for phase angle computation and power vector visualization.",
          "Programmed an auxiliary ESP32 embedded node to drive a local OLED diagnostic readout and trigger instantaneous Telegram alerts during phase imbalance or over-current events.",
          "Ensured industrial-grade galvanic isolation and contactor switching protection."
        ],
        impact: "Restores power factor to near-unity, mitigates grid penalty charges, and delivers instant mobile safety notifications to engineering operators."
      }
    },
    {
      id: "smart-irrigation",
      image: "assets/images/projects/smart-irrigation.jpg",
      title: "Smart Irrigation System Controller",
      tagline: "MATLAB / Simulink Closed-Loop Dynamics & Multi-Zone Routing",
      category: "control",
      categoryLabel: "Control Systems & Simulation",
      linkedinUrl: "https://www.linkedin.com/posts/kavish-shanilka-196947276_smart-irrigation-system-built-in-matlabsimulink-activity-7442443643174649856-mQKp",
      summary: "Modeled closed-loop plant dynamics and hysteresis controller logic for automated multi-zone water storage, routing algorithms, and fault detection to optimize water and energy consumption.",
      techStack: ["MATLAB", "Simulink", "Closed-Loop Control", "Hysteresis Control", "Multi-Zone Routing", "Fault Detection Logic"],
      highlights: [
        "Hydraulic plant dynamic simulation in MATLAB / Simulink",
        "Nonlinear hysteresis controller preventing rapid valve chattering",
        "Multi-zone moisture routing optimization",
        "Automated pipe blockage and sensor failure fault detection logic"
      ],
      modalDetails: {
        problem: "Agricultural and landscape watering networks frequently experience severe water runoff, energy inefficiency, and valve wear from excessive switching oscillations without failure isolation.",
        solution: "Built a comprehensive closed-loop system model in MATLAB and Simulink incorporating hydraulic storage dynamics, hysteresis-bounded switching logic, and intelligent multi-sector moisture routing.",
        engineeringContribution: [
          "Developed mathematical plant models simulating reservoir capacitance, hydraulic flow rates, and soil percolation characteristics.",
          "Designed a hysteresis controller to enforce robust boundary conditions, significantly reducing actuator mechanical fatigue.",
          "Formulated multi-zone routing algorithms that prioritize sectors based on real-time deficit metrics while smoothing electrical pump load profiles.",
          "Integrated fault diagnostic logic that flags abnormal pressure/flow correlations indicative of burst pipes or faulty transducers."
        ],
        impact: "Validated zero-oscillation valve operation and optimized dual-variable water and electrical energy consumption across simulated agricultural sectors."
      }
    },
    {
      id: "alii-processor",
      image: "assets/images/projects/alii-hardware.jpg",
      detailImage: "assets/images/projects/alii-circuit.jpg",
      title: "Advanced Light Intensity Indicator (ALII)",
      tagline: "Discrete Digital Hardware Signal Processor without Microcontrollers",
      category: "hardware",
      categoryLabel: "Discrete Electronics & DSP",
      linkedinUrl: "https://www.linkedin.com/posts/kavish-shanilka-196947276_hardwaredesign-signalprocessing-dsp-activity-7407388664768409600-LIQJ",
      summary: "Designed a discrete hardware signal processor without microcontrollers to monitor and average light intensity in real-time with 50–100 Hz analog harmonic filtering and flip-flop windowed averaging.",
      techStack: ["Discrete Digital Hardware", "Analog Filtering", "Flip-Flop Logic", "Signal Processing", "Time-Windowed Averaging (300–900 s)"],
      highlights: [
        "100% discrete logic implementation — zero MCU firmware overhead",
        "Active analog filtering attenuating 50 Hz / 100 Hz AC ripple",
        "Asynchronous counter & flip-flop registers for 300–900 s window averaging",
        "High electromagnetic resilience and zero-latency hardware execution"
      ],
      modalDetails: {
        problem: "Photometric monitoring in noisy industrial environments typically suffers from 50/100 Hz artificial lighting ripple. Relying on microcontrollers can introduce firmware failure points, vulnerability to EMI, and boot latency.",
        solution: "Engineered the ALII system using pure discrete analog and digital logic components. Ambient light is filtered through dedicated analog stages and averaged over extensive sliding time windows via synchronous flip-flop registers.",
        engineeringContribution: [
          "Designed precision active analog low-pass filtering stages to suppress 50 Hz and 100 Hz optical flicker from mains fluorescent lighting.",
          "Constructed digital time-windowed averaging logic spanning 300 to 900 seconds using interconnected discrete counter stages and D/JK flip-flops.",
          "Implemented state decoding and analog comparator thresholds to drive visual status indicators without any microprocessor intervention.",
          "Minimized circuit parasitic capacitance and optimized power rail decoupling for stable continuous operation."
        ],
        impact: "Achieved deterministic, EMI-immune light intensity tracking with robust long-duration hardware averaging without microcontrollers."
      }
    }
  ],

  skills: {
    power: {
      title: "Power & Energy Systems",
      icon: "zap",
      skills: ["Power Electronics", "Power System Optimization", "Capacitor Bank Switching", "Phase Angle Correction", "Dynamic APFC Panels"]
    },
    embedded: {
      title: "Embedded & Hardware",
      icon: "cpu",
      skills: ["ESP32", "Raspberry Pi", "Arduino", "NI DAQ", "CT/VT Sensor Interfacing", "PZEM Power Meters", "Relay Logic & Actuators"]
    },
    control: {
      title: "Control & Signal Processing",
      icon: "activity",
      skills: ["Control Engineering", "Digital Signal Processing (DSP)", "Closed-Loop Systems", "Hysteresis Control", "Harmonic Filtering", "Analog Signal Conditioning"]
    },
    software: {
      title: "Software & Simulation",
      icon: "layers",
      skills: ["MATLAB", "Simulink", "LabVIEW", "LTSpice", "Proteus", "SolidWorks", "Git"]
    },
    programming: {
      title: "Programming Languages",
      icon: "code",
      skills: ["C", "C++", "Python", "Java", "MATLAB Scripting"]
    },
    competencies: {
      title: "Leadership & Competencies",
      icon: "users",
      skills: ["Technical Leadership", "Team Collaboration", "Project Management", "Analytical Problem Solving", "Public Relations", "Brand Design"]
    }
  },

  education: [
    {
      institution: "University of Moratuwa",
      location: "Moratuwa, Sri Lanka",
      degree: "B.Sc. Hons in Electrical Engineering (Undergraduate)",
      period: "Feb. 2024 – Present",
      gpa: "Cumulative GPA: 3.85 / 4.00",
      description: "Undergraduate degree focusing on power electronics, embedded instrumentation, control systems, and renewable energy integration.",
      badges: ["High Academic Standing", "EESoc Active Member", "SPIRE Career Fair"]
    },
    {
      institution: "Bandaranayake Central College",
      location: "Veyangoda, Sri Lanka",
      degree: "G.C.E. Advanced Level Examination (Physical Science Stream)",
      period: "2011 – 2019",
      gpa: "Z-Score: 2.6192",
      description: "Achieved 3 As in Combined Mathematics, Physics, and Chemistry. Ranked 131st in Sri Lanka (Island Rank) and 12th in the District.",
      badges: ["3 As (Combined Maths, Physics, Chemistry)", "Island Rank: 131st", "District Rank: 12th"]
    }
  ],

  experience: [
    {
      role: "Co-Director – Club Service",
      organization: "Rotaract Alumni University of Moratuwa",
      location: "Moratuwa, Sri Lanka",
      period: "2025 – Present",
      type: "Alumni Executive Leadership",
      description: "Spearheading club service operations, fostering professional camaraderie and engagement between engineering alumni and undergraduates, while coordinating signature fellowship events, inter-club collaborative forums, and professional networking.",
      highlights: [
        "Directing club service operations, fellowship programs, and strategic inter-club initiatives.",
        "Strengthening university alumni engagement across engineering cohorts."
      ]
    },
    {
      role: "Senior Member – Public Relations Pillar",
      organization: "Institution of Engineers Sri Lanka (IESL) Student Chapter – University of Moratuwa",
      location: "Moratuwa, Sri Lanka",
      period: "2026 – 2027",
      type: "Administrative Committee",
      description: "Appointed to the 2026/2027 Administrative Committee of the IESL Student Chapter – University of Moratuwa as a Senior Member of the Public Relations Pillar. Leading national digital outreach frameworks, public relations strategy, and high-impact industry communication channels connecting young engineers and undergraduates with professional engineering practice.",
      highlights: [
        "Elected / appointed to the Administrative Committee 2026/2027.",
        "Directing PR and digital engagement across national student and young member chapters.",
        "Promoted technical sessions and industry-academia networking initiatives."
      ]
    },
    {
      role: "Active Member & Rotaractor Award Recipient",
      organization: "Rotaract Club of University of Moratuwa (Rotaract Mora)",
      location: "Moratuwa, Sri Lanka",
      period: "2025 – Present",
      type: "Youth Leadership & Service",
      description: "Honored with the prestigious Rotaractor Award (2025) in recognition of dedicated service, leadership, and active contributions across key community outreach and youth empowerment projects.",
      highlights: [
        "Received Rotaractor Award 2025 in recognition of exceptional service and dedication.",
        "Served as Project Chair for CAST 4 (new member onboarding and networking gathering)."
      ]
    },
    {
      role: "Design Team Lead",
      organization: "Prakampana ’26 – Department of Electrical Engineering, UoM",
      location: "Moratuwa, Sri Lanka",
      period: "March 2026 – April 2026",
      type: "Departmental Leadership",
      description: "Directed visual design branding, social media campaign artwork, and promotional assets for the annual departmental flagship event.",
      highlights: [
        "Led creative direction and established comprehensive brand guidelines.",
        "Coordinated visual communication assets across digital media channels."
      ]
    },
    {
      role: "Editorial & Marketing Team Member",
      organization: "Electrical Engineering Society (EESOC), University of Moratuwa",
      location: "Moratuwa, Sri Lanka",
      period: "2025 – Present",
      type: "Departmental Society Leadership",
      description: "Contributing to departmental editorial publications, social media campaign artwork, and promotional strategies for flagship EESOC events.",
      highlights: [
        "Coordinating visual communication and graphic design assets for flagship departmental events.",
        "Contributing to editorial releases and cross-batch academic publications."
      ]
    },
    {
      role: "Project Chair – Project HOPE",
      organization: "Leo Club",
      location: "Sri Lanka",
      period: "2025",
      type: "Community Empowerment",
      description: "Spearheaded community empowerment initiatives targeting sustainable income generation pathways for underprivileged groups.",
      highlights: [
        "Mobilized cross-functional volunteer teams and community resources.",
        "Structured sustainable grassroots income generation workshops."
      ]
    },
    {
      role: "Project Chair – CAST 4",
      organization: "Rotaract Club",
      location: "Sri Lanka",
      period: "2025",
      type: "Youth Leadership & Onboarding",
      description: "Organized the onboarding and networking gathering for new members, leading logistics, team-building sessions, and entertainment.",
      highlights: [
        "Spearheaded end-to-end logistics, venue coordination, and interactive team-building.",
        "Facilitated mentorship and orientation for incoming members."
      ]
    }
  ],

  awards: [
    {
      title: "Semi-Finalist — Spark Challenge",
      organization: "Spark Challenge Organizing Committee",
      year: "2025 – 2026",
      badge: "National Engineering Innovation",
      description: "Selected for semi-finals for designing GridGuard, an edge-coordinated smart energy management system achieving > 30% electricity cost reduction."
    },
    {
      title: "University Category Competitor — SLIOT Challenge 2026",
      organization: "CSE Dept. (UoM), SLT-Mobitel, IESL",
      year: "April 2026",
      badge: "National IoT Challenge",
      description: "Competed as part of Team Neura in the premier national IoT innovation challenge with an automated hardware prototype."
    },
    {
      title: "Rotaractor Award",
      organization: "Rotaract Club",
      year: "2025",
      badge: "Honorary Recognition",
      description: "Honored in recognition of dedicated service, leadership, and active contributions across key community outreach and engineering initiatives."
    }
  ],

  reference: {
    name: "Sen. Prof. Anura Wijayapala",
    title: "Senior Professor",
    department: "Department of Electrical Engineering",
    institution: "University of Moratuwa, Sri Lanka",
    email: "anuraw@uom.lk",
    phone: "+94112650625 Ext: 3212",
    mobile: "+94718178975",
    fax: "+94112651787"
  }
};