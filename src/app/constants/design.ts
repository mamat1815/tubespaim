// Design System Constants untuk PAIM
export const colors = {
    primary: 'indigo',
    primaryLight: 'indigo-50',
    primaryBorder: 'indigo-200',
    primaryText: 'indigo-600',
    primaryDark: 'indigo-700',

    secondary: 'slate',
    secondaryLight: 'slate-50',
    secondaryBorder: 'slate-200',
    secondaryText: 'slate-600',
    secondaryDark: 'slate-800',

    success: 'green',
    warning: 'amber',
    danger: 'red',
    info: 'blue',
};

export const spacing = {
    xs: '0.5',
    sm: '1',
    md: '2',
    lg: '4',
    xl: '6',
    '2xl': '8',
};

export const shadows = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
};

export const radius = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
};

export const typography = {
    h1: 'text-3xl md:text-4xl font-bold',
    h2: 'text-2xl md:text-3xl font-bold',
    h3: 'text-xl font-bold',
    h4: 'text-lg font-semibold',
    body: 'text-base',
    bodySmall: 'text-sm',
    bodyTiny: 'text-xs',
};

// Komponen style presets
export const buttonPrimary = 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors';
export const buttonSecondary = 'bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-4 py-2 rounded-lg transition-colors';
export const buttonDanger = 'bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors';

export const cardBase = 'bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow';
export const cardHighlight = 'bg-indigo-50 border border-indigo-200 rounded-xl shadow-sm';

export const containerBase = 'bg-slate-50 min-h-screen';
export const contentBase = 'ml-64 pt-20 p-6 max-w-7xl';
