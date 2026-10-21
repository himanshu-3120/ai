/**
 * SMART CAMPUS 360 - Student Success Portal Controller
 * Synchronized with Campus State Store (LocalStorage)
 */

const STORAGE_KEY = "SMART_CAMPUS_360_STATE_V1";

function getStoreState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read store state", e);
  }
  return null;
}

function saveStoreState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save store state", e);
  }
}

// Current Student Context
let currentStudentId = "SC360-2026-CS001";
let activeTab = "dashboard";

// Toast Helper
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast border-l-4 ${
    type === 'success' ? '!border-l-emerald-500' :
    type === 'warning' ? '!border-l-amber-500' :
    type === 'danger' ? '!border-l-red-500' : '!border-l-blue-600'
  }`;

  const iconName = type === 'success' ? 'check-circle' : type === 'warning' ? 'alert-triangle' : 'info';

  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <i data-lucide="${iconName}" class="w-4 h-4 ${
        type === 'success' ? 'text-emerald-500' :
        type === 'warning' ? 'text-amber-500' :
        type === 'danger' ? 'text-red-500' : 'text-blue-500'
      }"></i>
      <span class="text-xs font-medium text-slate-800">${message}</span>
    </div>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Tab Switcher
function switchStudentTab(tabId) {
  activeTab = tabId;
  document.querySelectorAll(".student-section").forEach(sec => sec.classList.add("hidden"));
  
  const target = document.getElementById(`student-view-${tabId}`);
  if (target) target.classList.remove("hidden");

  document.querySelectorAll(".student-tab-btn").forEach(btn => {
    btn.classList.remove("text-blue-600", "bg-blue-50", "border-blue-200");
    btn.classList.add("text-slate-600", "hover:bg-slate-100");
  });

  const activeBtn = document.getElementById(`tab-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.add("text-blue-600", "bg-blue-50", "border", "border-blue-200");
    activeBtn.classList.remove("hover:bg-slate-100");
  }

  renderStudentPortal();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal Helpers
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("hidden");
}

function openReportIssueModal() {
  const el = document.getElementById("modal-report-issue");
  if (el) el.classList.remove("hidden");
}

function openGrowthModal() {
  const el = document.getElementById("modal-growth");
  if (el) el.classList.remove("hidden");
}

function openWellbeingModal() {
  const el = document.getElementById("modal-wellbeing");
  if (el) el.classList.remove("hidden");
}

// Persona Switcher (e.g. Test Top Performer vs At-Risk Student)
function switchStudentPersona(id) {
  currentStudentId = id;
  const state = getStoreState();
  if (!state) return;

  const student = state.students.find(s => s.id === id);
  if (!student) return;

  // Update Avatar & Names
  const avatars = {
    "SC360-2026-CS001": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    "SC360-2024-CS042": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    "SC360-2024-CS015": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  };

  const avatarUrl = avatars[id] || avatars["SC360-2026-CS001"];
  document.getElementById("student-avatar").src = avatarUrl;
  document.getElementById("student-banner-avatar").src = avatarUrl;
  document.getElementById("student-header-name").textContent = student.name;
  document.getElementById("student-header-id").textContent = student.id;
  document.getElementById("student-banner-name").textContent = `Welcome back, ${student.name.split(' ')[0]}!`;
  document.getElementById("student-banner-details").innerHTML = `${student.program} &bull; ${student.semester} (${student.section}) &bull; ID: <span class="font-mono text-teal-300 font-bold">${student.id}</span>`;

  showToast(`Switched active student persona to ${student.name} (${student.id})`, "info");
  renderStudentPortal();
}

