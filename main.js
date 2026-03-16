let currentGrade = null;
let currentSubject = null;
let currentSubjectName = null;
let viewHistory = [];
let selectedUnits = [];
let currentUsername = '';

// Toast tracking variables
let toastQueue = [];
let isProcessingToast = false;
const MAX_VISIBLE_TOASTS = 2;
const TOAST_DURATION = 3000;

// Subject data with emoji scenes - matching study-now.js structure
const subjectsData = {
    9: [
        { name: 'Mathematics', icon: '📐', deco: ['📏', '🔢'], subtitle: 'Algebra & Geometry', key: 'math' },
        { name: 'Physics', icon: '⚛️', deco: ['🔭', '⚡'], subtitle: 'Mechanics & Energy', key: 'phy' },
        { name: 'Biology', icon: '🧬', deco: ['🦠', '🌱'], subtitle: 'Life Sciences', key: 'bio' },
        { name: 'Chemistry', icon: '⚗️', deco: ['🧪', '🔥'], subtitle: 'Elements & Reactions', key: 'chem' },
        { name: 'Geography', icon: '🌍', deco: ['🗺️', '🧭'], subtitle: 'Physical Geography', key: 'geo' },
        { name: 'Economy', icon: '📊', deco: ['💰', '📈'], subtitle: 'Basic Economics', key: 'eco' },
        { name: 'History', icon: '🏛️', deco: ['📜', '⏳'], subtitle: 'World History', key: 'his' },
        { name: 'Citizenship', icon: '🏛️', deco: ['🤝', '🌍'], subtitle: 'Civic Education', key: 'citizenship' },
        { name: 'English', icon: '📚', deco: ['✍️', '📖'], subtitle: 'Language & Literature', key: 'english' },
        { name: 'ICT', icon: '💻', deco: ['⌨️', '🌐'], subtitle: 'Information Technology', key: 'ict' }
    ],
    10: [
        { name: 'Mathematics', icon: '📐', deco: ['📏', '🔢'], subtitle: 'Advanced Algebra', key: 'math' },
        { name: 'Physics', icon: '⚛️', deco: ['🔭', '⚡'], subtitle: 'Advanced Mechanics', key: 'phy' },
        { name: 'Biology', icon: '🧬', deco: ['🦠', '🌱'], subtitle: 'Advanced Biology', key: 'bio' },
        { name: 'Chemistry', icon: '⚗️', deco: ['🧪', '🔥'], subtitle: 'Organic Chemistry', key: 'chem' },
        { name: 'Geography', icon: '🌍', deco: ['🗺️', '🧭'], subtitle: 'Human Geography', key: 'geo' },
        { name: 'Economy', icon: '📊', deco: ['💰', '📈'], subtitle: 'Macroeconomics', key: 'eco' },
        { name: 'History', icon: '🏛️', deco: ['📜', '⏳'], subtitle: 'Modern History', key: 'his' },
        { name: 'Citizenship', icon: '🏛️', deco: ['🤝', '🌍'], subtitle: 'Advanced Civics', key: 'citizenship' },
        { name: 'English', icon: '📚', deco: ['✍️', '📖'], subtitle: 'Advanced Literature', key: 'english' },
        { name: 'ICT', icon: '💻', deco: ['⌨️', '🌐'], subtitle: 'Advanced Computing', key: 'ict' }
    ],
    11: [
        { name: 'Mathematics', icon: '📐', deco: ['📏', '🔢'], subtitle: 'Calculus', key: 'math' },
        { name: 'Physics', icon: '⚛️', deco: ['🔭', '⚡'], subtitle: 'Advanced Physics', key: 'phy' },
        { name: 'Biology', icon: '🧬', deco: ['🦠', '🧪'], subtitle: 'Molecular Biology', key: 'bio' },
        { name: 'Chemistry', icon: '⚗️', deco: ['🧪', '⚛️'], subtitle: 'Physical Chemistry', key: 'chem' },
        { name: 'Agriculture', icon: '🌾', deco: ['🚜', '🌱'], subtitle: 'Crop & Animal Production', key: 'agri' },
        { name: 'English', icon: '📚', deco: ['✍️', '🎭'], subtitle: 'Literature & Composition', key: 'english' },
        { name: 'ICT', icon: '💻', deco: ['⌨️', '💡'], subtitle: 'Computer Science', key: 'ict' }
    ],
    12: [
        { name: 'Mathematics', icon: '📐', deco: ['📊', '🔢'], subtitle: 'Statistics & Calculus', key: 'math' },
        { name: 'Physics', icon: '⚛️', deco: ['🔭', '🌌'], subtitle: 'Quantum Physics', key: 'phy' },
        { name: 'Biology', icon: '🧬', deco: ['🧪', '🧠'], subtitle: 'Advanced Biology', key: 'bio' },
        { name: 'Chemistry', icon: '⚗️', deco: ['⚛️', '🔬'], subtitle: 'Advanced Chemistry', key: 'chem' },
        { name: 'Agriculture', icon: '🌾', deco: ['🚜', '🌱'], subtitle: 'Crop & Animal Production', key: 'agri' },
        { name: 'English', icon: '📚', deco: ['🎓', '✍️'], subtitle: 'AP English', key: 'english' },
        { name: 'ICT', icon: '💻', deco: ['🖥️', '🚀'], subtitle: 'Software Engineering', key: 'ict' }
    ]
};

