'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { LayoutDashboard, Stethoscope, History, ClipboardList, CheckCircle, Package, FileText, Settings } from 'lucide-react';
import { useHospital } from './DataProvider';
import { MenuItem } from '../types';
import { UserRole } from '../types';

export default function Sidebar() {
    const { currentUser, switchUser } = useHospital();
    const router = useRouter();
    const pathname = usePathname();

    // Detect role from URL and sync with context
    useEffect(() => {
        if (!pathname) return;

        let roleFromUrl: UserRole | null = null;

        if (pathname.includes('/dokter')) {
            roleFromUrl = 'doctor';
        } else if (pathname.includes('/apoteker')) {
            roleFromUrl = 'pharmacist';
        } else if (pathname.includes('/logistik')) {
            roleFromUrl = 'admin';
        } else if (pathname.includes('/antrean')) {
            roleFromUrl = 'public';
        }

        // Sync context with URL if mismatch
        if (roleFromUrl && currentUser.role !== roleFromUrl) {
            switchUser(roleFromUrl);
        }
    }, [pathname, currentUser.role, switchUser]);

    // Get base path based on role (NOT from current pathname!)
    const getBasePath = (): string => {
        switch (currentUser.role) {
            case 'doctor': return '/dokter';
            case 'pharmacist': return '/apoteker';
            case 'admin': return '/logistik';
            default: return '';
        }
    };

    const getMenus = (): MenuItem[] => {
        switch (currentUser.role) {
            case 'doctor':
                return [
                    { id: '', label: 'Dashboard Dokter', icon: LayoutDashboard },
                    { id: '/workstation', label: 'Workstation Poli', icon: Stethoscope },
                    { id: '/history', label: 'Riwayat Resep', icon: History },
                ];
            case 'pharmacist':
                return [
                    { id: '', label: 'Dashboard Farmasi', icon: LayoutDashboard },
                    { id: '/verification', label: 'Verifikasi & Racik', icon: ClipboardList },
                    { id: '/pickup', label: 'Penyerahan Obat', icon: CheckCircle },
                ];
            case 'admin':
                return [
                    { id: '', label: 'Dashboard Gudang', icon: LayoutDashboard },
                    { id: '/inventory', label: 'Stok Obat', icon: Package },
                    { id: '/logs', label: 'Laporan Mutasi', icon: FileText },
                ];
            default:
                return [];
        }
    };

    const menus = getMenus();
    const basePath = getBasePath();

    return (
        <aside className="w-64 bg-white border-r border-slate-200 fixed left-0 top-16 bottom-0 overflow-y-auto">
            <div className="p-4">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-3">Menu</p>
                <div className="space-y-1">
                    {menus.map((menu) => {
                        const Icon = menu.icon;
                        const fullPath = basePath + menu.id;
                        const isActive = pathname === fullPath;

                        return (
                            <button
                                key={menu.id}
                                onClick={() => router.push(fullPath)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? 'bg-indigo-100 text-indigo-700'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                            >
                                <Icon size={18} />
                                {menu.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="absolute bottom-0 w-full p-4 border-t border-slate-200 bg-white">
                <button className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 w-full px-3 py-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Settings size={18} /> Pengaturan
                </button>
            </div>
        </aside>
    );
}
