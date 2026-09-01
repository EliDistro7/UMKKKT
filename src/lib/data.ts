export type Member = {
  id: string;
  fullName: string;
  role: string;
  church: string;
  region: string;
  phone: string;
  email: string;
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  joinedAt: string;
  photoUrl?: string;
};

export type Leader = {
  id: string;
  fullName: string;
  title: string;
  region: string;
  phone: string;
  email: string;
  photoUrl?: string;
  isNational: boolean;
};

export type Church = {
  id: string;
  name: string;
  pastor: string;
  region: string;
  district: string;
  zone: string;
  address: string;
  mapsUrl?: string;
  phone: string;
  email?: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: "Mkutano" | "Semina" | "Ibada" | "Mafunzo";
};

export type Download = {
  id: string;
  title: string;
  description: string;
  category: "Fomu" | "Katiba" | "Mwongozo" | "Taarifa";
  fileSize: string;
  fileType: string;
  url: string;
};

// ── Mock Members ──────────────────────────────────────────────
export const members: Member[] = [
  {
    id: "UMK-2024-001",
    fullName: "Rev. Emmanuel Mwanga",
    role: "Mchungaji Mkuu",
    church: "Kanisa la Kweli Dar es Salaam",
    region: "Dar es Salaam",
    phone: "+255 712 345 678",
    email: "e.mwanga@umkkt.org",
    status: "ACTIVE",
    joinedAt: "2018-03-15",
  },
  {
    id: "UMK-2024-002",
    fullName: "Mama Grace Kiondo",
    role: "Mwangalizi wa Wanawake",
    church: "Kanisa la Kweli Mwanza",
    region: "Mwanza",
    phone: "+255 754 234 567",
    email: "grace.kiondo@umkkt.org",
    status: "ACTIVE",
    joinedAt: "2019-07-22",
  },
  {
    id: "UMK-2024-003",
    fullName: "Diak. Samuel Ochieng",
    role: "Shemasi",
    church: "Kanisa la Kweli Arusha",
    region: "Arusha",
    phone: "+255 768 901 234",
    email: "s.ochieng@umkkt.org",
    status: "ACTIVE",
    joinedAt: "2020-01-10",
  },
  {
    id: "UMK-2024-004",
    fullName: "Rev. Fatuma Ally",
    role: "Mchungaji",
    church: "Kanisa la Kweli Dodoma",
    region: "Dodoma",
    phone: "+255 699 456 789",
    email: "f.ally@umkkt.org",
    status: "INACTIVE",
    joinedAt: "2017-09-30",
  },
];

// ── Mock Leaders ──────────────────────────────────────────────
export const leaders: Leader[] = [
  {
    id: "L-001",
    fullName: "Askofu Joseph Makwela",
    title: "Rais wa Baraza la UMKKT",
    region: "Kitaifa",
    phone: "+255 713 000 001",
    email: "rais@umkkt.org",
    isNational: true,
  },
  {
    id: "L-002",
    fullName: "Rev. Anna Msigwa",
    title: "Katibu Mkuu",
    region: "Kitaifa",
    phone: "+255 713 000 002",
    email: "katibu@umkkt.org",
    isNational: true,
  },
  {
    id: "L-003",
    fullName: "Rev. Peter Ndunguru",
    title: "Mwenyekiti wa Kanda",
    region: "Kanda ya Kaskazini",
    phone: "+255 754 111 222",
    email: "kaskazini@umkkt.org",
    isNational: false,
  },
  {
    id: "L-004",
    fullName: "Rev. Mary Mushi",
    title: "Mwenyekiti wa Kanda",
    region: "Kanda ya Kusini",
    phone: "+255 754 333 444",
    email: "kusini@umkkt.org",
    isNational: false,
  },
  {
    id: "L-005",
    fullName: "Rev. David Chacha",
    title: "Mwenyekiti wa Kanda",
    region: "Kanda ya Ziwa",
    phone: "+255 754 555 666",
    email: "ziwa@umkkt.org",
    isNational: false,
  },
];