// Subject wave colors
const subjectWaveColors = {
    math: '#3b82f6',
    chem: '#10b981',
    bio: '#22c55e',
    phy: '#f59e0b',
    geo: '#8b5cf6',
    eco: '#ec4899',
    his: '#ef4444',
    citizenship: '#06b6d4',
    ict: '#6366f1',
    agri: '#84cc16',
    english: '#f97316'
};

// Short subject names for compact display
const shortSubjectNames = {
    'Mathematics': 'Math',
    'Chemistry': 'Chem',
    'Biology': 'Bio',
    'Physics': 'Phy',
    'Geography': 'Geo',
    'Economy': 'Eco',
    'History': 'Hist',
    'Citizenship': 'Civic',
    'English': 'Eng',
    'ICT': 'ICT',
    'Agriculture': 'Agri'
};

// Helper function to dismiss a toast immediately
function dismissToast(toast) {
    if (!toast || toast.classList.contains('dismissing')) return;
    
    toast.classList.add('dismissing');
    toast.classList.remove('show');
    
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
        const index = toastQueue.indexOf(toast);
        if (index > -1) {
            toastQueue.splice(index, 1);
        }
    }, 300);
}

// Process toast queue - ensures max 2 visible at all times
function processToastQueue() {
    if (isProcessingToast) return;
    isProcessingToast = true;
    
    while (toastQueue.length > MAX_VISIBLE_TOASTS) {
        const oldestToast = toastQueue[0];
        if (oldestToast && oldestToast.parentNode) {
            oldestToast.remove();
        }
        toastQueue.shift();
    }
    
    isProcessingToast = false;
}

// TOAST NOTIFICATION SYSTEM
function showToast(message, type = 'info', duration = TOAST_DURATION) {
    const container = document.getElementById('toastContainer');
    
    processToastQueue();
    
    if (toastQueue.length >= MAX_VISIBLE_TOASTS) {
        const oldestToast = toastQueue.shift();
        if (oldestToast && oldestToast.parentNode) {
            oldestToast.remove();
        }
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'check_circle',
        error: 'error',
        warning: 'warning',
        info: 'info'
    };
    
    toast.innerHTML = `
        <span class="toast-icon material-icons">${icons[type]}</span>
        <span>${message}</span>
    `;
    
    toast.style.cursor = 'pointer';
    toast.addEventListener('click', () => dismissToast(toast));
    
    toastQueue.push(toast);
    container.appendChild(toast);
    
    toast.offsetHeight;
    
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    const autoDismissTimeout = setTimeout(() => {
        dismissToast(toast);
    }, duration);
    
    toast.addEventListener('click', () => {
        clearTimeout(autoDismissTimeout);
    }, { once: true });
}

document.getElementById('fixedToggle').addEventListener('click', toggleSidebar);

function toggleSidebar() {
    document.body.classList.toggle('sidebar-open');
}

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        toggleSidebar();
    }
});

// Card interaction effects – ALL REMOVED (static cards)
function attachCardInteractions() {
    // No hover or click effects – cards are completely static
}

