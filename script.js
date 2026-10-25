
/* =========================================
   1. CONSTANTS AND CONFIGURATION
========================================= */

const USERS = [
  { id: 'T-100', pw: 'teacher123', name: 'Ms. Villanueva', role: 'teacher' },
  { id: 'O-100', pw: 'organizer123', name: 'Mr. Garcia', role: 'organizer' },
  { id: 'S-1001', pw: 'student123', name: 'Ana Reyes', role: 'student' },
  { id: 'S-1002', pw: 'student123', name: 'Ben Cruz', role: 'student' },
  { id: 'S-1003', pw: 'student123', name: 'Carla Santos', role: 'student' },
  { id: 'S-1004', pw: 'student123', name: 'Dan Lim', role: 'student' }
];

const STU = USERS.filter(u => u.role === 'student');

const ROLE = {
  teacher: 'Teacher',
  student: 'Student',
  organizer: 'Event Organizer'
};

const LBL = {
  todo: 'Not started',
  doing: 'In progress',
  done: 'Finished',
  overdue: 'Overdue'
};

const D = 864e5;
const K = 'School-TrackLendar';

const $ = selector => document.querySelector(selector);

const e = value =>
  String(value ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));

const uid = () => Math.random().toString(36).slice(2, 9);

const fmt = date =>
  new Date(date).toLocaleString('en-PH', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

const nm = id =>
  (USERS.find(u => u.id === id) || {}).name || id;


load();
render();
