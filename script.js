// Update time
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();

// Uptime counter
let uptimeSeconds = 2262; // 00:37:42
function updateUptime() {
    uptimeSeconds++;
    const hours = String(Math.floor(uptimeSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((uptimeSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(uptimeSeconds % 60).padStart(2, '0');
    document.getElementById('uptime').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateUptime, 1000);

// Terminal commands
const commandInput = document.getElementById('command-input');
const terminalContent = document.getElementById('terminal');

const commands = {
    'help': 'Available commands: help, clear, echo, system, scan, hack, exit\n> Type a command and press Enter',
    'clear': '', // Special case
    'system': '[*] System: CYBER_INTERFACE v5.0.0\n[*] OS: Linux x64\n[*] CPU: Intel Core i7-10700K\n[*] RAM: 32.0 GB (19% used)\n[*] GPU: NVIDIA GEFORCE RTX 3060\n[*] Status: ALL SYSTEMS OPERATIONAL',
    'scan': '[*] Initiating network scan...\n[*] Found 47 active hosts\n[*] 12 vulnerabilities detected\n[*] Running exploit modules...\n[+] SCAN COMPLETE',
    'hack': '[*] Initializing hackware suite...\n[*] Bypassing firewall...\n[*] Injecting payload...\n[+] HACK SUCCESSFUL - ACCESS GRANTED',
    'echo': (arg) => arg || 'echo: no argument provided',
    'exit': '[*] Shutting down system...\n[*] Goodbye.'
};

commandInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const command = commandInput.value.trim().toLowerCase();
        
        // Add user command to terminal
        if (command) {
            const userLine = document.createElement('div');
            userLine.className = 'log-line';
            userLine.textContent = `cyber@kali:~$ ${command}`;
            terminalContent.appendChild(userLine);
        }
        
        // Process command
        if (command === 'clear') {
            terminalContent.innerHTML = '';
        } else if (command.startsWith('echo ')) {
            const arg = command.substring(5);
            const response = commands.echo(arg);
            addTerminalLine(response);
        } else if (commands[command]) {
            addTerminalLine(commands[command]);
        } else if (command === '') {
            // Do nothing for empty input
        } else {
            addTerminalLine(`[!] Command not found: ${command}`);
        }
        
        // Clear input and scroll
        commandInput.value = '';
        terminalContent.scrollTop = terminalContent.scrollHeight;
        
        // Trigger mouth animation
        animateMouth();
    }
});

function addTerminalLine(text) {
    const line = document.createElement('div');
    line.className = 'log-line';
    line.textContent = text;
    terminalContent.appendChild(line);
}

// Mouth animation trigger
function animateMouth() {
    const mouthPath = document.getElementById('mouth-path');
    mouthPath.style.animation = 'none';
    
    // Trigger reflow to restart animation
    void mouthPath.offsetWidth;
    
    mouthPath.style.animation = 'mouth-talk 0.6s ease-in-out';
}

// Random mouth movement
setInterval(() => {
    if (Math.random() > 0.7) {
        animateMouth();
    }
}, 3000);

// Matrix effect enhancement
function createMatrixEffect() {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメヤユヨラリルレロワヲン';
    const randomChar = chars[Math.floor(Math.random() * chars.length)];
    return randomChar;
}

// Simulate system events
setInterval(() => {
    const events = [
        '[*] Network packet intercepted',
        '[*] Firewall probe detected',
        '[*] Port scan initiated',
        '[!] Suspicious activity detected',
        '[*] VPN connection established',
        '[*] Encryption key updated'
    ];
    
    if (Math.random() > 0.8) {
        const randomEvent = events[Math.floor(Math.random() * events.length)];
        addTerminalLine(randomEvent);
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }
}, 5000);

// Initial message
window.addEventListener('load', () => {
    addTerminalLine('[*] CYBER_INTERFACE initialized successfully');
    addTerminalLine('[*] Type "help" to see available commands');
});

// Focus input on load
window.addEventListener('load', () => {
    commandInput.focus();
});