// Render Subject Cards with horizontal layout
function renderSubjectCards(grade) {
    const grid = document.getElementById('subjectGrid');
    const subjects = subjectsData[grade];
    
    if (!grid || !subjects) return;
    
    const gridClass = (grade === 9 || grade === 10) ? 'subjects-10' : 'subjects-6';
    grid.className = `cards-grid ${gridClass}`;
    
    grid.innerHTML = subjects.map((subject, index) => {
        const waveColor = subjectWaveColors[subject.key] || '#6366f1';
        return `
            <div class="card subject" data-card="subject${index}" data-subject="${subject.key}" 
                 onclick="showUnits('${subject.key}', '${subject.name}')" 
                 style="animation-delay: ${index * 0.05}s">
                <div class="card-bg-pattern"></div>
                <div class="card-float">
                    <div class="emoji-scene">
                        <div class="emoji-main">${subject.icon}</div>
                        <div class="emoji-deco d1">${subject.deco[0]}</div>
                        <div class="emoji-deco d2">${subject.deco[1]}</div>
                    </div>
                </div>
                <div class="text-content">
                    <div class="card-title">${subject.name}</div>
                    <div class="card-subtitle">${subject.subtitle}</div>
                </div>
                <div class="card-wave" style="background: linear-gradient(90deg, transparent, ${waveColor}, transparent)"></div>
            </div>
        `;
    }).join('');
    
    attachCardInteractions(); // now does nothing
}

function showSubjects(grade) {
    currentGrade = grade;
    viewHistory.push('grade');
    
    renderSubjectCards(grade);
    
    document.getElementById('subjectTitle').textContent = `Grade ${grade}`;
    
    const viewHeader = document.querySelector('#subjectView .view-header');
    let backBtn = viewHeader.querySelector('.back-btn');
    if (!backBtn) {
        backBtn = document.createElement('button');
        backBtn.className = 'back-btn';
        backBtn.innerHTML = '<span class="material-icons">arrow_back</span>';
        backBtn.onclick = goBack;
        viewHeader.insertBefore(backBtn, viewHeader.firstChild);
    }
    
    switchView('subjectView');
}

function showUnits(subjectKey, subjectName) {
    currentSubject = subjectKey;
    currentSubjectName = subjectName;
    viewHistory.push('subject');
    
    const units = data[currentGrade][subjectKey].units;
    const grid = document.getElementById('unitGrid');
    grid.innerHTML = '';
    
    // Get short name or use first 4 letters as fallback
    const shortSubject = shortSubjectNames[subjectName] || subjectName.substring(0, 4);
    
    let unitIndex = 1;
    for (const [unitName, links] of Object.entries(units)) {
        const div = document.createElement('div');
        div.className = 'unit-box';
        div.innerHTML = `
            <div class="unit-info">
                <div class="unit-number">Unit ${unitIndex}</div>
                <div class="unit-name">${unitName.replace(`Unit ${unitIndex}: `, '')}</div>
            </div>
            <span class="unit-arrow material-icons">arrow_forward</span>
        `;
        
        const isSelected = selectedUnits.some(u => 
            u.grade === currentGrade && 
            u.subject === subjectName && 
            u.unit === unitName
        );
        if (isSelected) {
            div.classList.add('selected');
        }
        
        div.onclick = (e) => toggleUnitSelection(div, unitName, links, e);
        grid.appendChild(div);
        unitIndex++;
    }
    
    // Compact title format: "Math - G9"
    document.getElementById('unitTitle').textContent = `${shortSubject} - G${currentGrade}`;
    
    const viewHeader = document.querySelector('#unitView .view-header');
    let backBtn = viewHeader.querySelector('.back-btn');
    if (!backBtn) {
        backBtn = document.createElement('button');
        backBtn.className = 'back-btn';
        backBtn.innerHTML = '<span class="material-icons">arrow_back</span>';
        backBtn.onclick = goBack;
        viewHeader.insertBefore(backBtn, viewHeader.firstChild);
    }
    
    switchView('unitView');
}

function toggleUnitSelection(element, unitName, links, event) {
    event.stopPropagation();
    
    const existingIndex = selectedUnits.findIndex(u => 
        u.grade === currentGrade && 
        u.subject === currentSubjectName && 
        u.unit === unitName
    );
    
    if (existingIndex > -1) {
        selectedUnits.splice(existingIndex, 1);
        element.classList.remove('selected');
        showToast('Unit removed from collection', 'info');
    } else {
        selectedUnits.push({
            grade: currentGrade,
            subject: currentSubjectName,
            unit: unitName,
            downloadLink: links.download,
            shareLink: links.share
        });
        element.classList.add('selected');
        showToast('Unit added to collection', 'success');
    }
    
    updateSelectionUI();
}

