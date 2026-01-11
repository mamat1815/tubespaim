'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { useHospital } from '../../components/DataProvider';
import { Package, CheckCircle } from 'lucide-react';

export default function ApotekerPickupPage() {
    const { prescriptions, updatePrescriptionStatus } = useHospital();
    const processPrescriptions = prescriptions.filter(p => p.status === 'Process');

    const handleFinish = async (id: string) => {
        if (confirm('Konfirmasi obat sudah diserahkan ke pasien?')) {
            try {
                await updatePrescriptionStatus(id, 'Selesai');
                alert('Transaksi selesai');
            } catch (error) {
                alert('Gagal menyelesaikan transaksi');
            }
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <Navbar />
            <Sidebar />

            <main className="ml-64 pt-20 p-6">
                <div className="max-w-7xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-900">Penyerahan Obat</h1>
                        <p className="text-slate-500 text-sm mt-1">Serahkan obat ke pasien dan konfirmasi</p>
                    </div>

                    {/* Prescriptions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {processPrescriptions.length === 0 ? (
                            <div className="col-span-2 bg-white rounded-xl p-12 text-center border border-slate-200 shadow-sm">
                                <div className="text-slate-300 mb-4 flex justify-center"><Package size={48} /></div>
                                <p className="text-slate-500 font-medium">Tidak ada resep yang sedang diracik</p>
                            </div>
                        ) : (
                            processPrescriptions.map(p => (
                                <div key={p.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                                    {/* Header */}
                                    <div className="p-6 bg-blue-50 border-b border-slate-200">
                                        <div className="font-mono text-3xl font-bold text-blue-700 mb-2">{p.id}</div>
                                        <div className="text-lg font-semibold text-slate-900">{p.patient_name}</div>
                                        <div className="text-sm text-slate-500 mt-1">Tanggal: {p.date}</div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Items List */}
                                        <div className="mb-6">
                                            <h3 className="font-semibold text-slate-900 mb-3 text-sm">Daftar Obat:</h3>
                                            <div className="space-y-2 bg-slate-50 rounded-lg p-3">
                                                {p.items?.map((item, idx) => (
                                                    <div key={idx} className="flex justify-between items-center text-sm">
                                                        <div className="text-slate-700 font-medium">{item.name}</div>
                                                        <div className="text-slate-600 bg-white px-2 py-1 rounded text-xs">{item.qty}x</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <button
                                            onClick={() => handleFinish(p.id)}
                                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm hover:shadow-md"
                                        >
                                            <CheckCircle size={20} />
                                            Selesai & Serahkan
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
