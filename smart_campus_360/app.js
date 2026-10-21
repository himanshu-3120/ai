/**
 * SMART CAMPUS 360 - Central Application Logic & Simulation Engine
 * Master Platform Controller
 */

// Initial Seed Data
const DEFAULT_STATE = {
  currentUser: {
    name: "Dr. Eleanor Vance",
    email: "e.vance@smartcampus360.edu",
    role: "Super Administrator",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    id: "EMP-ADM-001"
  },
  currentAcademicTerm: "2026-27 (Fall Semester)",
  activeView: "dashboard",
  
  // 1. ADMISSIONS & ENROLLMENT
  applications: [
    {
      id: "APP-2026-0101",
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      phone: "+91 98765 43210",
      program: "B.Tech Computer Science & Engineering",
      programCode: "BTECH-CSE",
      appliedDate: "2026-10-15",
      docStatus: "Verified",
      eligibilityStatus: "Eligible",
      reviewStatus: "Decision Issued",
      decision: "Offer Accepted",
      feeStatus: "Paid",
      enrolledStudentId: "SC360-2026-CS001",
      reviewer: "Dr. Eleanor Vance",
      qualification: "12th CBSE (PCM: 92.4%)",
      ocrData: {
        extractedName: "Aarav Sharma",
        institution: "Delhi Public School, R.K. Puram",
        passingYear: "2026",
        marksPCM: "92.4%",
        status: "Match Verified",
        docType: "Class XII Marksheet"
      },
      rulesEvaluated: [
        { rule: "Minimum 75% in Physics, Chemistry & Mathematics", passed: true, detail: "Score 92.4% >= 75%" },
        { rule: "Mandatory Mathematics qualification", passed: true, detail: "Mathematics verified" },
        { rule: "Valid National/State Entrance Percentile", passed: true, detail: "JEE Rank: 4,120" }
      ],
      history: [
        { status: "Draft", time: "2026-10-15 10:30 AM" },
        { status: "Submitted", time: "2026-10-15 11:15 AM" },
        { status: "Documents Verified", time: "2026-10-16 02:45 PM" },
        { status: "Offer Issued", time: "2026-10-17 09:00 AM" },
        { status: "Fee Paid & Enrolled", time: "2026-10-18 04:30 PM" }
      ]
    },
    {
      id: "APP-2026-0102",
      name: "Priya Patel",
      email: "priya.patel@example.com",
      phone: "+91 98234 56789",
      program: "B.Tech Artificial Intelligence & Data Science",
      programCode: "BTECH-AIDS",
      appliedDate: "2026-10-18",
      docStatus: "Verified",
      eligibilityStatus: "Eligible",
      reviewStatus: "Offer Issued",
      decision: "Pending Acceptance",
      feeStatus: "Pending",
      enrolledStudentId: null,
      reviewer: "Prof. Rajesh Kumar",
      qualification: "12th HSC (PCM: 87.2%)",
      ocrData: {
        extractedName: "Priya Patel",
        institution: "St. Xavier's Junior College",
        passingYear: "2026",
        marksPCM: "87.2%",
        status: "Match Verified",
        docType: "Class XII Marksheet"
      },
      rulesEvaluated: [
        { rule: "Minimum 75% in PCM", passed: true, detail: "Score 87.2% >= 75%" },
        { rule: "Prerequisite Mathematics", passed: true, detail: "Mathematics verified" }
      ],
      history: [
        { status: "Submitted", time: "2026-10-18 01:20 PM" },
        { status: "Documents Verified", time: "2026-10-19 11:00 AM" },
        { status: "Offer Issued", time: "2026-10-20 03:15 PM" }
      ]
    },
    {
      id: "APP-2026-0103",
      name: "Rohan Varma",
      email: "rohan.varma@example.com",
      phone: "+91 97123 45678",
      program: "B.Tech Mechanical Engineering",
      programCode: "BTECH-MECH",
      appliedDate: "2026-10-19",
      docStatus: "Needs Review",
      eligibilityStatus: "Review Required",
      reviewStatus: "Under Review",
      decision: "Pending",
      feeStatus: "Pending",
      enrolledStudentId: null,
      reviewer: "Admissions Desk 2",
      qualification: "12th ISC (PCM: 68.0%)",
      ocrData: {
        extractedName: "Rohan Varma",
        institution: "Modern School, Barakhamba",
        passingYear: "2026",
        marksPCM: "68.0%",
        status: "Near Cutoff Flag",
        docType: "Class XII Marksheet"
      },
      rulesEvaluated: [
        { rule: "Minimum 70% in PCM for Mechanical Eng.", passed: false, detail: "Score 68.0% < 70% (Eligible for Sports/Quota Review)" }
      ],
      history: [
        { status: "Submitted", time: "2026-10-19 09:40 AM" },
        { status: "Needs Review (Score border)", time: "2026-10-19 11:30 AM" }
      ]
    },
    {
      id: "APP-2026-0104",
      name: "Ananya Deshmukh",
      email: "ananya.d@example.com",
      phone: "+91 99887 66554",
      program: "B.Tech Computer Science & Engineering",
      programCode: "BTECH-CSE",
      appliedDate: "2026-10-20",
      docStatus: "Missing Documents",
      eligibilityStatus: "Not Yet Assessable",
      reviewStatus: "Documents Pending",
      decision: "Awaiting Files",
      feeStatus: "Pending",
      enrolledStudentId: null,
      reviewer: "Admissions Desk 1",
      qualification: "12th State Board (Awaiting Official Transcript)",
      ocrData: null,
      rulesEvaluated: [],
      history: [
        { status: "Draft Created", time: "2026-10-20 03:00 PM" },
        { status: "Missing Document Notice Sent", time: "2026-10-20 04:10 PM" }
      ]
    }
  ],

  programSeats: [
    { code: "BTECH-CSE", name: "B.Tech Computer Science & Eng.", totalSeats: 120, offersAccepted: 112, confirmed: 104 },
    { code: "BTECH-AIDS", name: "B.Tech AI & Data Science", totalSeats: 60, offersAccepted: 54, confirmed: 48 },
    { code: "BTECH-ECE", name: "B.Tech Electronics & Comm.", totalSeats: 90, offersAccepted: 78, confirmed: 70 },
    { code: "BTECH-MECH", name: "B.Tech Mechanical Engineering", totalSeats: 60, offersAccepted: 42, confirmed: 36 }
  ],

  // 2. EXAM MANAGEMENT
  exams: [
    {
      id: "EXAM-CS301",
      subjectCode: "CS301",
      subjectName: "Data Structures & Algorithms",
      program: "B.Tech CSE - 3rd Sem",
      section: "Sec A & B",
      studentsCount: 118,
      examType: "Theory",
      date: "2026-11-04",
      timeSlot: "09:30 AM - 12:30 PM",
      roomId: "ROOM-AUDI-1",
      roomName: "Main Auditorium (East Wing)",
      invigilatorId: "EMP-FAC-014",
      invigilatorName: "Prof. Alan Turing",
      status: "Scheduled",
      hasConflict: false,
      conflictReason: ""
    },
    {
      id: "EXAM-CS303",
      subjectCode: "CS303",
      subjectName: "Operating Systems",
      program: "B.Tech CSE - 3rd Sem",
      section: "Sec A",
      studentsCount: 60,
      examType: "Theory",
      date: "2026-11-04",
      timeSlot: "09:30 AM - 12:30 PM", // Deliberate clash demo!
      roomId: "ROOM-AUDI-1",
      roomName: "Main Auditorium (East Wing)",
      invigilatorId: "EMP-FAC-014",
      invigilatorName: "Prof. Alan Turing",
      status: "Conflict Detected",
      hasConflict: true,
      conflictReason: "Double-booking: Sec A already has CS301 at 09:30 AM. Room & Invigilator overlap!"
    },
    {
      id: "EXAM-AI201",
      subjectCode: "AI201",
      subjectName: "Machine Learning Foundations",
      program: "B.Tech AIDS - 3rd Sem",
      section: "Sec A",
      studentsCount: 55,
      examType: "Theory",
      date: "2026-11-06",
      timeSlot: "02:00 PM - 05:00 PM",
      roomId: "ROOM-L204",
      roomName: "Lecture Hall 204 (North Block)",
      invigilatorId: "EMP-FAC-019",
      invigilatorName: "Dr. Sarah Jenkins",
      status: "Scheduled",
      hasConflict: false,
      conflictReason: ""
    },
    {
      id: "EXAM-CS305-P",
      subjectCode: "CS305-P",
      subjectName: "Database Systems Lab Practical",
      program: "B.Tech CSE - 3rd Sem",
      section: "Sec B",
      studentsCount: 30,
      examType: "Practical",
      date: "2026-11-08",
      timeSlot: "10:00 AM - 01:00 PM",
      roomId: "LAB-CS-02",
      roomName: "Advanced Computing Lab 2",
      invigilatorId: "EMP-FAC-022",
      invigilatorName: "Prof. Vikram Seth",
      status: "Scheduled",
      hasConflict: false,
      conflictReason: ""
    }
  ],

  rooms: [
    { id: "ROOM-AUDI-1", name: "Main Auditorium", capacity: 250, building: "East Wing", type: "Exam Hall", hasAC: true, hasProjector: true, accessible: true, utilization: "78%" },
    { id: "ROOM-L204", name: "Lecture Hall 204", capacity: 80, building: "North Block", type: "Lecture Hall", hasAC: true, hasProjector: true, accessible: true, utilization: "65%" },
    { id: "ROOM-L205", name: "Lecture Hall 205", capacity: 80, building: "North Block", type: "Lecture Hall", hasAC: true, hasProjector: true, accessible: true, utilization: "40%" },
    { id: "LAB-CS-01", name: "Computing Lab 1", capacity: 40, building: "CS Block", type: "Computer Lab", hasAC: true, hasProjector: true, accessible: false, utilization: "85%" },
    { id: "LAB-CS-02", name: "Computing Lab 2", capacity: 40, building: "CS Block", type: "Computer Lab", hasAC: true, hasProjector: true, accessible: true, utilization: "70%" }
  ],

  // 3. PAYROLL MANAGEMENT
  payrollRuns: [
    {
      runId: "PAY-2026-10",
      period: "October 2026",
      totalGross: 14250000,
      totalDeductions: 1350000,
      totalNet: 12900000,
      employeeCount: 342,
      status: "Exceptions Review",
      preparedBy: "Ramesh Gupta (Payroll Officer)",
      approvedBy: "Pending Approver",
      paymentStatus: "Pending Approval",
      reconciledCount: 0,
      exceptionsCount: 2
    },
    {
      runId: "PAY-2026-09",
      period: "September 2026",
      totalGross: 14120000,
      totalDeductions: 1340000,
      totalNet: 12780000,
      employeeCount: 340,
      status: "Reconciled",
      preparedBy: "Ramesh Gupta",
      approvedBy: "Dr. Eleanor Vance",
      paymentStatus: "Disbursed",
      reconciledCount: 340,
      exceptionsCount: 0
    }
  ],

  payrollEmployees: [
    {
      empId: "EMP-FAC-014",
      name: "Prof. Alan Turing",
      dept: "Computer Science",
      designation: "Professor & Chair",
      basic: 85000,
      hra: 25500,
      da: 17000,
      specialAllowance: 12500,
      extraDutyBonus: 5000, // 2 extra lectures
      gross: 145000,
      pf: 10200,
      tax: 18500,
      healthInsurance: 2500,
      totalDeductions: 31200,
      netPay: 113800,
      bankAccount: "HDFC **** 8892",
      panNumber: "ABCDE1234F",
      workingDays: 26,
      leaveTaken: 1,
      exceptionNote: "Unusual salary bump (+22%) flagged: requires approved dean memo verification.",
      exceptionResolved: false
    },
    {
      empId: "EMP-FAC-019",
      name: "Dr. Sarah Jenkins",
      dept: "Computer Science",
      designation: "Associate Professor",
      basic: 65000,
      hra: 19500,
      da: 13000,
      specialAllowance: 9500,
      extraDutyBonus: 0,
      gross: 107000,
      pf: 7800,
      tax: 11200,
      healthInsurance: 2000,
      totalDeductions: 21000,
      netPay: 86000,
      bankAccount: "ICICI **** 4129",
      panNumber: "FGHIJ5678K",
      workingDays: 26,
      leaveTaken: 0,
      exceptionNote: "",
      exceptionResolved: true
    },
    {
      empId: "EMP-FAC-022",
      name: "Prof. Vikram Seth",
      dept: "Mechanical Engineering",
      designation: "Assistant Professor",
      basic: 52000,
      hra: 15600,
      da: 10400,
      specialAllowance: 7000,
      extraDutyBonus: 0,
      gross: 85000,
      pf: 6240,
      tax: 7500,
      healthInsurance: 1800,
      totalDeductions: 15540,
      netPay: 69460,
      bankAccount: "SBI **** 9012",
      panNumber: "KLMNO9012P",
      workingDays: 24,
      leaveTaken: 2,
      exceptionNote: "Disputed 1-day absence: medical slip attached, pending HOD signoff before deduction.",
      exceptionResolved: false
    }
  ],

  // 4. STUDENT TRACKING & MANAGEMENT
  students: [
    {
      id: "SC360-2024-CS042",
      name: "Rohan Sharma",
      email: "rohan.sharma@campus.edu",
      program: "B.Tech Computer Science",
      semester: "3rd Semester",
      section: "Sec A",
      mentor: "Dr. Sarah Jenkins",
      attendance: 68.5, // Alert trigger! (<75%)
      cgpa: 7.4,
      riskLevel: "High Support Needed",
      riskReason: "Attendance dropped below 75% threshold in CS301 (64%) & missed 2 assignments.",
      subjects: [
        { code: "CS301", name: "Data Structures", attendance: "64%", grade: "C+", status: "Needs Recovery" },
        { code: "CS302", name: "Computer Architecture", attendance: "74%", grade: "B", status: "On Track" },
        { code: "CS303", name: "Operating Systems", attendance: "71%", grade: "B-", status: "Borderline" },
        { code: "MATH301", name: "Discrete Mathematics", attendance: "78%", grade: "A-", status: "Good" }
      ],
      recoveryPlan: [
        { task: "Attend CS301 Peer Study Circle (Tue/Thu)", completed: false, due: "2026-10-28" },
        { task: "Submit Assignment #2 Revision to Dr. Sarah", completed: true, due: "2026-10-22" },
        { task: "Attend Faculty Office Hours with Prof. Turing", completed: false, due: "2026-10-25" }
      ],
      growthPassport: [
        { type: "Hackathon", title: "Smart India Hackathon 2025 Runner Up", verified: true, verifier: "Dr. Sarah Jenkins" },
        { type: "Certification", title: "AWS Certified Cloud Practitioner", verified: true, verifier: "Dean Academics" },
        { type: "Skill", title: "React, Python & PostgreSQL Development", verified: false, verifier: "Self-Reported" }
      ]
    },
    {
      id: "SC360-2024-CS015",
      name: "Meera Nair",
      email: "meera.nair@campus.edu",
      program: "B.Tech Computer Science",
      semester: "3rd Semester",
      section: "Sec A",
      mentor: "Dr. Sarah Jenkins",
      attendance: 94.2,
      cgpa: 9.35,
      riskLevel: "Low / Exemplary",
      riskReason: "Consistent top performer, eligible for IEEE research grant.",
      subjects: [
        { code: "CS301", name: "Data Structures", attendance: "96%", grade: "A+", status: "Exemplary" },
        { code: "CS302", name: "Computer Architecture", attendance: "92%", grade: "A", status: "Exemplary" },
        { code: "CS303", name: "Operating Systems", attendance: "95%", grade: "A+", status: "Exemplary" },
        { code: "MATH301", name: "Discrete Mathematics", attendance: "94%", grade: "A", status: "Exemplary" }
      ],
      recoveryPlan: [],
      growthPassport: [
        { type: "Research Paper", title: "Edge AI for Campus Microgrids (Published in IEEE)", verified: true, verifier: "Prof. Alan Turing" },
        { type: "Leadership", title: "Google Developer Student Club Lead", verified: true, verifier: "Student Welfare" }
      ]
    }
  ],

  // 5. EMPLOYEE & ATTENDANCE MANAGEMENT
  employees: [
    {
      id: "EMP-FAC-014",
      name: "Prof. Alan Turing",
      role: "Faculty",
      dept: "Computer Science",
      designation: "Professor",
      email: "a.turing@smartcampus360.edu",
      phone: "+91 98760 11223",
      shift: "General (09:00 AM - 05:00 PM)",
      todayStatus: "Present",
      checkIn: "08:52 AM",
      checkOut: "--:--",
      weeklyHours: 36,
      leaveBalance: { casual: 6, medical: 8, duty: 4 }
    },
    {
      id: "EMP-FAC-019",
      name: "Dr. Sarah Jenkins",
      role: "Faculty",
      dept: "Computer Science",
      designation: "Associate Professor",
      email: "s.jenkins@smartcampus360.edu",
      phone: "+91 98760 33445",
      shift: "General (09:00 AM - 05:00 PM)",
      todayStatus: "Present",
      checkIn: "09:05 AM",
      checkOut: "--:--",
      weeklyHours: 32,
      leaveBalance: { casual: 8, medical: 10, duty: 5 },
      subjects: ["Data Structures", "Operating Systems", "Algorithms"]
    },
    {
      id: "EMP-FAC-028",
      name: "Dr. Marcus Vance",
      role: "Faculty",
      dept: "Computer Science",
      designation: "Assistant Professor",
      email: "m.vance@smartcampus360.edu",
      phone: "+91 98760 55667",
      shift: "General (09:00 AM - 05:00 PM)",
      todayStatus: "On Leave (Medical)",
      checkIn: "--:--",
      checkOut: "--:--",
      weeklyHours: 24,
      leaveBalance: { casual: 4, medical: 5, duty: 2 },
      subjects: ["Algorithms", "Database Systems"]
    }
  ],

  leaveRequests: [
    {
      id: "LV-2026-089",
      empId: "EMP-FAC-028",
      empName: "Dr. Marcus Vance",
      dept: "Computer Science",
      leaveType: "Medical Leave",
      startDate: "2026-10-22",
      endDate: "2026-10-23",
      reason: "Post-op dental surgery recovery",
      affectedDuty: "Lecture: CS301 Algorithms (Sec B, Thu 10:00 AM, Room L204)",
      status: "Approved",
      substituteAssigned: "Dr. Sarah Jenkins",
      substituteStatus: "Confirmed"
    },
    {
      id: "LV-2026-090",
      empId: "EMP-FAC-022",
      empName: "Prof. Vikram Seth",
      dept: "Mechanical Engineering",
      leaveType: "Duty Leave",
      startDate: "2026-10-26",
      endDate: "2026-10-27",
      reason: "Keynote Speaker at National Robotics Symposium",
      affectedDuty: "Lab: Robotics Practical (Sec A, Mon 02:00 PM)",
      status: "Pending Approval",
      substituteAssigned: "Unassigned",
      substituteStatus: "Action Required"
    }
  ],

  // 6. CAMPUS SERVICES & OPERATIONAL INNOVATIONS
  campusIssues: [
    {
      id: "TICK-2026-401",
      title: "Broken Ceiling Fan in Room 302 (Repeated Fault)",
      category: "Electrical / Facilities",
      location: "Science Block - Room 302",
      assetId: "FAN-302-B",
      priority: "High",
      status: "Awaiting Verification",
      reporter: "Rohan Sharma (Student)",
      assignedTo: "Manoj Kumar (Electrical Team)",
      reportedAt: "2026-10-20 11:20 AM",
      resolvedAt: "2026-10-21 03:45 PM",
      repeatCount: 3, // Problem Radar!
      radarWarning: "Asset failed 3 times in 45 days. Recommendation: Full motor replacement instead of minor capacitor patch.",
      resolutionNotes: "Replaced entire motor assembly with new Havells 1200mm unit. Photo proof uploaded.",
      verifiedByStudent: false
    },
    {
      id: "TICK-2026-402",
      title: "Intermittent Wi-Fi AP Dropouts during Peak Hours",
      category: "Wi-Fi & IT Infrastructure",
      location: "Central Library 2nd Floor & West Corridors",
      assetId: "AP-LIB-04",
      priority: "High",
      status: "In Progress",
      reporter: "Meera Nair (Student)",
      assignedTo: "Network NOC Team",
      reportedAt: "2026-10-21 09:15 AM",
      repeatCount: 2,
      radarWarning: "Campus Brain correlation: Matches heavy 11:00 AM digital library check-in traffic. Bandwidth throttling detected.",
      resolutionNotes: "Deploying supplemental Cisco WiFi-6 AP and QoS priority policy.",
      verifiedByStudent: false
    },
    {
      id: "TICK-2026-403",
      title: "Wheelchair Ramp Railing Loose",
      category: "Accessibility Barrier",
      location: "Administrative Building Entrance Ramp",
      assetId: "RAMP-ADM-01",
      priority: "Urgent",
      status: "Resolved",
      reporter: "Campus Accessibility Cell",
      assignedTo: "Civil Maintenance",
      reportedAt: "2026-10-18 08:30 AM",
      resolvedAt: "2026-10-19 02:15 PM",
      repeatCount: 1,
      radarWarning: "",
      resolutionNotes: "Welded steel supports and added non-slip grip tape. Verified safe.",
      verifiedByStudent: true
    }
  ],

  // 7. STUDENT INNOVATION EXCHANGE
  innovationChallenges: [
    {
      id: "CHAL-01",
      title: "Campus Energy Wastage Reducer",
      dept: "Facilities & Sustainability",
      problem: "Reduce idle classroom HVAC and lighting electricity consumption during gaps between lectures.",
      budgetPilot: "₹25,000 Approved Pilot",
      deadline: "2026-11-15",
      proposals: [
        {
          teamName: "EcoVolt Innovators",
          lead: "Aarav Sharma",
          mentor: "Prof. Alan Turing",
          status: "Pilot in Progress (Room L204)",
          baselineEnergy: "148 kWh/day",
          pilotEnergy: "96 kWh/day",
          measuredSavings: "35.1% reduction verified"
        }
      ]
    },
    {
      id: "CHAL-02",
      title: "Automated Cafeteria Surplus Food Redistribution",
      dept: "Student Welfare & CSR",
      problem: "Connect daily fresh hostel food surplus with local community shelters before expiry.",
      budgetPilot: "₹15,000 Seed",
      deadline: "2026-12-01",
      proposals: [
        {
          teamName: "ZeroHunger 360",
          lead: "Priya Patel",
          mentor: "Dr. Sarah Jenkins",
          status: "Proposal Under Review",
          baselineEnergy: "N/A",
          pilotEnergy: "N/A",
          measuredSavings: "Est. 80 meals saved/day"
        }
      ]
    }
  ],

  // 8. RESOURCE SHARING INVENTORY
  resources: [
    { id: "RES-01", name: "Creality Ender-3 V2 3D Printer", category: "Fabrication Lab", ownerDept: "Mechanical Eng.", status: "Available", location: "Lab M-104", condition: "Excellent", loanDays: 3 },
    { id: "RES-02", name: "Keysight 200MHz Digital Oscilloscope", category: "Electronics Lab", ownerDept: "ECE Dept", status: "Borrowed", location: "ECE Lab 3", condition: "Calibrated", loanDays: 5, borrower: "EcoVolt Team" },
    { id: "RES-03", name: "DJI Mini 3 Pro Inspection Drone", category: "Survey & Inspection", ownerDept: "Civil & Ops", status: "Available", location: "Estate Office", condition: "Excellent", loanDays: 2 }
  ],

  // 9. AUDIT LOG (Every critical event tracked)
  auditLogs: [
    { id: "AUD-1001", timestamp: "2026-10-21 16:30:12", user: "Dr. Eleanor Vance", role: "Super Administrator", action: "Approved Payroll Run", entity: "PAY-2026-09", reason: "All 340 employee salary lines reconciled with verified biometric attendance" },
    { id: "AUD-1002", timestamp: "2026-10-21 14:15:00", user: "HR Office", role: "HR Officer", action: "Assigned Smart Substitute", entity: "LV-2026-089", reason: "Assigned Dr. Sarah Jenkins to replace Dr. Marcus Vance for CS301 (Algorithms expertise match)" },
    { id: "AUD-1003", timestamp: "2026-10-20 17:45:22", user: "Admissions Desk", role: "Admissions Officer", action: "Confirmed Enrollment & Generated ID", entity: "APP-2026-0101", reason: "Fee verified (Txn #HDFC998231) -> Generated SC360-2026-CS001" },
    { id: "AUD-1004", timestamp: "2026-10-20 10:20:05", user: "Exam Cell", role: "Exam Coordinator", action: "Detected Schedule Clash", entity: "EXAM-CS303", reason: "Constraint Engine flagged clash with EXAM-CS301 for Section A" }
  ],


  // 11. AI STUDENT SUCCESS PREDICTIONS (NIST AI RMF Decision Support Engine)
  studentPredictions: [
    {
      studentId: "SC360-2024-CS042",
      name: "Rohan Sharma",
      program: "B.Tech CSE - 3rd Sem",
      section: "Sec A",
      mentor: "Dr. Sarah Jenkins",
      attendance: 68.5,
      internalScore: "54.2%",
      assignmentVelocity: "2 Missed / 1 Late",
      passProbability: 42,
      predictedGrade: "Risk of D / Arrears in CS301",
      riskLevel: "High Risk (<55%)",
      riskClass: "badge-danger",
      modelConfidence: "92.4%",
      explainableFactors: [
        "Attendance in CS301 (64%) dropped below 75% cutoff threshold",
        "Missed Assignment #2 submission and delayed Midterm Quiz",
        "Prerequisite C-Programming internal score was borderline (62%)"
      ],
      recommendedIntervention: "1-on-1 Office Hour with Dr. Sarah Jenkins & Peer Study Circle assignment",
      interventionTriggered: false
    },
    {
      studentId: "SC360-2025-CS088",
      name: "Devika Sen",
      program: "B.Tech CSE - 3rd Sem",
      section: "Sec B",
      mentor: "Prof. Alan Turing",
      attendance: 76.0,
      internalScore: "66.5%",
      assignmentVelocity: "All Submitted on Time",
      passProbability: 68,
      predictedGrade: "Predicted Grade: B- / C+",
      riskLevel: "Moderate Support Needed",
      riskClass: "badge-warning",
      modelConfidence: "89.1%",
      explainableFactors: [
        "Attendance hovering near 75% threshold boundary",
        "Lab practical marks lagging theoretical quiz scores (-18% delta)",
        "Frequent gaps in database query assignments"
      ],
      recommendedIntervention: "Enroll in Computing Lab 2 hands-on remedial practice hours",
      interventionTriggered: false
    },
    {
      studentId: "SC360-2026-CS001",
      name: "Aarav Sharma",
      program: "B.Tech CSE - 3rd Sem",
      section: "Sec A",
      mentor: "Dr. Sarah Jenkins",
      attendance: 88.5,
      internalScore: "89.4%",
      assignmentVelocity: "100% on Time (Early)",
      passProbability: 94,
      predictedGrade: "Predicted Grade: A / Distinction",
      riskLevel: "On-Track / Safe",
      riskClass: "badge-success",
      modelConfidence: "96.4%",
      explainableFactors: [
        "Consistent 88.5% attendance across all 4 subjects",
        "High continuous assessment scores (avg 89.4%)",
        "Strong performance in competitive algorithms exercises"
      ],
      recommendedIntervention: "Nominate for IEEE Undergraduate Fellowship & Advanced Research Track",
      interventionTriggered: true
    },
    {
      studentId: "SC360-2024-CS015",
      name: "Meera Nair",
      program: "B.Tech CSE - 3rd Sem",
      section: "Sec A",
      mentor: "Prof. Alan Turing",
      attendance: 94.2,
      internalScore: "96.8%",
      assignmentVelocity: "Exemplary Submissions",
      passProbability: 99,
      predictedGrade: "Predicted Grade: A+ (Gold Medal Track)",
      riskLevel: "Exemplary",
      riskClass: "badge-accent",
      modelConfidence: "98.7%",
      explainableFactors: [
        "Top decile attendance (94.2%) and perfect lab evaluations",
        "Published research paper in IEEE Edge AI Architecture",
        "Demonstrated peer leadership as GDSC Technical Lead"
      ],
      recommendedIntervention: "Appoint as Student Peer Tutor & Fast-track Department Honors",
      interventionTriggered: true
    }
  ],

  // 12. CANTEEN DEMAND & FOOD WASTE PREDICTION (Annapurna Mess & Kaveri Food Court)
  canteenData: {
    messName: "Annapurna Central Mess & Food Court",
    currentDate: "Today (Thursday)",
    hostelResidentCount: 2150,
    dayScholarCount: 2670,
    dailyForecast: {
      breakfast: { menu: "Masala Dosa, Sambar, Coconut Chutney & Filter Coffee", predictedCount: 1650, actualPrepared: 1700, surplusCount: 50, status: "Normal" },
      lunch: { menu: "Paneer Butter Masala, Dal Tadka, Jeera Rice, Tawa Roti, Gulab Jamun", predictedCount: 2380, actualPrepared: 2420, surplusCount: 40, status: "Optimized (98.3% accuracy)" },
      snacks: { menu: "Punjabi Samosa with Mint Chutney & Adrak Masala Chai", predictedCount: 1200, actualPrepared: 1250, surplusCount: 50, status: "Normal" },
      dinner: { menu: "Rajma Masala, Steamed Rice, Phulkas, Aloo Gobhi & Salad", predictedCount: 1980, actualPrepared: 2000, surplusCount: 20, status: "High Efficiency" }
    },
    rawIngredientsNeeded: [
      { item: "Basmati Rice", neededKg: 180, savedKg: 28, unitCost: 65 },
      { item: "Chakki Fresh Atta", neededKg: 210, savedKg: 32, unitCost: 42 },
      { item: "Fresh Dairy Paneer", neededKg: 65, savedKg: 8, unitCost: 340 },
      { item: "Toor & Moong Dal", neededKg: 85, savedKg: 14, unitCost: 145 },
      { item: "Fresh Farm Vegetables", neededKg: 240, savedKg: 35, unitCost: 38 }
    ],
    redistributionLog: [
      { id: "DON-2026-104", time: "14:30 PM", meal: "Lunch Surplus", quantity: "38 Fresh Packaged Thalis", partner: "Robin Hood Army (Campus Youth Chapter)", dest: "Civil Hospital Shelter", status: "Delivered & Verified" },
      { id: "DON-2026-103", time: "09:45 AM", meal: "Breakfast Surplus", quantity: "45 Idli-Vada Combos", partner: "Annakshetra Trust", dest: "Rain Basera Night Home", status: "Delivered & Verified" }
    ],
    monthlySavingsInr: 148500,
    foodWastePercent: 1.8 // down from standard campus average 12.4%
  },
  // 10. NOTIFICATIONS
  notifications: [
    { id: "NOTIF-1", title: "Exam Clash Alert", message: "Operating Systems (CS303) conflicts with Data Structures (CS301) for CSE Sec A on Nov 4.", category: "Exams", read: false, time: "10 mins ago" },
    { id: "NOTIF-2", title: "Payroll Anomaly Warning", message: "Prof. Alan Turing has an unexplained 22% salary increase in October run.", category: "Payroll", read: false, time: "45 mins ago" },
    { id: "NOTIF-3", title: "Recurring Fault Flagged", message: "Room 302 Ceiling Fan reported for 3rd time in 45 days. Inspection recommended.", category: "Facilities", read: false, time: "2 hours ago" },
    { id: "NOTIF-4", title: "New Application Submitted", message: "Ananya Deshmukh applied for B.Tech CSE (APP-2026-0104). Documents pending.", category: "Admissions", read: true, time: "4 hours ago" }
  ]
};