function updateSelectionUI() {
    const badge = document.getElementById('fabBadge');
    const list = document.getElementById('selectionList');
    const countEl = document.getElementById('selectionCount');
    const footerCount = document.getElementById('footerCount');
    const footer = document.getElementById('selectionFooter');
    const clearBtn = document.getElementById('clearBtn');
    const doneBtn = document.getElementById('doneBtn');
    
    badge.textContent = selectedUnits.length;
    badge.classList.toggle('show', selectedUnits.length > 0);
    
    if (selectedUnits.length === 0) {
        countEl.textContent = 'No units selected';
        footer.style.display = 'none';
        clearBtn.style.display = 'none';
        doneBtn.disabled = true;
        
        list.innerHTML = `
            <div class="selection-empty">
                <div class="empty-illustration"></div>
                <h4>Start Building</h4>
                <p>Click on units to add them to your collection for AI processing</p>
            </div>
        `;
    } else {
        countEl.textContent = `${selectedUnits.length} unit${selectedUnits.length > 1 ? 's' : ''} selected`;
        footer.style.display = 'flex';
        clearBtn.style.display = 'flex';
        doneBtn.disabled = false;
        footerCount.textContent = selectedUnits.length;
        
        list.innerHTML = selectedUnits.map((item, index) => `
            <div class="selection-item">
                <div class="selection-item-icon">
                    <span class="material-icons">description</span>
                </div>
                <div class="selection-info">
                    <div class="selection-unit">${item.unit}</div>
                    <div class="selection-grade">Grade ${item.grade} • ${item.subject}</div>
                </div>
                <button class="remove-btn" onclick="removeSelection(${index})" title="Remove">
                    <span class="material-icons">close</span>
                </button>
            </div>
        `).join('');
    }
}

function removeSelection(index) {
    const removedItem = selectedUnits[index];
    selectedUnits.splice(index, 1);
    updateSelectionUI();
    
    if (currentView === 'unitView' && 
        removedItem.grade === currentGrade && 
        removedItem.subject === currentSubjectName) {
        const unitBoxes = document.querySelectorAll('.unit-box');
        unitBoxes.forEach(box => {
            const unitNameEl = box.querySelector('.unit-name');
            const unitNumberEl = box.querySelector('.unit-number');
            if (unitNameEl && unitNumberEl) {
                const fullUnitName = unitNumberEl.textContent + ': ' + unitNameEl.textContent;
                if (fullUnitName === removedItem.unit) {
                    box.classList.remove('selected');
                }
            }
        });
    }
    
    showToast('Unit removed', 'info');
}

function clearAllSelections() {
    selectedUnits = [];
    
    if (currentView === 'unitView') {
        document.querySelectorAll('.unit-box.selected').forEach(box => {
            box.classList.remove('selected');
        });
    }
    
    updateSelectionUI();
    showToast('All units cleared', 'info');
}

let currentView = 'gradeView';

function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    currentView = viewId;
}

function goBack() {
    if (currentView === 'subjectView') {
        switchView('gradeView');
        currentGrade = null;
        viewHistory = [];
    } else if (currentView === 'unitView') {
        viewHistory.pop();
        showSubjects(currentGrade);
    }
}

function toggleSelectionPanel() {
    const panel = document.getElementById('selectionPanel');
    panel.classList.toggle('open');
}
function openAIModal() {
    if (selectedUnits.length === 0) {
        showToast('Please select at least one unit first', 'warning');
        return;
    }
    document.getElementById('aiModal').classList.add('open');
    document.getElementById('selectionPanel').classList.remove('open');
}

function closeAIModal() {
    document.getElementById('aiModal').classList.remove('open');
    document.getElementById('customURLModal').classList.remove('open');
    document.getElementById('customURLInput').value = '';
}

function showCustomURL() {
    document.getElementById('customURLModal').classList.add('open');
    setTimeout(() => document.getElementById('customURLInput').focus(), 100);
}

function backToAI() {
    document.getElementById('customURLModal').classList.remove('open');
}

async function selectAI(type) {
    const urls = {
        notebook: 'https://notebooklm.google.com/',
        gemini: 'https://gemini.google.com/',
        deepseek: 'https://chat.deepseek.com/',   // DeepSeek URL
        grok: 'https://grok.x.ai/'                 // Grok URL (adjust if needed)
    };
    
    await processSelection(type, urls[type]);
}

