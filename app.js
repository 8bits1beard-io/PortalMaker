// Default values
const APP_VERSION = '1.2.0';
const DEFAULTS = {
    theme: 'monochrome',
    customColors: { primary: '#0053E2', accent: '#FFC220' },
    colorOverrides: {},
    pageTitle: 'Quick Links',
    greeting: '',
    greetingFontSize: '3',      // rem
    greetingSpacing: '2.5',     // rem
    topLogoWidth: '360',        // px
    topLogoSpacing: '1.5',      // rem
    computerNamePosition: 'top-right',
    networkIdentifierPosition: 'top-left',
    networkIdentifierDisplay: 'site',
    networkIdentifierPattern: '.*s0(\\d{4})\\.(\\w+)\\..*',
    networkIdentifierFallback: 'Unknown',
    dateTimeFormat: 'both',
    dateTimePosition: 'top-left',
    sideLogoPosition: 'left',
    autoRefreshDelay: '30',
    destinationPath: 'C:\\ProgramData\\LandingPage\\index.html',
    scriptName: 'MyLandingPage',
    // Link layout options
    linkLayout: 'cards',
    buttonStyle: 'rounded',
    buttonSize: 'medium',
    gridColumns: '3',
    // Announcement banner
    bannerEnabled: false,
    bannerTitle: '',
    bannerMessage: '',
    bannerStyle: 'info',
    // Popup window settings
    openLinksInPopup: false,
    popupWidth: '1200',
    popupHeight: '800',
    popupAutoClose: false,
    popupAutoCloseDelay: '300'
};

// Banner style colors
const BANNER_STYLES = {
    info: { bg: '#dbeafe', border: '#3b82f6', text: '#1e40af' },
    warning: { bg: '#fef3c7', border: '#f59e0b', text: '#92400e' },
    urgent: { bg: '#fee2e2', border: '#ef4444', text: '#991b1b' }
};

const TEMPLATES = {
    customerFacing: {
        name: 'Customer Facing Kiosk',
        scriptName: 'CustomerFacingKiosk',
        config: {
            settings: {
                pageTitle: 'Customer Kiosk',
                greeting: 'Welcome',
                showComputerName: false,
                computerNamePosition: 'top-right',
                showDateTime: true,
                dateTimeFormat: 'both',
                dateTimePosition: 'footer',
                topLogoUrl: '',
                sideLogoUrl: '',
                sideLogoPosition: 'left',
                showFooter: false,
                footerText: 'Need help? Visit the service desk or call 555-0100.',
                enableAutoRefresh: false,
                autoRefreshDelay: '30',
                autoRefreshUrl: ''
            },
            theme: {
                selectedTheme: 'ocean',
                customColors: null
            },
            groups: [
                {
                    name: 'Start Here',
                    links: [
                        { name: 'Store Map', url: 'https://example.com/map' },
                        { name: 'Deals', url: 'https://example.com/deals' },
                        { name: 'Events', url: 'https://example.com/events' }
                    ]
                },
                {
                    name: 'Services',
                    links: [
                        { name: 'Customer Support', url: 'https://example.com/support' },
                        { name: 'Returns', url: 'https://example.com/returns' },
                        { name: 'Order Status', url: 'https://example.com/orders' }
                    ]
                },
                {
                    name: 'Guest Access',
                    links: [
                        { name: 'Wi-Fi Setup', url: 'https://example.com/wifi' },
                        { name: 'Accessibility', url: 'https://example.com/accessibility' }
                    ]
                }
            ],
            ungroupedLinks: [
                { name: 'Hours & Locations', url: 'https://example.com/locations' },
                { name: 'Share Feedback', url: 'https://example.com/feedback' }
            ]
        }
    },
    employeeKiosk: {
        name: 'Employee Kiosk',
        scriptName: 'EmployeeKiosk',
        config: {
            settings: {
                pageTitle: 'Employee Kiosk',
                greeting: 'Hello Team',
                showComputerName: true,
                computerNamePosition: 'top-right',
                showDateTime: true,
                dateTimeFormat: 'both',
                dateTimePosition: 'top-left',
                topLogoUrl: '',
                sideLogoUrl: '',
                sideLogoPosition: 'left',
                showFooter: true,
                footerText: 'Security note: sign out when finished.',
                enableAutoRefresh: false,
                autoRefreshDelay: '30',
                autoRefreshUrl: ''
            },
            theme: {
                selectedTheme: 'corporate',
                customColors: null
            },
            groups: [
                {
                    name: 'HR & Benefits',
                    links: [
                        { name: 'Pay Statements', url: 'https://intranet.example.com/pay' },
                        { name: 'Benefits', url: 'https://intranet.example.com/benefits' },
                        { name: 'Time Off', url: 'https://intranet.example.com/timeoff' }
                    ]
                },
                {
                    name: 'IT Support',
                    links: [
                        { name: 'Service Desk', url: 'https://intranet.example.com/it' },
                        { name: 'Password Reset', url: 'https://intranet.example.com/password' }
                    ]
                },
                {
                    name: 'Operations',
                    links: [
                        { name: 'Shift Schedule', url: 'https://intranet.example.com/schedule' },
                        { name: 'SOP Library', url: 'https://intranet.example.com/sop' },
                        { name: 'Incident Report', url: 'https://intranet.example.com/incident' }
                    ]
                },
                {
                    name: 'Training',
                    links: [
                        { name: 'Learning Portal', url: 'https://intranet.example.com/training' },
                        { name: 'Compliance', url: 'https://intranet.example.com/compliance' }
                    ]
                }
            ],
            ungroupedLinks: [
                { name: 'Company News', url: 'https://intranet.example.com/news' },
                { name: 'All Hands Stream', url: 'https://intranet.example.com/stream' }
            ]
        }
    }
};