// Render Master Student Portal Data
function renderStudentPortal() {
  const state = getStoreState();
  if (!state) return;

  const student = state.students.find(s => s.id === currentStudentId) || state.students[0];

  // 1. KPI updates
  document.getElementById("student-kpi-attendance").textContent = `${student.attendance}%`;
  document.getElementById("student-kpi-cgpa").textContent = student.cgpa > 0 ? student.cgpa.toFixed(2) : "8.84";
  document.getElementById("student-kpi-mentor").textContent = student.mentor || "Dr. Sarah Jenkins";
  document.getElementById("student-kpi-skills").textContent = `${(student.growthPassport || []).length} Badges`;

  const attStatus = document.getElementById("student-attendance-status");
  if (student.attendance < 75) {
    attStatus.textContent = "Attendance Warning (<75% Cutoff)";
    attStatus.className = "text-[10px] text-red-600 font-bold";
  } else {
    attStatus.textContent = "Safe (>75% institutional rule)";
    attStatus.className = "text-[10px] text-emerald-600 font-medium";
  }

  // 2. Early Academic Warning Banner
  const alertBox = document.getElementById("student-academic-alert-box");
  if (student.attendance < 75) {
    alertBox.classList.remove("hidden");
    document.getElementById("student-alert-text").innerHTML = student.riskReason || `Attendance is at ${student.attendance}%. Please complete mentor recovery actions below.`;
  } else {
    alertBox.classList.add("hidden");
  }

  // 3. Personalized Learning Recovery Plan
  const recList = document.getElementById("student-recovery-list");
  recList.innerHTML = "";
  if (student.recoveryPlan && student.recoveryPlan.length > 0) {
    student.recoveryPlan.forEach((r, idx) => {
      recList.innerHTML += `
        <div class="flex items-center justify-between text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
          <label class="flex items-center gap-2 cursor-pointer flex-1">
            <input type="checkbox" ${r.completed ? 'checked' : ''} onchange="toggleStudentRecovery(${idx})" class="rounded text-blue-600 w-4 h-4">
            <span class="${r.completed ? 'line-through text-slate-400 font-medium' : 'font-semibold'}">${r.task}</span>
          </label>
          <span class="text-[10px] text-slate-400 ml-2 whitespace-nowrap">Due: ${r.due}</span>
        </div>
      `;
    });
  } else {
    recList.innerHTML = `
      <div class="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-lg text-xs flex items-center gap-2">
        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
        <span>All core learning benchmarks satisfied! No active recovery actions pending.</span>
      </div>
    `;
  }

  // 4. Subjects Registered
  const tbody = document.getElementById("student-subjects-tbody");
  tbody.innerHTML = "";
  (student.subjects || []).forEach(sub => {
    tbody.innerHTML += `
      <tr class="border-b border-slate-100 hover:bg-slate-50">
        <td class="py-2.5 px-4 font-mono font-semibold text-blue-600 text-xs">${sub.code}</td>
        <td class="py-2.5 px-4 font-medium text-slate-900">${sub.name}</td>
        <td class="py-2.5 px-4 text-slate-600 text-xs">Faculty In-Charge</td>
        <td class="py-2.5 px-4 text-xs font-semibold ${parseInt(sub.attendance) < 75 ? 'text-red-600' : 'text-emerald-600'}">${sub.attendance}</td>
        <td class="py-2.5 px-4 font-bold text-xs">${sub.grade}</td>
        <td class="py-2.5 px-4"><span class="badge ${sub.status === 'Needs Recovery' ? 'badge-danger' : 'badge-success'}">${sub.status}</span></td>
      </tr>
    `;
  });

  // 5. Growth Passport Badges
  const growthBox = document.getElementById("student-growth-container");
  growthBox.innerHTML = "";
  (student.growthPassport || []).forEach(g => {
    growthBox.innerHTML += `
      <div class="border border-slate-200 rounded-xl p-3.5 bg-white space-y-2 hover:shadow-sm">
        <div class="flex items-center justify-between">
          <span class="badge ${g.verified ? 'badge-accent' : 'badge-gray'} text-[10px]">${g.type}</span>
          <span class="badge ${g.verified ? 'badge-success' : 'badge-warning'} text-[10px]">
            <i data-lucide="${g.verified ? 'check-circle' : 'clock'}" class="w-3 h-3"></i>
            ${g.verified ? 'Verified' : 'Pending Verification'}
          </span>
        </div>
        <div class="font-bold text-slate-900 text-xs">${g.title}</div>
        <div class="text-[10px] text-slate-400">Validated by: <strong>${g.verifier || 'Academic Committee'}</strong></div>
      </div>
    `;
  });

  // 6. Student Reported Issues & Verified Impact Tickets
  const ticketBox = document.getElementById("student-tickets-container");
  ticketBox.innerHTML = "";
  (state.campusIssues || []).forEach(tk => {
    let statusBadge = `<span class="badge badge-warning">${tk.status}</span>`;
    if (tk.status === "Resolved") statusBadge = `<span class="badge badge-success">Resolved & Verified</span>`;
    if (tk.status === "Awaiting Verification") statusBadge = `<span class="badge badge-primary">Awaiting Your Verification</span>`;

    ticketBox.innerHTML += `
      <div class="campus-card p-4 border border-slate-200 space-y-2.5 text-xs">
        <div class="flex justify-between items-start">
          <span class="font-bold text-slate-900">${tk.title}</span>
          ${statusBadge}
        </div>
        <p class="text-slate-500 text-[11px]">${tk.location} &bull; Ticket #${tk.id}</p>
        <div class="bg-slate-50 p-2 rounded text-slate-600">
          <div><strong>Technician Note:</strong> ${tk.resolutionNotes || 'In queue for physical inspection.'}</div>
        </div>

        ${tk.status === 'Awaiting Verification' ? `
          <div class="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span class="text-[11px] text-slate-500">Is the repair working on site?</span>
            <button onclick="verifyStudentTicket('${tk.id}')" class="btn-primary !bg-emerald-600 hover:!bg-emerald-700 !py-1 !px-2.5 text-xs">
              <i data-lucide="check-circle" class="w-3 h-3"></i> Confirm Fix on Site
            </button>
          </div>
        ` : ''}
      </div>
    `;
  });

  if (window.lucide) lucide.createIcons();
}

