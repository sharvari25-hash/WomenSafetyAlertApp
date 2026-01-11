/**
 * SHEGUARD Storage Manager
 * Handles all LocalStorage operations
 */

const DB_KEYS = {
    USERS: 'sheguard_users',
    CURRENT_USER: 'sheguard_current_user',
    CONTACTS: 'sheguard_contacts',
    ALERTS: 'sheguard_alerts',
    TRAVEL: 'sheguard_travel_sessions',
    REPORTS: 'sheguard_reports',
    THEME: 'sheguard_theme'
};

const Storage = {
    // Generic Get/Set
    get: (key) => JSON.parse(localStorage.getItem(key) || 'null'),
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    
    // User Management
    saveUser: (user) => {
        const users = Storage.get(DB_KEYS.USERS) || [];
        users.push(user);
        Storage.set(DB_KEYS.USERS, users);
    },
    
    loginUser: (email, password) => {
        const users = Storage.get(DB_KEYS.USERS) || [];
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            Storage.set(DB_KEYS.CURRENT_USER, user);
            return user;
        }
        return null;
    },
    
    logout: () => {
        localStorage.removeItem(DB_KEYS.CURRENT_USER);
    },

    getCurrentUser: () => {
        return Storage.get(DB_KEYS.CURRENT_USER);
    },

    // Contacts
    getContacts: () => {
        return Storage.get(DB_KEYS.CONTACTS) || [];
    },
    
    addContact: (contact) => {
        const contacts = Storage.getContacts();
        contacts.push(contact);
        Storage.set(DB_KEYS.CONTACTS, contacts);
    },
    
    removeContact: (phone) => {
        let contacts = Storage.getContacts();
        contacts = contacts.filter(c => c.phone !== phone);
        Storage.set(DB_KEYS.CONTACTS, contacts);
    },

    // Alerts/History
    logAlert: (alert) => {
        const alerts = Storage.get(DB_KEYS.ALERTS) || [];
        alerts.unshift(alert); // Add to beginning
        Storage.set(DB_KEYS.ALERTS, alerts);
    },

    getAlerts: () => {
        return Storage.get(DB_KEYS.ALERTS) || [];
    },

    // Reports
    saveReport: (report) => {
        const reports = Storage.get(DB_KEYS.REPORTS) || [];
        reports.unshift(report);
        Storage.set(DB_KEYS.REPORTS, reports);
    },
    
    getReports: () => {
        return Storage.get(DB_KEYS.REPORTS) || [];
    }
};

// Initialize default mock data if empty
if (!localStorage.getItem(DB_KEYS.CONTACTS)) {
    Storage.set(DB_KEYS.CONTACTS, [
        { name: "Mom", phone: "9876543210", isPrimary: true },
        { name: "Dad", phone: "9876543211", isPrimary: false }
    ]);
}