// Icon Library - inline SVGs for icon picker
const ICON_LIBRARY = {
    ui: {
        name: 'UI Icons',
        icons: {
            home: { name: 'Home', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>' },
            settings: { name: 'Settings', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>' },
            mail: { name: 'Mail', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>' },
            calendar: { name: 'Calendar', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/></svg>' },
            folder: { name: 'Folder', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>' },
            link: { name: 'Link', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>' },
            search: { name: 'Search', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>' },
            phone: { name: 'Phone', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>' },
            user: { name: 'User', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>' },
            users: { name: 'Users', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>' },
            download: { name: 'Download', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>' },
            upload: { name: 'Upload', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"/></svg>' },
            print: { name: 'Print', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>' },
            help: { name: 'Help', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>' },
            info: { name: 'Info', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>' },
            warning: { name: 'Warning', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>' },
            lock: { name: 'Lock', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>' },
            globe: { name: 'Globe', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>' },
            star: { name: 'Star', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>' },
            clock: { name: 'Clock', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>' },
            check: { name: 'Checkmark', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>' },
            close: { name: 'Close', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>' }
        }
    },
    microsoft: {
        name: 'Microsoft Apps',
        icons: {
            word: { name: 'Word', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2B579A"><path d="M21.17 3H7.83A.83.83 0 0 0 7 3.83V9l7.5 3L22 9V3.83a.83.83 0 0 0-.83-.83zM22 10l-7.5 3L7 10v5l7.5 3 7.5-3v-5zM7 16l7.5 3 7.5-3v4.17a.83.83 0 0 1-.83.83H7.83A.83.83 0 0 1 7 20.17V16zM2 5v14l6-2V7L2 5z"/></svg>' },
            excel: { name: 'Excel', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#217346"><path d="M21.17 3H7.83A.83.83 0 0 0 7 3.83V9h15V3.83a.83.83 0 0 0-.83-.83zM22 10H7v4h15v-4zM7 15v5.17c0 .46.37.83.83.83h13.34c.46 0 .83-.37.83-.83V15H7zM2 5v14l6-2V7L2 5zm3.5 8.5L4 11h1l.75 1.5L6.5 11h1l-1.5 2.5L7.5 16h-1l-.75-1.5L5 16H4l1.5-2.5z"/></svg>' },
            powerpoint: { name: 'PowerPoint', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D24726"><path d="M21.17 3H7.83A.83.83 0 0 0 7 3.83V9h15V3.83a.83.83 0 0 0-.83-.83zM22 10H7v4h15v-4zM7 15v5.17c0 .46.37.83.83.83h13.34c.46 0 .83-.37.83-.83V15H7zM2 5v14l6-2V7L2 5zm3 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>' },
            outlook: { name: 'Outlook', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0078D4"><path d="M22 6v12c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1.5 1.5L15 12l-5.5-4.5v-1L15 11l5.5-4.5v1zM2 5v14l6-2V7L2 5zm3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>' },
            teams: { name: 'Teams', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6264A7"><path d="M20 8h-3V6a2 2 0 0 0-2-2h-1a3 3 0 1 0-4 0H9a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zM12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM9 8h6v1H9V8zm10 10H5v-6h14v6z"/></svg>' },
            onenote: { name: 'OneNote', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7719AA"><path d="M21.17 3H7.83A.83.83 0 0 0 7 3.83v16.34c0 .46.37.83.83.83h13.34c.46 0 .83-.37.83-.83V3.83a.83.83 0 0 0-.83-.83zM2 5v14l6-2V7L2 5zm3 3h1v4l2-3h1v6H8v-4l-2 3H5V8z"/></svg>' },
            onedrive: { name: 'OneDrive', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0078D4"><path d="M19 11c0-.34-.03-.67-.08-1H19a5 5 0 0 0-9.18-2.72A4.5 4.5 0 0 0 5 11.5V12H4.5a3.5 3.5 0 0 0 0 7H19a4 4 0 0 0 0-8z"/></svg>' },
            sharepoint: { name: 'SharePoint', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#038387"><path d="M12 2a5 5 0 0 1 5 5 5 5 0 0 1-1.06 3.06 4 4 0 1 1-5.44 5.84A5 5 0 0 1 7 12a4.5 4.5 0 1 1 5-7zM2 5v14l6-2V7L2 5z"/></svg>' }
        }
    },
    browsers: {
        name: 'Browsers',
        icons: {
            edge: { name: 'Edge', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0078D7"><path d="M21 12a9 9 0 0 1-9 9c-2.39 0-4.68-.94-6.36-2.64C4.27 17 3.5 15.08 3.5 13c0-2.65 1.11-5.18 3.07-7C8.77 4.14 11.57 3 14.5 3 18.09 3 21 5.91 21 9.5V12zm-9 7a7 7 0 0 0 7-7V9.5A5.5 5.5 0 0 0 13.5 4C11.17 4 9 5.04 7.54 6.79A7.46 7.46 0 0 0 5.5 13c0 1.52.57 3 1.64 4.17A7.022 7.022 0 0 0 12 19z"/></svg>' },
            chrome: { name: 'Chrome', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="#fff"/><path fill="#4285F4" d="M12 8a4 4 0 0 1 3.93 4.76l5.86-3.39A9.97 9.97 0 0 0 12 2v6z"/><path fill="#34A853" d="M8.07 12.24A4 4 0 0 1 12 8V2a10 10 0 0 0-8.66 15l5.65-3.27a4 4 0 0 1-.92-1.49z"/><path fill="#FBBC05" d="M12 16a4 4 0 0 1-3.93-4.76l-5.65 3.27A10 10 0 0 0 12 22a9.97 9.97 0 0 0 6.79-2.63l-5.86-3.39c-.29.02-.62.02-.93.02z"/><path fill="#EA4335" d="M15.93 12.24c.04-.08.07-.16.07-.24a4 4 0 0 0-.07-.76l5.86-3.39a9.93 9.93 0 0 1 0 8.78l-5.86-3.39c0-.34 0-.66 0-1z"/></svg>' },
            firefox: { name: 'Firefox', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF7139"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-2.52 1.17-4.77 3-6.24V10c0 2.21 1.79 4 4 4h2c.55 0 1 .45 1 1v2c0 1.1.9 2 2 2h1.17c-.98 2.36-3.3 4-6.17 4z"/></svg>' }
        }
    },
    tools: {
        name: 'System Tools',
        icons: {
            terminal: { name: 'Terminal', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-8-2h6v-2h-6v2zM6.5 13.5l3-3-3-3L5 9l1.5 1.5L5 12l1.5 1.5z"/></svg>' },
            calculator: { name: 'Calculator', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm-8 8H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2z"/></svg>' },
            notepad: { name: 'Notepad', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>' },
            explorer: { name: 'File Explorer', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z"/></svg>' },
            controlPanel: { name: 'Control Panel', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9A1.5 1.5 0 1 1 8 10.5 1.5 1.5 0 0 1 6.5 9zm3.5 6.5A1.5 1.5 0 1 1 11.5 14 1.5 1.5 0 0 1 10 15.5zm2-4A1.5 1.5 0 1 1 13.5 10 1.5 1.5 0 0 1 12 11.5zm4.5 4A1.5 1.5 0 1 1 18 14a1.5 1.5 0 0 1-1.5 1.5zm0-6A1.5 1.5 0 1 1 18 8a1.5 1.5 0 0 1-1.5 1.5z"/></svg>' },
            remote: { name: 'Remote Desktop', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/></svg>' },
            keyboard: { name: 'Keyboard', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-3 0h2v2H5v-2zm0-3h2v2H5V8zm11 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/></svg>' },
            volume: { name: 'Volume', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>' }
        }
    }
};

// State variables for icon picker
let iconPickerTarget = null;
let iconPickerTriggerElement = null;

// State management
let groups = [];
let ungroupedLinks = [];
let groupIdCounter = 0;
let linkIdCounter = 0;
let saveIndicatorTimeout = null;
let debounceTimer = null;
let modalTriggerElement = null;

// Debounced update preview for input events
function debouncedUpdatePreview() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(updatePreview, 150);
}

// Update slider value display
function updateSliderValue(slider) {
    const valueSpan = document.getElementById(slider.id + 'Value');
    if (valueSpan) {
        const unit = slider.id.includes('Width') ? 'px' : 'rem';
        valueSpan.textContent = slider.value + unit;
    }
}

// Tab switching
function switchTab(tabName) {
    // Update step buttons
    document.querySelectorAll('.step-btn').forEach(btn => {
        const isActive = btn.getAttribute('aria-controls') === 'tab-' + tabName;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive);
        btn.setAttribute('tabindex', isActive ? '0' : '-1');
    });
    // Update panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === 'tab-' + tabName);
    });
}

// Arrow key navigation for tabs
function handleTabKeydown(event) {
    const tabs = ['page', 'theme', 'links', 'export'];
    const currentTab = event.target.getAttribute('aria-controls').replace('tab-', '');
    const currentIndex = tabs.indexOf(currentTab);
    let newIndex;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        newIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
        event.preventDefault();
        newIndex = 0;
    } else if (event.key === 'End') {
        event.preventDefault();
        newIndex = tabs.length - 1;
    } else {
        return;
    }

    switchTab(tabs[newIndex]);
    document.querySelector(`[aria-controls="tab-${tabs[newIndex]}"]`).focus();
}

// Validate that no two elements share the same corner position
function validatePositions() {
    const positions = [];
    const warnings = {
        computerName: document.getElementById('computerNamePositionWarning'),
        dateTime: document.getElementById('dateTimePositionWarning'),
        sideLogo: document.getElementById('sideLogoPositionWarning'),
        networkIdentifier: document.getElementById('networkIdentifierPositionWarning')
    };

    // Hide all warnings initially
    Object.values(warnings).forEach(w => { if (w) w.style.display = 'none'; });

    // Collect active corner positions (not 'left', 'right', or 'footer')
    const cornerPositions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];

    // Check computer name position
    const showComputerName = document.getElementById('showComputerName').checked;
    const computerNamePos = document.getElementById('computerNamePosition').value;
    if (showComputerName && cornerPositions.includes(computerNamePos)) {
        positions.push({ element: 'computerName', position: computerNamePos });
    }

    // Check date/time position
    const showNetworkIdentifier = document.getElementById('showNetworkIdentifier').checked;
    const networkIdentifierPosition = document.getElementById('networkIdentifierPosition').value;
    const networkIdentifierDisplay = document.getElementById('networkIdentifierDisplay').value;
    const networkIdentifierPattern = document.getElementById('networkIdentifierPattern').value.trim()
        || DEFAULTS.networkIdentifierPattern;
    const networkIdentifierFallback = document.getElementById('networkIdentifierFallback').value.trim()
        || DEFAULTS.networkIdentifierFallback;
    const showDateTime = document.getElementById('showDateTime').checked;
    const dateTimePos = document.getElementById('dateTimePosition').value;
    if (showDateTime && cornerPositions.includes(dateTimePos)) {
        positions.push({ element: 'dateTime', position: dateTimePos });
    }

    // Check network identifier position
    if (showNetworkIdentifier && cornerPositions.includes(networkIdentifierPosition)) {
        positions.push({ element: 'networkIdentifier', position: networkIdentifierPosition });
    }

    // Check side logo position
    const sideLogoUrl = document.getElementById('sideLogoUrl').value;
    const sideLogoPos = document.getElementById('sideLogoPosition').value;
    if (sideLogoUrl && cornerPositions.includes(sideLogoPos)) {
        positions.push({ element: 'sideLogo', position: sideLogoPos });
    }

    // Find conflicts
    const positionCounts = {};
    positions.forEach(p => {
        positionCounts[p.position] = positionCounts[p.position] || [];
        positionCounts[p.position].push(p.element);
    });

    // Show warnings for conflicts
    let hasConflicts = false;
    Object.entries(positionCounts).forEach(([pos, elements]) => {
        if (elements.length > 1) {
            hasConflicts = true;
            elements.forEach(el => {
                if (warnings[el]) warnings[el].style.display = 'block';
            });
        }
    });

    return !hasConflicts;
}

// Theme presets (all WCAG AA verified)
const themes = {
    walmart: { name: 'Walmart', primary: '#0053E2', accent: '#FFC220' },
    sunset: { name: 'Sunset', primary: '#9a3412', accent: '#fbbf24' },
    violet: { name: 'Violet', primary: '#5b21b6', accent: '#c4b5fd' },
    slate: { name: 'Slate', primary: '#1e293b', accent: '#f59e0b' },
    forest: { name: 'Forest', primary: '#166534', accent: '#fbbf24' },
    ocean: { name: 'Ocean', primary: '#0369a1', accent: '#06b6d4' },
    crimson: { name: 'Crimson', primary: '#991b1b', accent: '#fbbf24' },
    monochrome: { name: 'Monochrome', primary: '#171717', accent: '#a3a3a3' },
    berry: { name: 'Berry', primary: '#831843', accent: '#f9a8d4' },
    midnight: { name: 'Midnight', primary: '#312e81', accent: '#fcd34d' },
    teal: { name: 'Teal', primary: '#115e59', accent: '#fb923c' },
    coffee: { name: 'Coffee', primary: '#78350f', accent: '#fef3c7' },
    steel: { name: 'Steel', primary: '#475569', accent: '#a3e635' },
    winter: { name: 'Winter', primary: '#1e40af', accent: '#bfdbfe' },
    spring: { name: 'Spring', primary: '#15803d', accent: '#fbcfe8' },
    summer: { name: 'Summer', primary: '#a16207', accent: '#fde047' },
    independence: { name: 'Independence', primary: '#1e3a8a', accent: '#dc2626' },
    halloween: { name: 'Halloween', primary: '#431407', accent: '#fb923c' },
    synthwave: { name: 'Synthwave', primary: '#be185d', accent: '#22d3ee' },
    corporate: { name: 'Corporate', primary: '#1e3a8a', accent: '#9ca3af' }
};
let selectedTheme = DEFAULTS.theme;
let customColors = { ...DEFAULTS.customColors };
let colorOverrides = {};

// Color property definitions for Advanced Colors section
const COLOR_PROPERTIES = [
    { key: 'background', label: 'Background', defaultFrom: 'primary' },
    { key: 'bodyText', label: 'Body Text', default: '#FFFFFF' },
    { key: 'linkBg', label: 'Link Background', defaultFrom: 'accent' },
    { key: 'linkText', label: 'Link Text', defaultFrom: 'primary' },
    { key: 'linkHoverBg', label: 'Link Hover Background', default: '#FFFFFF' },
    { key: 'linkHoverText', label: 'Link Hover Text', defaultFrom: 'primary' },
    { key: 'headingColor', label: 'Group Heading', defaultFrom: 'accent' }
];

// Get base colors from theme (just primary/accent)
function getBaseColors() {
    if (selectedTheme === 'custom') {
        return customColors;
    }
    return themes[selectedTheme];
}

// Get fully resolved colors including overrides
function getActiveColors() {
    const base = getBaseColors();
    return {
        background: colorOverrides.background || base.primary,
        bodyText: colorOverrides.bodyText || '#FFFFFF',
        linkBg: colorOverrides.linkBg || base.accent,
        linkText: colorOverrides.linkText || base.primary,
        linkHoverBg: colorOverrides.linkHoverBg || '#FFFFFF',
        linkHoverText: colorOverrides.linkHoverText || base.primary,
        headingColor: colorOverrides.headingColor || base.accent,
        // Keep primary/accent for backwards compatibility
        primary: colorOverrides.background || base.primary,
        accent: colorOverrides.linkBg || base.accent
    };
}

// Get default value for a color property based on current theme
function getColorDefault(prop) {
    const base = getBaseColors();
    if (prop.default) return prop.default;
    if (prop.defaultFrom === 'primary') return base.primary;
    if (prop.defaultFrom === 'accent') return base.accent;
    return '#000000';
}

// Render theme swatches
function renderThemeSwatches() {
    const container = document.getElementById('themeSwatches');
    let html = '';

    // Render preset theme swatches
    for (const [key, theme] of Object.entries(themes)) {
        const isSelected = selectedTheme === key;
        html += `
            <div class="swatch-container">
                <button type="button"
                        class="theme-swatch ${isSelected ? 'selected' : ''}"
                        onclick="selectTheme('${key}')"
                        role="radio"
                        aria-checked="${isSelected}"
                        aria-label="${theme.name} theme"
                        title="${theme.name}">
                    <div class="swatch-primary" style="background-color: ${theme.primary};"></div>
                    <div class="swatch-accent" style="background-color: ${theme.accent};"></div>
                </button>
                <span class="swatch-label">${theme.name}</span>
            </div>
        `;
    }

    // Add custom swatch
    const isCustomSelected = selectedTheme === 'custom';
    html += `
        <div class="swatch-container">
            <button type="button"
                    class="theme-swatch theme-swatch-custom ${isCustomSelected ? 'selected' : ''}"
                    onclick="selectTheme('custom')"
                    role="radio"
                    aria-checked="${isCustomSelected}"
                    aria-label="Custom theme"
                    title="Custom colors">
            </button>
            <span class="swatch-label">Custom</span>
        </div>
    `;

    container.innerHTML = html;

    // Show/hide custom colors section
    const customColorsSection = document.getElementById('customColors');
    const customWarning = document.getElementById('customWarning');
    if (isCustomSelected) {
        customColorsSection.classList.add('visible');
        customWarning.classList.add('visible');
    } else {
        customColorsSection.classList.remove('visible');
        customWarning.classList.remove('visible');
    }
}

// Select a theme
function selectTheme(themeKey) {
    selectedTheme = themeKey;
    colorOverrides = {}; // Clear overrides when changing theme
    renderThemeSwatches();
    renderAdvancedColors();
    updatePreview();
    const themeName = themeKey === 'custom' ? 'Custom' : themes[themeKey].name;
    announce(`${themeName} theme selected`);
}

// Sync color input from color picker
function syncColorInput(colorType, value) {
    customColors[colorType] = value;
    document.getElementById(`custom${colorType.charAt(0).toUpperCase() + colorType.slice(1)}`).value = value;
    updatePreview();
}

// Sync color picker from text input
function syncColorPicker(colorType, value) {
    // Validate hex color
    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
        customColors[colorType] = value;
        document.getElementById(`custom${colorType.charAt(0).toUpperCase() + colorType.slice(1)}Picker`).value = value;
        updatePreview();
    }
}

// Update a color override
function updateColorOverride(key, value) {
    const prop = COLOR_PROPERTIES.find(p => p.key === key);
    const defaultValue = getColorDefault(prop);

    // Only store if different from default
    if (value && value !== defaultValue) {
        colorOverrides[key] = value;
    } else {
        delete colorOverrides[key];
    }

    // Update the customized indicator
    const container = document.getElementById(`advanced-color-${key}`);
    if (container) {
        if (colorOverrides[key]) {
            container.classList.add('customized');
        } else {
            container.classList.remove('customized');
        }
    }

    updatePreview();
}

// Sync advanced color from picker
function syncAdvancedColorFromPicker(key, value) {
    document.getElementById(`advanced-${key}-text`).value = value;
    updateColorOverride(key, value);
}

// Sync advanced color from text input
function syncAdvancedColorFromText(key, value) {
    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
        document.getElementById(`advanced-${key}-picker`).value = value;
        updateColorOverride(key, value);
    }
}

// Reset all color overrides to theme defaults
function resetColorOverrides() {
    colorOverrides = {};
    renderAdvancedColors();
    updatePreview();
    announce('Colors reset to theme defaults');
}

// Render the Advanced Colors section
function renderAdvancedColors() {
    const container = document.getElementById('advancedColorsGrid');
    if (!container) return;

    let html = '';

    COLOR_PROPERTIES.forEach(prop => {
        const defaultValue = getColorDefault(prop);
        const currentValue = colorOverrides[prop.key] || defaultValue;
        const isCustomized = !!colorOverrides[prop.key];

        html += `
            <div class="color-input-group ${isCustomized ? 'customized' : ''}" id="advanced-color-${prop.key}">
                <label for="advanced-${prop.key}-text">${prop.label}</label>
                <div class="color-input-row">
                    <input type="color"
                           id="advanced-${prop.key}-picker"
                           value="${currentValue}"
                           onchange="syncAdvancedColorFromPicker('${prop.key}', this.value)">
                    <input type="text"
                           id="advanced-${prop.key}-text"
                           value="${currentValue}"
                           placeholder="${defaultValue}"
                           oninput="syncAdvancedColorFromText('${prop.key}', this.value)">
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Handle logo SVG file upload
function handleLogoUpload(logoType, input) {
    const file = input.files[0];
    if (!file) return;

    if (!file.type.includes('svg')) {
        alert('Please upload an SVG file.');
        input.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const svgContent = e.target.result;
        const dataUri = 'data:image/svg+xml,' + encodeURIComponent(svgContent);
        const inputId = logoType === 'top' ? 'topLogoUrl' : 'sideLogoUrl';
        document.getElementById(inputId).value = dataUri;
        updatePreview();
        announce(`${logoType === 'top' ? 'Top' : 'Side'} logo uploaded`);
    };
    reader.readAsText(file);
    input.value = ''; // Reset file input
}

// Clear logo
function clearLogo(logoType) {
    const inputId = logoType === 'top' ? 'topLogoUrl' : 'sideLogoUrl';
    document.getElementById(inputId).value = '';
    updatePreview();
    announce(`${logoType === 'top' ? 'Top' : 'Side'} logo cleared`);
}

// Update group icon
function updateGroupIcon(groupId, value) {
    const group = groups.find(g => g.id === groupId);
    if (group) {
        group.icon = value;
        updatePreview();
    }
}

// Handle group icon SVG upload
function handleGroupIconUpload(groupId, input) {
    const file = input.files[0];
    if (!file) return;

    if (!file.type.includes('svg')) {
        alert('Please upload an SVG file.');
        input.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const svgContent = e.target.result;
        const dataUri = 'data:image/svg+xml,' + encodeURIComponent(svgContent);
        const group = groups.find(g => g.id === groupId);
        if (group) {
            group.icon = dataUri;
            document.getElementById(`group-icon-${groupId}`).value = dataUri;
            updatePreview();
            announce('Group icon uploaded');
        }
    };
    reader.readAsText(file);
    input.value = '';
}

// Clear group icon
function clearGroupIcon(groupId) {
    const group = groups.find(g => g.id === groupId);
    if (group) {
        group.icon = '';
        document.getElementById(`group-icon-${groupId}`).value = '';
        updatePreview();
        announce('Group icon cleared');
    }
}

// Handle link icon SVG upload
function handleLinkIconUpload(targetType, groupId, linkId, input) {
    const file = input.files[0];
    if (!file) return;

    if (!file.type.includes('svg')) {
        alert('Please upload an SVG file.');
        input.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const svgContent = e.target.result;
        const dataUri = 'data:image/svg+xml,' + encodeURIComponent(svgContent);
        if (targetType === 'group') {
            const group = groups.find(g => g.id === groupId);
            const link = group ? group.links.find(l => l.id === linkId) : null;
            if (link) {
                link.icon = dataUri;
                document.getElementById(`link-icon-${groupId}-${linkId}`).value = dataUri;
                updatePreview();
                announce('Link icon uploaded');
            }
        } else {
            const link = ungroupedLinks.find(l => l.id === linkId);
            if (link) {
                link.icon = dataUri;
                document.getElementById(`ungrouped-icon-${linkId}`).value = dataUri;
                updatePreview();
                announce('Link icon uploaded');
            }
        }
    };
    reader.readAsText(file);
    input.value = '';
}

// Clear link icon
function clearLinkIcon(targetType, groupId, linkId) {
    if (targetType === 'group') {
        const group = groups.find(g => g.id === groupId);
        const link = group ? group.links.find(l => l.id === linkId) : null;
        if (link) {
            link.icon = '';
            document.getElementById(`link-icon-${groupId}-${linkId}`).value = '';
            updatePreview();
            announce('Link icon cleared');
        }
    } else {
        const link = ungroupedLinks.find(l => l.id === linkId);
        if (link) {
            link.icon = '';
            document.getElementById(`ungrouped-icon-${linkId}`).value = '';
            updatePreview();
            announce('Link icon cleared');
        }
    }
}

// Convert SVG string to data URI
function svgToDataUri(svgString) {
    return 'data:image/svg+xml,' + encodeURIComponent(svgString);
}

// Open icon picker modal
function openIconPicker(iconType, targetType, groupId, linkId) {
    iconPickerTriggerElement = document.activeElement;
    iconPickerTarget = { iconType, targetType, groupId, linkId };

    renderIconPickerGrid();
    document.getElementById('iconSearchInput').value = '';
    document.getElementById('iconPickerModal').classList.add('visible');
    document.getElementById('iconSearchInput').focus();
}

// Close icon picker modal
function closeIconPicker() {
    document.getElementById('iconPickerModal').classList.remove('visible');
    iconPickerTarget = null;

    if (iconPickerTriggerElement && typeof iconPickerTriggerElement.focus === 'function') {
        iconPickerTriggerElement.focus();
        iconPickerTriggerElement = null;
    }
}

// Render icon picker grid
function renderIconPickerGrid(filter = '') {
    const container = document.getElementById('iconPickerGrid');
    const filterLower = filter.toLowerCase().trim();
    let html = '';

    for (const [categoryKey, category] of Object.entries(ICON_LIBRARY)) {
        let iconsHtml = '';
        let visibleCount = 0;

        for (const [iconKey, icon] of Object.entries(category.icons)) {
            const matchesFilter = !filterLower ||
                icon.name.toLowerCase().includes(filterLower) ||
                iconKey.toLowerCase().includes(filterLower);

            if (matchesFilter) visibleCount++;

            iconsHtml += `
                <button type="button" class="icon-option ${matchesFilter ? '' : 'hidden'}"
                        onclick="selectIcon('${categoryKey}', '${iconKey}')"
                        aria-label="${escapeHtml(icon.name)}"
                        title="${escapeHtml(icon.name)}">
                    ${icon.svg}
                    <span class="icon-option-label">${escapeHtml(icon.name)}</span>
                </button>
            `;
        }

        const categoryVisible = !filterLower || visibleCount > 0;
        html += `
            <div class="icon-category ${categoryVisible ? '' : 'hidden'}">
                <div class="icon-category-title">${escapeHtml(category.name)}</div>
                <div class="icon-category-grid">${iconsHtml}</div>
            </div>
        `;
    }

    container.innerHTML = html;
}

// Filter icons based on search input
function filterIcons(searchTerm) {
    renderIconPickerGrid(searchTerm);
}

// Select an icon from the picker
function selectIcon(categoryKey, iconKey) {
    if (!iconPickerTarget) return;

    const icon = ICON_LIBRARY[categoryKey]?.icons?.[iconKey];
    if (!icon) return;

    const dataUri = svgToDataUri(icon.svg);
    const { iconType, targetType, groupId, linkId } = iconPickerTarget;

    if (iconType === 'group') {
        const group = groups.find(g => g.id === groupId);
        if (group) {
            group.icon = dataUri;
            document.getElementById(`group-icon-${groupId}`).value = dataUri;
            updatePreview();
            announce(`Selected ${icon.name} icon for group`);
        }
    } else if (iconType === 'link') {
        if (targetType === 'group') {
            const group = groups.find(g => g.id === groupId);
            const link = group?.links.find(l => l.id === linkId);
            if (link) {
                link.icon = dataUri;
                document.getElementById(`link-icon-${groupId}-${linkId}`).value = dataUri;
                updatePreview();
                announce(`Selected ${icon.name} icon for link`);
            }
        } else {
            const link = ungroupedLinks.find(l => l.id === linkId);
            if (link) {
                link.icon = dataUri;
                document.getElementById(`ungrouped-icon-${linkId}`).value = dataUri;
                updatePreview();
                announce(`Selected ${icon.name} icon for link`);
            }
        }
    }

    closeIconPicker();
}

// Announce to screen readers
function announce(message) {
    const announcer = document.getElementById('sr-announcements');
    announcer.textContent = message;
    // Clear after announcement
    setTimeout(() => { announcer.textContent = ''; }, 1000);
}

// Toggle collapsible section
function toggleSection(sectionId) {
    const header = document.getElementById(`${sectionId}-header`);
    const content = document.getElementById(`${sectionId}-content`);
    if (header && content) {
        header.classList.toggle('collapsed');
        content.classList.toggle('collapsed');
        const isCollapsed = content.classList.contains('collapsed');
        header.setAttribute('aria-expanded', !isCollapsed);
        saveState();
    }
}

// URL validation
function isValidUrl(string) {
    if (!string || string.trim() === '') return true; // Empty is ok (optional)
    // Allow http, https, and Windows app URI schemes
    const urlPattern = /^(https?:\/\/|ms-|calculator:|xbox:|msteams:|bingmaps:|msnweather:|feedback-hub:).+/i;
    return urlPattern.test(string.trim());
}

function validateUrlInput(input) {
    const value = input.value.trim();
    if (value && !isValidUrl(value)) {
        input.classList.add('invalid');
        return false;
    } else {
        input.classList.remove('invalid');
        return true;
    }
}

function validateAllUrls() {
    let allValid = true;
    let invalidCount = 0;
    const autoRefreshUrl = document.getElementById('autoRefreshUrl').value.trim();

    // Validate grouped links
    groups.forEach(group => {
        group.links.forEach(link => {
            if (link.url && !isValidUrl(link.url)) {
                allValid = false;
                invalidCount++;
                const input = document.getElementById(`link-url-${group.id}-${link.id}`);
                if (input) input.classList.add('invalid');
            }
        });
    });

    // Validate ungrouped links
    ungroupedLinks.forEach(link => {
        if (link.url && !isValidUrl(link.url)) {
            allValid = false;
            invalidCount++;
            const input = document.getElementById(`ungrouped-url-${link.id}`);
            if (input) input.classList.add('invalid');
        }
    });

    if (autoRefreshUrl && !isValidUrl(autoRefreshUrl)) {
        allValid = false;
        invalidCount++;
        const input = document.getElementById('autoRefreshUrl');
        if (input) input.classList.add('invalid');
    }

    if (!allValid) {
        alert(`${invalidCount} invalid URL${invalidCount > 1 ? 's' : ''} found. Please fix the highlighted fields.\n\nURLs must start with http://, https://, or be a valid Windows app URI.`);
    }

    return allValid;
}

// localStorage key for saving state
const STORAGE_KEY = 'startPageStudioState';

// Save current state to localStorage
function saveState() {
    // Clean link objects to only include valid fields (remove app-related fields)
    const cleanLink = (link) => ({
        id: link.id,
        name: link.name || '',
        url: link.url || '',
        icon: link.icon || ''
    });

    const cleanedGroups = groups.map(g => ({
        id: g.id,
        name: g.name,
        icon: g.icon || '',
        links: g.links.map(cleanLink)
    }));

    const cleanedUngroupedLinks = ungroupedLinks.map(cleanLink);

    const state = {
        appVersion: APP_VERSION,
        groups: cleanedGroups,
        ungroupedLinks: cleanedUngroupedLinks,
        groupIdCounter,
        linkIdCounter,
        selectedTheme,
        customColors,
        colorOverrides,
        settings: {
            pageTitle: document.getElementById('pageTitle').value,
            greeting: document.getElementById('greeting').value,
            greetingFontSize: document.getElementById('greetingFontSize').value,
            greetingSpacing: document.getElementById('greetingSpacing').value,
            showComputerName: document.getElementById('showComputerName').checked,
            computerNamePosition: document.getElementById('computerNamePosition').value,
            showNetworkIdentifier: document.getElementById('showNetworkIdentifier').checked,
            networkIdentifierPosition: document.getElementById('networkIdentifierPosition').value,
            networkIdentifierDisplay: document.getElementById('networkIdentifierDisplay').value,
            networkIdentifierPattern: document.getElementById('networkIdentifierPattern').value,
            networkIdentifierFallback: document.getElementById('networkIdentifierFallback').value,
            showDateTime: document.getElementById('showDateTime').checked,
            dateTimeFormat: document.getElementById('dateTimeFormat').value,
            dateTimePosition: document.getElementById('dateTimePosition').value,
            topLogoUrl: document.getElementById('topLogoUrl').value,
            topLogoWidth: document.getElementById('topLogoWidth').value,
            topLogoSpacing: document.getElementById('topLogoSpacing').value,
            sideLogoUrl: document.getElementById('sideLogoUrl').value,
            sideLogoPosition: document.getElementById('sideLogoPosition').value,
            showFooter: document.getElementById('showFooter').checked,
            footerText: document.getElementById('footerText').value,
            enableAutoRefresh: document.getElementById('enableAutoRefresh').checked,
            autoRefreshDelay: document.getElementById('autoRefreshDelay').value,
            autoRefreshUrl: document.getElementById('autoRefreshUrl').value,
            scriptName: document.getElementById('scriptName').value,
            destinationPath: document.getElementById('destinationPath').value,
            // Link layout
            linkLayout: document.getElementById('linkLayout').value,
            buttonStyle: document.getElementById('buttonStyle').value,
            buttonSize: document.getElementById('buttonSize').value,
            gridColumns: document.getElementById('gridColumns').value,
            // Announcement banner
            bannerEnabled: document.getElementById('bannerEnabled').checked,
            bannerTitle: document.getElementById('bannerTitle').value,
            bannerMessage: document.getElementById('bannerMessage').value,
            bannerStyle: document.getElementById('bannerStyle').value,
            // Popup window settings
            openLinksInPopup: document.getElementById('openLinksInPopup').checked,
            popupWidth: document.getElementById('popupWidth').value,
            popupHeight: document.getElementById('popupHeight').value,
            popupAutoClose: document.getElementById('popupAutoClose').checked,
            popupAutoCloseDelay: document.getElementById('popupAutoCloseDelay').value
        }
    };
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        showSaveIndicator();
    } catch (e) {
        console.warn('Could not save state to localStorage:', e);
        showSaveIndicator('Save failed');
    }
}

// Show save indicator briefly
function showSaveIndicator(message = 'Saved') {
    const indicator = document.getElementById('saveIndicator');
    if (!indicator) return;

    clearTimeout(saveIndicatorTimeout);
    indicator.textContent = message;
    indicator.classList.add('visible');

    saveIndicatorTimeout = setTimeout(() => {
        indicator.classList.remove('visible');
    }, 1500);
}

// Load state from localStorage
function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const state = JSON.parse(saved);
            const isLegacyState = !state.appVersion;

            // Clean link objects to only include valid fields (remove app-related fields)
            const cleanLink = (link) => ({
                id: link.id,
                name: link.name || '',
                url: link.url || '',
                icon: link.icon || ''
            });

            // Restore arrays and counters, cleaning out any legacy app-related fields
            groups = (state.groups || []).map(g => ({
                id: g.id,
                name: g.name,
                icon: g.icon || '',
                links: (g.links || []).map(cleanLink)
            }));
            ungroupedLinks = (state.ungroupedLinks || []).map(cleanLink);
            groupIdCounter = state.groupIdCounter || 0;
            linkIdCounter = state.linkIdCounter || 0;
            selectedTheme = state.selectedTheme || DEFAULTS.theme;
            if (selectedTheme !== 'custom' && !themes[selectedTheme]) {
                selectedTheme = DEFAULTS.theme;
            }
            customColors = state.customColors || { primary: '#0053E2', accent: '#FFC220' };
            colorOverrides = state.colorOverrides || {};

            // Restore form settings
            if (state.settings) {
                document.getElementById('pageTitle').value = state.settings.pageTitle || 'Quick Links';
                const storedGreeting = state.settings.greeting || '';
                document.getElementById('greeting').value = (isLegacyState && storedGreeting === 'Welcome')
                    ? ''
                    : storedGreeting;

                // Restore greeting and logo sliders
                const greetingFontSize = state.settings.greetingFontSize || DEFAULTS.greetingFontSize;
                const greetingSpacing = state.settings.greetingSpacing || DEFAULTS.greetingSpacing;
                const topLogoWidth = state.settings.topLogoWidth || DEFAULTS.topLogoWidth;
                const topLogoSpacing = state.settings.topLogoSpacing || DEFAULTS.topLogoSpacing;

                document.getElementById('greetingFontSize').value = greetingFontSize;
                document.getElementById('greetingFontSizeValue').textContent = greetingFontSize + 'rem';
                document.getElementById('greetingSpacing').value = greetingSpacing;
                document.getElementById('greetingSpacingValue').textContent = greetingSpacing + 'rem';
                document.getElementById('topLogoWidth').value = topLogoWidth;
                document.getElementById('topLogoWidthValue').textContent = topLogoWidth + 'px';
                document.getElementById('topLogoSpacing').value = topLogoSpacing;
                document.getElementById('topLogoSpacingValue').textContent = topLogoSpacing + 'rem';

                document.getElementById('showComputerName').checked = state.settings.showComputerName === true;
                document.getElementById('computerNamePosition').value = state.settings.computerNamePosition || 'top-right';
                document.getElementById('showNetworkIdentifier').checked = state.settings.showNetworkIdentifier === true;
                document.getElementById('networkIdentifierPosition').value = state.settings.networkIdentifierPosition || DEFAULTS.networkIdentifierPosition;
                document.getElementById('networkIdentifierDisplay').value = state.settings.networkIdentifierDisplay || DEFAULTS.networkIdentifierDisplay;
                document.getElementById('networkIdentifierPattern').value = state.settings.networkIdentifierPattern || DEFAULTS.networkIdentifierPattern;
                document.getElementById('networkIdentifierFallback').value = state.settings.networkIdentifierFallback || DEFAULTS.networkIdentifierFallback;
                document.getElementById('showDateTime').checked = state.settings.showDateTime || false;
                document.getElementById('dateTimeFormat').value = state.settings.dateTimeFormat || 'both';
                document.getElementById('dateTimePosition').value = state.settings.dateTimePosition || 'top-left';
                document.getElementById('topLogoUrl').value = state.settings.topLogoUrl || state.settings.headerLogoUrl || state.settings.logoUrl || '';
                document.getElementById('sideLogoUrl').value = state.settings.sideLogoUrl || state.settings.cornerLogoUrl || '';
                document.getElementById('sideLogoPosition').value = state.settings.sideLogoPosition || 'left';
                document.getElementById('showFooter').checked = state.settings.showFooter === true;
                document.getElementById('footerText').value = state.settings.footerText || '';
                document.getElementById('enableAutoRefresh').checked = state.settings.enableAutoRefresh || false;
                document.getElementById('autoRefreshDelay').value = state.settings.autoRefreshDelay || '30';
                document.getElementById('autoRefreshUrl').value = state.settings.autoRefreshUrl || '';
                document.getElementById('scriptName').value = state.settings.scriptName || 'MyLandingPage';
                document.getElementById('destinationPath').value = state.settings.destinationPath || 'C:\\ProgramData\\LandingPage\\index.html';

                // Restore link layout settings
                document.getElementById('linkLayout').value = state.settings.linkLayout || DEFAULTS.linkLayout;
                document.getElementById('buttonStyle').value = state.settings.buttonStyle || DEFAULTS.buttonStyle;
                document.getElementById('buttonSize').value = state.settings.buttonSize || DEFAULTS.buttonSize;
                document.getElementById('gridColumns').value = state.settings.gridColumns || DEFAULTS.gridColumns;

                // Restore announcement banner settings
                document.getElementById('bannerEnabled').checked = state.settings.bannerEnabled || false;
                document.getElementById('bannerTitle').value = state.settings.bannerTitle || '';
                document.getElementById('bannerMessage').value = state.settings.bannerMessage || '';
                document.getElementById('bannerStyle').value = state.settings.bannerStyle || DEFAULTS.bannerStyle;

                // Restore popup window settings
                document.getElementById('openLinksInPopup').checked = state.settings.openLinksInPopup || false;
                document.getElementById('popupWidth').value = state.settings.popupWidth || DEFAULTS.popupWidth;
                document.getElementById('popupHeight').value = state.settings.popupHeight || DEFAULTS.popupHeight;
                document.getElementById('popupAutoClose').checked = state.settings.popupAutoClose || false;
                document.getElementById('popupAutoCloseDelay').value = state.settings.popupAutoCloseDelay || DEFAULTS.popupAutoCloseDelay;

                // Restore custom color inputs if custom theme
                if (selectedTheme === 'custom') {
                    document.getElementById('customPrimary').value = customColors.primary;
                    document.getElementById('customPrimaryPicker').value = customColors.primary;
                    document.getElementById('customAccent').value = customColors.accent;
                    document.getElementById('customAccentPicker').value = customColors.accent;
                }
            }
            return true;
        }
    } catch (e) {
        console.warn('Could not load state from localStorage:', e);
    }
    return false;
}

// Initialize application
function init() {
    const hasExistingState = loadState();
    const versionEl = document.getElementById('appVersion');
    if (versionEl) {
        versionEl.textContent = `v${APP_VERSION}`;
    }

    renderThemeSwatches();
    renderAdvancedColors();

    if (!hasExistingState) {
        // Set defaults for new users (no logo by default)
        addGroup('Productivity', [
            { name: 'Email', url: 'https://outlook.office.com' }
        ], true);
        addGroup('Resources', [
            { name: 'Help Desk', url: 'https://support.example.com' }
        ], true);
    } else {
        // Render loaded state
        renderGroups();
        renderUngroupedLinks();
    }

    updatePreview();
}

// Add a new group
function addGroup(name = '', links = [], silent = false) {
    const groupId = groupIdCounter++;
    const groupName = name || 'New Group';
    const group = {
        id: groupId,
        name: groupName,
        links: links.length ? links.map(l => ({ ...l, id: linkIdCounter++ })) : []
    };
    groups.push(group);
    renderGroups();
    updatePreview();
    if (!silent) {
        announce(`Group "${groupName}" added`);
    }
}

// Remove a group
function removeGroup(groupId) {
    const group = groups.find(g => g.id === groupId);
    const groupName = group ? group.name : 'Group';
    const linkCount = group ? group.links.length : 0;
    const message = linkCount > 0
        ? `Delete "${groupName}" and its ${linkCount} link${linkCount === 1 ? '' : 's'}?`
        : `Delete "${groupName}"?`;
    if (!confirm(message)) return;
    groups = groups.filter(g => g.id !== groupId);
    renderGroups();
    updatePreview();
    announce(`Group "${groupName}" removed`);
}

// Add a link to a group
function addLinkToGroup(groupId) {
    const group = groups.find(g => g.id === groupId);
    if (group) {
        group.links.push({ id: linkIdCounter++, name: '', url: '' });
        renderGroups();
        updatePreview();
        announce(`New link added to "${group.name}"`);
    }
}

// Remove a link from a group
function removeLinkFromGroup(groupId, linkId) {
    const group = groups.find(g => g.id === groupId);
    if (group) {
        const link = group.links.find(l => l.id === linkId);
        const linkName = link && link.name ? link.name : 'Link';
        if (!confirm(`Delete "${linkName}"?`)) return;
        group.links = group.links.filter(l => l.id !== linkId);
        renderGroups();
        updatePreview();
        announce(`"${linkName}" removed from "${group.name}"`);
    }
}

// Drag and drop state
let draggedGroupId = null;
let draggedLinkId = null;
let draggedLinkGroupId = null;
let draggedUngroupedId = null;

// Group drag handlers
function handleGroupDragStart(e, groupId) {
    draggedGroupId = groupId;
    e.target.closest('.group-card').classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleGroupDragEnd(e) {
    draggedGroupId = null;
    document.querySelectorAll('.group-card').forEach(el => {
        el.classList.remove('dragging', 'drag-over');
    });
}

function handleGroupDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const card = e.target.closest('.group-card');
    if (card && draggedGroupId !== null) {
        card.classList.add('drag-over');
    }
}

function handleGroupDragLeave(e) {
    const card = e.target.closest('.group-card');
    if (card) {
        card.classList.remove('drag-over');
    }
}

function handleGroupDrop(e, targetGroupId) {
    e.preventDefault();
    if (draggedGroupId === null || draggedGroupId === targetGroupId) return;

    const fromIndex = groups.findIndex(g => g.id === draggedGroupId);
    const toIndex = groups.findIndex(g => g.id === targetGroupId);

    if (fromIndex !== -1 && toIndex !== -1) {
        const [movedGroup] = groups.splice(fromIndex, 1);
        groups.splice(toIndex, 0, movedGroup);
        renderGroups();
        updatePreview();
        announce('Group reordered');
    }
}

// Link drag handlers
function handleLinkDragStart(e, groupId, linkId) {
    draggedLinkId = linkId;
    draggedLinkGroupId = groupId;
    e.target.closest('.link-row').classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleLinkDragEnd(e) {
    draggedLinkId = null;
    draggedLinkGroupId = null;
    document.querySelectorAll('.link-row').forEach(el => {
        el.classList.remove('dragging', 'drag-over');
    });
}

function handleLinkDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const row = e.target.closest('.link-row');
    if (row && (draggedLinkId !== null || draggedUngroupedId !== null)) {
        row.classList.add('drag-over');
    }
}

function handleLinkDragLeave(e) {
    const row = e.target.closest('.link-row');
    if (row) {
        row.classList.remove('drag-over');
    }
}

function handleLinkDrop(e, targetGroupId, targetLinkId) {
    e.preventDefault();

    const targetGroup = groups.find(g => g.id === targetGroupId);
    if (!targetGroup) return;

    const toIndex = targetGroup.links.findIndex(l => l.id === targetLinkId);

    // Handle drop from ungrouped links
    if (draggedUngroupedId !== null) {
        const fromIndex = ungroupedLinks.findIndex(l => l.id === draggedUngroupedId);
        if (fromIndex === -1) return;

        const [movedLink] = ungroupedLinks.splice(fromIndex, 1);

        if (toIndex === -1) {
            targetGroup.links.push(movedLink);
        } else {
            targetGroup.links.splice(toIndex, 0, movedLink);
        }

        renderGroups();
        renderUngroupedLinks();
        updatePreview();
        announce('Link moved to group');
        return;
    }

    // Handle drop from another group
    if (draggedLinkId === null) return;

    const sourceGroup = groups.find(g => g.id === draggedLinkGroupId);
    if (!sourceGroup) return;

    const fromIndex = sourceGroup.links.findIndex(l => l.id === draggedLinkId);
    if (fromIndex === -1) return;

    // Remove from source
    const [movedLink] = sourceGroup.links.splice(fromIndex, 1);

    // Add to target
    if (toIndex === -1) {
        targetGroup.links.push(movedLink);
    } else {
        targetGroup.links.splice(toIndex, 0, movedLink);
    }

    renderGroups();
    updatePreview();
    announce('Link reordered');
}

// Ungrouped link drag handlers
function handleUngroupedDragStart(e, linkId) {
    draggedUngroupedId = linkId;
    e.target.closest('.link-row').classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleUngroupedDragEnd() {
    draggedUngroupedId = null;
    document.querySelectorAll('.link-row').forEach(el => {
        el.classList.remove('dragging', 'drag-over');
    });
}

function handleUngroupedDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const row = e.target.closest('.link-row');
    if (row && (draggedUngroupedId !== null || draggedLinkId !== null)) {
        row.classList.add('drag-over');
    }
}

function handleUngroupedDragLeave(e) {
    const row = e.target.closest('.link-row');
    if (row) {
        row.classList.remove('drag-over');
    }
}

function handleUngroupedDrop(e, targetLinkId) {
    e.preventDefault();

    const toIndex = ungroupedLinks.findIndex(l => l.id === targetLinkId);

    // Handle drop from grouped links
    if (draggedLinkId !== null) {
        const sourceGroup = groups.find(g => g.id === draggedLinkGroupId);
        if (!sourceGroup) return;

        const fromIndex = sourceGroup.links.findIndex(l => l.id === draggedLinkId);
        if (fromIndex === -1) return;

        const [movedLink] = sourceGroup.links.splice(fromIndex, 1);

        if (toIndex === -1) {
            ungroupedLinks.push(movedLink);
        } else {
            ungroupedLinks.splice(toIndex, 0, movedLink);
        }

        renderGroups();
        renderUngroupedLinks();
        updatePreview();
        announce('Link moved to standalone');
        return;
    }

    // Handle reorder within ungrouped
    if (draggedUngroupedId === null || draggedUngroupedId === targetLinkId) return;

    const fromIndex = ungroupedLinks.findIndex(l => l.id === draggedUngroupedId);
    if (fromIndex === -1 || toIndex === -1) return;

    const [movedLink] = ungroupedLinks.splice(fromIndex, 1);
    ungroupedLinks.splice(toIndex, 0, movedLink);

    renderUngroupedLinks();
    updatePreview();
    announce('Standalone link reordered');
}

// Container-level drop handlers for dropping into empty/end of containers
function handleGroupLinksContainerDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (draggedUngroupedId !== null || draggedLinkId !== null) {
        e.currentTarget.classList.add('drag-over');
    }
}

function handleGroupLinksContainerDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleGroupLinksContainerDrop(e, targetGroupId) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');

    // Don't handle if dropped on a link row (let link handler handle it)
    if (e.target.closest('.link-row')) return;

    const targetGroup = groups.find(g => g.id === targetGroupId);
    if (!targetGroup) return;

    // Handle drop from ungrouped links
    if (draggedUngroupedId !== null) {
        const fromIndex = ungroupedLinks.findIndex(l => l.id === draggedUngroupedId);
        if (fromIndex === -1) return;

        const [movedLink] = ungroupedLinks.splice(fromIndex, 1);
        targetGroup.links.push(movedLink);

        renderGroups();
        renderUngroupedLinks();
        updatePreview();
        announce('Link moved to group');
        return;
    }

    // Handle drop from another group
    if (draggedLinkId !== null) {
        const sourceGroup = groups.find(g => g.id === draggedLinkGroupId);
        if (!sourceGroup) return;
        if (sourceGroup.id === targetGroupId) return; // Same group, ignore

        const fromIndex = sourceGroup.links.findIndex(l => l.id === draggedLinkId);
        if (fromIndex === -1) return;

        const [movedLink] = sourceGroup.links.splice(fromIndex, 1);
        targetGroup.links.push(movedLink);

        renderGroups();
        updatePreview();
        announce('Link moved to group');
    }
}

function handleUngroupedContainerDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (draggedLinkId !== null || draggedUngroupedId !== null) {
        e.currentTarget.classList.add('drag-over');
    }
}

function handleUngroupedContainerDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleUngroupedContainerDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');

    // Don't handle if dropped on a link row (let link handler handle it)
    if (e.target.closest('.link-row')) return;

    // Handle drop from grouped links
    if (draggedLinkId !== null) {
        const sourceGroup = groups.find(g => g.id === draggedLinkGroupId);
        if (!sourceGroup) return;

        const fromIndex = sourceGroup.links.findIndex(l => l.id === draggedLinkId);
        if (fromIndex === -1) return;

        const [movedLink] = sourceGroup.links.splice(fromIndex, 1);
        ungroupedLinks.push(movedLink);

        renderGroups();
        renderUngroupedLinks();
        updatePreview();
        announce('Link moved to standalone');
    }
}

// Update group name
function updateGroupName(groupId, name) {
    const group = groups.find(g => g.id === groupId);
    if (group) {
        group.name = name;
        updatePreview();
    }
}

// Update link in group
function updateGroupLink(groupId, linkId, field, value) {
    // Only allow valid link fields
    const validFields = ['name', 'url', 'icon'];
    if (!validFields.includes(field)) return;

    const group = groups.find(g => g.id === groupId);
    if (group) {
        const link = group.links.find(l => l.id === linkId);
        if (link) {
            link[field] = value;
            updatePreview();
        }
    }
}

// Add ungrouped link
function addUngroupedLink() {
    ungroupedLinks.push({ id: linkIdCounter++, name: '', url: '' });
    renderUngroupedLinks();
    updatePreview();
    announce('New ungrouped link added');
}

// Remove ungrouped link
function removeUngroupedLink(linkId) {
    const link = ungroupedLinks.find(l => l.id === linkId);
    const linkName = link && link.name ? link.name : 'Link';
    if (!confirm(`Delete "${linkName}"?`)) return;
    ungroupedLinks = ungroupedLinks.filter(l => l.id !== linkId);
    renderUngroupedLinks();
    updatePreview();
    announce(`"${linkName}" removed`);
}

// Update ungrouped link
function updateUngroupedLink(linkId, field, value) {
    // Only allow valid link fields
    const validFields = ['name', 'url', 'icon'];
    if (!validFields.includes(field)) return;

    const link = ungroupedLinks.find(l => l.id === linkId);
    if (link) {
        link[field] = value;
        updatePreview();
    }
}

// Render groups to DOM
function renderGroups() {
    const container = document.getElementById('groupsContainer');

    if (groups.length === 0) {
        container.innerHTML = '<p class="empty-message">No groups added yet. Click "Add Group" to create one.</p>';
        return;
    }

    container.innerHTML = groups.map((group, groupIndex) => `
        <fieldset class="group-card" data-group-id="${group.id}" aria-label="Link group ${groupIndex + 1}"
                  draggable="true"
                  ondragstart="handleGroupDragStart(event, ${group.id})"
                  ondragend="handleGroupDragEnd(event)"
                  ondragover="handleGroupDragOver(event)"
                  ondragleave="handleGroupDragLeave(event)"
                  ondrop="handleGroupDrop(event, ${group.id})">
            <div class="group-header">
                <span class="drag-handle" title="Drag to reorder">⋮⋮</span>
                <label for="group-name-${group.id}" class="visually-hidden">Group ${groupIndex + 1} name</label>
                <input type="text" id="group-name-${group.id}" value="${escapeHtml(group.name)}"
                       placeholder="Group name"
                       aria-label="Group name"
                       onchange="updateGroupName(${group.id}, this.value)">
                <button type="button" class="btn btn-danger btn-sm" onclick="removeGroup(${group.id})" aria-label="Remove group ${escapeHtml(group.name) || groupIndex + 1}">Remove</button>
            </div>
            <div class="group-icon-row">
                <label for="group-icon-${group.id}" class="group-icon-label">Icon:</label>
                <input type="text" id="group-icon-${group.id}" value="${escapeHtml(group.icon || '')}"
                       placeholder="Icon URL (optional)"
                       aria-label="Group icon URL"
                       oninput="updateGroupIcon(${group.id}, this.value)">
                <button type="button" class="btn btn-secondary btn-sm icon-picker-btn" onclick="openIconPicker('group', null, ${group.id}, null)" title="Choose from library">Library</button>
                <label for="group-icon-upload-${group.id}" class="btn btn-secondary btn-sm upload-btn" title="Upload SVG">
                    SVG
                    <input type="file" id="group-icon-upload-${group.id}" accept=".svg,image/svg+xml" onchange="handleGroupIconUpload(${group.id}, this)" class="visually-hidden">
                </label>
                ${group.icon ? `<img src="${escapeHtml(group.icon)}" alt="" style="width:20px;height:20px;">` : ''}
                <button type="button" class="btn btn-sm" onclick="clearGroupIcon(${group.id})" aria-label="Clear icon" title="Clear">✕</button>
            </div>
            <div class="group-links" role="list" aria-label="Links in ${escapeHtml(group.name) || 'this group'}"
                 ondragover="handleGroupLinksContainerDragOver(event)"
                 ondragleave="handleGroupLinksContainerDragLeave(event)"
                 ondrop="handleGroupLinksContainerDrop(event, ${group.id})">
                ${group.links.length === 0 ? '<p class="empty-message" role="listitem">No links in this group. Drag links here.</p>' : ''}
                ${group.links.map((link, linkIndex) => `
                    <div class="link-row" role="listitem"
                         draggable="true"
                         ondragstart="handleLinkDragStart(event, ${group.id}, ${link.id})"
                         ondragend="handleLinkDragEnd(event)"
                         ondragover="handleLinkDragOver(event)"
                         ondragleave="handleLinkDragLeave(event)"
                         ondrop="handleLinkDrop(event, ${group.id}, ${link.id})">
                        <span class="drag-handle" title="Drag to reorder">⋮</span>
                        <input type="text" id="link-name-${group.id}-${link.id}" value="${escapeHtml(link.name)}"
                               placeholder="Display name"
                               aria-label="Link display name"
                               class="${!link.name ? 'empty-warning' : ''}"
                               title="${!link.name ? 'Empty names will not appear in the generated page' : ''}"
                               onchange="updateGroupLink(${group.id}, ${link.id}, 'name', this.value)">
                        <input type="text" id="link-icon-${group.id}-${link.id}" value="${escapeHtml(link.icon || '')}"
                               placeholder="Icon URL (optional)"
                               aria-label="Link icon URL"
                               class="link-icon-input"
                               onchange="updateGroupLink(${group.id}, ${link.id}, 'icon', this.value)">
                        <button type="button" class="btn btn-secondary btn-sm icon-picker-btn" onclick="openIconPicker('link', 'group', ${group.id}, ${link.id})" title="Choose from library">Library</button>
                        <label for="link-icon-upload-${group.id}-${link.id}" class="btn btn-secondary btn-sm upload-btn" title="Upload SVG">
                            SVG
                            <input type="file" id="link-icon-upload-${group.id}-${link.id}" accept=".svg,image/svg+xml"
                                   onchange="handleLinkIconUpload('group', ${group.id}, ${link.id}, this)" class="visually-hidden">
                        </label>
                        <button type="button" class="btn btn-sm" onclick="clearLinkIcon('group', ${group.id}, ${link.id})" aria-label="Clear icon" title="Clear">✕</button>
                        <input type="url" id="link-url-${group.id}-${link.id}" value="${escapeHtml(link.url || '')}"
                               placeholder="https://example.com"
                               aria-label="Link URL"
                               onchange="updateGroupLink(${group.id}, ${link.id}, 'url', this.value)"
                               onblur="validateUrlInput(this)">
                        <button type="button" class="btn btn-danger btn-sm" onclick="removeLinkFromGroup(${group.id}, ${link.id})" aria-label="Remove link ${escapeHtml(link.name) || linkIndex + 1}">
                            <span aria-hidden="true">X</span>
                            <span class="visually-hidden">Remove</span>
                        </button>
                    </div>
                `).join('')}
                <button type="button" class="btn btn-secondary btn-sm" onclick="addLinkToGroup(${group.id})" aria-label="Add link to ${escapeHtml(group.name) || 'this group'}">+ Add Link</button>
            </div>
        </fieldset>
    `).join('');
}

// Render ungrouped links
function renderUngroupedLinks() {
    const container = document.getElementById('ungroupedLinksContainer');

    const dropZoneAttrs = `ondragover="handleUngroupedContainerDragOver(event)" ondragleave="handleUngroupedContainerDragLeave(event)" ondrop="handleUngroupedContainerDrop(event)"`;

    if (ungroupedLinks.length === 0) {
        container.innerHTML = `<div class="ungrouped-drop-zone" ${dropZoneAttrs}><p class="empty-message">Drag links here to make them standalone</p></div>`;
        return;
    }

    container.innerHTML = `<div role="list" aria-label="Standalone links" ${dropZoneAttrs}>` + ungroupedLinks.map((link, linkIndex) => `
        <div class="link-row" style="margin-bottom: 0.75rem;" role="listitem"
             draggable="true"
             ondragstart="handleUngroupedDragStart(event, ${link.id})"
             ondragend="handleUngroupedDragEnd(event)"
             ondragover="handleUngroupedDragOver(event)"
             ondragleave="handleUngroupedDragLeave(event)"
             ondrop="handleUngroupedDrop(event, ${link.id})">
            <span class="drag-handle" title="Drag to reorder">⋮</span>
            <input type="text" id="ungrouped-name-${link.id}" value="${escapeHtml(link.name)}"
                   placeholder="Display name"
                   aria-label="Link display name"
                   class="${!link.name ? 'empty-warning' : ''}"
                   title="${!link.name ? 'Empty names will not appear in the generated page' : ''}"
                   onchange="updateUngroupedLink(${link.id}, 'name', this.value)">
            <input type="text" id="ungrouped-icon-${link.id}" value="${escapeHtml(link.icon || '')}"
                   placeholder="Icon URL (optional)"
                   aria-label="Link icon URL"
                   class="link-icon-input"
                   onchange="updateUngroupedLink(${link.id}, 'icon', this.value)">
            <button type="button" class="btn btn-secondary btn-sm icon-picker-btn" onclick="openIconPicker('link', 'ungrouped', 0, ${link.id})" title="Choose from library">Library</button>
            <label for="ungrouped-icon-upload-${link.id}" class="btn btn-secondary btn-sm upload-btn" title="Upload SVG">
                SVG
                <input type="file" id="ungrouped-icon-upload-${link.id}" accept=".svg,image/svg+xml"
                       onchange="handleLinkIconUpload('ungrouped', 0, ${link.id}, this)" class="visually-hidden">
            </label>
            <button type="button" class="btn btn-sm" onclick="clearLinkIcon('ungrouped', 0, ${link.id})" aria-label="Clear icon" title="Clear">✕</button>
            <input type="url" id="ungrouped-url-${link.id}" value="${escapeHtml(link.url || '')}"
                   placeholder="https://example.com"
                   aria-label="Link URL"
                   onchange="updateUngroupedLink(${link.id}, 'url', this.value)"
                   onblur="validateUrlInput(this)">
            <button type="button" class="btn btn-danger btn-sm" onclick="removeUngroupedLink(${link.id})" aria-label="Remove link ${escapeHtml(link.name) || linkIndex + 1}">
                <span aria-hidden="true">X</span>
                <span class="visually-hidden">Remove</span>
            </button>
        </div>
    `).join('') + `</div>`;
}

// Escape HTML for safe insertion
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
}

// Generate the HTML content
function generateHTML(useComputerNameVariable = false) {
    const pageTitle = document.getElementById('pageTitle').value || 'Landing Page';
    const greeting = document.getElementById('greeting').value.trim();
    const greetingFontSize = document.getElementById('greetingFontSize').value || DEFAULTS.greetingFontSize;
    const greetingSpacing = document.getElementById('greetingSpacing').value || DEFAULTS.greetingSpacing;
    const showComputerName = document.getElementById('showComputerName').checked;
    const computerNamePosition = document.getElementById('computerNamePosition').value;
    const showNetworkIdentifier = document.getElementById('showNetworkIdentifier').checked;
    const networkIdentifierPosition = document.getElementById('networkIdentifierPosition').value;
    const networkIdentifierDisplay = document.getElementById('networkIdentifierDisplay').value;
    const networkIdentifierPattern = document.getElementById('networkIdentifierPattern').value.trim()
        || DEFAULTS.networkIdentifierPattern;
    const networkIdentifierFallback = document.getElementById('networkIdentifierFallback').value.trim()
        || DEFAULTS.networkIdentifierFallback;
    const showDateTime = document.getElementById('showDateTime').checked;
    const dateTimeFormat = document.getElementById('dateTimeFormat').value;
    const dateTimePosition = document.getElementById('dateTimePosition').value;
    const topLogoUrl = document.getElementById('topLogoUrl').value.trim();
    const topLogoWidth = document.getElementById('topLogoWidth').value || DEFAULTS.topLogoWidth;
    const topLogoSpacing = document.getElementById('topLogoSpacing').value || DEFAULTS.topLogoSpacing;
    const sideLogoUrl = document.getElementById('sideLogoUrl').value.trim();
    const sideLogoPosition = document.getElementById('sideLogoPosition').value;
    const showFooter = document.getElementById('showFooter').checked;
    const enableAutoRefresh = document.getElementById('enableAutoRefresh').checked;
    const autoRefreshDelay = document.getElementById('autoRefreshDelay').value || '30';
    const autoRefreshUrl = document.getElementById('autoRefreshUrl').value.trim();
    const footerText = document.getElementById('footerText').value || '';

    // Link layout settings
    const linkLayout = document.getElementById('linkLayout').value || DEFAULTS.linkLayout;
    const buttonStyle = document.getElementById('buttonStyle').value || DEFAULTS.buttonStyle;
    const buttonSize = document.getElementById('buttonSize').value || DEFAULTS.buttonSize;
    const gridColumns = document.getElementById('gridColumns').value || DEFAULTS.gridColumns;

    // Announcement banner settings
    const bannerEnabled = document.getElementById('bannerEnabled').checked;
    const bannerTitle = document.getElementById('bannerTitle').value.trim();
    const bannerMessage = document.getElementById('bannerMessage').value.trim();
    const bannerStyle = document.getElementById('bannerStyle').value || DEFAULTS.bannerStyle;
    const bannerColors = BANNER_STYLES[bannerStyle] || BANNER_STYLES.info;

    // Popup window settings
    const openLinksInPopup = document.getElementById('openLinksInPopup').checked;
    const popupWidth = document.getElementById('popupWidth').value || DEFAULTS.popupWidth;
    const popupHeight = document.getElementById('popupHeight').value || DEFAULTS.popupHeight;
    const popupAutoClose = document.getElementById('popupAutoClose').checked;
    const popupAutoCloseDelay = document.getElementById('popupAutoCloseDelay').value || DEFAULTS.popupAutoCloseDelay;

    const colors = getActiveColors();
    const autoRefreshValid = autoRefreshUrl && isValidUrl(autoRefreshUrl);
    const shouldAutoRefresh = enableAutoRefresh && autoRefreshValid;

    const computerNameDisplay = useComputerNameVariable ? '$computerName' : 'COMPUTER-NAME';
    const networkDisplayValue = useComputerNameVariable ? '$networkDisplay' : networkIdentifierFallback;
    const networkInFooter = showNetworkIdentifier && networkIdentifierPosition === 'footer';

    // Build links HTML
    let linksHTML = '';

    // Add grouped links
    const validGroups = groups.filter(g => g.name && g.links.some(l => l.name && l.url));
    if (validGroups.length > 0) {
        linksHTML += validGroups.map(group => {
            const validLinks = group.links.filter(l => l.name && l.url);
            if (validLinks.length === 0) return '';

            const groupId = `group-${group.id}`;
            const groupIconHtml = group.icon ? `<img class="group-icon" src="${escapeHtml(group.icon)}" alt="">` : '';
            return `
            <section class="link-group" aria-labelledby="${groupId}-heading">
                <div class="group-heading-row">
                    ${groupIconHtml}<h2 id="${groupId}-heading" class="group-heading">${escapeHtml(group.name)}</h2>
                </div>
                <ul class="links-list">
                    ${validLinks.map(link => {
                        const href = escapeHtml(link.url);
                        const iconHtml = link.icon ? `<img class="link-icon" src="${escapeHtml(link.icon)}" alt="">` : '';
                        const popupAttr = openLinksInPopup ? ` onclick="openPopup('${href.replace(/'/g, "\\'")}'); return false;"` : '';
                        return `<li><a href="${href}" class="link-button style-${buttonStyle} size-${buttonSize}"${popupAttr}>${iconHtml}${escapeHtml(link.name)}</a></li>`;
                    }).join('')}
                </ul>
            </section>`;
        }).join('');
    }

    // Add standalone links (no group heading)
    const validUngrouped = ungroupedLinks.filter(l => l.name && l.url);
    if (validUngrouped.length > 0) {
        linksHTML += `
            <div class="standalone-links">
                ${validUngrouped.map(link => {
                    const href = escapeHtml(link.url);
                    const iconHtml = link.icon ? `<img class="link-icon" src="${escapeHtml(link.icon)}" alt="">` : '';
                    const popupAttr = openLinksInPopup ? ` onclick="openPopup('${href.replace(/'/g, "\\'")}'); return false;"` : '';
                    return `<a href="${href}" class="link-button standalone style-${buttonStyle} size-${buttonSize}"${popupAttr}>${iconHtml}${escapeHtml(link.name)}</a>`;
                }).join('')}
            </div>`;
    }

    // If no links at all, show placeholder
    if (!linksHTML) {
        linksHTML = `
            <p style="color: rgba(255,255,255,0.7); font-style: italic;">No links configured</p>`;
    }

    const topLogoHTML = topLogoUrl ? `<img class="top-logo" src="${escapeHtml(topLogoUrl)}" alt="Logo">` : '';
    const sideLogoHTML = sideLogoUrl ? `<img class="side-logo" src="${escapeHtml(sideLogoUrl)}" alt="">` : '';
    const cornerPositions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
    const isSideLogoCorner = sideLogoUrl && cornerPositions.includes(sideLogoPosition);

    // Build welcome header with proper structure
    let welcomeHeader = '';
    if (topLogoUrl) {
        welcomeHeader += `
        <div class="top-logo-container">
            ${topLogoHTML}
        </div>`;
    }

    if (sideLogoUrl && !isSideLogoCorner) {
        // Side logo next to greeting
        const logoFirst = sideLogoPosition === 'left';
        if (greeting) {
            welcomeHeader += `
        <div class="greeting-row${sideLogoPosition === 'right' ? ' logo-right' : ''}">
            ${logoFirst ? sideLogoHTML : ''}<h1 class="greeting-text">${escapeHtml(greeting)}</h1>${!logoFirst ? sideLogoHTML : ''}
        </div>`;
        } else {
            welcomeHeader += `
        <div class="greeting-row">
            ${sideLogoHTML}
        </div>`;
        }
    } else {
        welcomeHeader += `
        ${greeting ? `<h1 class="greeting-text">${escapeHtml(greeting)}</h1>` : ''}`;
    }

    // Corner logo overlay HTML (rendered separately in body)
    const cornerLogoHTML = isSideLogoCorner ? `
    <div class="corner-logo ${sideLogoPosition}">
        <img src="${escapeHtml(sideLogoUrl)}" alt="Logo">
    </div>` : '';

    // Build configuration object for import/export
    const config = {
        version: '1.1',
        generator: 'Landing Page Studio',
        appVersion: APP_VERSION,
        settings: {
            pageTitle,
            greeting,
            greetingFontSize,
            greetingSpacing,
            showComputerName,
            computerNamePosition,
            showNetworkIdentifier,
            networkIdentifierPosition,
            networkIdentifierDisplay,
            networkIdentifierPattern,
            networkIdentifierFallback,
            showDateTime,
            dateTimeFormat,
            dateTimePosition,
            topLogoUrl,
            topLogoWidth,
            topLogoSpacing,
            sideLogoUrl,
            sideLogoPosition,
            showFooter,
            footerText,
            enableAutoRefresh,
            autoRefreshDelay,
            autoRefreshUrl
        },
        theme: {
            selectedTheme,
            customColors: selectedTheme === 'custom' ? customColors : null,
            colorOverrides: Object.keys(colorOverrides).length > 0 ? colorOverrides : null,
            primary: colors.primary,
            accent: colors.accent
        },
        groups: groups.map(g => ({
            name: g.name,
            icon: g.icon || '',
            links: g.links.map(l => ({
                name: l.name,
                url: l.url || '',
                icon: l.icon || ''
            }))
        })),
        ungroupedLinks: ungroupedLinks.map(l => ({
            name: l.name,
            url: l.url || '',
            icon: l.icon || ''
        }))
    };
    const configJson = JSON.stringify(config);

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="generator" content="Landing Page Studio">
    <meta name="generator-version" content="${APP_VERSION}">
    <meta name="description" content="Quick links landing page">${shouldAutoRefresh ? `
    <meta http-equiv="refresh" content="${autoRefreshDelay};url=${escapeHtml(autoRefreshUrl)}">` : ''}
    <title>${escapeHtml(pageTitle)}</title>
    <style>
        :root {
            --background: ${colors.background};
            --body-text: ${colors.bodyText};
            --link-bg: ${colors.linkBg};
            --link-text: ${colors.linkText};
            --link-hover-bg: ${colors.linkHoverBg};
            --link-hover-text: ${colors.linkHoverText};
            --heading-color: ${colors.headingColor};
            /* Legacy variables for compatibility */
            --primary-color: ${colors.background};
            --accent-color: ${colors.linkBg};
            --white: ${colors.bodyText};
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html, body {
            height: 100%;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--background);
            color: var(--body-text);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--link-bg);
            color: var(--link-text);
            padding: 8px 16px;
            z-index: 100;
            font-weight: bold;
            text-decoration: none;
        }

        .skip-link:focus {
            top: 0;
        }

        .computer-name {
            position: fixed;
            background-color: var(--white);
            color: var(--primary-color);
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.875rem;
            font-weight: 600;
            z-index: 50;
        }

        .computer-name.top-right,
        .network-identifier.top-right {
            top: 1rem;
            right: 1rem;
        }

        .computer-name.top-center,
        .network-identifier.top-center {
            top: 1rem;
            left: 50%;
            transform: translateX(-50%);
        }

        .computer-name.top-left,
        .network-identifier.top-left {
            top: 1rem;
            left: 1rem;
        }

        .computer-name.bottom-right,
        .network-identifier.bottom-right {
            bottom: 1rem;
            right: 1rem;
        }

        .computer-name.bottom-center,
        .network-identifier.bottom-center {
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
        }

        .computer-name.bottom-left,
        .network-identifier.bottom-left {
            bottom: 1rem;
            left: 1rem;
        }

        .network-identifier {
            position: fixed;
            background-color: var(--white);
            color: var(--primary-color);
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.875rem;
            font-weight: 600;
            z-index: 50;
        }

        .date-time {
            position: fixed;
            background-color: var(--white);
            color: var(--primary-color);
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.875rem;
            font-weight: 600;
            font-family: 'Consolas', 'Monaco', monospace;
            z-index: 50;
        }

        .date-time.top-right {
            top: 1rem;
            right: 1rem;
        }

        .date-time.top-center {
            top: 1rem;
            left: 50%;
            transform: translateX(-50%);
        }

        .date-time.top-left {
            top: 1rem;
            left: 1rem;
        }

        .date-time.bottom-right {
            bottom: 1rem;
            right: 1rem;
        }

        .date-time.bottom-center {
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
        }

        .date-time.bottom-left {
            bottom: 1rem;
            left: 1rem;
        }

        .corner-logo {
            position: fixed;
            z-index: 50;
            max-width: 120px;
            max-height: 60px;
        }

        .corner-logo img {
            max-width: 100%;
            max-height: 60px;
            object-fit: contain;
        }

        .corner-logo.top-right {
            top: 1rem;
            right: 1rem;
        }

        .corner-logo.top-center {
            top: 1rem;
            left: 50%;
            transform: translateX(-50%);
        }

        .corner-logo.top-left {
            top: 1rem;
            left: 1rem;
        }

        .corner-logo.bottom-right {
            bottom: 1rem;
            right: 1rem;
        }

        .corner-logo.bottom-center {
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
        }

        .corner-logo.bottom-left {
            bottom: 1rem;
            left: 1rem;
        }

        .footer-datetime {
            font-family: 'Consolas', 'Monaco', monospace;
            margin-top: 0.5rem;
        }

        main {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            text-align: center;
            padding: 2rem;
        }

        .top-logo-container {
            display: flex;
            justify-content: center;
            margin-bottom: ${topLogoSpacing}rem;
        }

        .top-logo {
            width: ${topLogoWidth}px;
            height: auto;
        }

        .greeting-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.25rem;
            margin-bottom: ${greetingSpacing}rem;
        }

        .greeting-row.logo-right {
            flex-direction: row;
        }

        .side-logo {
            width: 64px;
            height: auto;
            flex-shrink: 0;
        }

        .greeting-text {
            font-size: ${greetingFontSize}rem;
            color: var(--white);
            margin: 0 0 ${greetingSpacing}rem 0;
        }

        .greeting-row .greeting-text {
            margin: 0;
        }

        .links-container {
            width: 100%;
            max-width: 1400px;
            padding: 0 1rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
        }

        .link-group {
            flex: 0 1 280px;
            max-width: 350px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 1.25rem;
        }

        .group-heading-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        }

        .group-icon {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
        }

        .group-heading {
            font-size: 0.875rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--heading-color);
            margin: 0;
        }

        .links-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            padding: 0;
            margin: 0;
        }

        .standalone-links {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: center;
            margin-top: 1.5rem;
        }

        .standalone-links .link-button {
            min-width: 150px;
        }

        .links-list li {
            display: flex;
        }

        .link-button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            flex: 1;
            background-color: var(--link-bg);
            color: var(--link-text);
            text-decoration: none;
            padding: 1rem 1.5rem;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 8px;
            border: 3px solid var(--link-bg);
            transition: background-color 0.2s ease, color 0.2s ease, transform 0.1s ease;
            min-height: 44px;
            min-width: 44px;
        }

        .link-icon {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
        }

        .link-button:hover,
        .link-button:focus {
            background-color: var(--link-hover-bg);
            color: var(--link-hover-text);
            outline: none;
            box-shadow: 0 0 0 4px var(--link-bg);
            transform: scale(1.02);
        }

        .link-button:active {
            transform: scale(0.98);
        }

        footer {
            padding: 1rem;
            text-align: center;
            font-size: 0.75rem;
            color: var(--white);
            opacity: 0.7;
        }

        .link-button:focus-visible {
            outline: 3px solid var(--white);
            outline-offset: 2px;
        }

        .skip-link:focus-visible {
            outline: 3px solid var(--primary-color);
            outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
            .link-button {
                transition: none;
            }
        }

        @media (prefers-contrast: high) {
            .link-button {
                border: 3px solid var(--white);
            }
        }

        @media (max-width: 600px) {
            .link-group {
                flex: 1 1 100%;
                max-width: none;
            }
            .greeting-text {
                font-size: 2rem;
            }
        }

        /* Layout variations */
        .links-container.layout-list {
            flex-direction: column;
            max-width: 800px;
        }

        .links-container.layout-list .link-group {
            flex: 1 1 100%;
            max-width: none;
            background-color: transparent;
            padding: 0;
            margin-bottom: 1.5rem;
        }

        .links-container.layout-list .group-heading-row {
            border-bottom-color: var(--heading-color);
        }

        .links-container.layout-list .links-list {
            gap: 0.5rem;
        }

        .links-container.layout-list .link-button {
            justify-content: flex-start;
            padding: 0.875rem 1.25rem;
        }

        .links-container.layout-grid {
            display: grid;
            grid-template-columns: repeat(${gridColumns}, 1fr);
            gap: 1rem;
            max-width: 1200px;
        }

        .links-container.layout-grid .link-group {
            display: contents;
        }

        .links-container.layout-grid .group-heading-row {
            grid-column: 1 / -1;
            margin-top: 1rem;
            background: transparent;
        }

        .links-container.layout-grid .links-list {
            display: contents;
        }

        .links-container.layout-grid .links-list li {
            display: block;
        }

        .links-container.layout-grid .standalone-links {
            grid-column: 1 / -1;
            display: contents;
        }

        /* Button style variations */
        .link-button.style-square {
            border-radius: 0;
        }

        .link-button.style-textonly {
            background-color: transparent;
            border-color: transparent;
            color: var(--body-text);
            text-decoration: underline;
            padding: 0.5rem 0.75rem;
        }

        .link-button.style-textonly:hover,
        .link-button.style-textonly:focus {
            background-color: rgba(255, 255, 255, 0.15);
            color: var(--body-text);
            text-decoration: none;
            box-shadow: none;
        }

        /* Button size variations */
        .link-button.size-small {
            padding: 0.6rem 1rem;
            font-size: 0.875rem;
        }
        .link-button.size-small .link-icon {
            width: 16px;
            height: 16px;
        }

        .link-button.size-medium {
            padding: 1rem 1.5rem;
            font-size: 1rem;
        }
        .link-button.size-medium .link-icon {
            width: 20px;
            height: 20px;
        }

        .link-button.size-large {
            padding: 1.25rem 2rem;
            font-size: 1.125rem;
        }
        .link-button.size-large .link-icon {
            width: 24px;
            height: 24px;
        }

        /* Announcement banner */
        .announcement-banner {
            width: 100%;
            max-width: 1400px;
            padding: 1rem 1.5rem;
            margin-bottom: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid;
            text-align: left;
        }

        .announcement-banner.banner-info {
            background-color: ${bannerColors.bg};
            border-color: ${bannerColors.border};
            color: ${bannerColors.text};
        }

        .announcement-banner.banner-warning {
            background-color: ${BANNER_STYLES.warning.bg};
            border-color: ${BANNER_STYLES.warning.border};
            color: ${BANNER_STYLES.warning.text};
        }

        .announcement-banner.banner-urgent {
            background-color: ${BANNER_STYLES.urgent.bg};
            border-color: ${BANNER_STYLES.urgent.border};
            color: ${BANNER_STYLES.urgent.text};
        }

        .banner-title {
            font-weight: 700;
            font-size: 1rem;
            margin-bottom: 0.25rem;
        }

        .banner-message {
            font-size: 0.9375rem;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
${showComputerName ? `
    <div class="computer-name ${computerNamePosition}" role="status" aria-label="Computer name: ${computerNameDisplay}">
        ${computerNameDisplay}
    </div>
` : ''}
${showNetworkIdentifier && networkIdentifierPosition !== 'footer' ? `
    <div class="network-identifier ${networkIdentifierPosition}" role="status" aria-label="Network identifier: ${networkDisplayValue}">
        ${networkDisplayValue}
    </div>
` : ''}
${showDateTime && dateTimePosition !== 'footer' ? `
    <div class="date-time ${dateTimePosition}" role="timer" aria-label="Current date and time" id="datetime-display">
        --
    </div>
` : ''}
${cornerLogoHTML}
    <main id="main-content" role="main">
        ${bannerEnabled && bannerMessage ? `
        <div class="announcement-banner banner-${bannerStyle}" role="alert">
            ${bannerTitle ? `<div class="banner-title">${escapeHtml(bannerTitle)}</div>` : ''}
            <div class="banner-message">${escapeHtml(bannerMessage)}</div>
        </div>` : ''}

        ${welcomeHeader}

        <nav class="links-container layout-${linkLayout}" aria-label="Quick links">
${linksHTML}
        </nav>
    </main>
${(showFooter && footerText) || (showDateTime && dateTimePosition === 'footer') || networkInFooter ? `
    <footer role="contentinfo">
        ${showFooter && footerText ? `<p>${escapeHtml(footerText)}</p>` : ''}
        ${showDateTime && dateTimePosition === 'footer' ? `<p class="footer-datetime" id="datetime-display">--</p>` : ''}
        ${networkInFooter ? `<p>${escapeHtml(networkDisplayValue)}</p>` : ''}
    </footer>
` : ''}
${showDateTime ? `
    <script>
        function updateDateTime() {
            const now = new Date();
            const format = '${dateTimeFormat}';
            let display = '';

            if (format === 'date' || format === 'both') {
                display += now.toISOString().split('T')[0];
            }
            if (format === 'both') {
                display += ' ';
            }
            if (format === 'time' || format === 'both') {
                display += now.toTimeString().split(' ')[0];
            }

            document.getElementById('datetime-display').textContent = display;
        }
        updateDateTime();
        setInterval(updateDateTime, 1000);
    <` + `/script>
` : ''}
${openLinksInPopup ? `
    <script>
        function openPopup(url) {
            const width = ${popupWidth};
            const height = ${popupHeight};
            const left = (screen.width - width) / 2;
            const top = (screen.height - height) / 2;
            const features = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ',resizable=yes,scrollbars=yes,status=yes,toolbar=yes,menubar=no,location=yes';
            const popup = window.open(url, '_blank', features);
            ${popupAutoClose ? `
            if (popup) {
                // Inject auto-close script into popup
                const autoCloseDelay = ${popupAutoCloseDelay} * 1000;
                const checkInterval = setInterval(function() {
                    if (popup.closed) {
                        clearInterval(checkInterval);
                        return;
                    }
                    try {
                        // Try to inject the auto-close script
                        if (popup.document && popup.document.body && !popup.autoCloseInjected) {
                            popup.autoCloseInjected = true;
                            popup.lastActivity = Date.now();

                            // Track activity
                            popup.document.addEventListener('mousemove', function() { popup.lastActivity = Date.now(); });
                            popup.document.addEventListener('keydown', function() { popup.lastActivity = Date.now(); });
                            popup.document.addEventListener('click', function() { popup.lastActivity = Date.now(); });
                            popup.document.addEventListener('scroll', function() { popup.lastActivity = Date.now(); });

                            // Create countdown overlay
                            const overlay = popup.document.createElement('div');
                            overlay.id = 'auto-close-overlay';
                            overlay.style.cssText = 'display:none;position:fixed;bottom:20px;right:20px;background:rgba(0,0,0,0.8);color:white;padding:15px 20px;border-radius:8px;font-family:sans-serif;font-size:14px;z-index:999999;';
                            overlay.innerHTML = 'Closing in <span id="countdown"></span>s - <a href="#" onclick="window.lastActivity=Date.now();this.parentElement.style.display=\\'none\\';return false;" style="color:#fff;text-decoration:underline;">Stay open</a>';
                            popup.document.body.appendChild(overlay);

                            // Check for inactivity
                            setInterval(function() {
                                const elapsed = Date.now() - popup.lastActivity;
                                const remaining = Math.ceil((autoCloseDelay - elapsed) / 1000);

                                if (remaining <= 30 && remaining > 0) {
                                    overlay.style.display = 'block';
                                    overlay.querySelector('#countdown').textContent = remaining;
                                } else {
                                    overlay.style.display = 'none';
                                }

                                if (elapsed >= autoCloseDelay) {
                                    popup.close();
                                }
                            }, 1000);
                        }
                    } catch (e) {
                        // Cross-origin - can't inject, just use simple timeout
                        clearInterval(checkInterval);
                        setTimeout(function() {
                            if (!popup.closed) popup.close();
                        }, autoCloseDelay);
                    }
                }, 500);
            }
            ` : ''}
        }
    <` + `/script>
` : ''}
    <script type="application/json" id="landing-page-studio-config">
        ${configJson.replace(/</g, '\\u003c')}
    </script>
</body>
</html>`;
}

// Update date/time position options to exclude reserved positions
function updateDateTimePositionOptions() {
    const showComputerName = document.getElementById('showComputerName').checked;
    const computerNamePosition = document.getElementById('computerNamePosition').value;
    const showNetworkIdentifier = document.getElementById('showNetworkIdentifier').checked;
    const networkIdentifierPosition = document.getElementById('networkIdentifierPosition').value;
    const dateTimeSelect = document.getElementById('dateTimePosition');
    const currentValue = dateTimeSelect.value;

    const allPositions = [
        { value: 'top-right', label: 'Top Right' },
        { value: 'top-center', label: 'Top Center' },
        { value: 'top-left', label: 'Top Left' },
        { value: 'bottom-right', label: 'Bottom Right' },
        { value: 'bottom-center', label: 'Bottom Center' },
        { value: 'bottom-left', label: 'Bottom Left' },
        { value: 'footer', label: 'In Footer' }
    ];

    const blockedPositions = [];
    if (showComputerName) {
        blockedPositions.push(computerNamePosition);
    }
    if (showNetworkIdentifier && networkIdentifierPosition !== 'footer') {
        blockedPositions.push(networkIdentifierPosition);
    }
    const availablePositions = blockedPositions.length
        ? allPositions.filter(p => !blockedPositions.includes(p.value))
        : allPositions;

    // Rebuild options
    dateTimeSelect.innerHTML = availablePositions.map(p =>
        `<option value="${p.value}">${p.label}</option>`
    ).join('');

    // Try to restore previous selection, or pick first available
    if (availablePositions.some(p => p.value === currentValue)) {
        dateTimeSelect.value = currentValue;
    } else {
        dateTimeSelect.value = availablePositions[0].value;
    }
}

// Update the preview iframe
function updatePreview() {
    const iframe = document.getElementById('previewFrame');
    const html = generateHTML(false);
    iframe.srcdoc = html;

    // Toggle footer text visibility
    const showFooter = document.getElementById('showFooter').checked;
    document.getElementById('footerTextGroup').style.display = showFooter ? 'block' : 'none';

    // Toggle computer name position visibility
    const showComputerName = document.getElementById('showComputerName').checked;
    document.getElementById('computerNamePositionGroup').style.display = showComputerName ? 'block' : 'none';

    // Toggle date/time options visibility
    const showDateTime = document.getElementById('showDateTime').checked;
    document.getElementById('dateTimeOptionsGroup').style.display = showDateTime ? 'block' : 'none';
    document.getElementById('dateTimePositionGroup').style.display = showDateTime ? 'block' : 'none';

    // Toggle network identifier visibility
    const showNetworkIdentifier = document.getElementById('showNetworkIdentifier').checked;
    document.getElementById('networkIdentifierPositionGroup').style.display = showNetworkIdentifier ? 'block' : 'none';
    document.getElementById('networkIdentifierDetails').style.display = showNetworkIdentifier ? 'block' : 'none';

    // Update date/time position options when computer name settings change
    if (showDateTime) {
        updateDateTimePositionOptions();
    }

    // Toggle side logo position visibility
    const sideLogoUrl = document.getElementById('sideLogoUrl').value.trim();
    document.getElementById('sideLogoPositionGroup').style.display = sideLogoUrl ? 'block' : 'none';

    // Toggle auto-refresh options visibility
    const enableAutoRefresh = document.getElementById('enableAutoRefresh').checked;
    document.getElementById('autoRefreshOptionsGroup').style.display = enableAutoRefresh ? 'block' : 'none';

    // Toggle announcement banner options visibility
    const bannerEnabled = document.getElementById('bannerEnabled').checked;
    document.getElementById('bannerOptionsGroup').style.display = bannerEnabled ? 'block' : 'none';

    // Toggle grid columns visibility
    const linkLayout = document.getElementById('linkLayout').value;
    document.getElementById('gridColumnsGroup').style.display = linkLayout === 'grid' ? 'block' : 'none';

    // Toggle popup options visibility
    const openLinksInPopup = document.getElementById('openLinksInPopup').checked;
    document.getElementById('popupOptionsGroup').style.display = openLinksInPopup ? 'block' : 'none';

    // Toggle auto-close delay visibility
    const popupAutoClose = document.getElementById('popupAutoClose').checked;
    document.getElementById('popupAutoCloseDelayGroup').style.display = popupAutoClose ? 'block' : 'none';

    // Save state to localStorage
    saveState();
}

// Generate PowerShell script
function generatePowerShellScript() {
    const htmlContent = generateHTML(true);
    // Escape for PowerShell here-string (just need to escape @" and "@ if they appear)
    const escapedHtml = htmlContent.replace(/"@/g, '`"@').replace(/@"/g, '@`"');

    // Get script name and destination path
    const scriptName = document.getElementById('scriptName').value || 'MyLandingPage';
    const sanitizedScriptName = scriptName.replace(/[^a-zA-Z0-9_-]/g, '_');
    const destinationPath = document.getElementById('destinationPath').value || 'C:\\ProgramData\\LandingPage\\index.html';
    const escapedDestPath = destinationPath.replace(/\\/g, '\\\\');
    const folderPath = destinationPath.substring(0, destinationPath.lastIndexOf('\\')) || 'C:\\ProgramData\\LandingPage';
    const escapedFolderPath = folderPath.replace(/\\/g, '\\\\');

    // Get network identifier settings
    const networkIdentifierDisplay = document.getElementById('networkIdentifierDisplay').value || DEFAULTS.networkIdentifierDisplay;
    const networkIdentifierPattern = document.getElementById('networkIdentifierPattern').value.trim() || DEFAULTS.networkIdentifierPattern;
    const networkIdentifierFallback = document.getElementById('networkIdentifierFallback').value.trim() || DEFAULTS.networkIdentifierFallback;

    // Get the filename from destination path for uninstall
    const fileName = destinationPath.substring(destinationPath.lastIndexOf('\\') + 1) || 'index.html';

    return `# Generate-LandingPage_${sanitizedScriptName}.ps1
# Generated by Landing Page Studio
# Author: Joshua Walderbach

param(
    [switch]$Uninstall
)

$outputFolder = "${escapedFolderPath}"
$outputPath = "${escapedDestPath}"
$logFolder = "${escapedFolderPath}\\Logs"
$timestamp = Get-Date -Format 'yyyy-MM-ddTHH-mm-ss'

# Create log directory if it doesn't exist
if (-not (Test-Path $logFolder)) {
    New-Item -ItemType Directory -Path $logFolder -Force | Out-Null
}

function Write-Log {
    param([string]$Message)
    $logLine = "$(Get-Date -Format 'yyyy-MM-ddTHH:mm:ss') $Message"
    Write-Host $logLine
    Add-Content -Path $script:logFile -Value $logLine -ErrorAction SilentlyContinue
}

if ($Uninstall) {
    # Uninstall mode
    $logFile = Join-Path $logFolder "Uninstall-LandingPage_${sanitizedScriptName}_$timestamp.log"

    Write-Log "Uninstall started"
    Write-Log "Computer name: $env:COMPUTERNAME"
    Write-Log "Target folder: $outputFolder"

    try {
        # Remove the HTML file
        if (Test-Path $outputPath) {
            Remove-Item -Path $outputPath -Force
            Write-Log "Removed: ${fileName}"
        } else {
            Write-Log "File not found: ${fileName}"
        }

        Write-Log "Uninstall completed successfully"
        Write-Log "Log file: $logFile"
        exit 0
    } catch {
        Write-Log "ERROR: $_"
        Write-Log "Uninstall failed"
        exit 1
    }
} else {
    # Install mode
    $logFile = Join-Path $logFolder "Generate-LandingPage_${sanitizedScriptName}_$timestamp.log"

    $computerName = $env:COMPUTERNAME
    $networkDisplay = '${networkIdentifierFallback.replace(/'/g, "''")}'
    $networkPattern = '${networkIdentifierPattern.replace(/'/g, "''")}'
    $networkMode = '${networkIdentifierDisplay.replace(/'/g, "''")}'
    try {
        $dnsName = [System.Net.Dns]::GetHostEntry($env:COMPUTERNAME).HostName
        if ($networkMode -eq 'fqdn') {
            $networkDisplay = $dnsName
        } elseif ($dnsName -match $networkPattern) {
            if ($networkMode -eq 'site' -and $Matches.Count -ge 2) {
                $networkDisplay = $Matches[1]
            } elseif ($networkMode -eq 'region' -and $Matches.Count -ge 3) {
                $networkDisplay = $Matches[2]
            }
        }
    } catch {
        $networkDisplay = '${networkIdentifierFallback.replace(/'/g, "''")}'
    }

    Write-Log "Install started"
    Write-Log "Computer name: $computerName"
    Write-Log "Output path: $outputPath"

    try {
        # Create output directory if it doesn't exist
        if (-not (Test-Path $outputFolder)) {
            New-Item -ItemType Directory -Path $outputFolder -Force | Out-Null
            Write-Log "Created directory: $outputFolder"
        }

$htmlContent = @"
${escapedHtml}
"@

        # Write the HTML file
        $htmlContent | Out-File -FilePath $outputPath -Encoding UTF8 -Force
        Write-Log "Landing page generated successfully"

        Write-Log "Install completed successfully"
        Write-Log "Log file: $logFile"
        exit 0
    } catch {
        Write-Log "ERROR: $_"
        Write-Log "Install failed"
        exit 1
    }
}
`;
}

// Show instruction modal
function showInstructionModal() {
    // Save the element that triggered the modal for focus restoration
    modalTriggerElement = document.activeElement;

    const showComputerName = document.getElementById('showComputerName').checked;
    const scriptName = document.getElementById('scriptName').value || 'MyLandingPage';
    const sanitizedScriptName = scriptName.replace(/[^a-zA-Z0-9_-]/g, '_');
    const scriptFilename = `Generate-LandingPage_${sanitizedScriptName}.ps1`;
    const destinationPath = document.getElementById('destinationPath').value || 'C:\\ProgramData\\LandingPage\\index.html';
    const folderPath = destinationPath.substring(0, destinationPath.lastIndexOf('\\')) || 'C:\\ProgramData\\LandingPage';
    const fileName = destinationPath.substring(destinationPath.lastIndexOf('\\') + 1) || 'index.html';

    let computerNameNote = '';
    if (showComputerName) {
        computerNameNote = '<p><strong>Note:</strong> The computer name will be automatically detected when the script runs on the target machine.</p>';
    }

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <details class="deployment-section" open>
            <summary><h3>Manual Deployment</h3></summary>
            <ol>
                <li>Copy <code>${escapeHtml(scriptFilename)}</code> to your target computer</li>
                <li>Open <strong>PowerShell</strong> as Administrator</li>
                <li>Run the script:
                    <div class="code-block">powershell -ExecutionPolicy Bypass -File "${escapeHtml(scriptFilename)}"</div>
                </li>
                <li>Open the landing page in your browser:
                    <div class="code-block">${escapeHtml(destinationPath)}</div>
                </li>
            </ol>
            ${computerNameNote}
            <h4>Setting as Browser Homepage</h4>
            <p>To use this as your browser's start page, set the homepage URL to:</p>
            <div class="code-block">file:///${escapeHtml(destinationPath.replace(/\\/g, '/'))}</div>
        </details>

        <details class="deployment-section">
            <summary><h3>Intune Win32 App Deployment</h3></summary>

            <h4>Step 1: Package the Script</h4>
            <p>Download the <a href="https://github.com/microsoft/Microsoft-Win32-Content-Prep-Tool" target="_blank" rel="noopener">Win32 Content Prep Tool</a>, then run:</p>
            <div class="code-block">IntuneWinAppUtil.exe -c "SourceFolder" -s "${escapeHtml(scriptFilename)}" -o "OutputFolder"</div>

            <h4>Step 2: Intune App Settings</h4>

            <p><strong>Install command:</strong></p>
            <div class="code-block">powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File "${escapeHtml(scriptFilename)}"</div>

            <p><strong>Uninstall command:</strong></p>
            <div class="code-block">powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File "${escapeHtml(scriptFilename)}" -Uninstall</div>

            <h4>Step 3: Detection Rule</h4>
            <table class="detection-table">
                <tr><td><strong>Rule type:</strong></td><td>File</td></tr>
                <tr><td><strong>Path:</strong></td><td><code>${escapeHtml(folderPath)}</code></td></tr>
                <tr><td><strong>File or folder:</strong></td><td><code>${escapeHtml(fileName)}</code></td></tr>
                <tr><td><strong>Detection method:</strong></td><td>File or folder exists</td></tr>
            </table>

            <h4>Additional Settings</h4>
            <table class="detection-table">
                <tr><td><strong>Install behavior:</strong></td><td>System</td></tr>
                <tr><td><strong>Device restart behavior:</strong></td><td>No specific action</td></tr>
            </table>
        </details>
    `;

    document.getElementById('instructionModal').classList.add('visible');
    document.querySelector('.modal-close').focus();
}

// Close modal
function closeModal() {
    document.getElementById('instructionModal').classList.remove('visible');
    // Restore focus to the element that triggered the modal
    if (modalTriggerElement && typeof modalTriggerElement.focus === 'function') {
        modalTriggerElement.focus();
        modalTriggerElement = null;
    }
}

// Close modal on Escape key or click outside
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeIconPicker();
    }
});

document.getElementById('instructionModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

document.getElementById('iconPickerModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeIconPicker();
    }
});

// Download PowerShell script
function downloadScript() {
    if (!validateAllUrls()) return;
    const scriptName = document.getElementById('scriptName').value || 'MyLandingPage';
    const sanitizedScriptName = scriptName.replace(/[^a-zA-Z0-9_-]/g, '_');
    const script = generatePowerShellScript();
    const blob = new Blob([script], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Generate-LandingPage_${sanitizedScriptName}.ps1`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    announce('PowerShell script downloaded');

    // Show instruction modal
    showInstructionModal();
}

// Export configuration as JSON
function exportConfiguration() {
    const scriptName = document.getElementById('scriptName').value || 'MyLandingPage';
    const config = {
        configVersion: '1.0',
        appVersion: APP_VERSION,
        exportedAt: new Date().toISOString(),
        settings: {
            pageTitle: document.getElementById('pageTitle').value,
            greeting: document.getElementById('greeting').value,
            greetingFontSize: document.getElementById('greetingFontSize').value,
            greetingSpacing: document.getElementById('greetingSpacing').value,
            showComputerName: document.getElementById('showComputerName').checked,
            computerNamePosition: document.getElementById('computerNamePosition').value,
            showNetworkIdentifier: document.getElementById('showNetworkIdentifier').checked,
            networkIdentifierPosition: document.getElementById('networkIdentifierPosition').value,
            networkIdentifierDisplay: document.getElementById('networkIdentifierDisplay').value,
            networkIdentifierPattern: document.getElementById('networkIdentifierPattern').value,
            networkIdentifierFallback: document.getElementById('networkIdentifierFallback').value,
            showDateTime: document.getElementById('showDateTime').checked,
            dateTimeFormat: document.getElementById('dateTimeFormat').value,
            dateTimePosition: document.getElementById('dateTimePosition').value,
            topLogoUrl: document.getElementById('topLogoUrl').value,
            topLogoWidth: document.getElementById('topLogoWidth').value,
            topLogoSpacing: document.getElementById('topLogoSpacing').value,
            sideLogoUrl: document.getElementById('sideLogoUrl').value,
            sideLogoPosition: document.getElementById('sideLogoPosition').value,
            showFooter: document.getElementById('showFooter').checked,
            footerText: document.getElementById('footerText').value,
            enableAutoRefresh: document.getElementById('enableAutoRefresh').checked,
            autoRefreshDelay: document.getElementById('autoRefreshDelay').value,
            autoRefreshUrl: document.getElementById('autoRefreshUrl').value,
            scriptName: scriptName,
            destinationPath: document.getElementById('destinationPath').value
        },
        selectedTheme,
        customColors,
        groups,
        ungroupedLinks
    };

    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${scriptName.replace(/[^a-zA-Z0-9-_]/g, '')}-config.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    announce('Configuration saved');
}

// Import configuration (JSON or legacy HTML)
function importConfiguration(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onerror = function(e) {
        console.error('FileReader error:', e);
        alert('Error reading file. Please try again.');
        input.value = '';
    };
    reader.onload = function(e) {
        const content = e.target.result;

        // Detect file type
        const isJson = file.name.endsWith('.json') || content.trim().startsWith('{');

        if (isJson) {
            // Handle JSON configuration
            try {
                const config = JSON.parse(content);
                if (!config.settings && !config.configVersion) {
                    alert('Invalid configuration file.\n\nThe file does not appear to be a Landing Page Studio configuration.');
                    input.value = '';
                    return;
                }
                applyImportedConfig(config);
                recalculateIdCounters();
                announce('Configuration loaded successfully');
                alert('Configuration loaded successfully!');
            } catch (err) {
                alert('Error parsing configuration file.\n\nThe file may be corrupted or invalid JSON.');
                console.error('Import error:', err);
            }
        } else {
            // Handle legacy HTML import
            if (!content.includes('<meta name="generator" content="Landing Page Studio">') &&
                !content.includes('<meta name="generator" content="StartPage Studio">')) {
                alert('This file was not created by Landing Page Studio.\n\nOnly JSON config files or HTML files generated by this tool can be imported.');
                input.value = '';
                return;
            }

            try {
                let configMatch = content.match(/<script type="application\/json" id="landing-page-studio-config">([\s\S]*?)<\/script>/);
                if (configMatch) {
                    const configJson = configMatch[1].trim();
                    const config = JSON.parse(configJson);
                    applyImportedConfig(config);
                } else {
                    configMatch = content.match(/<!-- Landing Page Studio Config: (.+?) -->/);
                    if (!configMatch) {
                        configMatch = content.match(/<!-- StartPage Studio Config: (.+?) -->/);
                    }
                    if (!configMatch) {
                        alert('Could not find configuration data in this file.\n\nThe file may have been modified or is from an older version.');
                        input.value = '';
                        return;
                    }
                    const config = JSON.parse(configMatch[1]);
                    applyImportedConfig(config);
                }
                recalculateIdCounters();
                announce('Configuration imported successfully');
                alert('Configuration imported successfully!');
            } catch (err) {
                alert('Error parsing configuration data.\n\nThe file may be corrupted.');
                console.error('Import error:', err);
            }
        }

        input.value = '';
    };
    reader.readAsText(file);
}

// Recalculate ID counters based on imported data
function recalculateIdCounters() {
    let maxLinkId = 0;
    let maxGroupId = 0;

    groups.forEach(group => {
        if (group.id > maxGroupId) maxGroupId = group.id;
        group.links.forEach(link => {
            if (link.id > maxLinkId) maxLinkId = link.id;
        });
    });

    ungroupedLinks.forEach(link => {
        if (link.id > maxLinkId) maxLinkId = link.id;
    });

    groupIdCounter = maxGroupId + 1;
    linkIdCounter = maxLinkId + 1;
}

// Apply imported configuration
function applyImportedConfig(config) {
    // Apply settings
    if (config.settings) {
        document.getElementById('pageTitle').value = config.settings.pageTitle || 'Quick Links';
        document.getElementById('greeting').value = config.settings.greeting || '';

        // Restore greeting and logo sliders
        const greetingFontSize = config.settings.greetingFontSize || DEFAULTS.greetingFontSize;
        const greetingSpacing = config.settings.greetingSpacing || DEFAULTS.greetingSpacing;
        const topLogoWidth = config.settings.topLogoWidth || DEFAULTS.topLogoWidth;
        const topLogoSpacing = config.settings.topLogoSpacing || DEFAULTS.topLogoSpacing;

        document.getElementById('greetingFontSize').value = greetingFontSize;
        document.getElementById('greetingFontSizeValue').textContent = greetingFontSize + 'rem';
        document.getElementById('greetingSpacing').value = greetingSpacing;
        document.getElementById('greetingSpacingValue').textContent = greetingSpacing + 'rem';
        document.getElementById('topLogoWidth').value = topLogoWidth;
        document.getElementById('topLogoWidthValue').textContent = topLogoWidth + 'px';
        document.getElementById('topLogoSpacing').value = topLogoSpacing;
        document.getElementById('topLogoSpacingValue').textContent = topLogoSpacing + 'rem';

        document.getElementById('showComputerName').checked = config.settings.showComputerName === true;
        document.getElementById('computerNamePosition').value = config.settings.computerNamePosition || 'top-right';
        document.getElementById('showNetworkIdentifier').checked = config.settings.showNetworkIdentifier === true;
        document.getElementById('networkIdentifierPosition').value = config.settings.networkIdentifierPosition || DEFAULTS.networkIdentifierPosition;
        document.getElementById('networkIdentifierDisplay').value = config.settings.networkIdentifierDisplay || DEFAULTS.networkIdentifierDisplay;
        document.getElementById('networkIdentifierPattern').value = config.settings.networkIdentifierPattern || DEFAULTS.networkIdentifierPattern;
        document.getElementById('networkIdentifierFallback').value = config.settings.networkIdentifierFallback || DEFAULTS.networkIdentifierFallback;
        document.getElementById('showDateTime').checked = config.settings.showDateTime || false;
        document.getElementById('dateTimeFormat').value = config.settings.dateTimeFormat || 'both';
        document.getElementById('dateTimePosition').value = config.settings.dateTimePosition || 'top-left';
        document.getElementById('topLogoUrl').value = config.settings.topLogoUrl || '';
        document.getElementById('sideLogoUrl').value = config.settings.sideLogoUrl || '';
        document.getElementById('sideLogoPosition').value = config.settings.sideLogoPosition || 'left';
        document.getElementById('showFooter').checked = config.settings.showFooter === true;
        document.getElementById('footerText').value = config.settings.footerText || '';
        document.getElementById('enableAutoRefresh').checked = config.settings.enableAutoRefresh || false;
        document.getElementById('autoRefreshDelay').value = config.settings.autoRefreshDelay || '30';
        document.getElementById('autoRefreshUrl').value = config.settings.autoRefreshUrl || '';

        // Link layout options
        document.getElementById('linkLayout').value = config.settings.linkLayout || DEFAULTS.linkLayout;
        document.getElementById('buttonStyle').value = config.settings.buttonStyle || DEFAULTS.buttonStyle;
        document.getElementById('buttonSize').value = config.settings.buttonSize || DEFAULTS.buttonSize;
        document.getElementById('gridColumns').value = config.settings.gridColumns || DEFAULTS.gridColumns;

        // Announcement banner
        document.getElementById('bannerEnabled').checked = config.settings.bannerEnabled || false;
        document.getElementById('bannerTitle').value = config.settings.bannerTitle || '';
        document.getElementById('bannerMessage').value = config.settings.bannerMessage || '';
        document.getElementById('bannerStyle').value = config.settings.bannerStyle || DEFAULTS.bannerStyle;

        // Popup window settings
        document.getElementById('openLinksInPopup').checked = config.settings.openLinksInPopup || false;
        document.getElementById('popupWidth').value = config.settings.popupWidth || DEFAULTS.popupWidth;
        document.getElementById('popupHeight').value = config.settings.popupHeight || DEFAULTS.popupHeight;
        document.getElementById('popupAutoClose').checked = config.settings.popupAutoClose || false;
        document.getElementById('popupAutoCloseDelay').value = config.settings.popupAutoCloseDelay || DEFAULTS.popupAutoCloseDelay;
    }

    // Apply theme
    if (config.theme) {
        selectedTheme = config.theme.selectedTheme || 'monochrome';
        if (config.theme.customColors) {
            customColors = config.theme.customColors;
            document.getElementById('customPrimary').value = customColors.primary;
            document.getElementById('customPrimaryPicker').value = customColors.primary;
            document.getElementById('customAccent').value = customColors.accent;
            document.getElementById('customAccentPicker').value = customColors.accent;
        }
        colorOverrides = config.theme.colorOverrides || {};
        renderThemeSwatches();
        renderAdvancedColors();
    }

    // Apply groups
    if (config.groups) {
        groups = config.groups.map(g => ({
            id: groupIdCounter++,
            name: g.name,
            icon: g.icon || '',
            links: g.links.map(l => ({
                id: linkIdCounter++,
                name: l.name,
                url: l.url || '',
                icon: l.icon || ''
            }))
        }));
        renderGroups();
    }

    // Apply ungrouped links
    if (config.ungroupedLinks) {
        ungroupedLinks = config.ungroupedLinks.map(l => ({
            id: linkIdCounter++,
            name: l.name,
            url: l.url || '',
            icon: l.icon || ''
        }));
        renderUngroupedLinks();
    }

    updatePreview();
    saveState();
    validateUrlInput(document.getElementById('autoRefreshUrl'));
}

// Load a quick start template
function loadTemplate(templateKey) {
    const template = TEMPLATES[templateKey];
    if (!template) return;

    const hasExistingContent = groups.length > 0 || ungroupedLinks.length > 0 || localStorage.getItem(STORAGE_KEY);
    if (hasExistingContent) {
        const message = `Load the "${template.name}" template? This will replace your current configuration.`;
        if (!confirm(message)) return;
    }

    groups = [];
    ungroupedLinks = [];
    groupIdCounter = 0;
    linkIdCounter = 0;
    selectedTheme = DEFAULTS.theme;
    customColors = { ...DEFAULTS.customColors };

    if (template.scriptName) {
        document.getElementById('scriptName').value = template.scriptName;
    }

    if (template.destinationPath) {
        document.getElementById('destinationPath').value = template.destinationPath;
    }

    applyImportedConfig(template.config);
    announce(`${template.name} template loaded`);
}

// Reset everything to defaults
function resetAll() {
    if (!confirm('Are you sure you want to reset everything?\n\nThis will clear all your settings, groups, and links. This cannot be undone.')) {
        return;
    }

    // Clear localStorage
    localStorage.removeItem(STORAGE_KEY);

    // Reset state variables
    groups = [];
    ungroupedLinks = [];
    groupIdCounter = 0;
    linkIdCounter = 0;
    selectedTheme = DEFAULTS.theme;
    customColors = { ...DEFAULTS.customColors };

    // Reset form fields to defaults
    document.getElementById('pageTitle').value = DEFAULTS.pageTitle;
    document.getElementById('greeting').value = DEFAULTS.greeting;

    // Reset greeting and logo sliders
    document.getElementById('greetingFontSize').value = DEFAULTS.greetingFontSize;
    document.getElementById('greetingFontSizeValue').textContent = DEFAULTS.greetingFontSize + 'rem';
    document.getElementById('greetingSpacing').value = DEFAULTS.greetingSpacing;
    document.getElementById('greetingSpacingValue').textContent = DEFAULTS.greetingSpacing + 'rem';
    document.getElementById('topLogoWidth').value = DEFAULTS.topLogoWidth;
    document.getElementById('topLogoWidthValue').textContent = DEFAULTS.topLogoWidth + 'px';
    document.getElementById('topLogoSpacing').value = DEFAULTS.topLogoSpacing;
    document.getElementById('topLogoSpacingValue').textContent = DEFAULTS.topLogoSpacing + 'rem';

    document.getElementById('showComputerName').checked = false;
    document.getElementById('computerNamePosition').value = DEFAULTS.computerNamePosition;
    document.getElementById('showNetworkIdentifier').checked = false;
    document.getElementById('networkIdentifierPosition').value = DEFAULTS.networkIdentifierPosition;
    document.getElementById('networkIdentifierDisplay').value = DEFAULTS.networkIdentifierDisplay;
    document.getElementById('networkIdentifierPattern').value = DEFAULTS.networkIdentifierPattern;
    document.getElementById('networkIdentifierFallback').value = DEFAULTS.networkIdentifierFallback;
    document.getElementById('showDateTime').checked = false;
    document.getElementById('dateTimeFormat').value = DEFAULTS.dateTimeFormat;
    document.getElementById('dateTimePosition').value = DEFAULTS.dateTimePosition;
    document.getElementById('topLogoUrl').value = '';
    document.getElementById('sideLogoUrl').value = '';
    document.getElementById('sideLogoPosition').value = DEFAULTS.sideLogoPosition;
    document.getElementById('showFooter').checked = false;
    document.getElementById('footerText').value = '';
    document.getElementById('enableAutoRefresh').checked = false;
    document.getElementById('autoRefreshDelay').value = DEFAULTS.autoRefreshDelay;
    document.getElementById('autoRefreshUrl').value = '';
    document.getElementById('scriptName').value = DEFAULTS.scriptName;
    document.getElementById('destinationPath').value = DEFAULTS.destinationPath;

    // Reset link layout settings
    document.getElementById('linkLayout').value = DEFAULTS.linkLayout;
    document.getElementById('buttonStyle').value = DEFAULTS.buttonStyle;
    document.getElementById('buttonSize').value = DEFAULTS.buttonSize;
    document.getElementById('gridColumns').value = DEFAULTS.gridColumns;

    // Reset announcement banner settings
    document.getElementById('bannerEnabled').checked = false;
    document.getElementById('bannerTitle').value = '';
    document.getElementById('bannerMessage').value = '';
    document.getElementById('bannerStyle').value = DEFAULTS.bannerStyle;

    // Reset popup window settings
    document.getElementById('openLinksInPopup').checked = false;
    document.getElementById('popupWidth').value = DEFAULTS.popupWidth;
    document.getElementById('popupHeight').value = DEFAULTS.popupHeight;
    document.getElementById('popupAutoClose').checked = false;
    document.getElementById('popupAutoCloseDelay').value = DEFAULTS.popupAutoCloseDelay;

    // Reset custom color inputs
    document.getElementById('customPrimary').value = DEFAULTS.customColors.primary;
    document.getElementById('customPrimaryPicker').value = DEFAULTS.customColors.primary;
    document.getElementById('customAccent').value = DEFAULTS.customColors.accent;
    document.getElementById('customAccentPicker').value = DEFAULTS.customColors.accent;

    // Reset color overrides
    colorOverrides = {};

    // Re-render
    renderThemeSwatches();
    renderAdvancedColors();
    renderGroups();
    renderUngroupedLinks();
    updatePreview();

    announce('All settings have been reset');
    alert('Everything has been reset to defaults.');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