// ── Mock Churches ─────────────────────────────────────────────
export const churches: Church[] = [
  {
    id: "CH-001",
    name: "Kanisa la Kweli Dar es Salaam Kuu",
    pastor: "Rev. Emmanuel Mwanga",
    region: "Dar es Salaam",
    district: "Ilala",
    zone: "Kanda ya Pwani",
    address: "Mtaa wa Kariakoo, Dar es Salaam",
    phone: "+255 22 212 3456",
    email: "dsm@umkkt.org",
  },
  {
    id: "CH-002",
    name: "Kanisa la Kweli Mwanza",
    pastor: "Rev. Thomas Majuto",
    region: "Mwanza",
    district: "Nyamagana",
    zone: "Kanda ya Ziwa",
    address: "Jiwe la Mungu, Mwanza",
    phone: "+255 28 250 7890",
  },
  {
    id: "CH-003",
    name: "Kanisa la Kweli Arusha",
    pastor: "Rev. Sarah Mollel",
    region: "Arusha",
    district: "Arusha Jiji",
    zone: "Kanda ya Kaskazini",
    address: "Sokoni, Arusha",
    phone: "+255 27 254 1234",
  },
  {
    id: "CH-004",
    name: "Kanisa la Kweli Dodoma",
    pastor: "Rev. John Mtera",
    region: "Dodoma",
    district: "Dodoma Jiji",
    zone: "Kanda ya Kati",
    address: "Makole, Dodoma",
    phone: "+255 26 232 5678",
  },
];

// ── Mock Events ───────────────────────────────────────────────
export const events: Event[] = [
  {
    id: "EV-001",
    title: "Mkutano Mkuu wa Mwaka 2025",
    date: "2025-08-15",
    location: "Dar es Salaam",
    description: "Mkutano mkuu wa kila mwaka wa baraza la UMKKT. Viongozi wote wa kitaifa na kanda wanaalikwa.",
    type: "Mkutano",
  },
  {
    id: "EV-002",
    title: "Semina ya Uongozi wa Kanisa",
    date: "2025-06-10",
    location: "Arusha",
    description: "Semina ya siku tatu kuhusu misingi ya uongozi wa kanisa kwa wakuu wa makanisa.",
    type: "Semina",
  },
  {
    id: "EV-003",
    title: "Ibada ya Kutoa Shukrani",
    date: "2025-05-04",
    location: "Mwanza",
    description: "Ibada maalum ya shukrani kwa kumbukumbu ya miaka 25 ya UMKKT.",
    type: "Ibada",
  },
  {
    id: "EV-004",
    title: "Mafunzo ya Biblia — Kanda ya Kusini",
    date: "2025-07-20",
    location: "Mbeya",
    description: "Mafunzo ya kina ya Biblia kwa wahudumu wa makanisa ya kanda ya kusini.",
    type: "Mafunzo",
  },
];

// ── Mock Downloads ────────────────────────────────────────────
export const downloads: Download[] = [
  {
    id: "DL-001",
    title: "Fomu ya Kujiunga na UMKKT",
    description: "Fomu rasmi ya kuomba uanachama wa UMKKT kwa makanisa na watu binafsi.",
    category: "Fomu",
    fileSize: "245 KB",
    fileType: "PDF",
    url: "/downloads/fomu-kujiunga.pdf",
  },
  {
    id: "DL-002",
    title: "Katiba ya UMKKT — Toleo la 2023",
    description: "Katiba kamili na sheria za uendeshaji wa Umoja wa Makanisa ya Kanisa la Kweli Tanzania.",
    category: "Katiba",
    fileSize: "1.2 MB",
    fileType: "PDF",
    url: "/downloads/katiba-2023.pdf",
  },
  {
    id: "DL-003",
    title: "Mwongozo wa Ibada na Desturi",
    description: "Mwongozo rasmi wa jinsi ya kufanya ibada na desturi za kanisa ndani ya UMKKT.",
    category: "Mwongozo",
    fileSize: "890 KB",
    fileType: "PDF",
    url: "/downloads/mwongozo-ibada.pdf",
  },
  {
    id: "DL-004",
    title: "Taarifa ya Mwaka 2024",
    description: "Taarifa kamili ya shughuli za UMKKT kwa mwaka 2024 ikijumuisha fedha na programu.",
    category: "Taarifa",
    fileSize: "3.4 MB",
    fileType: "PDF",
    url: "/downloads/taarifa-2024.pdf",
  },
  {
    id: "DL-005",
    title: "Fomu ya Usajili wa Kanisa",
    description: "Fomu kwa makanisa mapya yanayotaka kujiunga na mfumo wa UMKKT.",
    category: "Fomu",
    fileSize: "180 KB",
    fileType: "PDF",
    url: "/downloads/fomu-kanisa.pdf",
  },
];