async function submitCustomURL() {
    const url = document.getElementById('customURLInput').value.trim();
    if (!url) {
        showToast('Please enter a URL', 'warning');
        return;
    }
    if (!url.startsWith('http')) {
        showToast('Please enter a valid URL starting with http:// or https://', 'error');
        return;
    }
    await processSelection('other', url);
}

async function processSelection(aiType, targetUrl) {
    closeAIModal();
    
    const loader = document.getElementById('loader');
    const stepText = document.getElementById('step');
    loader.style.display = 'flex';
    
    const isNotebookLM = aiType === 'notebook';
    const linkType = isNotebookLM ? 'downloadLink' : 'shareLink';
    const linkLabel = isNotebookLM ? 'download' : 'share';
    
    const validUnits = selectedUnits.filter(u => u[linkType] && u[linkType] !== 'LINK_HERE');
    
    if (validUnits.length === 0) {
        loader.style.display = 'none';
        showToast(`No valid ${linkLabel} links available for selected units`, 'error');
        return;
    }
    
    const allLinks = validUnits.map(u => u[linkType]).join('\n\n');
    try {
        await navigator.clipboard.writeText(allLinks);
        stepText.innerText = `Copied ${validUnits.length} ${linkLabel} links...`;
        showToast(`${validUnits.length} links copied to clipboard`, 'success');
    } catch (err) {
        stepText.innerText = 'Opening AI tool...';
    }
    
    setTimeout(() => {
        stepText.innerText = 'Opening...';
        setTimeout(() => {
            loader.style.display = 'none';
            window.open(targetUrl, '_blank');
        }, 800);
    }, 800);
}

// Clicking outside the modal (overlay) closes it
document.getElementById('aiModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeAIModal();
    }
});
// ============================================
// BUY COFFEE MODAL
// ============================================
function showBuyCoffeeModal() {
    document.getElementById('buyCoffeeModal').classList.add('show');
    if (window.innerWidth <= 768) {
        document.body.classList.remove('sidebar-open');
    }
}

function closeBuyCoffeeModal() {
    document.getElementById('buyCoffeeModal').classList.remove('show');
}

function buyCoffee() {
    const amount = document.getElementById('coffeeAmount').value;
    if (!amount || amount <= 0) {
        showToast('Please enter a valid amount', 'warning');
        return;
    }
    showToast(`Thank you for buying a coffee for $${amount}! ☕️`, 'success');
    closeBuyCoffeeModal();
}

