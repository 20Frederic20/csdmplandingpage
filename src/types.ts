export interface Patient {
  id: string;
  name: string;
  age: number;
  bloodType: string;
  allergies: string[];
  lastVisit: string;
  status: 'Stable' | 'Critical' | 'Observation';
  records: MedicalRecord[];
}

export interface MedicalRecord {
  id: string;
  date: string;
  type: 'Consultation' | 'Analysis' | 'Surgery';
  doctor: string;
  notes: string;
  results?: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  department: string;
  status: 'Active' | 'On Leave' | 'Off Duty';
}

export const MOCK_PATIENTS: Patient[] = [
  {
    id: 'P-1024',
    name: 'Jean Dupont',
    age: 45,
    bloodType: 'A+',
    allergies: ['Pénicilline'],
    lastVisit: '2024-03-15',
    status: 'Stable',
    records: [
      { id: 'R-1', date: '2024-03-15', type: 'Consultation', doctor: 'Dr. Sarah Kone', notes: 'Suivi post-opératoire normal.' },
      { id: 'R-2', date: '2024-02-10', type: 'Analysis', doctor: 'Lab Central', notes: 'Analyse de routine.', results: 'Hémoglobine stable à 14g/dL' }
    ]
  },
  {
    id: 'P-1025',
    name: 'Amina Traoré',
    age: 28,
    bloodType: 'O-',
    allergies: [],
    lastVisit: '2024-03-17',
    status: 'Observation',
    records: [
      { id: 'R-3', date: '2024-03-17', type: 'Consultation', doctor: 'Dr. Marc Evans', notes: 'Bilan annuel.' }
    ]
  }
];

export const MOCK_STAFF: Staff[] = [
  { id: 'S-001', name: 'Dr. Sarah Kone', role: 'Chirurgien', department: 'Cardiologie', status: 'Active' },
  { id: 'S-002', name: 'Dr. Marc Evans', role: 'Généraliste', department: 'Urgences', status: 'Active' },
  { id: 'S-003', name: 'Marie Curie', role: 'Infirmière Chef', department: 'Pédiatrie', status: 'On Leave' }
];
