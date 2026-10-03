const musicStoreEmployees = [
  {
    name: "Marcus Vance",
    age: 42,
    role: "Management",
    salary: 68000,
    startDate: "2018-03-15",
    idCardPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Elena Rostova",
    age: 34,
    role: "Management",
    salary: 52000,
    startDate: "2020-07-01",
    idCardPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Liam O'Connor",
    age: 28,
    role: "Specialist",
    salary: 45000,
    startDate: "2021-05-12",
    idCardPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Maya Lin",
    age: 31,
    role: "Specialist",
    salary: 46000,
    startDate: "2019-11-20",
    idCardPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Dante Ramirez",
    age: 25,
    role: "Specialist",
    salary: 42000,
    startDate: "2022-02-14",
    idCardPhoto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Chloe Dupont",
    age: 29,
    role: "Specialist",
    salary: 44000,
    startDate: "2021-09-08",
    idCardPhoto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Javier Hernandez",
    age: 38,
    role: "Technician",
    salary: 58000,
    startDate: "2017-06-10",
    idCardPhoto: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Zoe Kavanagh",
    age: 24,
    role: "Technician",
    salary: 38000,
    startDate: "2023-01-16",
    idCardPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Samir Patel",
    age: 27,
    role: "Specialist",
    salary: 47000,
    startDate: "2021-04-19",
    idCardPhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Hannah Schmidt",
    age: 33,
    role: "Operations",
    salary: 39000,
    startDate: "2019-08-25",
    idCardPhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Devon Brooks",
    age: 26,
    role: "Sales Associate",
    salary: 36000,
    startDate: "2023-06-01",
    idCardPhoto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Aisha Mohammed",
    age: 22,
    role: "Sales Associate",
    salary: 35000,
    startDate: "2024-01-10",
    idCardPhoto: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Tyler Jenkins",
    age: 30,
    role: "Operations",
    salary: 48000,
    startDate: "2019-04-05",
    idCardPhoto: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Grace Kelly",
    age: 23,
    role: "Operations",
    salary: 34000,
    startDate: "2024-03-22",
    idCardPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Leo Tanaka",
    age: 35,
    role: "Operations",
    salary: 46000,
    startDate: "2020-10-15",
    idCardPhoto: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Nora Ahlstrom",
    age: 40,
    role: "Sales Associate",
    salary: 54000,
    startDate: "2018-09-01",
    idCardPhoto: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Gabriel Santos",
    age: 29,
    role: "Specialist",
    salary: 43000,
    startDate: "2022-07-11",
    idCardPhoto: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Fatima Al-Farsi",
    age: 32,
    role: "Specialist",
    salary: 45000,
    startDate: "2020-01-27",
    idCardPhoto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Caleb Young",
    age: 21,
    role: "Sales Associate",
    salary: 34000,
    startDate: "2024-05-18",
    idCardPhoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Beatrice Moreau",
    age: 45,
    role: "Operations",
    salary: 60000,
    startDate: "2016-11-14",
    idCardPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Mason Wright",
    age: 26,
    role: "Operations",
    salary: 38000,
    startDate: "2022-11-03",
    idCardPhoto: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Sophia Rossi",
    age: 27,
    role: "Technician",
    salary: 49000,
    startDate: "2021-08-16",
    idCardPhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Ethan Cole",
    age: 24,
    role: "Sales Associate",
    salary: 35000,
    startDate: "2023-09-12",
    idCardPhoto: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Lily Chen",
    age: 31,
    role: "Specialist",
    salary: 50000,
    startDate: "2020-05-19",
    idCardPhoto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces"
  },
  {
    name: "Jackson Reed",
    age: 36,
    role: "Specialist",
    salary: 56000,
    startDate: "2018-01-22",
    idCardPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
  }
];

export default musicStoreEmployees