// Toggle Recovery Task
function toggleStudentRecovery(idx) {
  const state = getStoreState();
  if (!state) return;

  const student = state.students.find(s => s.id === currentStudentId);
  if (student && student.recoveryPlan[idx]) {
    student.recoveryPlan[idx].completed = !student.recoveryPlan[idx].completed;
    saveStoreState(state);
    showToast(`Milestone updated: "${student.recoveryPlan[idx].task}"`, "success");
    renderStudentPortal();
  }
}

// Student Verified Impact Score Confirmation
function verifyStudentTicket(ticketId) {
  const state = getStoreState();
  if (!state) return;

  const tk = state.campusIssues.find(t => t.id === ticketId);
  if (!tk) return;

  tk.status = "Resolved";
  tk.verifiedByStudent = true;
  tk.resolutionNotes = `${tk.resolutionNotes} [Verified by student inspection]`;

  state.auditLogs.unshift({
    id: `AUD-${Date.now().toString().slice(-4)}`,
    timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
    user: document.getElementById("student-header-name").textContent,
    role: "Student",
    action: "Verified Impact Score Confirmation",
    entity: ticketId,
    reason: "Student physically confirmed equipment repair functioning on campus."
  });

  saveStoreState(state);
  showToast(`Verified Impact confirmed! Ticket closed with physical verification proof.`, "success");
  renderStudentPortal();
}

// Submit Campus Issue
function handleStudentIssueSubmit(e) {
  e.preventDefault();
  const state = getStoreState();
  if (!state) return;

  const title = document.getElementById("issue-title").value;
  const category = document.getElementById("issue-category").value;
  const priority = document.getElementById("issue-priority").value;
  const location = document.getElementById("issue-location").value;
  const desc = document.getElementById("issue-desc").value;
  const studentName = document.getElementById("student-header-name").textContent;

  const newTicket = {
    id: `TICK-2026-${Math.floor(500 + Math.random() * 400)}`,
    title: title,
    category: category,
    location: location,
    assetId: `ASSET-${Math.floor(100 + Math.random() * 900)}`,
    priority: priority,
    status: "In Progress",
    reporter: `${studentName} (Student)`,
    assignedTo: "Campus Operations NOC",
    reportedAt: new Date().toLocaleTimeString(),
    repeatCount: 1,
    radarWarning: "",
    resolutionNotes: desc,
    verifiedByStudent: false
  };

  state.campusIssues.unshift(newTicket);
  state.notifications.unshift({
    id: `NOTIF-${Date.now().toString().slice(-4)}`,
    title: "New Student Ticket Filed",
    message: `${studentName} reported "${title}" at ${location}`,
    category: "Facilities",
    read: false,
    time: "Just now"
  });

  saveStoreState(state);
  closeModal("modal-report-issue");
  showToast(`Issue ${newTicket.id} logged with Problem Radar and routed to campus teams!`, "success");
  renderStudentPortal();
}

// Add Growth Achievement
function handleGrowthSubmit(e) {
  e.preventDefault();
  const state = getStoreState();
  if (!state) return;

  const type = document.getElementById("growth-type").value;
  const title = document.getElementById("growth-title").value;

  const student = state.students.find(s => s.id === currentStudentId);
  if (student) {
    if (!student.growthPassport) student.growthPassport = [];
    student.growthPassport.unshift({
      type: type,
      title: title,
      verified: true,
      verifier: "Academic Verification Desk"
    });

    saveStoreState(state);
    closeModal("modal-growth");
    showToast(`Achievement recorded in your Growth Passport!`, "success");
    renderStudentPortal();
  }
}

