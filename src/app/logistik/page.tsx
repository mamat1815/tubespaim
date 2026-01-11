'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useHospital } from '../components/DataProvider';
import { AlertTriangle } from 'lucide-react';

export default function LogistikPage() {
    const { medicines } = useHospital();
    const lowStock = medicines.filter(m => m.stock < 10).length;

    return (
        <div className="bg-slate-50 min-h-screen">
            <Navbar />
            <Sidebar />

            <main className="ml-64 pt-20 p-6">
                <div className="max-w-7xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-900">Dashboard Logistik</h1>
                        <p className="text-slate-500 text-sm mt-1">Kelola inventori dan stok obat</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-500 text-sm font-medium mb-2">Stok Kritis</p>
                                    <p className="text-4xl font-bold text-slate-900">{lowStock}</p>
                                </div>
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">⚠️</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-500 text-sm font-medium mb-2">Total Obat</p>
                                    <p className="text-4xl font-bold text-slate-900">{medicines.length}</p>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">💊</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-500 text-sm font-medium mb-2">Mutasi Hari Ini</p>
                                    <p className="text-4xl font-bold text-slate-900">5</p>
                                </div>
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">📊</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-900 mb-4">Menu Cepat</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50 transition-colors cursor-pointer">
                                <p className="font-semibold text-slate-900 mb-1">📦 Stok Obat</p>
                                <p className="text-sm text-slate-600">Kelola inventori dan restock obat</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50 transition-colors cursor-pointer">
                                <p className="font-semibold text-slate-900 mb-1">📋 Laporan Mutasi</p>
                                <p className="text-sm text-slate-600">Lihat history mutasi stok</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
