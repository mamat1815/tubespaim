'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useHospital } from '../components/DataProvider';

export default function ApotekerPage() {
    const { prescriptions } = useHospital();

    const pending = prescriptions.filter(p => p.status === 'Pending').length;
    const process = prescriptions.filter(p => p.status === 'Process').length;
    const completed = prescriptions.filter(p => p.status === 'Selesai').length;

    return (
        <div className="bg-slate-50 min-h-screen">
            <Navbar />
            <Sidebar />

            <main className="ml-64 pt-20 p-6">
                <div className="max-w-7xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-900">Dashboard Farmasi</h1>
                        <p className="text-slate-500 text-sm mt-1">Kelola verifikasi dan penyerahan obat</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-500 text-sm font-medium mb-2">Menunggu Verifikasi</p>
                                    <p className="text-4xl font-bold text-slate-900">{pending}</p>
                                </div>
                                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">📋</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-500 text-sm font-medium mb-2">Sedang Diracik</p>
                                    <p className="text-4xl font-bold text-slate-900">{process}</p>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">🧪</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-500 text-sm font-medium mb-2">Siap Diambil</p>
                                    <p className="text-4xl font-bold text-slate-900">{completed}</p>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">✓</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-900 mb-4">Menu Cepat</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50 transition-colors cursor-pointer">
                                <p className="font-semibold text-slate-900 mb-1">📋 Verifikasi & Racik</p>
                                <p className="text-sm text-slate-600">Verifikasi resep dan proses peracikan obat</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50 transition-colors cursor-pointer">
                                <p className="font-semibold text-slate-900 mb-1">📦 Penyerahan Obat</p>
                                <p className="text-sm text-slate-600">Kelola penyerahan obat ke pasien</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
