'use client';

import React, { useEffect } from 'react';
import { useHospital } from '../components/DataProvider';
import { Clock, CheckCircle } from 'lucide-react';

export default function AntreanPage() {
    const { prescriptions, switchUser } = useHospital();

    // Switch to public role when entering this page
    useEffect(() => {
        switchUser('public');
    }, [switchUser]);

    const process = prescriptions.filter(p => p.status === 'Process');
    const ready = prescriptions.filter(p => p.status === 'Selesai');

    return (
        <div className="bg-slate-900 min-h-screen p-8 text-white">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold text-white mb-3">RS ISLAM INDONESIA</h1>
                <p className="text-slate-300 text-2xl tracking-widest uppercase font-semibold">Antrean Farmasi</p>
            </div>

            <div className="grid grid-cols-2 gap-8 h-[calc(100vh-200px)]">
                {/* Sedang Disiapkan */}
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-300 mb-8 flex items-center gap-3">
                        <Clock size={32} /> SEDANG DISIAPKAN
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {process.length === 0 ? (
                            <div className="col-span-2 text-center text-slate-400 py-12 text-lg">Tidak ada resep yang sedang diproses</div>
                        ) : (
                            process.map(p => (
                                <div key={p.id} className="bg-blue-900/40 p-6 rounded-xl border border-blue-700/50 hover:border-blue-600 transition-colors">
                                    <div className="text-4xl font-bold text-white mb-2">{p.id}</div>
                                    <div className="text-blue-100 truncate font-semibold text-lg">{p.patient_name}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Siap Diambil */}
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-lg">
                    <h2 className="text-3xl font-bold text-green-300 mb-8 flex items-center gap-3">
                        <CheckCircle size={32} /> SIAP DIAMBIL
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {ready.length === 0 ? (
                            <div className="col-span-2 text-center text-slate-400 py-12 text-lg">Tidak ada resep yang siap</div>
                        ) : (
                            ready.map(p => (
                                <div key={p.id} className="bg-green-900/40 p-6 rounded-xl border border-green-700/50 hover:border-green-600 transition-colors animate-pulse">
                                    <div className="text-4xl font-bold text-white mb-2">{p.id}</div>
                                    <div className="text-green-100 truncate font-semibold text-lg">{p.patient_name}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