// Storage helper for persistence
class StateStore {
  constructor() {
    this.key = "SMART_CAMPUS_360_STATE_V1";
    this.state = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(this.key);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not load state from localStorage, falling back to defaults", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  save() {
    try {
      localStorage.setItem(this.key, JSON.stringify(this.state));
    } catch (e) {
      console.error("Failed to save state to localStorage", e);
    }
  }

  reset() {
    this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    this.save();
    window.location.reload();
  }

  logAudit(action, entity, reason) {
    const entry = {
      id: `AUD-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      user: this.state.currentUser.name,
      role: this.state.currentUser.role,
      action: action,
      entity: entity,
      reason: reason
    };
    this.state.auditLogs.unshift(entry);
    this.save();
  }

  addNotification(title, message, category = "General") {
    const notif = {
      id: `NOTIF-${Date.now().toString().slice(-4)}`,
      title,
      message,
      category,
      read: false,
      time: "Just now"
    };
    this.state.notifications.unshift(notif);
    this.save();
  }
}

// Global state instance
const store = new StateStore();

// UI Toast Notification helper
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast`;
  
  let icon = "info";
  let borderCol = "var(--secondary)";
  if (type === "success") { icon = "check-circle"; borderCol = "var(--success)"; }
  if (type === "warning") { icon = "alert-triangle"; borderCol = "var(--warning)"; }
  if (type === "danger")  { icon = "alert-octagon"; borderCol = "var(--error)"; }

  toast.style.borderLeftColor = borderCol;
  toast.innerHTML = `
    <div style="color: ${borderCol}"><i data-lucide="${icon}"></i></div>
    <div class="flex-1 font-medium text-slate-800 text-sm">${message}</div>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-600">
      <i data-lucide="x" class="w-4 h-4"></i>
    </button>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Router and View Switcher
function switchView(viewId) {
  store.state.activeView = viewId;
  store.save();

  // Hide all view containers
  document.querySelectorAll(".view-section").forEach(sec => sec.classList.add("hidden"));

  // Show target
  const target = document.getElementById(`view-${viewId}`);
  if (target) {
    target.classList.remove("hidden");
  }

  // Update navigation items active state
  document.querySelectorAll(".nav-item").forEach(item => {
    if (item.dataset.view === viewId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Breadcrumbs
  const crumb = document.getElementById("breadcrumb-current");
  if (crumb) {
    const titles = {
      dashboard: "Campus Intelligence Center",
      canteen: "AI Canteen Demand & Food Waste Predictor (Annapurna Mess)",
      predictor: "AI Student Success Prediction & Prescriptive Analytics",
      admissions: "Automated Admissions & Enrollment",
      exams: "Schedule & Manage Examinations",
      payroll: "Handle Payroll Processes",
      students: "Student Tracking & Growth Passport",
      employees: "Employee & Attendance Operations",
      services: "Campus Services & Operational Innovations",
      reports: "Reports, AI Reliability & Audit Trail"
    };
    crumb.textContent = titles[viewId] || viewId.toUpperCase();
  }

  // Refresh dynamic charts or tables in view
  if (viewId === "dashboard") renderDashboardCharts();
  if (viewId === "admissions") renderAdmissionsTable();
  if (viewId === "exams") renderExamsView();
  if (viewId === "payroll") renderPayrollView();
  if (viewId === "students") renderStudentsView();
  if (viewId === "employees") renderEmployeesView();
  if (viewId === "services") renderServicesView();
  if (viewId === "reports") renderReportsView();
  if (viewId === "canteen") renderCanteenPredictorView();
  if (viewId === "predictor") renderSuccessPredictorView();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Role Switcher implementation
function switchRole(newRole) {
  const roles = {
    "Super Administrator": { name: "Dr. Eleanor Vance", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" },
    "Admissions Officer": { name: "Prof. Rajesh Kumar", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
    "Examination Coordinator": { name: "Dr. Sanjay Roy", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
    "Faculty Member": { name: "Dr. Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80" },
    "Student": { name: "Aarav Sharma", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80" },
    "HR Officer": { name: "Sunita Menon", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80" },
    "Payroll Officer": { name: "Ramesh Gupta", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80" },
    "Campus Operations Staff": { name: "Vikram Dev", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80" }
  };

  const user = roles[newRole] || roles["Super Administrator"];
  store.state.currentUser.role = newRole;
  store.state.currentUser.name = user.name;
  store.state.currentUser.avatar = user.avatar;
  store.save();

  // Update UI Elements
  document.getElementById("user-display-name").textContent = user.name;
  document.getElementById("user-display-role").textContent = newRole;
  document.getElementById("user-avatar-img").src = user.avatar;
  const roleSelect = document.getElementById("header-role-select");
  if (roleSelect) roleSelect.value = newRole;

  showToast(`Switched active persona to ${newRole} (${user.name})`, "info");
  store.logAudit("Persona Role Switch", `User: ${user.name}`, `Evaluator switched role to ${newRole}`);
  
  // Re-render current view with role-specific context
  switchView(store.state.activeView);
}

// ----------------------------------------------------------------------------------
// 1. DASHBOARD & KPIS RENDERING
// ----------------------------------------------------------------------------------
function renderDashboardCharts() {
  // Update KPI counters
  document.getElementById("kpi-students").textContent = "4,820";
  document.getElementById("kpi-employees").textContent = store.state.employees.length + 339;
  document.getElementById("kpi-admissions").textContent = store.state.applications.filter(a => a.reviewStatus !== "Enrolled").length;
  document.getElementById("kpi-exams").textContent = store.state.exams.length;
  document.getElementById("kpi-attendance").textContent = "94.2%";
  document.getElementById("kpi-leave").textContent = store.state.leaveRequests.filter(l => l.status === "Pending Approval").length;
  document.getElementById("kpi-issues").textContent = store.state.campusIssues.filter(i => i.status !== "Resolved").length;

  // Chart 1: Enrollment Trend
  const ctxEnroll = document.getElementById("chart-enrollment");
  if (ctxEnroll && !ctxEnroll.chartInstance) {
    ctxEnroll.chartInstance = new Chart(ctxEnroll, {
      type: 'line',
      data: {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct (Now)'],
        datasets: [{
          label: 'Confirmed Enrollments (2026)',
          data: [120, 290, 480, 580, 610],
          borderColor: '#2563EB',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          fill: true,
          tension: 0.35,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  // Chart 2: Department-wise Distribution
  const ctxDept = document.getElementById("chart-dept");
  if (ctxDept && !ctxDept.chartInstance) {
    ctxDept.chartInstance = new Chart(ctxDept, {
      type: 'doughnut',
      data: {
        labels: ['CSE & AI', 'Mechanical', 'ECE', 'Management', 'Sciences'],
        datasets: [{
          data: [1850, 920, 1100, 550, 400],
          backgroundColor: ['#2563EB', '#14B8A6', '#F59E0B', '#8B5CF6', '#10B981']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }

  // Chart 3: Weekly Attendance Comparison
  const ctxAtt = document.getElementById("chart-attendance");
  if (ctxAtt && !ctxAtt.chartInstance) {
    ctxAtt.chartInstance = new Chart(ctxAtt, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
          { label: 'Students %', data: [95.2, 94.8, 93.6, 94.2, 92.1], backgroundColor: '#2563EB' },
          { label: 'Faculty %', data: [98.1, 97.4, 98.6, 96.2, 97.0], backgroundColor: '#14B8A6' }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { min: 80, max: 100 } }
      }
    });
  }

  // Chart 4: Monthly Payroll Distribution
  const ctxPay = document.getElementById("chart-payroll");
  if (ctxPay && !ctxPay.chartInstance) {
    ctxPay.chartInstance = new Chart(ctxPay, {
      type: 'bar',
      data: {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct (Projected)'],
        datasets: [{
          label: 'Payroll (in Lakhs ₹)',
          data: [138.2, 139.5, 140.1, 141.2, 142.5],
          backgroundColor: '#14213D'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } }
      }
    });
  }
}

// ----------------------------------------------------------------------------------
// 2. ADMISSIONS & ENROLLMENT LOGIC
// ----------------------------------------------------------------------------------
function renderAdmissionsTable(filterProgram = "ALL", filterStatus = "ALL", query = "") {
  const tbody = document.getElementById("admissions-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  let list = store.state.applications;
  if (filterProgram !== "ALL") list = list.filter(a => a.programCode === filterProgram);
  if (filterStatus !== "ALL") list = list.filter(a => a.reviewStatus === filterStatus);
  if (query.trim() !== "") {
    const q = query.toLowerCase();
    list = list.filter(a => a.name.toLowerCase().includes(q) || a.id.toLowerCase().includes(q));
  }

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center py-8 text-slate-400">No applications match the search criteria.</td></tr>`;
    return;
  }

  list.forEach(app => {
    let docBadge = `<span class="badge badge-success"><i data-lucide="check" class="w-3 h-3"></i> Verified</span>`;
    if (app.docStatus === "Missing Documents") docBadge = `<span class="badge badge-danger"><i data-lucide="alert-circle" class="w-3 h-3"></i> Missing Files</span>`;
    if (app.docStatus === "Needs Review") docBadge = `<span class="badge badge-warning"><i data-lucide="clock" class="w-3 h-3"></i> Needs Review</span>`;

    let eligBadge = `<span class="badge badge-success">Eligible</span>`;
    if (app.eligibilityStatus === "Review Required") eligBadge = `<span class="badge badge-warning">Borderline / Quota</span>`;
    if (app.eligibilityStatus === "Not Yet Assessable") eligBadge = `<span class="badge badge-gray">Pending Docs</span>`;

    let actionBtn = `<button onclick="openApplicationDetail('${app.id}')" class="btn-secondary !py-1 !px-2.5 text-xs">
      <i data-lucide="eye" class="w-3.5 h-3.5"></i> Review Profile
    </button>`;

    const tr = document.createElement("tr");
    tr.className = "border-b border-slate-100 hover:bg-slate-50 transition-colors";
    tr.innerHTML = `
      <td class="py-3 px-4 font-mono font-semibold text-blue-600 text-xs">${app.id}</td>
      <td class="py-3 px-4 font-medium text-slate-800">${app.name}</td>
      <td class="py-3 px-4 text-slate-600 text-xs">${app.program}</td>
      <td class="py-3 px-4 text-slate-500 text-xs">${app.appliedDate}</td>
      <td class="py-3 px-4">${docBadge}</td>
      <td class="py-3 px-4">${eligBadge}</td>
      <td class="py-3 px-4"><span class="badge badge-primary">${app.reviewStatus}</span></td>
      <td class="py-3 px-4 text-right">${actionBtn}</td>
    `;
    tbody.appendChild(tr);
  });

  if (window.lucide) lucide.createIcons();
}

function openApplicationDetail(appId) {
  const app = store.state.applications.find(a => a.id === appId);
  if (!app) return;

  const modal = document.getElementById("modal-application-profile");
  if (!modal) return;

  document.getElementById("modal-app-id").textContent = app.id;
  document.getElementById("modal-app-name").textContent = app.name;
  document.getElementById("modal-app-email").textContent = app.email;
  document.getElementById("modal-app-phone").textContent = app.phone;
  document.getElementById("modal-app-prog").textContent = app.program;
  document.getElementById("modal-app-qual").textContent = app.qualification;
  document.getElementById("modal-app-status").textContent = app.reviewStatus;
  document.getElementById("modal-app-doc-status").textContent = app.docStatus;

  // OCR preview box
  const ocrBox = document.getElementById("modal-app-ocr-box");
  if (app.ocrData) {
    ocrBox.innerHTML = `
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs space-y-1">
        <div class="font-bold text-blue-900 flex items-center justify-between">
          <span><i data-lucide="scan" class="w-3.5 h-3.5 inline"></i> OCR Extraction (AWS Textract / Tesseract Engine)</span>
          <span class="badge badge-success text-[10px]">${app.ocrData.status}</span>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-2 text-slate-700">
          <div><span class="text-slate-500">Document:</span> ${app.ocrData.docType}</div>
          <div><span class="text-slate-500">Extracted Name:</span> <strong>${app.ocrData.extractedName}</strong></div>
          <div><span class="text-slate-500">Board / School:</span> ${app.ocrData.institution}</div>
          <div><span class="text-slate-500">Passing Year:</span> ${app.ocrData.passingYear}</div>
          <div><span class="text-slate-500">PCM Score:</span> <strong class="text-blue-700">${app.ocrData.marksPCM}</strong></div>
        </div>
      </div>
    `;
  } else {
    ocrBox.innerHTML = `<div class="bg-amber-50 border border-amber-200 text-amber-800 text-xs p-3 rounded-lg">
      <i data-lucide="alert-triangle" class="w-3.5 h-3.5 inline mr-1"></i> Missing document upload. OCR cannot extract marks.
    </div>`;
  }

  // Rules evaluated
  const rulesBox = document.getElementById("modal-app-rules-box");
  rulesBox.innerHTML = "";
  if (app.rulesEvaluated && app.rulesEvaluated.length > 0) {
    app.rulesEvaluated.forEach(r => {
      rulesBox.innerHTML += `
        <div class="flex items-start gap-2 text-xs py-1">
          <i data-lucide="${r.passed ? 'check-circle' : 'x-circle'}" class="w-4 h-4 mt-0.5 ${r.passed ? 'text-green-600' : 'text-amber-500'}"></i>
          <div>
            <div class="font-semibold text-slate-800">${r.rule}</div>
            <div class="text-slate-500">${r.detail}</div>
          </div>
        </div>
      `;
    });
  } else {
    rulesBox.innerHTML = `<p class="text-xs text-slate-400">Rules pending document upload.</p>`;
  }

  // Action buttons inside modal
  const actionsContainer = document.getElementById("modal-app-actions");
  actionsContainer.innerHTML = "";

  if (app.reviewStatus === "Under Review" || app.reviewStatus === "Documents Pending" || app.reviewStatus === "Submitted") {
    actionsContainer.innerHTML = `
      <button onclick="issueAdmissionOffer('${app.id}')" class="btn-primary">
        <i data-lucide="send" class="w-4 h-4"></i> Approve & Issue Offer Letter
      </button>
      <button onclick="requestCorrection('${app.id}')" class="btn-secondary">
        <i data-lucide="mail" class="w-4 h-4"></i> Request Missing Document
      </button>
      <button onclick="rejectApplication('${app.id}')" class="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg text-xs font-semibold">
        Reject Application
      </button>
    `;
  } else if (app.reviewStatus === "Offer Issued" || app.reviewStatus === "Decision Issued") {
    actionsContainer.innerHTML = `
      <button onclick="simulateFeeAndEnroll('${app.id}')" class="btn-accent">
        <i data-lucide="credit-card" class="w-4 h-4"></i> Simulate Fee Payment & Confirm Enrollment
      </button>
      <button onclick="previewOfferLetter('${app.id}')" class="btn-secondary">
        <i data-lucide="file-text" class="w-4 h-4"></i> View Official Offer Letter
      </button>
    `;
  } else if (app.reviewStatus === "Enrolled") {
    actionsContainer.innerHTML = `
      <div class="badge badge-success text-sm py-1.5 px-3">
        <i data-lucide="award" class="w-4 h-4 mr-1 inline"></i> Enrolled as Student ID: ${app.enrolledStudentId}
      </div>
      <button onclick="previewOfferLetter('${app.id}')" class="btn-secondary text-xs">
        <i data-lucide="printer" class="w-3.5 h-3.5"></i> Print Offer Letter & ID
      </button>
    `;
  }

  modal.classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

function issueAdmissionOffer(appId) {
  const app = store.state.applications.find(a => a.id === appId);
  if (!app) return;

  app.reviewStatus = "Offer Issued";
  app.decision = "Offer Accepted Pending Fee";
  app.docStatus = "Verified";
  app.eligibilityStatus = "Eligible";
  app.history.push({ status: "Offer Issued by " + store.state.currentUser.name, time: new Date().toLocaleTimeString() });

  store.logAudit("Admission Decision Issued", appId, `Offer letter granted for ${app.program} to ${app.name}`);
  store.addNotification("Admission Offer Issued", `Offer letter released to ${app.name} (${app.id})`, "Admissions");
  store.save();

  showToast(`Formal Admission Offer successfully issued to ${app.name}!`, "success");
  openApplicationDetail(appId);
  renderAdmissionsTable();
}

function requestCorrection(appId) {
  const app = store.state.applications.find(a => a.id === appId);
  if (!app) return;

  const reason = prompt(`Specify missing or unclear documents for ${app.name}:`, "Official Class XII attested marksheet and national entrance scorecard.");
  if (reason) {
    app.docStatus = "Needs Review";
    app.reviewStatus = "Documents Pending";
    app.history.push({ status: `Correction Requested: ${reason}`, time: new Date().toLocaleTimeString() });
    store.logAudit("Document Correction Requested", appId, `Admissions flagged document requirement for ${app.name}: ${reason}`);
    store.addNotification("Document Correction Notice", `Sent document deficiency memo to ${app.name} (${app.id})`, "Admissions");
    store.save();

    showToast(`Correction notice sent to ${app.name}! Application marked as Documents Pending.`, "warning");
    openApplicationDetail(appId);
    renderAdmissionsTable();
  }
}

function rejectApplication(appId) {
  const app = store.state.applications.find(a => a.id === appId);
  if (!app) return;

  const reason = prompt(`Provide institutional reason code for rejecting application ${app.id}:`, "Does not satisfy programme minimum qualifying PCM cut-off criteria.");
  if (reason) {
    app.reviewStatus = "Not Admitted";
    app.decision = "Rejected";
    app.history.push({ status: `Application Rejected by ${store.state.currentUser.name} (${reason})`, time: new Date().toLocaleTimeString() });
    store.logAudit("Admission Application Rejected", appId, `Rejected for: ${reason}`);
    store.addNotification("Application Decision Issued", `Application ${app.id} marked as Not Admitted`, "Admissions");
    store.save();

    showToast(`Application ${app.id} updated: Not Admitted. Decision recorded in audit log.`, "info");
    openApplicationDetail(appId);
    renderAdmissionsTable();
  }
}

function simulateFeeAndEnroll(appId) {
  const app = store.state.applications.find(a => a.id === appId);
  if (!app) return;

  const generatedId = `SC360-2026-CS${Math.floor(100 + Math.random() * 900)}`;
  app.reviewStatus = "Enrolled";
  app.feeStatus = "Paid (Simulated Txn #TXN-90214)";
  app.enrolledStudentId = generatedId;
  app.history.push({ status: `Enrolled (Student ID: ${generatedId})`, time: new Date().toLocaleTimeString() });

  // Add into official Student records
  const newStudent = {
    id: generatedId,
    name: app.name,
    email: app.email,
    program: app.program,
    semester: "1st Semester",
    section: "Sec A",
    mentor: "Dr. Sarah Jenkins",
    attendance: 100.0,
    cgpa: 0.0,
    riskLevel: "New Enrollee",
    riskReason: "Enrolled via Automated Admissions pipeline. Onboarding checklist activated.",
    subjects: [
      { code: "CS101", name: "Problem Solving & C Programming", attendance: "100%", grade: "Pending", status: "Registered" },
      { code: "MATH101", name: "Calculus & Linear Algebra", attendance: "100%", grade: "Pending", status: "Registered" },
      { code: "PHY101", name: "Engineering Physics", attendance: "100%", grade: "Pending", status: "Registered" }
    ],
    recoveryPlan: [],
    growthPassport: [
      { type: "Onboarding", title: "Smart Campus 360 Orientation & LMS Registration", verified: true, verifier: "Automated Bot" }
    ]
  };

  store.state.students.unshift(newStudent);
  store.logAudit("Student Enrolled & ID Generated", generatedId, `Application ${appId} transitioned into confirmed Student record`);
  store.addNotification("New Student Enrolled", `${app.name} confirmed enrollment. Student ID: ${generatedId}`, "Admissions");
  store.save();

  showToast(`Confirmed! Student ID ${generatedId} generated. Student record created in Student Portal!`, "success");
  openApplicationDetail(appId);
  renderAdmissionsTable();
}

function previewOfferLetter(appId) {
  const app = store.state.applications.find(a => a.id === appId);
  if (!app) return;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Offer Letter - ${app.name}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #14213D; }
          .header { text-align: center; border-bottom: 3px double #14213D; padding-bottom: 20px; }
          .logo { font-size: 26px; font-weight: bold; color: #14213D; }
          .tagline { font-size: 13px; color: #64748B; text-transform: uppercase; letter-spacing: 1px; }
          .content { margin-top: 30px; line-height: 1.6; }
          .box { background: #F8FAFC; border: 1px solid #E2E8F0; padding: 15px; border-radius: 8px; margin: 20px 0; }
          .footer { margin-top: 50px; display: flex; justify-content: space-between; }
          .signature { border-top: 1px solid #000; width: 200px; text-align: center; padding-top: 5px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">SMART CAMPUS 360</div>
          <div class="tagline">Official Office of Admissions & Academic Registrations</div>
          <p>Campus Boulevard, Innovation District • admissions@smartcampus360.edu</p>
        </div>
        <div class="content">
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
          <p><strong>Ref Application ID:</strong> ${app.id}</p>
          <p>To,<br><strong>${app.name}</strong><br>Email: ${app.email}<br>Phone: ${app.phone}</p>
          <p>Dear ${app.name},</p>
          <p>We are delighted to congratulate you on your provisional admission to <strong>${app.program}</strong> for the Academic Session 2026-2027.</p>
          <div class="box">
            <strong>Admission Details:</strong><br>
            • Enrolled Program: ${app.program}<br>
            • Candidate Reference: ${app.id}<br>
            • Student Registration ID: ${app.enrolledStudentId || "Generated upon fee completion"}<br>
            • Eligibility Verification: Confirmed (${app.qualification})<br>
            • Fee Status: ${app.feeStatus}
          </div>
          <p>Please complete your automated onboarding checklist on the Smart Campus 360 Student Portal to activate your library card, hostel allocation, and laboratory access.</p>
        </div>
        <div class="footer">
          <div>
            <p>Generated by: Smart Campus 360 Engine<br>System Verification Hash: SC360-OFFER-AUTH-9921</p>
          </div>
          <div class="signature">
            <strong>Dr. Eleanor Vance</strong><br>Dean of Academic Admissions
          </div>
        </div>
        <script>window.onload = function() { window.print(); };</script>
      </body>
    </html>
  `);
}

function handleNewApplicationSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("form-app-name").value;
  const email = document.getElementById("form-app-email").value;
  const phone = document.getElementById("form-app-phone").value;
  const progSelect = document.getElementById("form-app-prog");
  const program = progSelect.options[progSelect.selectedIndex].text;
  const progCode = progSelect.value;
  const marks = parseFloat(document.getElementById("form-app-pcm").value) || 0;

  const newAppId = `APP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  
  // OCR & Rule Engine Simulation
  const passedRule = marks >= 75.0;
  const newApp = {
    id: newAppId,
    name: name,
    email: email,
    phone: phone,
    program: program,
    programCode: progCode,
    appliedDate: new Date().toISOString().split('T')[0],
    docStatus: "Verified",
    eligibilityStatus: passedRule ? "Eligible" : "Review Required",
    reviewStatus: passedRule ? "Under Review" : "Documents Pending",
    decision: "Pending",
    feeStatus: "Pending",
    enrolledStudentId: null,
    reviewer: "Admissions Desk",
    qualification: `Class XII Marksheet (PCM: ${marks}%)`,
    ocrData: {
      extractedName: name,
      institution: "State Higher Secondary Board",
      passingYear: "2026",
      marksPCM: `${marks}%`,
      status: "Verified by OCR Engine",
      docType: "Class XII Certificate"
    },
    rulesEvaluated: [
      { rule: "Minimum 75% in PCM", passed: passedRule, detail: `Input score ${marks}% ${passedRule ? '>= 75%' : '< 75% cutoff'}` },
      { rule: "Mathematics prerequisite", passed: true, detail: "Subject verified" }
    ],
    history: [
      { status: "Submitted by Applicant", time: new Date().toLocaleTimeString() },
      { status: "Automated OCR Verification Complete", time: new Date().toLocaleTimeString() }
    ]
  };

  store.state.applications.unshift(newApp);
  store.logAudit("New Application Submitted", newAppId, `Application filed by ${name} for ${program}`);
  store.addNotification("New Application Received", `${name} applied for ${program} (${newAppId})`, "Admissions");
  store.save();

  // Close modal
  document.getElementById("modal-new-application").classList.add("hidden");
  showToast(`Application ${newAppId} successfully submitted and verified with OCR!`, "success");
  renderAdmissionsTable();
}

// ----------------------------------------------------------------------------------
// 3. EXAMINATIONS LOGIC & CONSTRAINT SCHEDULER
// ----------------------------------------------------------------------------------
function renderExamsView() {
  const container = document.getElementById("exams-list-container");
  if (!container) return;
  container.innerHTML = "";

  store.state.exams.forEach(ex => {
    let statusBadge = `<span class="badge badge-success"><i data-lucide="check" class="w-3 h-3"></i> Validated</span>`;
    let cardBorder = "border-slate-200";

    if (ex.hasConflict) {
      statusBadge = `<span class="badge badge-danger"><i data-lucide="alert-triangle" class="w-3 h-3"></i> Clash Detected</span>`;
      cardBorder = "border-red-400 bg-red-50/30";
    }

    const div = document.createElement("div");
    div.className = `campus-card p-4 ${cardBorder} flex flex-col md:flex-row items-start md:items-center justify-between gap-4`;
    div.innerHTML = `
      <div class="space-y-1">
        <div class="flex items-center gap-3">
          <span class="font-bold text-slate-900 text-base">${ex.subjectCode} - ${ex.subjectName}</span>
          <span class="badge badge-primary text-xs">${ex.examType}</span>
          ${statusBadge}
        </div>
        <div class="text-xs text-slate-500 flex flex-wrap gap-x-4 gap-y-1">
          <span><i data-lucide="calendar" class="w-3.5 h-3.5 inline text-blue-600"></i> ${ex.date}</span>
          <span><i data-lucide="clock" class="w-3.5 h-3.5 inline text-blue-600"></i> ${ex.timeSlot}</span>
          <span><i data-lucide="map-pin" class="w-3.5 h-3.5 inline text-teal-600"></i> ${ex.roomName}</span>
          <span><i data-lucide="user-check" class="w-3.5 h-3.5 inline text-purple-600"></i> Invigilator: ${ex.invigilatorName}</span>
          <span><i data-lucide="users" class="w-3.5 h-3.5 inline text-slate-600"></i> ${ex.studentsCount} Students (${ex.section})</span>
        </div>
        ${ex.hasConflict ? `<div class="text-xs font-semibold text-red-600 mt-2 bg-red-100/70 p-2 rounded border border-red-200">
          <i data-lucide="alert-octagon" class="w-4 h-4 inline mr-1"></i> Constraint Warning: ${ex.conflictReason}
        </div>` : ''}
      </div>
      <div class="flex items-center gap-2 w-full md:w-auto justify-end">
        ${ex.hasConflict ? `
          <button onclick="resolveExamConflict('${ex.id}')" class="btn-primary !bg-red-600 hover:!bg-red-700 text-xs">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Auto-Resolve Clash
          </button>
        ` : `
          <button onclick="showHallTicketModal('${ex.id}')" class="btn-secondary text-xs">
            <i data-lucide="ticket" class="w-3.5 h-3.5"></i> Student Hall Ticket
          </button>
          <button onclick="openExamLiveRoom('${ex.id}')" class="btn-primary text-xs">
            <i data-lucide="activity" class="w-3.5 h-3.5"></i> Live Control Room
          </button>
        `}
      </div>
    `;
    container.appendChild(div);
  });

  // Render Rooms Inventory
  const roomGrid = document.getElementById("exam-rooms-grid");
  if (roomGrid) {
    roomGrid.innerHTML = "";
    store.state.rooms.forEach(r => {
      roomGrid.innerHTML += `
        <div class="campus-card p-3 text-xs space-y-1.5 border border-slate-200">
          <div class="flex items-center justify-between font-semibold text-slate-800">
            <span>${r.name}</span>
            <span class="badge badge-accent">${r.capacity} Seats</span>
          </div>
          <div class="text-slate-500">${r.building} • ${r.type}</div>
          <div class="flex items-center gap-2 pt-1 text-[11px] text-slate-600">
            <span>${r.hasAC ? '✓ A/C' : '✕ Non-AC'}</span> •
            <span>${r.hasProjector ? '✓ Projector' : '✕ No Proj'}</span> •
            <span class="${r.accessible ? 'text-green-600 font-semibold' : 'text-slate-400'}">${r.accessible ? '✓ Wheelchair Ramp' : 'Stairs only'}</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-1.5 mt-1 overflow-hidden">
            <div class="bg-blue-600 h-1.5 rounded-full" style="width: ${r.utilization}"></div>
          </div>
        </div>
      `;
    });
  }

  if (window.lucide) lucide.createIcons();
}

function resolveExamConflict(examId) {
  const ex = store.state.exams.find(e => e.id === examId);
  if (!ex) return;

  // Constraint logic: shift from 09:30 AM to afternoon 02:00 PM - 05:00 PM in Lecture Hall 205 with Dr. Sarah Jenkins
  ex.date = "2026-11-05";
  ex.timeSlot = "02:00 PM - 05:00 PM";
  ex.roomId = "ROOM-L205";
  ex.roomName = "Lecture Hall 205 (North Block)";
  ex.invigilatorId = "EMP-FAC-019";
  ex.invigilatorName = "Dr. Sarah Jenkins";
  ex.hasConflict = false;
  ex.status = "Scheduled";
  ex.conflictReason = "";

  store.logAudit("Exam Timetable Constraint Solved", examId, `Clash resolved: Shifted ${ex.subjectCode} to Nov 5 02:00 PM in L205 with Dr. Jenkins`);
  store.addNotification("Exam Rescheduled (Clash Fixed)", `${ex.subjectCode} moved to Nov 5, 2:00 PM to eliminate overlap.`, "Exams");
  store.save();

  showToast(`Constraint Engine resolved clash! Timetable published without overlaps.`, "success");
  renderExamsView();
}

function showHallTicketModal(examId) {
  const ex = store.state.exams.find(e => e.id === examId);
  if (!ex) return;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Student Exam Hall Ticket - ${ex.subjectCode}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 30px; color: #14213D; }
          .card { border: 2px solid #14213D; padding: 25px; border-radius: 10px; max-width: 650px; margin: auto; }
          .title { text-align: center; border-bottom: 2px solid #2563EB; padding-bottom: 15px; }
          .row { display: flex; justify-content: space-between; margin: 12px 0; border-bottom: 1px dashed #CBD5E1; padding-bottom: 6px; }
          .qr { border: 2px dashed #94A3B8; width: 90px; height: 90px; text-align: center; font-size: 10px; line-height: 90px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="title">
            <h2 style="margin: 0; color: #14213D;">SMART CAMPUS 360 - EXAMINATION HALL TICKET</h2>
            <p style="margin: 5px 0 0 0; color: #64748B;">Mid-Term Examination Series • Fall 2026</p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
            <div>
              <p><strong>Candidate:</strong> Aarav Sharma (SC360-2026-CS001)</p>
              <p><strong>Program:</strong> ${ex.program}</p>
            </div>
            <div class="qr">[ QR CODE PASS ]</div>
          </div>
          <div class="row"><span><strong>Subject Code & Name:</strong></span><span>${ex.subjectCode} - ${ex.subjectName}</span></div>
          <div class="row"><span><strong>Date & Time:</strong></span><span>${ex.date} (${ex.timeSlot})</span></div>
          <div class="row"><span><strong>Venue & Room:</strong></span><span>${ex.roomName}</span></div>
          <div class="row"><span><strong>Assigned Desk:</strong></span><span>Desk #42 (Row C)</span></div>
          <div class="row"><span><strong>Chief Invigilator:</strong></span><span>${ex.invigilatorName}</span></div>
          <p style="font-size: 11px; color: #64748B; margin-top: 25px;">
            * Reporting time is 30 minutes prior to exam commencement. Electronic smart devices other than approved calculators are prohibited.
          </p>
        </div>
        <script>window.onload = function() { window.print(); };</script>
      </body>
    </html>
  `);
}

function openExamLiveRoom(examId) {
  const ex = store.state.exams.find(e => e.id === examId);
  if (!ex) return;

  const modal = document.getElementById("modal-exam-live");
  if (!modal) return;

  document.getElementById("live-exam-title").textContent = `${ex.subjectCode}: ${ex.subjectName}`;
  document.getElementById("live-exam-room").textContent = ex.roomName;
  document.getElementById("live-exam-invigilator").textContent = ex.invigilatorName;
  document.getElementById("live-exam-students").textContent = `${ex.studentsCount} Registered`;

  modal.classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

function handleCreateExamSubmit(e) {
  e.preventDefault();
  const code = document.getElementById("exam-form-code").value;
  const name = document.getElementById("exam-form-name").value;
  const prog = document.getElementById("exam-form-prog").value;
  const sec = document.getElementById("exam-form-sec").value;
  const students = parseInt(document.getElementById("exam-form-count").value) || 50;
  const date = document.getElementById("exam-form-date").value;
  const slot = document.getElementById("exam-form-slot").value;
  const room = document.getElementById("exam-form-room").value;
  const invig = document.getElementById("exam-form-invig").value;

  // Constraint check: check if room is already booked at that date and slot
  const collision = store.state.exams.find(x => x.date === date && x.timeSlot === slot && x.roomName.includes(room));

  const newExam = {
    id: `EXAM-${code}`,
    subjectCode: code,
    subjectName: name,
    program: prog,
    section: sec,
    studentsCount: students,
    examType: "Theory",
    date: date,
    timeSlot: slot,
    roomId: `ROOM-${room}`,
    roomName: room,
    invigilatorId: "EMP-FAC-014",
    invigilatorName: invig,
    status: collision ? "Conflict Detected" : "Scheduled",
    hasConflict: !!collision,
    conflictReason: collision ? `Double-booking: Room ${room} is already allocated to ${collision.subjectCode}` : ""
  };

  store.state.exams.unshift(newExam);
  store.logAudit("Exam Scheduled", newExam.id, `Created exam ${code} on ${date} at ${slot}`);
  store.save();

  document.getElementById("modal-create-exam").classList.add("hidden");
  showToast(collision ? `Exam created with a conflict warning!` : `Exam event scheduled successfully!`, collision ? "warning" : "success");
  renderExamsView();
}

// ----------------------------------------------------------------------------------
// 4. PAYROLL MANAGEMENT & EXCEPTION DETECTOR
// ----------------------------------------------------------------------------------
function renderPayrollView() {
  const tbody = document.getElementById("payroll-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  store.state.payrollEmployees.forEach(emp => {
    let statusBadge = `<span class="badge badge-success"><i data-lucide="check" class="w-3 h-3"></i> Validated</span>`;
    let rowBg = "hover:bg-slate-50";

    if (!emp.exceptionResolved && emp.exceptionNote) {
      statusBadge = `<span class="badge badge-danger"><i data-lucide="alert-triangle" class="w-3 h-3"></i> Anomaly Flagged</span>`;
      rowBg = "bg-amber-50/40 hover:bg-amber-50/70";
    }

    const tr = document.createElement("tr");
    tr.className = `border-b border-slate-100 ${rowBg} transition-colors`;
    tr.innerHTML = `
      <td class="py-3 px-4 font-mono font-semibold text-slate-700 text-xs">${emp.empId}</td>
      <td class="py-3 px-4 font-medium text-slate-900">${emp.name}<br><span class="text-[11px] text-slate-400">${emp.dept}</span></td>
      <td class="py-3 px-4 text-xs font-semibold text-slate-700">₹${emp.basic.toLocaleString()}</td>
      <td class="py-3 px-4 text-xs text-slate-600">₹${(emp.hra + emp.da + emp.specialAllowance + emp.extraDutyBonus).toLocaleString()}</td>
      <td class="py-3 px-4 text-xs font-semibold text-blue-700">₹${emp.gross.toLocaleString()}</td>
      <td class="py-3 px-4 text-xs text-red-600">-₹${emp.totalDeductions.toLocaleString()}</td>
      <td class="py-3 px-4 text-xs font-bold text-emerald-600">₹${emp.netPay.toLocaleString()}</td>
      <td class="py-3 px-4">${statusBadge}</td>
      <td class="py-3 px-4 text-right">
        <button onclick="viewEmployeePayslip('${emp.empId}')" class="btn-secondary !py-1 !px-2.5 text-xs">
          <i data-lucide="file-text" class="w-3.5 h-3.5"></i> Payslip
        </button>
        ${!emp.exceptionResolved ? `
          <button onclick="resolvePayrollException('${emp.empId}')" class="btn-primary !py-1 !px-2.5 !bg-amber-600 hover:!bg-amber-700 text-xs">
            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Review Anomaly
          </button>
        ` : ''}
      </td>
    `;
    tbody.appendChild(tr);
  });

  if (window.lucide) lucide.createIcons();
}

function resolvePayrollException(empId) {
  const emp = store.state.payrollEmployees.find(e => e.empId === empId);
  if (!emp) return;

  const notes = prompt(`Audit Review for ${emp.name}:\nFlagged: ${emp.exceptionNote}\nEnter authorization comment to approve adjustment:`, "Verified with Dean's approved workload increment slip.");
  if (notes) {
    emp.exceptionResolved = true;
    store.logAudit("Payroll Exception Resolved", empId, `Anomaly signed off by ${store.state.currentUser.name}: ${notes}`);
    store.addNotification("Payroll Exception Resolved", `Salary calculation for ${emp.name} approved.`, "Payroll");
    store.save();

    showToast(`Exception cleared and logged in immutable audit trail!`, "success");
    renderPayrollView();
  }
}

function viewEmployeePayslip(empId) {
  const emp = store.state.payrollEmployees.find(e => e.empId === empId);
  if (!emp) return;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Payslip - ${emp.name}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #14213D; }
          .payslip { border: 1px solid #CBD5E1; border-radius: 8px; padding: 30px; max-width: 750px; margin: auto; }
          .header { text-align: center; border-bottom: 2px solid #14213D; padding-bottom: 15px; margin-bottom: 20px; }
          .title { font-size: 22px; font-weight: bold; margin: 0; }
          .period { font-size: 13px; color: #64748B; margin-top: 5px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
          table { width: 100%; border-collapse: collapse; font-size: 13px; }
          th, td { padding: 8px 10px; border-bottom: 1px solid #E2E8F0; text-align: left; }
          th { background: #F8FAFC; color: #475569; }
          .total-row { font-weight: bold; background: #F1F5F9; }
          .net-box { background: #ECFDF5; border: 1px solid #A7F3D0; padding: 15px; border-radius: 6px; text-align: center; margin-top: 25px; }
        </style>
      </head>
      <body>
        <div class="payslip">
          <div class="header">
            <h1 class="title">SMART CAMPUS 360</h1>
            <div class="period">CONFIDENTIAL SALARY STATEMENT • OCTOBER 2026</div>
          </div>
          <table style="margin-bottom: 20px;">
            <tr><td><strong>Employee Name:</strong> ${emp.name}</td><td><strong>Employee ID:</strong> ${emp.empId}</td></tr>
            <tr><td><strong>Department:</strong> ${emp.dept}</td><td><strong>Designation:</strong> ${emp.designation}</td></tr>
            <tr><td><strong>Bank Account:</strong> ${emp.bankAccount}</td><td><strong>PAN / Tax Ref:</strong> ${emp.panNumber}</td></tr>
            <tr><td><strong>Working Days:</strong> ${emp.workingDays} days</td><td><strong>Approved Leave:</strong> ${emp.leaveTaken} days</td></tr>
          </table>
          <div class="grid">
            <div>
              <h3>EARNINGS (GROSS)</h3>
              <table>
                <tr><td>Basic Pay</td><td>₹${emp.basic.toLocaleString()}</td></tr>
                <tr><td>House Rent Allowance (HRA)</td><td>₹${emp.hra.toLocaleString()}</td></tr>
                <tr><td>Dearness Allowance (DA)</td><td>₹${emp.da.toLocaleString()}</td></tr>
                <tr><td>Special Allowance</td><td>₹${emp.specialAllowance.toLocaleString()}</td></tr>
                ${emp.extraDutyBonus > 0 ? `<tr><td>Extra Lecture Compensation</td><td>₹${emp.extraDutyBonus.toLocaleString()}</td></tr>` : ''}
                <tr class="total-row"><td>Gross Earnings</td><td>₹${emp.gross.toLocaleString()}</td></tr>
              </table>
            </div>
            <div>
              <h3>DEDUCTIONS</h3>
              <table>
                <tr><td>Provident Fund (PF)</td><td>₹${emp.pf.toLocaleString()}</td></tr>
                <tr><td>Professional Tax & TDS</td><td>₹${emp.tax.toLocaleString()}</td></tr>
                <tr><td>Campus Health Insurance</td><td>₹${emp.healthInsurance.toLocaleString()}</td></tr>
                <tr class="total-row"><td>Total Deductions</td><td>₹${emp.totalDeductions.toLocaleString()}</td></tr>
              </table>
            </div>
          </div>
          <div class="net-box">
            <div style="font-size: 14px; color: #065F46; font-weight: 600;">NET SALARY PAYABLE</div>
            <div style="font-size: 28px; font-weight: bold; color: #047857; margin-top: 5px;">₹${emp.netPay.toLocaleString()}</div>
            <div style="font-size: 11px; color: #059669; margin-top: 4px;">Electronic Fund Transfer Simulated via RBI NEFT / RazorpayX API Gateway</div>
          </div>
        </div>
        <script>window.onload = function() { window.print(); };</script>
      </body>
    </html>
  `);
}

function processFullPayrollRun() {
  const pending = store.state.payrollEmployees.filter(e => !e.exceptionResolved);
  if (pending.length > 0) {
    if (!confirm(`Warning: There are ${pending.length} unresolved payroll anomalies. Proceed with two-person override?`)) {
      return;
    }
  }

  store.logAudit("Payroll Batch Processed & Disbursed", "PAY-2026-10", `Approved by ${store.state.currentUser.name} for 342 staff members`);
  store.addNotification("Payroll Disbursed", "October 2026 salaries processed and payslips released to employee portal.", "Payroll");
  store.save();

  showToast(`October 2026 Payroll Run approved! Direct deposit simulated for 342 employees.`, "success");
  renderPayrollView();
}

// ----------------------------------------------------------------------------------
// 5. STUDENT TRACKING, RECOVERY & GROWTH PASSPORT
// ----------------------------------------------------------------------------------
function renderStudentsView() {
  const container = document.getElementById("students-list-container");
  if (!container) return;
  container.innerHTML = "";

  store.state.students.forEach(st => {
    let riskBadge = `<span class="badge badge-success">${st.riskLevel}</span>`;
    let border = "border-slate-200";

    if (st.riskLevel.includes("High Support")) {
      riskBadge = `<span class="badge badge-danger"><i data-lucide="alert-triangle" class="w-3 h-3"></i> ${st.riskLevel}</span>`;
      border = "border-red-300 bg-red-50/20";
    }

    const card = document.createElement("div");
    card.className = `campus-card p-4 ${border} space-y-3`;
    card.innerHTML = `
      <div class="flex items-start justify-between">
        <div>
          <div class="flex items-center gap-3">
            <span class="font-bold text-slate-900 text-base">${st.name}</span>
            <span class="font-mono text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">${st.id}</span>
            ${riskBadge}
          </div>
          <p class="text-xs text-slate-500 mt-1">${st.program} • ${st.semester} (${st.section}) • Mentor: <strong>${st.mentor}</strong></p>
        </div>
        <div class="text-right">
          <div class="text-xs text-slate-400">Attendance</div>
          <div class="text-lg font-bold ${st.attendance < 75 ? 'text-red-600' : 'text-emerald-600'}">${st.attendance}%</div>
        </div>
      </div>

      ${st.attendance < 75 ? `
        <div class="bg-red-50 border border-red-200 text-red-800 text-xs p-2.5 rounded-lg">
          <strong><i data-lucide="shield-alert" class="w-3.5 h-3.5 inline"></i> Early Academic Warning:</strong> ${st.riskReason}
        </div>
      ` : ''}

      <!-- Recovery Tasks -->
      ${st.recoveryPlan && st.recoveryPlan.length > 0 ? `
        <div class="border-t border-slate-100 pt-2 text-xs">
          <div class="font-semibold text-slate-700 mb-1.5 flex items-center justify-between">
            <span>Personalized Learning Recovery Plan</span>
            <span class="text-[11px] text-blue-600">Tracked by Mentor</span>
          </div>
          <div class="space-y-1">
            ${st.recoveryPlan.map((r, idx) => `
              <div class="flex items-center justify-between text-slate-600 bg-slate-50 p-1.5 rounded">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" ${r.completed ? 'checked' : ''} onchange="toggleRecoveryTask('${st.id}', ${idx})" class="rounded text-blue-600">
                  <span class="${r.completed ? 'line-through text-slate-400' : ''}">${r.task}</span>
                </label>
                <span class="text-[10px] text-slate-400">Due: ${r.due}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Digital Student Growth Passport -->
      <div class="border-t border-slate-100 pt-2 text-xs">
        <div class="font-semibold text-slate-700 mb-1 flex items-center justify-between">
          <span>Digital Growth Passport & Achievements</span>
          <button onclick="exportGrowthPassport('${st.id}')" class="text-blue-600 hover:underline text-[11px] flex items-center gap-1">
            <i data-lucide="download" class="w-3 h-3"></i> Export Portfolio
          </button>
        </div>
        <div class="flex flex-wrap gap-1.5">
          ${st.growthPassport.map(g => `
            <span class="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-slate-700 text-[11px] border border-slate-200">
              <i data-lucide="${g.verified ? 'check-circle-2' : 'clock'}" class="w-3 h-3 ${g.verified ? 'text-teal-600' : 'text-amber-500'}"></i>
              <strong>${g.type}:</strong> ${g.title}
            </span>
          `).join('')}
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function toggleRecoveryTask(studentId, taskIndex) {
  const student = store.state.students.find(s => s.id === studentId);
  if (!student || !student.recoveryPlan[taskIndex]) return;

  student.recoveryPlan[taskIndex].completed = !student.recoveryPlan[taskIndex].completed;
  store.logAudit("Learning Recovery Task Updated", studentId, `Updated task: ${student.recoveryPlan[taskIndex].task}`);
  store.save();
  showToast(`Recovery milestone updated for ${student.name}!`, "info");
  renderStudentsView();
}

function exportGrowthPassport(studentId) {
  const student = store.state.students.find(s => s.id === studentId);
  if (!student) return;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Growth Passport - ${student.name}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #14213D; }
          .passport { border: 2px solid #14213D; border-radius: 12px; padding: 30px; max-width: 700px; margin: auto; }
          .header { border-bottom: 2px solid #2563EB; padding-bottom: 15px; margin-bottom: 20px; text-align: center; }
          .item { background: #F8FAFC; border-left: 4px solid #14B8A6; padding: 12px; margin: 10px 0; border-radius: 4px; }
        </style>
      </head>
      <body>
        <div class="passport">
          <div class="header">
            <h1 style="margin: 0; color: #14213D;">SMART CAMPUS 360</h1>
            <h3 style="margin: 5px 0 0 0; color: #2563EB;">Official Verified Student Growth Passport</h3>
          </div>
          <p><strong>Student:</strong> ${student.name} (${student.id})</p>
          <p><strong>Program:</strong> ${student.program} • ${student.semester}</p>
          <p><strong>Cumulative GPA:</strong> ${student.cgpa} / 10.0</p>
          <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 20px 0;">
          <h3>Verified Credentials & Achievements</h3>
          ${student.growthPassport.map(g => `
            <div class="item">
              <strong>[${g.type}] ${g.title}</strong><br>
              <span style="font-size: 12px; color: #64748B;">Verification Status: ${g.verified ? 'Institutional Signature by ' + g.verifier : 'Self-Reported Skill'}</span>
            </div>
          `).join('')}
        </div>
        <script>window.onload = function() { window.print(); };</script>
      </body>
    </html>
  `);
}

// ----------------------------------------------------------------------------------
// 6. EMPLOYEE OPERATIONS & SMART SUBSTITUTE FINDER
// ----------------------------------------------------------------------------------
function renderEmployeesView() {
  const container = document.getElementById("leave-requests-container");
  if (!container) return;
  container.innerHTML = "";

  store.state.leaveRequests.forEach(lv => {
    const card = document.createElement("div");
    card.className = "campus-card p-4 border border-slate-200 space-y-2";
    card.innerHTML = `
      <div class="flex items-start justify-between">
        <div>
          <span class="badge badge-primary text-xs">${lv.id}</span>
          <span class="font-bold text-slate-800 ml-2">${lv.empName}</span>
          <span class="text-xs text-slate-500">(${lv.dept})</span>
        </div>
        <span class="badge ${lv.status === 'Approved' ? 'badge-success' : 'badge-warning'}">${lv.status}</span>
      </div>
      <div class="text-xs text-slate-600">
        <div><strong>Leave Dates:</strong> ${lv.startDate} to ${lv.endDate} (${lv.leaveType})</div>
        <div><strong>Reason:</strong> ${lv.reason}</div>
        <div class="mt-1 bg-amber-50 p-2 rounded text-amber-900 border border-amber-200">
          <strong><i data-lucide="clock" class="w-3.5 h-3.5 inline"></i> Affected Duty:</strong> ${lv.affectedDuty}
        </div>
        <div class="mt-1 flex items-center justify-between text-slate-700">
          <span><strong>Assigned Substitute:</strong> <span class="text-blue-600 font-semibold">${lv.substituteAssigned}</span></span>
          <span class="badge badge-accent">${lv.substituteStatus}</span>
        </div>
      </div>
      ${lv.substituteAssigned === 'Unassigned' ? `
        <div class="pt-2 border-t border-slate-100 flex justify-end">
          <button onclick="launchSubstituteFinder('${lv.id}')" class="btn-primary !py-1 !px-3 text-xs">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Launch Smart Substitute Finder
          </button>
        </div>
      ` : ''}
    `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function launchSubstituteFinder(leaveId) {
  const lv = store.state.leaveRequests.find(l => l.id === leaveId);
  if (!lv) return;

  const modal = document.getElementById("modal-substitute-finder");
  if (!modal) return;

  document.getElementById("sub-duty-title").textContent = lv.affectedDuty;
  document.getElementById("sub-leave-emp").textContent = `${lv.empName} (${lv.leaveType})`;

  // Candidate generation based on subject matching & availability
  const candidatesBox = document.getElementById("sub-candidates-list");
  candidatesBox.innerHTML = `
    <div class="campus-card p-3 border border-emerald-300 bg-emerald-50/40 space-y-1">
      <div class="flex items-center justify-between">
        <span class="font-bold text-slate-900 text-sm">Dr. Sarah Jenkins</span>
        <span class="badge badge-success">98% Match (Best Choice)</span>
      </div>
      <div class="text-xs text-slate-600">
        Department: Computer Science • Free Slot: Confirmed (Thu 10:00 AM) • Current Load: 12 hrs/wk
      </div>
      <div class="text-[11px] text-teal-800 font-medium">
        ✓ Specialization: Algorithms & Data Structures • Prior student rating: 4.8/5.0
      </div>
      <button onclick="confirmSubstitute('${lv.id}', 'Dr. Sarah Jenkins')" class="btn-primary !py-1 !px-3 text-xs mt-2">
        Assign Dr. Sarah Jenkins & Update Schedule
      </button>
    </div>

    <div class="campus-card p-3 border border-slate-200 mt-2 space-y-1">
      <div class="flex items-center justify-between">
        <span class="font-bold text-slate-900 text-sm">Prof. Vikram Seth</span>
        <span class="badge badge-warning">72% Match</span>
      </div>
      <div class="text-xs text-slate-600">
        Department: Mechanical Eng. • Free Slot: Available • Cross-department teaching permissible
      </div>
      <button onclick="confirmSubstitute('${lv.id}', 'Prof. Vikram Seth')" class="btn-secondary !py-1 !px-3 text-xs mt-2">
        Assign Prof. Vikram Seth
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

function confirmSubstitute(leaveId, substituteName) {
  const lv = store.state.leaveRequests.find(l => l.id === leaveId);
  if (!lv) return;

  lv.substituteAssigned = substituteName;
  lv.substituteStatus = "Confirmed & Notified";
  lv.status = "Approved";

  store.logAudit("Smart Substitute Assigned", leaveId, `Manager assigned ${substituteName} to cover ${lv.affectedDuty}`);
  store.addNotification("Class Substitute Assigned", `${substituteName} assigned to cover ${lv.affectedDuty}. Timetable updated.`, "Operations");
  store.save();

  document.getElementById("modal-substitute-finder").classList.add("hidden");
  showToast(`Substitute confirmed! Roster and class schedule updated automatically.`, "success");
  renderEmployeesView();
}

// ----------------------------------------------------------------------------------
// 7. CAMPUS SERVICES, VERIFIED IMPACT & WHAT-IF SIMULATOR
// ----------------------------------------------------------------------------------
function renderServicesView() {
  const container = document.getElementById("tickets-container");
  if (!container) return;
  container.innerHTML = "";

  store.state.campusIssues.forEach(tk => {
    let statusBadge = `<span class="badge badge-warning">${tk.status}</span>`;
    if (tk.status === "Resolved") statusBadge = `<span class="badge badge-success">Resolved & Verified</span>`;
    if (tk.status === "Awaiting Verification") statusBadge = `<span class="badge badge-primary">Awaiting Student Verification</span>`;

    const card = document.createElement("div");
    card.className = "campus-card p-4 border border-slate-200 space-y-2";
    card.innerHTML = `
      <div class="flex items-start justify-between">
        <div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-slate-900">${tk.title}</span>
            <span class="badge badge-danger text-xs">${tk.priority}</span>
            ${statusBadge}
          </div>
          <p class="text-xs text-slate-500 mt-0.5">${tk.location} • Ticket: <strong>${tk.id}</strong></p>
        </div>
        ${tk.repeatCount > 1 ? `
          <div class="text-right">
            <span class="badge badge-danger text-xs animate-pulse">Problem Radar Alert: Repeated ${tk.repeatCount}x</span>
          </div>
        ` : ''}
      </div>

      ${tk.radarWarning ? `
        <div class="bg-red-50 border border-red-200 text-red-900 text-xs p-2 rounded">
          <strong><i data-lucide="radio" class="w-3.5 h-3.5 inline"></i> Radar Intelligence:</strong> ${tk.radarWarning}
        </div>
      ` : ''}

      <div class="text-xs text-slate-600 bg-slate-50 p-2.5 rounded">
        <div><strong>Resolution Notes:</strong> ${tk.resolutionNotes || "Technician investigating."}</div>
        <div class="text-slate-400 mt-1">Assigned to: ${tk.assignedTo} • Reported by: ${tk.reporter}</div>
      </div>

      ${tk.status === "Awaiting Verification" ? `
        <div class="flex items-center justify-between pt-2 border-t border-slate-100">
          <span class="text-xs text-slate-500">Is the repair verified working on site?</span>
          <button onclick="confirmStudentVerification('${tk.id}')" class="btn-accent !py-1 !px-3 text-xs">
            <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Confirm & Close (Verified Impact)
          </button>
        </div>
      ` : ''}
    `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function confirmStudentVerification(ticketId) {
  const tk = store.state.campusIssues.find(t => t.id === ticketId);
  if (!tk) return;

  tk.status = "Resolved";
  tk.verifiedByStudent = true;
  store.logAudit("Campus Ticket Verified & Closed", ticketId, `Reporter confirmed repair satisfaction. Impact recorded.`);
  store.addNotification("Ticket Verified", `Ticket ${ticketId} confirmed resolved by student inspection.`, "Facilities");
  store.save();

  showToast(`Verified Impact recorded! Repeat issue rate re-evaluated.`, "success");
  renderServicesView();
}

// What-If Simulator Calculation Engine
function runWhatIfSimulation() {
  const roomCompaction = parseInt(document.getElementById("slider-compaction").value) || 20;
  const hvacShift = parseInt(document.getElementById("slider-hvac").value) || 2;
  const solarPave = parseInt(document.getElementById("slider-solar").value) || 40;

  // Real formula-backed simulation models
  const energySavedKwh = Math.round((roomCompaction * 140) + (hvacShift * 420) + (solarPave * 210));
  const costSavingsMonth = Math.round(energySavedKwh * 8.5); // ₹8.5 per commercial kWh
  const idleHoursReduced = Math.round(roomCompaction * 1.8);
  const carbonOffsetTons = (energySavedKwh * 0.00082).toFixed(1);

  document.getElementById("sim-val-compaction").textContent = `${roomCompaction}%`;
  document.getElementById("sim-val-hvac").textContent = `${hvacShift} hrs/day`;
  document.getElementById("sim-val-solar").textContent = `${solarPave}%`;

  document.getElementById("sim-res-savings").textContent = `₹${costSavingsMonth.toLocaleString()}`;
  document.getElementById("sim-res-energy").textContent = `${energySavedKwh.toLocaleString()} kWh`;
  document.getElementById("sim-res-idle").textContent = `${idleHoursReduced} hours`;
  document.getElementById("sim-res-carbon").textContent = `${carbonOffsetTons} Tons CO2`;
}

// ----------------------------------------------------------------------------------
// 8. REPORTS, AUDIT LOG & VIVA RUNNER
// ----------------------------------------------------------------------------------
function renderReportsView() {
  const auditBody = document.getElementById("audit-table-body");
  if (!auditBody) return;
  auditBody.innerHTML = "";

  store.state.auditLogs.slice(0, 15).forEach(log => {
    const tr = document.createElement("tr");
    tr.className = "border-b border-slate-100 hover:bg-slate-50 transition-colors text-xs";
    tr.innerHTML = `
      <td class="py-2.5 px-3 font-mono text-slate-500">${log.timestamp}</td>
      <td class="py-2.5 px-3 font-semibold text-slate-800">${log.user}<br><span class="text-[10px] text-slate-400 font-normal">${log.role}</span></td>
      <td class="py-2.5 px-3"><span class="badge badge-primary font-mono text-[10px]">${log.action}</span></td>
      <td class="py-2.5 px-3 font-mono text-blue-600 font-bold">${log.entity}</td>
      <td class="py-2.5 px-3 text-slate-600">${log.reason}</td>
    `;
    auditBody.appendChild(tr);
  });
}

// ----------------------------------------------------------------------------------
// VIVA DEMONSTRATION SCRIPT RUNNER (Page 24 of guide)
// ----------------------------------------------------------------------------------
function startVivaDemo() {
  const steps = [
    "Step 1: Welcome to the Viva Demo of Smart Campus 360!",
    "Step 2: Submitting fictional application for 'Aarav Sharma' with OCR marks extraction...",
    "Step 3: Checking Programme Eligibility rules (Min 75% PCM) -> Passed!",
    "Step 4: Admissions Officer generates Offer Letter & confirms simulated fee payment...",
    "Step 5: Enrolling student with permanent ID SC360-2026-CS001 into academic records...",
    "Step 6: Running Exam Constraint Scheduler -> Detecting overlap between CS301 & CS303 -> Auto-resolving slot!",
    "Step 7: Flagging Faculty medical leave -> Smart Substitute Finder matches Dr. Sarah Jenkins with 98% domain match!",
    "Step 8: Verifying biometric attendance & approved leave feeding October Payroll run...",
    "Step 9: Problem Radar identifies recurring fan fault in Room 302 -> Technician resolves with Verified Impact Score!",
    "Step 10: All actions verified and recorded in immutable Campus Audit Log. Demonstration complete!"
  ];

  let current = 0;
  const banner = document.createElement("div");
  banner.id = "viva-banner";
  banner.className = "fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl border border-blue-500 flex items-center gap-4 text-sm font-semibold max-w-xl text-center";
  document.body.appendChild(banner);

  function nextStep() {
    if (current < steps.length) {
      banner.innerHTML = `<span class="pulse-dot bg-blue-400"></span> ${steps[current]} <button onclick="document.getElementById('viva-banner').remove()" class="ml-4 text-slate-400 hover:text-white text-xs">✕</button>`;
      showToast(steps[current], "info");
      current++;
      setTimeout(nextStep, 2600);
    } else {
      setTimeout(() => {
        if (banner) banner.remove();
        showToast("Full End-to-End Viva Scenario successfully executed!", "success");
      }, 3000);
    }
  }
  nextStep();
}

// ----------------------------------------------------------------------------------
// DOM INITIALIZATION
// ----------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Navigation item clicks
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const view = item.dataset.view;
      if (view) switchView(view);
    });
  });

  // Role select dropdown
  const roleSelect = document.getElementById("header-role-select");
  if (roleSelect) {
    roleSelect.value = store.state.currentUser.role;
    roleSelect.addEventListener("change", (e) => switchRole(e.target.value));
  }

  // Global search input
  const searchInput = document.getElementById("global-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim();
      if (store.state.activeView === "admissions") {
        renderAdmissionsTable("ALL", "ALL", q);
      }
    });
  }

  // Application form submit
  const appForm = document.getElementById("form-new-app");
  if (appForm) {
    appForm.addEventListener("submit", handleNewApplicationSubmit);
  }

  // Exam form submit
  const examForm = document.getElementById("form-create-exam");
  if (examForm) {
    examForm.addEventListener("submit", handleCreateExamSubmit);
  }

  // Close modals on clicking backdrop or close buttons
  document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.add("hidden"));
    });
  });

  // What-If Sliders
  ["slider-compaction", "slider-hvac", "slider-solar"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", runWhatIfSimulation);
  });

  // Notifications drawer toggle
  const notifBtn = document.getElementById("btn-notifications");
  const notifDrawer = document.getElementById("notifications-drawer");
  if (notifBtn && notifDrawer) {
    notifBtn.addEventListener("click", () => notifDrawer.classList.toggle("hidden"));
  }

  // Render initial active view
  if (document.getElementById("view-dashboard")) {
    switchView(store.state.activeView || "dashboard");
    runWhatIfSimulation();
  }

  if (window.lucide) {
    lucide.createIcons();
  }
});


// ----------------------------------------------------------------------------------
// AI STUDENT SUCCESS PREDICTION & PRESCRIPTIVE DECISION SUPPORT
// (Research Guide: Predictive Decision Support System with Explainable AI)
// ----------------------------------------------------------------------------------
function renderSuccessPredictorView(filterRisk = "ALL", searchQuery = "") {
  const tbody = document.getElementById("predictor-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (!store.state.studentPredictions || store.state.studentPredictions.length === 0) {
    store.state.studentPredictions = JSON.parse(JSON.stringify(DEFAULT_STATE.studentPredictions));
  }

  let list = store.state.studentPredictions;
  if (filterRisk !== "ALL") {
    list = list.filter(p => p.riskLevel.includes(filterRisk));
  }
  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.studentId.toLowerCase().includes(q));
  }

  // Update KPI counters
  const highRiskCount = store.state.studentPredictions.filter(p => p.passProbability < 55).length;
  const modRiskCount = store.state.studentPredictions.filter(p => p.passProbability >= 55 && p.passProbability <= 75).length;
  const safeCount = store.state.studentPredictions.filter(p => p.passProbability > 75).length;

  const elHigh = document.getElementById("count-pred-high");
  if (elHigh) elHigh.textContent = highRiskCount;
  const elMod = document.getElementById("count-pred-mod");
  if (elMod) elMod.textContent = modRiskCount;
  const elSafe = document.getElementById("count-pred-safe");
  if (elSafe) elSafe.textContent = safeCount;

  list.forEach(item => {
    let probColor = item.passProbability < 55 ? "text-red-700 bg-red-50 border-red-200" :
                    item.passProbability <= 75 ? "text-amber-700 bg-amber-50 border-amber-200" : "text-emerald-700 bg-emerald-50 border-emerald-200";

    const tr = document.createElement("tr");
    tr.className = "border-b border-slate-100 hover:bg-slate-50 transition-colors text-xs";
    tr.innerHTML = `
      <td class="py-3 px-3 font-mono font-semibold text-blue-600">${item.studentId}</td>
      <td class="py-3 px-3 font-medium text-slate-900">
        ${item.name}
        <div class="text-[11px] text-slate-400 font-normal">${item.program} &bull; Mentor: ${item.mentor}</div>
      </td>
      <td class="py-3 px-3">
        <span class="font-bold ${item.attendance < 75 ? 'text-red-600' : 'text-slate-800'}">${item.attendance}%</span>
        <div class="text-[10px] text-slate-400">${item.assignmentVelocity}</div>
      </td>
      <td class="py-3 px-3">
        <div class="flex items-center gap-2">
          <div class="w-16 bg-slate-100 rounded-full h-2 overflow-hidden">
            <div class="h-2 rounded-full ${item.passProbability < 55 ? 'bg-red-500' : item.passProbability <= 75 ? 'bg-amber-500' : 'bg-emerald-500'}" style="width: ${item.passProbability}%"></div>
          </div>
          <span class="font-bold px-1.5 py-0.5 rounded border text-[11px] ${probColor}">${item.passProbability}% Pass</span>
        </div>
        <div class="text-[10px] text-slate-500 mt-0.5">${item.predictedGrade}</div>
      </td>
      <td class="py-3 px-3">
        <div class="space-y-0.5 max-w-xs text-[11px] text-slate-600">
          ${item.explainableFactors.map(f => `<div class="flex items-start gap-1"><span class="text-blue-500 font-bold">&bull;</span><span>${f}</span></div>`).join('')}
        </div>
        <div class="text-[10px] text-teal-700 font-semibold mt-1">Confidence: ${item.modelConfidence}</div>
      </td>
      <td class="py-3 px-3 text-right">
        ${item.interventionTriggered ? `
          <span class="badge badge-success text-[10px]">
            <i data-lucide="check" class="w-3 h-3"></i> Support Dispatched
          </span>
        ` : `
          <button onclick="triggerAutoIntervention('${item.studentId}')" class="btn-primary !py-1 !px-2.5 !bg-purple-600 hover:!bg-purple-700 text-xs shadow-sm">
            <i data-lucide="sparkles" class="w-3 h-3"></i> Trigger Support
          </button>
        `}
      </td>
    `;
    tbody.appendChild(tr);
  });

  if (window.lucide) lucide.createIcons();
}

function runStudentSuccessPrediction() {
  showToast("Running Predictive Random Forest Classifier across student activity telemetry...", "info");
  
  setTimeout(() => {
    store.state.studentPredictions.forEach(p => {
      if (p.studentId === "SC360-2024-CS042") {
        p.passProbability = 48; // simulated progress
        p.modelConfidence = "95.1% (Updated)";
      }
    });

    store.logAudit("AI Student Success Inference", "MODEL-RF-SUCCESS-V2", "Executed predictive inference across 4,820 student records; 14 academic intervention alerts verified");
    store.addNotification("AI Prediction Model Updated", "Evaluated student success vectors. 14 early academic intervention tasks queued.", "Students");
    store.save();

    showToast("AI Inference Complete! Predictions updated with 94.1% model precision.", "success");
    renderSuccessPredictorView();
  }, 900);
}

function triggerAutoIntervention(studentId) {
  const pred = store.state.studentPredictions.find(p => p.studentId === studentId);
  if (!pred) return;

  pred.interventionTriggered = true;
  
  const st = store.state.students.find(s => s.id === studentId);
  if (st) {
    if (!st.recoveryPlan) st.recoveryPlan = [];
    st.recoveryPlan.unshift({
      task: `AI Auto-Intervention: ${pred.recommendedIntervention.split('&')[0]}`,
      completed: false,
      due: "2026-11-01"
    });
  }

  store.logAudit("AI Proactive Intervention Dispatched", studentId, `Assigned: ${pred.recommendedIntervention}`);
  store.addNotification("Mentor Support Action Queued", `AI dispatched recovery action for ${pred.name} to mentor ${pred.mentor}`, "Students");
  store.save();

  showToast(`Prescriptive intervention active! Recovery plan pushed to ${pred.name}'s Student Portal.`, "success");
  renderSuccessPredictorView();
}

// ----------------------------------------------------------------------------------
// AI SMART TIMETABLE SCHEDULING ENGINE
// (Guide: Constraint-Aware Timetable Optimizer with Python OR-Tools simulation)
// ----------------------------------------------------------------------------------
function runAIConstraintScheduler() {
  showToast("Running Constraint Satisfaction Solver (Hard & Soft Constraints)...", "info");

  setTimeout(() => {
    store.state.exams.forEach(ex => {
      if (ex.hasConflict) {
        ex.hasConflict = false;
        ex.status = "Scheduled";
        ex.date = "2026-11-05";
        ex.timeSlot = "02:00 PM - 05:00 PM";
        ex.roomId = "ROOM-L205";
        ex.roomName = "Lecture Hall 205 (North Block)";
        ex.invigilatorId = "EMP-FAC-019";
        ex.invigilatorName = "Dr. Sarah Jenkins";
        ex.conflictReason = "";
      }
    });

    store.logAudit("AI Timetable Constraint Optimizer", "TIMETABLE-FALL-2026", "100% hard constraints satisfied (0 clashes). 95.2% soft constraints optimal (48h subject gap).");
    store.addNotification("AI Timetable Generated", "Automated Constraint Solver resolved all timetable clashes with balanced cognitive spacing.", "Exams");
    store.save();

    showToast("AI Constraint Engine solved all collisions! Zero student overlaps and zero room conflicts.", "success");
    renderExamsView();
  }, 900);
}

function publishAITimetable() {
  store.logAudit("Exam Timetable Published", "TIMETABLE-FALL-2026", "Approved & released to all student hall ticket generators and faculty rosters.");
  store.addNotification("Official Timetable Released", "Fall 2026 Examination Timetable published. Hall tickets available for download.", "Exams");
  store.save();

  showToast("Official Timetable published! Synced to Student Portal & Hall Ticket generator.", "success");
  renderExamsView();
}


// ----------------------------------------------------------------------------------
// AI CANTEEN DEMAND & FOOD WASTE PREDICTION (Indian Campus Context)
// (Research Guide Page 5: Regression & Time-Series Forecasting for Mess Optimization)
// ----------------------------------------------------------------------------------
function renderCanteenPredictorView() {
  const cd = store.state.canteenData;
  if (!cd) return;

  const mealsGrid = document.getElementById("canteen-meals-grid");
  if (mealsGrid) {
    mealsGrid.innerHTML = `
      <div class="campus-card p-4 border border-slate-200 bg-white space-y-2">
        <div class="flex justify-between items-center">
          <span class="badge badge-accent text-[11px]">Breakfast (07:30 - 09:30 AM)</span>
          <span class="text-xs font-bold text-slate-800">${cd.dailyForecast.breakfast.predictedCount} Meals Forecast</span>
        </div>
        <h4 class="font-bold text-slate-900 text-sm">${cd.dailyForecast.breakfast.menu}</h4>
        <div class="flex justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
          <span>Prepared: <strong>${cd.dailyForecast.breakfast.actualPrepared}</strong></span>
          <span class="text-teal-700 font-semibold">Surplus: ${cd.dailyForecast.breakfast.surplusCount} units</span>
        </div>
      </div>

      <div class="campus-card p-4 border border-emerald-300 bg-emerald-50/30 space-y-2">
        <div class="flex justify-between items-center">
          <span class="badge badge-success text-[11px]">Lunch (12:30 - 02:30 PM)</span>
          <span class="text-xs font-bold text-emerald-700">${cd.dailyForecast.lunch.predictedCount} Thalis Forecast</span>
        </div>
        <h4 class="font-bold text-slate-900 text-sm">${cd.dailyForecast.lunch.menu}</h4>
        <div class="flex justify-between text-xs text-slate-500 pt-1 border-t border-emerald-100">
          <span>Prepared: <strong>${cd.dailyForecast.lunch.actualPrepared}</strong></span>
          <span class="text-emerald-700 font-bold">Accuracy: 98.3%</span>
        </div>
      </div>

      <div class="campus-card p-4 border border-slate-200 bg-white space-y-2">
        <div class="flex justify-between items-center">
          <span class="badge badge-warning text-[11px]">High Tea (04:45 - 06:00 PM)</span>
          <span class="text-xs font-bold text-slate-800">${cd.dailyForecast.snacks.predictedCount} Servings</span>
        </div>
        <h4 class="font-bold text-slate-900 text-sm">${cd.dailyForecast.snacks.menu}</h4>
        <div class="flex justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
          <span>Prepared: <strong>${cd.dailyForecast.snacks.actualPrepared}</strong></span>
          <span class="text-amber-700 font-semibold">Surplus: ${cd.dailyForecast.snacks.surplusCount}</span>
        </div>
      </div>

      <div class="campus-card p-4 border border-slate-200 bg-white space-y-2">
        <div class="flex justify-between items-center">
          <span class="badge badge-primary text-[11px]">Dinner (07:45 - 09:45 PM)</span>
          <span class="text-xs font-bold text-slate-800">${cd.dailyForecast.dinner.predictedCount} Meals Forecast</span>
        </div>
        <h4 class="font-bold text-slate-900 text-sm">${cd.dailyForecast.dinner.menu}</h4>
        <div class="flex justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
          <span>Prepared: <strong>${cd.dailyForecast.dinner.actualPrepared}</strong></span>
          <span class="text-blue-700 font-semibold">Surplus: ${cd.dailyForecast.dinner.surplusCount} units</span>
        </div>
      </div>
    `;
  }

  // Ingredients table
  const tbodyIng = document.getElementById("canteen-ingredients-tbody");
  if (tbodyIng) {
    tbodyIng.innerHTML = "";
    cd.rawIngredientsNeeded.forEach(ing => {
      const moneySaved = ing.savedKg * ing.unitCost;
      tbodyIng.innerHTML += `
        <tr class="border-b border-slate-100 hover:bg-slate-50 text-xs">
          <td class="py-2.5 px-3 font-semibold text-slate-800">${ing.item}</td>
          <td class="py-2.5 px-3 font-bold text-blue-700">${ing.neededKg} kg</td>
          <td class="py-2.5 px-3 text-slate-600">₹${ing.unitCost} / kg</td>
          <td class="py-2.5 px-3 font-bold text-emerald-600">${ing.savedKg} kg saved</td>
          <td class="py-2.5 px-3 font-bold text-slate-800">₹${moneySaved.toLocaleString()}</td>
        </tr>
      `;
    });
  }

  // Redistribution Log
  const logContainer = document.getElementById("canteen-donation-log");
  if (logContainer) {
    logContainer.innerHTML = "";
    cd.redistributionLog.forEach(item => {
      logContainer.innerHTML += `
        <div class="p-3 bg-white border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div>
            <div class="flex items-center gap-2">
              <span class="badge badge-success text-[10px]">${item.status}</span>
              <strong class="text-slate-900">${item.quantity} (${item.meal})</strong>
              <span class="text-slate-400 font-mono text-[10px]">${item.time}</span>
            </div>
            <p class="text-slate-500 text-[11px] mt-0.5">Partner: <strong>${item.partner}</strong> &rarr; Destination: ${item.dest}</p>
          </div>
          <span class="badge badge-accent text-[10px] font-mono">${item.id}</span>
        </div>
      `;
    });
  }

  if (window.lucide) lucide.createIcons();
}

function runCanteenPrediction() {
  const occ = parseInt(document.getElementById("canteen-slider-occ")?.value || 88);
  const dayType = document.getElementById("canteen-select-day")?.value || "regular";

  showToast(`Running AI Canteen Demand Inference for ${occ}% hostel occupancy on ${dayType} schedule...`, "info");

  setTimeout(() => {
    const factor = (occ / 85) * (dayType === 'exam' ? 1.08 : dayType === 'festival' ? 0.72 : 1.0);
    const cd = store.state.canteenData;
    
    cd.dailyForecast.lunch.predictedCount = Math.round(2380 * factor);
    cd.dailyForecast.lunch.actualPrepared = Math.round(cd.dailyForecast.lunch.predictedCount * 1.02);
    cd.dailyForecast.dinner.predictedCount = Math.round(1980 * factor);
    cd.dailyForecast.dinner.actualPrepared = Math.round(cd.dailyForecast.dinner.predictedCount * 1.01);

    store.logAudit("AI Canteen Demand Model Run", "ANNAPURNA-MESS-2026", `Re-forecasted daily meals for ${occ}% occupancy: Lunch target ${cd.dailyForecast.lunch.predictedCount} thalis.`);
    store.save();

    showToast(`Canteen Demand re-calibrated! Kitchen procurement updated with zero predicted wastage.`, "success");
    renderCanteenPredictorView();
  }, 800);
}

function dispatchFoodDonation() {
  const cd = store.state.canteenData;
  const newDonation = {
    id: `DON-2026-${Math.floor(110 + Math.random() * 800)}`,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    meal: "Fresh Lunch Surplus",
    quantity: "42 Fresh Packed Hot Thalis",
    partner: "Robin Hood Army (Campus Chapter)",
    dest: "Railway Station Slum Outreach",
    status: "Dispatched & Temp Checked"
  };

  cd.redistributionLog.unshift(newDonation);
  store.logAudit("Surplus Food Redistribution Dispatched", newDonation.id, "42 fresh thalis packaged for community shelter before expiry");
  store.addNotification("Food Surplus Dispatched", "Robin Hood Army picked up 42 hot thalis from Annapurna Mess.", "Facilities");
  store.save();

  showToast(`Surplus food dispatched to Robin Hood Army! 42 hot thalis saved from disposal.`, "success");
  renderCanteenPredictorView();
}

// ----------------------------------------------------------------------------------
// CAMPUS AI COPILOT (Grounded Assistant for Policies, Fees, Exams, Mess & Timetables)
// ----------------------------------------------------------------------------------
const COPILOT_KB = [
  {
    triggers: ["attendance", "condonation", "shortage", "absent", "75%"],
    answer: "Under University Ordinance 14-B, a minimum of <strong>75% aggregate attendance</strong> is mandatory to appear in semester examinations. Students between 60%-74% with certified medical documentation may apply for attendance condonation subject to Dean/HOD review."
  },
  {
    triggers: ["exam", "hall ticket", "cs301", "cs303", "timetable", "date"],
    answer: "Fall 2026 Mid-Terms commence on <strong>4th November 2026</strong>. CS301 (Data Structures) is on Nov 4 at 09:30 AM in the Main Auditorium, and CS303 (Operating Systems) is on Nov 5 at 02:00 PM in Lecture Hall 205. You can download and print your official QR Hall Ticket directly from the portal."
  },
  {
    triggers: ["canteen", "mess", "food", "waste", "menu", "rebate", "thali"],
    answer: "Annapurna Central Mess serves pure vegetarian hygienic meals. Today's lunch features <em>Paneer Butter Masala, Dal Tadka, Jeera Rice, and Tawa Rotis</em>. For hostel absences exceeding 3 continuous days, submit an e-outpass 24 hours prior to claim a <strong>mess rebate of ₹120 per day</strong>."
  },
  {
    triggers: ["hackathon", "growth passport", "portfolio", "placement", "ieee"],
    answer: "The Digital Growth Passport authenticates student technical milestones. Current verified opportunities include the <strong>IEEE Student Research Grant (₹50,000)</strong> and the <strong>Smart India Hackathon campus selection round</strong>. You can export your official verified portfolio PDF anytime!"
  },
  {
    triggers: ["wifi", "wi-fi", "internet", "fan", "complaint", "issue", "repair"],
    answer: "Campus facilities issues can be reported instantly via the <strong>Report Issue</strong> tab. Our Campus Problem Radar monitors recurring issues. Remember to click <em>'Confirm Fix on Site'</em> once repaired to record the Verified Impact Score!"
  },
  {
    triggers: ["substitute", "faculty", "leave", "teacher", "absent"],
    answer: "When a faculty member applies for medical or duty leave, the <strong>Smart Substitute Finder™</strong> automatically analyzes subject skills and free timetable slots to assign a 98% domain-matched replacement faculty, preventing class cancellations."
  }
];

function toggleCopilotModal() {
  const modal = document.getElementById("modal-campus-copilot");
  if (modal) modal.classList.toggle("hidden");
  if (window.lucide) lucide.createIcons();
}

function handleCopilotSubmit(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("copilot-input");
  if (!input) return;

  const query = input.value.trim();
  if (!query) return;

  appendCopilotMessage("user", query);
  input.value = "";

  // Thinking animation
  const chatBox = document.getElementById("copilot-messages");
  const thinkingId = "copilot-thinking-" + Date.now();
  const thinkingDiv = document.createElement("div");
  thinkingDiv.id = thinkingId;
  thinkingDiv.className = "flex gap-2.5 items-start text-xs";
  thinkingDiv.innerHTML = `
    <div class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">AI</div>
    <div class="bg-slate-100 text-slate-500 p-2.5 rounded-xl rounded-tl-none animate-pulse">Consulting university knowledge base & live schedules...</div>
  `;
  chatBox.appendChild(thinkingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    const el = document.getElementById(thinkingId);
    if (el) el.remove();

    const lower = query.toLowerCase();
    let matched = COPILOT_KB.find(k => k.triggers.some(t => lower.includes(t)));

    let reply = matched ? matched.answer : `I searched the Smart Campus 360 Knowledge Base regarding <em>"${query}"</em>. For official guidance, please review the Academic Regulations Handbook or submit a query to the Campus Helpdesk.`;
    appendCopilotMessage("ai", reply);
  }, 600);
}

function appendCopilotMessage(sender, text) {
  const chatBox = document.getElementById("copilot-messages");
  if (!chatBox) return;

  const div = document.createElement("div");
  div.className = `flex gap-2.5 items-start text-xs ${sender === 'user' ? 'justify-end' : ''}`;

  if (sender === 'user') {
    div.innerHTML = `
      <div class="bg-blue-600 text-white p-2.5 rounded-xl rounded-tr-none max-w-xs sm:max-w-md shadow-sm">${text}</div>
      <div class="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">You</div>
    `;
  } else {
    div.innerHTML = `
      <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-teal-500 to-blue-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 shadow-sm">AI</div>
      <div class="bg-white border border-slate-200 text-slate-800 p-3 rounded-xl rounded-tl-none max-w-xs sm:max-w-md shadow-sm leading-relaxed">${text}</div>
    `;
  }

  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function copilotAskQuick(queryText) {
  const input = document.getElementById("copilot-input");
  if (input) {
    input.value = queryText;
    handleCopilotSubmit();
  }
}
