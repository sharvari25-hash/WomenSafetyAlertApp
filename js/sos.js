/**
 * SHEGUARD SOS Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Visual Effects
    const body = document.getElementById('body-bg');
    let flashInterval = setInterval(() => {
        body.classList.toggle('bg-flash');
    }, 1000);

    // 2. Audio Siren (Browser generated beep)
    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let oscillator = null;
    let gainNode = null;
    let isPlaying = false;

    function startSiren() {
        if (isPlaying) return;
        oscillator = audioCtx.createOscillator();
        gainNode = audioCtx.createGain();

        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // Start high
        oscillator.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.5); // Drop low
        
        // Loop the frequency drop for a siren effect
        // (Simplified for this demo: just a continuous tone modulation would require an interval or LFO)
        // We will just do a standard alarm pulse

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start();
        isPlaying = true;

        // Modulate pitch
        setInterval(() => {
            if(oscillator) {
                const time = audioCtx.currentTime;
                oscillator.frequency.setValueAtTime(800, time);
                oscillator.frequency.linearRampToValueAtTime(400, time + 0.5);
            }
        }, 1000);
    }

    // Auto-start siren (User interaction usually required first, but we simulate)
    // Note: Browsers block auto-play. We'll start it on the first "click" or assume user clicked "SOS" to get here.
    // Since we navigated here, we might need a user interaction to start audio. 
    // We'll rely on the visual intensity if audio is blocked.
    
    // Try to start immediately (might fail without interaction)
    try {
        startSiren();
    } catch(e) {
        console.log("Audio blocked until interaction");
    }

    // 3. Simulate Sending Alerts
    const msgStatus = document.getElementById('msgStatus');
    const steps = [
        "Sending SMS to Mom...",
        "Sending SMS to Dad...",
        "Alert Sent! Tracking Location...",
        "Notifying Admin..."
    ];
    let stepIndex = 0;

    const msgInterval = setInterval(() => {
        if(stepIndex < steps.length) {
            msgStatus.innerText = steps[stepIndex];
            stepIndex++;
        } else {
            clearInterval(msgInterval);
            msgStatus.innerText = "ALL ALERTS SENT";
            msgStatus.classList.add('text-green-300', 'font-bold');
        }
    }, 1500);

    // 4. Log to History
    const logAlert = () => {
        const newAlert = {
            id: Date.now(),
            type: 'SOS',
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            location: 'Near Mock Location, 12.97, 77.59',
            status: 'Resolved'
        };
        Storage.logAlert(newAlert);
    };

    // 5. Stop Button
    document.getElementById('stopBtn').addEventListener('click', () => {
        clearInterval(flashInterval);
        clearInterval(msgInterval);
        if(oscillator) {
            oscillator.stop();
            oscillator.disconnect();
        }
        
        logAlert();
        
        // Redirect back
        window.location.href = 'dashboard.html';
    });

});
