'use client';

import React, { useState } from 'react';
import { useHospital } from './DataProvider';
import { useRouter, usePathname } from 'next/navigation';
import { User, Bell, Menu, LogOut, Home } from 'lucide-react';

export default function Navbar() {
    const { currentUser, switchUser } = useHospital();
    const router = useRouter();
    const pathname = usePathname();
    const [showProfile, setShowProfile] = useState(false);

    const roleNames = {
        doctor: 'Dokter',
        pharmacist: 'Apoteker',
        admin: 'Logistik',
        public: 'Layar Antrean'
    };

    const handleRoleSwitch = (role: 'doctor' | 'pharmacist' | 'admin' | 'public') => {
        switchUser(role);
        const routes = {
            doctor: '/dokter',
            pharmacist: '/apoteker',
            admin: '/logistik',
            public: '/antrean'
        };
        router.push(routes[role]);
        setShowProfile(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 shadow-sm z-40">
            <div className="h-full px-6 flex items-center justify-between">
                {/* Left: Brand */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">RS</span>
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-slate-800 font-bold text-sm">RS Islam Indonesia</h1>
                        <p className="text-slate-500 text-xs">Sistem Informasi Rumah Sakit</p>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4">
                    {/* Back to Menu */}
                    {!pathname.includes('/antrean') && pathname !== '/' && (
                        <button
                            onClick={() => router.push('/')}
                            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors flex items-center gap-2 font-medium text-sm"
                        >
                            <Home size={18} />
                            Menu
                        </button>
                    )}

                    {/* Notification Bell */}
                    <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <Bell size={20} />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                            3
                        </span>
                    </button>

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowProfile(!showProfile)}
                            className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                <User size={18} className="text-white" />
                            </div>
                            <div className="text-left hidden sm:block">
                                <p className="text-slate-800 font-semibold text-sm">{currentUser.name.split(' ')[0]}</p>
                            </div>
                        </button>

                        {showProfile && (
                            <div className="absolute right-0 top-full mt-2 w-60 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                                {/* Profile Header */}
                                <div className="bg-indigo-600 p-4 text-white">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                            <User size={24} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">{currentUser.name}</p>
                                            <p className="text-xs text-indigo-100">{roleNames[currentUser.role]}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Role Switcher */}
                                <div className="p-3 border-t border-slate-200">
                                    <p className="text-xs font-semibold text-slate-500 mb-2 px-2">GANTI ROLE</p>
                                    {currentUser.role !== 'doctor' && (
                                        <button
                                            onClick={() => handleRoleSwitch('doctor')}
                                            className="w-full text-left px-3 py-2 hover:bg-slate-100 rounded-lg text-sm font-medium text-slate-700 transition-colors"
                                        >
                                            🩺 Dokter
                                        </button>
                                    )}
                                    {currentUser.role !== 'pharmacist' && (
                                        <button
                                            onClick={() => handleRoleSwitch('pharmacist')}
                                            className="w-full text-left px-3 py-2 hover:bg-slate-100 rounded-lg text-sm font-medium text-slate-700 transition-colors"
                                        >
                                            💊 Apoteker
                                        </button>
                                    )}
                                    {currentUser.role !== 'admin' && (
                                        <button
                                            onClick={() => handleRoleSwitch('admin')}
                                            className="w-full text-left px-3 py-2 hover:bg-slate-100 rounded-lg text-sm font-medium text-slate-700 transition-colors"
                                        >
                                            📦 Logistik
                                        </button>
                                    )}
                                    {currentUser.role !== 'public' && (
                                        <button
                                            onClick={() => handleRoleSwitch('public')}
                                            className="w-full text-left px-3 py-2 hover:bg-slate-100 rounded-lg text-sm font-medium text-slate-700 transition-colors"
                                        >
                                            📺 Layar Antrean
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
