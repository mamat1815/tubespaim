// TypeScript type definitions untuk DokterBubung Hospital Management System

export interface Medicine {
    id: string;
    medicine_name: string;
    type: string;
    stock: number;
    price: number;
    expiry: string;
    location: string;
}

export interface PrescriptionItem {
    medicineId: string;
    name: string;
    qty: number;
    price: number;
    signa: string;
}

export interface HistoryLog {
    status: string;
    time: string;
    note: string;
}

export interface Prescription {
    id: string;
    patient_name: string;
    patient_dob: string;
    allergies: string;
    doctor_name: string;
    date: string;
    status: string;
    total_price: number;
    items: PrescriptionItem[];
    created_at?: string;
    updated_at?: string;
}

export interface Patient {
    id: string;
    name: string;
    dob: string;
    status: string;
    allergies: string;
}

export interface Log {
    id: number;
    date: string;
    type: string;
    medicine_name: string;
    qty: number;
    ref: string;
    pic: string;
}

export type UserRole = 'doctor' | 'pharmacist' | 'admin' | 'public';

export interface User {
    name: string;
    role: UserRole;
}

export interface MenuItem {
    id: string;
    label: string;
    icon: React.ComponentType<{ size?: number }>;
}

// Context types
export interface HospitalContextType {
    medicines: Medicine[];
    prescriptions: Prescription[];
    patients: Patient[];
    logs: Log[];
    currentUser: User;

    // Actions
    addMedicine: (medicine: Omit<Medicine, 'id'>) => Promise<void>;
    updateMedicineStock: (id: string, amount: number) => Promise<void>;

    createPrescription: (data: {
        patient_name: string;
        patient_dob: string;
        allergies: string;
        doctor_name: string;
        items: Array<{
            medicineId: string;
            name: string;
            qty: number;
            price: number;
            signa: string;
        }>;
    }) => Promise<void>;
    updatePrescriptionStatus: (id: string, status: string) => Promise<void>;

    addPatient: (patient: Omit<Patient, 'id' | 'status'>) => Promise<void>;
    removePatient: (id: string) => Promise<void>;

    addLog: (log: Omit<Log, 'id'>) => void;

    switchUser: (role: UserRole) => void;
}
