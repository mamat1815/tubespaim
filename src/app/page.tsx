'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Stethoscope, Pill, Package, Activity, Sparkles } from 'lucide-react';

export default function DokterBubungLanding() {
    const router = useRouter();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Animations disabled - all content loaded immediately
    const isLoadedClass = true;

    const roles = [
        {
            id: 'doctor',
            name: 'Dokter',
            description: 'Poliklinik & Resep Digital',
            icon: Stethoscope,
            emoji: '🩺',
            color: 'from-blue-500 to-blue-700',
            hoverColor: 'hover:from-blue-600 hover:to-blue-800',
            path: '/dokter'
        },
        {
            id: 'pharmacist',
            name: 'Apoteker',
            description: 'Verifikasi & Penyerahan Obat',
            icon: Pill,
            emoji: '💊',
            color: 'from-green-500 to-green-700',
            hoverColor: 'hover:from-green-600 hover:to-green-800',
            path: '/apoteker'
        },
        {
            id: 'admin',
            name: 'Logistik',
            description: 'Manajemen Stok & Gudang',
            icon: Package,
            emoji: '📦',
            color: 'from-orange-500 to-orange-700',
            hoverColor: 'hover:from-orange-600 hover:to-orange-800',
            path: '/logistik'
        },
        {
            id: 'public',
            name: 'Layar Antrean',
            description: 'Display Publik Farmasi',
            icon: Activity,
            emoji: '📺',
            color: 'from-purple-500 to-purple-700',
            hoverColor: 'hover:from-purple-600 hover:to-purple-800',
            path: '/antrean'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
            {/* Static Background - No Animations */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                    />
                ))}
            </div>

            {/* Static Gradient Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>

            <div className="relative min-h-screen flex items-center justify-center p-6">
                <div className="max-w-6xl w-full">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-2xl">
                            <Sparkles className="text-yellow-300" size={24} />
                            <span className="text-white font-bold text-sm uppercase tracking-wider">Sistem Informasi Rumah Sakit</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                            RS Islam Indonesia
                        </h1>

                        <p className="text-xl text-indigo-200 max-w-2xl mx-auto leading-relaxed font-light">
                            Platform manajemen rumah sakit terintegrasi untuk efisiensi pelayanan kesehatan
                        </p>
                    </div>

                    {/* Role Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {roles.map((role, index) => (
                            <div
                                key={role.id}
                                onClick={() => router.push(role.path)}
                                className="group relative cursor-pointer"
                            >
                                <div className={`relative bg-gradient-to-br ${role.color} rounded-2xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm`}>

                                    {/* Emoji Icon */}
                                    <div className="text-center mb-6 relative">
                                        <div className="text-7xl mb-4 inline-block">
                                            {role.emoji}
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <role.icon className="text-white/20 absolute" size={80} />
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-black text-white mb-3 text-center">
                                        {role.name}
                                    </h2>

                                    <p className="text-sm text-white/90 text-center font-medium leading-relaxed">
                                        {role.description}
                                    </p>

                                    {/* Arrow */}
                                    <div className="mt-6 flex justify-center">
                                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <span className="text-white text-lg font-bold">→</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-16 text-center">
                        <p className="text-indigo-300 text-sm font-medium">
                            Pilih role untuk memulai
                        </p>
                    </div>
                </div>
            </div>

            {/* CSS Removed - No Animations */}
        </div>
    );
}