// Export Growth Passport
function exportCurrentStudentPassport() {
  const state = getStoreState();
  if (!state) return;

  const student = state.students.find(s => s.id === currentStudentId);
  if (!student) return;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Career Portfolio - ${student.name}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #14213D; line-height: 1.5; }
          .header { border-bottom: 3px double #14213D; padding-bottom: 20px; text-align: center; }
          .logo { font-size: 24px; font-weight: bold; }
          .card { border: 1px solid #CBD5E1; padding: 15px; border-radius: 8px; margin: 15px 0; background: #F8FAFC; }
          .badge { display: inline-block; background: #0D9488; color: white; padding: 3px 8px; border-radius: 4px; font-size: 11px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">SMART CAMPUS 360 - DIGITAL GROWTH PASSPORT</div>
          <p>Official Academic & Co-Curricular Student Portfolio</p>
        </div>
        <h2>${student.name} (ID: ${student.id})</h2>
        <p><strong>Program:</strong> ${student.program} &bull; ${student.semester} &bull; <strong>CGPA:</strong> ${student.cgpa || '8.84'} &bull; <strong>Attendance:</strong> ${student.attendance}%</p>
        <p><strong>Faculty Mentor:</strong> ${student.mentor}</p>
        <hr>
        <h3>Verified Co-Curricular & Research Achievements:</h3>
        ${(student.growthPassport || []).map(g => `
          <div class="card">
            <span class="badge">${g.type}</span>
            <h4 style="margin: 8px 0 4px 0;">${g.title}</h4>
            <p style="font-size: 12px; color: #64748B; margin: 0;">Verified by: ${g.verifier}</p>
          </div>
        `).join('')}
        <script>window.onload = function() { window.print(); };</script>
      </body>
    </html>
  `);
}

// Download Hall Ticket
function downloadHallTicket(examId) {
  const state = getStoreState();
  const student = state.students.find(s => s.id === currentStudentId);
  const exam = (state.exams || []).find(e => e.id === examId) || state.exams[0];

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Exam Hall Ticket - ${student.name}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 30px; color: #14213D; }
          .card { border: 2px solid #14213D; padding: 25px; border-radius: 10px; max-width: 650px; margin: auto; }
          .title { text-align: center; border-bottom: 2px solid #2563EB; padding-bottom: 15px; }
          .row { display: flex; justify-content: space-between; margin: 12px 0; border-bottom: 1px dashed #CBD5E1; padding-bottom: 6px; }
          .qr { border: 2px dashed #2563EB; width: 100px; height: 100px; text-align: center; font-size: 11px; line-height: 100px; background: #EFF6FF; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="title">
            <h2 style="margin: 0; color: #14213D;">SMART CAMPUS 360 &bull; OFFICIAL EXAM PASS</h2>
            <p style="margin: 5px 0 0 0; color: #64748B;">Mid-Term Examination Series &bull; Fall 2026</p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
            <div>
              <p><strong>Candidate:</strong> ${student.name}</p>
              <p><strong>Registration ID:</strong> ${student.id}</p>
              <p><strong>Program:</strong> ${student.program}</p>
            </div>
            <div class="qr">[ QR AUTH PASS ]</div>
          </div>
          <div class="row"><span><strong>Subject:</strong></span><span>${exam.subjectCode} - ${exam.subjectName}</span></div>
          <div class="row"><span><strong>Date & Time:</strong></span><span>${exam.date} (${exam.timeSlot})</span></div>
          <div class="row"><span><strong>Exam Venue:</strong></span><span>${exam.roomName}</span></div>
          <div class="row"><span><strong>Designated Desk:</strong></span><span>Desk #42 (Row C)</span></div>
          <div class="row"><span><strong>Chief Invigilator:</strong></span><span>${exam.invigilatorName}</span></div>
          <p style="font-size: 11px; color: #64748B; margin-top: 25px;">
            * Reporting time: 30 minutes prior to exam. Physical verification aided by Smart QR scanner.
          </p>
        </div>
        <script>window.onload = function() { window.print(); };</script>
      </body>
    </html>
  `);
}

// Equipment Borrowing
function borrowItem(itemName) {
  showToast(`Borrow request submitted for ${itemName}! Awaiting faculty in-charge confirmation.`, "success");
}

// Campus Pulse Voting
function votePulse(category, vote) {
  showToast(`Thanks! Your anonymous feedback on ${category.toUpperCase()} has been factored into Campus Pulse.`, "success");
}

// Wellbeing Request
function submitWellbeingRequest() {
  const cat = document.getElementById("wellbeing-category").value;
  closeModal("modal-wellbeing");
  showToast(`Confidential request logged under "${cat}". Mentor notified privately.`, "success");
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  renderStudentPortal();
});
