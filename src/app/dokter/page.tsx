'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function DokterPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Navbar />
            <Sidebar />

            <main className="ml-64 pt-20 p-6">
                <div className="max-w-7xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-900">Dashboard Dokter</h1>
                        <p className="text-slate-500 text-sm mt-1">Kelola pasien dan resep digital</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-500 text-sm font-medium mb-2">Pasien Menunggu</p>
                                    <p className="text-4xl font-bold text-slate-900">3</p>
                                </div>
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">⏳</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-500 text-sm font-medium mb-2">Resep Hari Ini</p>
                                    <p className="text-4xl font-bold text-slate-900">12</p>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">📝</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-slate-500 text-sm font-medium mb-2">Total Pasien</p>
                                    <p className="text-4xl font-bold text-slate-900">45</p>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">👥</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-900 mb-4">Menu Cepat</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50 transition-colors cursor-pointer">
                                <p className="font-semibold text-slate-900 mb-1">🏥 Workstation Poli</p>
                                <p className="text-sm text-slate-600">Kelola pasien dan buat resep digital</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50 transition-colors cursor-pointer">
                                <p className="font-semibold text-slate-900 mb-1">📋 Riwayat Resep</p>
                                <p className="text-sm text-slate-600">Lihat riwayat resep yang sudah dibuat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