// ============================================
// USER DEVICES MODAL
// ============================================
async function showUserDevicesModal() {
    const user = auth.currentUser;
    if (!user) {
        showToast('You are not logged in', 'error');
        return;
    }

    const modal = document.getElementById('userDevicesModal');
    const devicesList = document.getElementById('devicesList');
    devicesList.innerHTML = '<div class="device-item">Loading...</div>';
    modal.classList.add('show');

    try {
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (!userDoc.exists) {
            devicesList.innerHTML = '<div class="device-item">No device info found</div>';
            return;
        }

        const userData = userDoc.data();
        const devices = userData.devices || [];

        if (devices.length === 0) {
            devicesList.innerHTML = '<div class="device-item">No devices registered</div>';
        } else {
            devicesList.innerHTML = devices.map(d => `
                <div class="device-item">
                    <span class="material-icons" style="font-size: 16px; vertical-align: middle; margin-right: 8px;">devices</span>
                    ${d.deviceName || 'Unknown device'}
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error fetching devices:', error);
        devicesList.innerHTML = '<div class="device-item">Error loading devices</div>';
        showToast('Failed to load devices', 'error');
    }
}

function closeUserDevicesModal() {
    document.getElementById('userDevicesModal').classList.remove('show');
}

// Helper function to generate device ID (same as in firebase-auth.js)
function generateDeviceId() {
    const ua = navigator.userAgent;
    const screen = `${window.screen.width}x${window.screen.height}`;
    const color = window.screen.colorDepth;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const language = navigator.language;
    const platform = navigator.platform;
    const cores = navigator.hardwareConcurrency || 'unknown';
    const touch = navigator.maxTouchPoints || 0;
    
    const fingerprint = `${ua}-${screen}-${color}-${timezone}-${language}-${platform}-${cores}-${touch}`;
    
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
        const char = fingerprint.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return `dev_${Math.abs(hash).toString(36)}`;
}

async function logoutCurrentDevice() {
    const user = auth.currentUser;
    if (!user) {
        closeUserDevicesModal();
        document.getElementById('appContainer').classList.remove('active');
        document.getElementById('loginContainer').classList.remove('hidden');
        return;
    }

    // Generate device ID directly if window.currentDeviceId is not available
    const deviceId = window.currentDeviceId || generateDeviceId();
    
    if (!deviceId) {
        showToast('Device ID not found', 'error');
        return;
    }

    try {
        const userRef = db.collection('users').doc(user.uid);
        const userDoc = await userRef.get();
        if (userDoc.exists) {
            const devices = userDoc.data().devices || [];
            const updatedDevices = devices.filter(d => d.deviceId !== deviceId);
            await userRef.update({ devices: updatedDevices });
        }

        await auth.signOut();
        showToast('Logged out from this device', 'success');
        closeUserDevicesModal();
        
        // Reset login validation flag to prevent auto-login
        loginValidated = false;
        
        // Hide app container and show login container
        document.getElementById('appContainer').classList.remove('active');
        document.getElementById('loginContainer').classList.remove('hidden');
        
        // Clear user account display
        const userAccount = document.getElementById('userAccount');
        if (userAccount) {
            userAccount.textContent = 'A';
        }
        
        // Clear form fields
        document.getElementById('phoneInput').value = '';
        document.getElementById('usernameInput').value = '';
        document.getElementById('passwordInput').value = '';
        
        // Reset current username
        window.currentUsername = '';
        
    } catch (error) {
        console.error('Logout error:', error);
        showToast('Failed to logout', 'error');
    }
}


// ============================================
// ZOOM HANDLER - Auto-scale content to prevent scrolling
// ============================================

(function initZoomHandler() {
    const appContainer = document.getElementById('appContainer');
    const main = document.querySelector('.main');
    
    if (!appContainer || !main) return;
    
    let baseWidth = window.innerWidth;
    let baseHeight = window.innerHeight;
    
    function handleZoom() {
        // Get current zoom level using visual viewport API (more accurate)
        const visualViewport = window.visualViewport;
        let scale = 1;
        
        if (visualViewport) {
            // Calculate scale based on visual viewport vs layout viewport
            scale = visualViewport.scale;
        } else {
            // Fallback: compare current dimensions to base dimensions
            scale = window.innerWidth / baseWidth;
        }
        
        // If zoomed in (scale > 1), we need to shrink the content
        // If zoomed out (scale < 1), we can expand slightly but keep readable
        if (scale > 1) {
            // User zoomed in - shrink content to fit without scroll
            const shrinkFactor = 1 / scale;
            appContainer.style.transform = `scale(${shrinkFactor})`;
            appContainer.style.transformOrigin = 'top left';
            appContainer.style.width = `${100 * scale}%`;
            appContainer.style.height = `${100 * scale}%`;
        } else if (scale < 0.8) {
            // User zoomed out too much - reset to prevent tiny content
            appContainer.style.transform = 'scale(1)';
            appContainer.style.width = '100%';
            appContainer.style.height = '100%';
        } else {
            // Normal zoom or slight zoom out - keep natural
            appContainer.style.transform = 'scale(1)';
            appContainer.style.width = '100%';
            appContainer.style.height = '100%';
        }
    }
    
    // Listen for zoom changes
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', handleZoom);
        window.visualViewport.addEventListener('scroll', handleZoom);
    }
    
    // Also listen to window resize as fallback
    window.addEventListener('resize', handleZoom);
    
    // Keyboard zoom detection (Ctrl +/-)
    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
            setTimeout(handleZoom, 100);
        }
    });
    
    // Mouse wheel zoom detection (Ctrl + scroll)
    window.addEventListener('wheel', (e) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            setTimeout(handleZoom, 100);
        }
    }, { passive: false });
    
    // Initial check
    handleZoom();
    
    // Update base dimensions on orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            baseWidth = window.innerWidth;
            baseHeight = window.innerHeight;
            handleZoom();
        }, 300);
    });
})();



// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // No animations or interactions are attached – cards remain static
    // attachCardInteractions is called but does nothing
    attachCardInteractions();
});