const questionsList = [
    "എനിക്ക് കാർ നന്നാക്കാൻ താല്പര്യമുണ്ട്.", "പസിലുകൾ ചെയ്യാൻ എനിക്കിഷ്ടമാണ്.", "സ്വതന്ത്രമായി പ്രവർത്തിക്കാൻ ഞാൻ മിടുക്കനാണ്.", "ടീമായി പ്രവർത്തിക്കാനാണ് എനിക്കിഷ്ടം.", "ഞാൻ വ്യക്തമായ ആഗ്രഹങ്ങളുള്ള ഒരാളാണ് എന്റെ ലക്ഷ്യങ്ങൾ ഞാൻ സ്വയം തന്നെയാണ് നിർണ്ണയിക്കുന്നത്.", "സാധനങ്ങൾ ഒതുക്കി വക്കാൻ ഞാൻ ശ്രമിക്കാറുണ്ട് (ഫയലുകൾ, ഡെസ്കുകൾ/ ഓഫീസുകൾ).", "ഞാൻ നിർമ്മാണ പ്രവർത്തനങ്ങൾ ഇഷ്ടപ്പെടുന്നു.", "കലയെയും സംഗീതത്തെയും കുറിച്ച് വായിക്കാൻ എനിക്കിഷ്ടമാണ്.", "പിന്തുടരാൻ വ്യക്തമായ നിർദ്ദേശങ്ങൾ ലഭിച്ചെങ്കിലെന്ന് ഞാൻ ആഗ്രഹിക്കാറുണ്ട്.", "ആളുകളെ സ്വാധീനിക്കാനും പ്രേരിപ്പിക്കാനും ഞാൻ ആഗ്രഹിക്കുന്നു.",
    "എനിക്ക് പരീക്ഷണങ്ങൾ ഇഷ്ടമാണ്.", "ആളുകളെ പഠിപ്പിക്കാനും പരിശീലിപ്പിക്കാനും ഞാൻ ഇഷ്ടപ്പെടുന്നു.", "ആളുകളുടെ പ്രശ്ന പരിഹാരങ്ങൾക്ക് സഹായിക്കാൻ ശ്രമിക്കുന്നത് ഞാൻ ഇഷ്ടപ്പെടുന്നു.", "മൃഗങ്ങളെ പരിപാലിക്കൽ എനിക്കിഷ്ടമുള്ള കാര്യമാണ്.", "ഒരു ഓഫീസിൽ ദിവസവും 8 മണിക്കൂർ ജോലി ചെയ്യുന്നത് എനിക്ക് പ്രശ്നമല്ല.", "സാധനങ്ങൾ വിൽക്കുന്നത് എനിക്ക് രസമുള്ള പരിപാടിയാണ്.", "ക്രിയേറ്റീവ് റൈറ്റിംഗ് ഞാൻ ആസ്വദിക്കുന്നു.", "ശാസ്ത്രം എനിക്ക് താല്പര്യമുള്ള മേഖലയാണ്.", "പുതിയ ഉത്തരവാദിത്തങ്ങൾ ഞാൻ വേഗം ഏറ്റെടുക്കാറുണ്ട്.", "മറ്റുള്ളവരെ ശുശ്രൂഷിക്കാൻ എനിക്കിഷ്ടമാണ്.",
    "വസ്തുക്കൾ എങ്ങനെയാണ് പ്രവർത്തിക്കുന്നതെന്നറിയാൻ എനിക്ക് ജിജ്ഞാസ തോന്നാറുണ്ട്.", "കാര്യങ്ങൾ ഒരുമിച്ച് കൂട്ടുന്നതും വസ്തുക്കൾ കൂട്ടിച്ചേർക്കുന്നതും എനിക്കിഷ്ടമാണ്.", "ഞാൻ ഒരു സർഗ്ഗാത്മക വ്യക്തിയാണ്.", "ഞാൻ വിശദാംശങ്ങളെ ശ്രദ്ധിക്കാറുണ്ട്.", "ഫയലിംഗ് അല്ലെങ്കിൽ ടൈപ്പിംഗ് ചെയ്യാൻ ഞാൻ ഇഷ്ടപ്പെടുന്നു.", "കാര്യങ്ങൾ വിശകലനം ചെയ്യാൻ ഞാൻ ഇഷ്ടപ്പെടുന്നു (പ്രശ്നങ്ങൾ/സാഹചര്യങ്ങൾ).", "എനിക്ക് വാദ്യോപകരണങ്ങൾ വായിക്കാനും പാടാനും ഇഷ്ടമാണ്.", "മറ്റുള്ള സംസ്കാരങ്ങളെ കുറിച്ച് പഠിക്കാൻ ഞാൻ തല്പരനാണ്.", "സ്വന്തമായി ബിസിനസ്സ് തുടങ്ങാൻ ഞാൻ ആഗ്രഹിക്കുന്നു.", "എനിക്ക് പാചകം ചെയ്യാൻ ഇഷ്ടമാണ്.",
    "എനിക്ക് നാടകങ്ങളിൽ അഭിനയിക്കാൻ ഇഷ്ടമാണ്.", "ഞാൻ ഒരു പ്രായോഗിക വ്യക്തിയാണ്.", "ഞാൻ നമ്പറുകളോ ചാർട്ടുകളോ ഉപയോഗിച്ച് പ്രവർത്തിക്കാൻ ഇഷ്ടപ്പെടുന്നു.", "പ്രശ്നങ്ങളെ സംബന്ധിച്ച ചർച്ചകളിൽ ഏർപ്പെടാൻ ഞാൻ ആഗ്രഹിക്കുന്നു.", "എന്റെ പ്രവർത്തനങ്ങളുടെ രേഖകൾ സൂക്ഷിക്കുന്നതിൽ ഞാൻ മിടുക്കനാണ്.", "ഞാൻ നയിക്കാൻ ഇഷ്ടപ്പെടുന്നു.", "എനിക്ക് തുറസ്സായ സ്ഥലങ്ങളിൽ ജോലി ചെയ്യാൻ ഇഷ്ടമാണ്.", "ഓഫീസിലിരുന്നുള്ള ജോലിയാണ് ഞാനാഗ്രഹിക്കുന്നത്.", "ഞാൻ ഗണിതത്തിൽ മിടുക്കനാണ്.", "മറ്റുള്ളവരെ സഹായിക്കാൻ ഞാൻ ഇഷ്ടപ്പെടുന്നു.",
    "എനിക്ക് ചിത്രം വരക്കാൻ ഇഷ്ടമാണ്.", "എനിക്ക് പ്രസംഗിക്കാൻ ഇഷ്ടമാണ്."
];

const classesInfo = {
    "Realistic": { desc: "ഇത്തരക്കാർ മെക്കാനിക്, അത്‌ലറ്റിക് തൊഴിലുകളിൽ തല്പരരായിരിക്കും.", areas: "കൃഷി, ശാരീരിക സഹായങ്ങൾ, കമ്പ്യൂട്ടർ, നിർമ്മാണം, മെക്കാനിക്/ മെക്കാനിസ്റ്റ്, എഞ്ചിനിയറിങ്, ഭക്ഷണവും ആതിഥ്യ മര്യാദയും" },
    "Investigative": { desc: "പ്രശ്നങ്ങളെ വീക്ഷിക്കാനും, പഠിക്കാനും, വിലയിരുത്താനും മിടുക്കരായിരിക്കും ഇക്കൂട്ടർ.", areas: "സമുദ്ര ജീവശാസ്ത്രം, എഞ്ചിനിയറിങ്, കെമിസ്ട്രി, സുവോളജി, മെഡിസിൻ/ സർജറി, ഉപഭോക്തൃ സാമ്പത്തിക ശാസ്ത്രം, സൈക്കോളജി" },
    "Artistic": { desc: "ഒരു കൃത്യമായ ഘടനയില്ലാത്ത സ്ഥലങ്ങളിൽ, സ്വന്തം ക്രിയാത്മകത ഉപയോഗിച്ച് ജോലി ചെയ്യാൻ താല്പര്യമുള്ള കൂട്ടരാണിവർ.", areas: "വാർത്താ വിനിമയം, മേക്കപ്പ് (Cosmetology), നടന കലകളും ഫൈൻ ആർട്‌സും, ഫോട്ടോഗ്രാഫി, ടീവി, റേഡിയോ, ഇൻ്റീരിയർ ഡിസൈനിങ്, ആർകിടെക്ച്ചർ" },
    "Social": { desc: "എന്തെങ്കിലും വസ്തുക്കളിൽ പണി ചെയ്യുന്നതിനു പകരം, ഇവർ മറ്റു മനുഷ്യരുടെ കൂടെ ജോലി ചെയ്യാൻ ആഗ്രഹിക്കുന്നു.", areas: "കൗൺസിലിങ്, നഴ്‌സിങ്, ഫിസിക്കൽ തെറാപ്പി, സഞ്ചാരം, അഡ്വർടൈസിങ്, പബ്ലിക് റിലേഷൻ, എജ്യൂക്കേഷൻ" },
    "Enterprising": { desc: "മറ്റുള്ളവരുടെ കൂടെ, പ്രചോദിപ്പിച്ചും പ്രകടനങ്ങൾ നടത്തിയും ജോലി ചെയ്യാൻ ആഗ്രഹിക്കുന്നവരാണ് ഇക്കൂട്ടർ.", areas: "ഫാഷൻ വാണിജ്യങ്ങൾ, റിയൽ എസ്റ്റേറ്റ്, മാർക്കറ്റിങ്/ സെയിൽസ്, നിയമം, പൊളിറ്റിക്കൽ സയൻസ്, അന്തർദേശീയ കച്ചവടങ്ങൾ, ബാങ്കിങ്, ഫൈനാൻസിങ്" },
    "Conventional": { desc: "വിശദീകരണങ്ങൾക്ക് അധിഷ്ഠിതമായി, കൃത്യമായി ജോലി ചെയ്യാൻ താല്പര്യമുള്ള ഇവർക്ക് ഡാറ്റകളോട് വലിയ പ്രിയമായിരിക്കും.", areas: "അക്കൗണ്ടിങ്, കോടതി റിപ്പോർട്ടിങ്, ഇൻഷുറൻസ്, അഡ്മിനിസ്ട്രേഷൻ, മെഡിക്കൽ റെക്കോർഡുകൾ, ബാങ്കിങ്, ഡാറ്റാ പ്രോസസിങ്" }
};

const mapping = {
    "Realistic": [1,7,14,22,30,32], "Investigative": [2,11,18,21,26,37,39], "Artistic": [3,8,17,23,27,31,33,41],
    "Social": [4,12,13,20,28,34,40], "Enterprising": [5,10,16,19,29,36,42], "Conventional": [6,9,15,24,25,35,38]
};

let currentPage = 0;
const itemsPerPage = 7;
const totalPages = Math.ceil(questionsList.length / itemsPerPage);
let chartInstance = null;

// Close the welcome popup modal
function closeModal() {
    document.getElementById('welcome-modal').style.display = 'none';
}

// Generate question UI on load
window.onload = function() {
    const wrapper = document.getElementById('questions-wrapper');
    questionsList.forEach((qText, index) => {
        const qNum = index + 1;
        const pageIdx = Math.floor(index / itemsPerPage);
        
        let html = `<div class="question-card page-${pageIdx} ${pageIdx !== 0 ? 'hidden' : ''}" id="qcard-${qNum}">
            <div class="question-text">${qNum}. ${qText}</div>
            <div class="radio-group">`;
        
        for(let i = 0; i <= 5; i++){
            // Assign labels for 0 and 5, use non-breaking space for others to keep height consistent
            let subLabel = "&nbsp;"; 
            if (i === 0) subLabel = "തീരെ ഇല്ല";
            if (i === 5) subLabel = "വളരെ അധികം";

            html += `<div class="radio-item">
                        <input type="radio" id="q${qNum}_v${i}" name="q${qNum}" value="${i}">
                        <label for="q${qNum}_v${i}">${i}</label>
                        <span class="scale-label">${subLabel}</span>
                     </div>`;
        }
        html += `</div><div class="error-msg">Please answer this question.</div></div>`;
        wrapper.innerHTML += html;
    });
    updateProgress();
};

// Ensure all visible questions on the current page are answered
function validateCurrentPage() {
    let isValid = true;
    const currentQuestions = document.querySelectorAll(`.page-${currentPage}`);
    
    currentQuestions.forEach(card => {
        const qNum = card.id.split('-')[1];
        const isChecked = document.querySelector(`input[name="q${qNum}"]:checked`);
        if (!isChecked) {
            isValid = false;
            card.classList.add('error-border');
        } else {
            card.classList.remove('error-border');
        }
    });
    return isValid;
}

// Update the visual progress bar width
function updateProgress() {
    const progress = ((currentPage + 1) / totalPages) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

// Handle transition to the next page of questions
function nextPage() {
    if (!validateCurrentPage()) return; // Prevent next if validation fails

    document.querySelectorAll(`.page-${currentPage}`).forEach(el => el.classList.add('hidden'));
    currentPage++;
    document.querySelectorAll(`.page-${currentPage}`).forEach(el => el.classList.remove('hidden'));
    
    document.getElementById('btn-prev').classList.remove('hidden');
    
    // Hide 'Next' button and show 'Submit' on the last page
    if (currentPage === totalPages - 1) {
        document.getElementById('btn-next').classList.add('hidden');
        document.getElementById('btn-submit').classList.remove('hidden');
    }
    updateProgress();
    window.scrollTo(0, 0);
}

// Handle transition to the previous page of questions
function prevPage() {
    document.querySelectorAll(`.page-${currentPage}`).forEach(el => el.classList.add('hidden'));
    currentPage--;
    document.querySelectorAll(`.page-${currentPage}`).forEach(el => el.classList.remove('hidden'));
    
    document.getElementById('btn-next').classList.remove('hidden');
    document.getElementById('btn-submit').classList.add('hidden');
    if (currentPage === 0) document.getElementById('btn-prev').classList.add('hidden');
    
    updateProgress();
    window.scrollTo(0, 0);
}

// Calculate scores and render the final results view
function calculateAptitude() {
    if (!validateCurrentPage()) return; // Final strict check before submission

    let scores = { "Realistic": 0, "Investigative": 0, "Artistic": 0, "Social": 0, "Enterprising": 0, "Conventional": 0 };

    for (let category in mapping) {
        mapping[category].forEach(qNum => {
            const selected = document.querySelector(`input[name="q${qNum}"]:checked`);
            if (selected) scores[category] += parseInt(selected.value);
        });
    }

    // Sort descending and identify the top 3 (including ties for 3rd place)
    const sortedCategories = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    const thirdPlaceScore = scores[sortedCategories[2]];
    const topCategories = sortedCategories.filter(cat => scores[cat] >= thirdPlaceScore);

    // Hide quiz UI, show results UI
    document.getElementById('quiz-container').classList.add('hidden');
    document.querySelector('.progress-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');

    const resultDiv = document.getElementById('top-results');
    resultDiv.innerHTML = "";

    topCategories.forEach(cat => {
        const info = classesInfo[cat];
        resultDiv.innerHTML += `
            <div class="result-item">
                <h3 style="color: #4F46E5; margin-top:0;">${cat} - Score: ${scores[cat]}</h3>
                <p><strong>വിവരണം:</strong> ${info.desc}</p>
                <p><strong>അനുയോജ്യ മേഖലകൾ:</strong></p>
                <ul>${info.areas.split(',').map(area => `<li>${area.trim()}</li>`).join('')}</ul>
            </div>`;
    });

    renderChart(scores);
    window.scrollTo(0, 0);
}

// Render the graphical representation of the user's score using Chart.js
function renderChart(scores) {
    const ctx = document.getElementById('resultChart').getContext('2d');
    if (chartInstance) chartInstance.destroy();

    // Sort categories from highest score to lowest for the chart
    const sortedCategories = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    const sortedData = sortedCategories.map(cat => scores[cat]);

    // Gradient styling colors (Top score: Green -> Lowest score: Red)
    const colors = [
        'rgba(34, 197, 94, 0.8)',   // Green (1st)
        'rgba(132, 204, 22, 0.8)',  // Light Green (2nd)
        'rgba(234, 179, 8, 0.8)',   // Yellow (3rd)
        'rgba(249, 115, 22, 0.8)',  // Orange (4th)
        'rgba(239, 68, 68, 0.8)',   // Red (5th)
        'rgba(185, 28, 28, 0.8)'    // Dark Red (6th)
    ];
    
    const borderColors = [
        'rgba(34, 197, 94, 1)', '#84cc16', '#eab308', '#f97316', '#ef4444', '#b91c1c'
    ];

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedCategories,
            datasets: [{
                label: 'Aptitude Score',
                data: sortedData,
                backgroundColor: colors,
                borderColor: borderColors,
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true, max: 35 } },
            plugins: { legend: { display: false } }
        }
    });
}

// Capture the result container using html2canvas and trigger download
function downloadScreenshot() {
    const captureArea = document.getElementById('capture-area');
    html2canvas(captureArea, { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'Aptitude_Result.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

// Utilize the Web Share API to share the captured image on WhatsApp
async function shareOnWhatsApp() {
    const captureArea = document.getElementById('capture-area');
    const websiteUrl = window.location.href; 
    const text = `ഞാൻ എൻ്റെ കരിയർ അഭിരുചി പരീക്ഷ പൂർത്തിയാക്കി! നിങ്ങൾക്കും പരിശോധിക്കാം: ${websiteUrl}`;

    try {
        const canvas = await html2canvas(captureArea, { scale: 2 });
        canvas.toBlob(async (blob) => {
            const file = new File([blob], 'Aptitude_Result.png', { type: 'image/png' });
            
            // For Mobile: Share image directly to WhatsApp via native share menu
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: 'എൻ്റെ അഭിരുചി പരീക്ഷ ഫലം',
                    text: text,
                    files: [file]
                });
            } else {
                // For Desktop: Download the image and open WhatsApp web link
                alert("Direct image sharing is not supported on this device. The result will be downloaded, please attach it manually in WhatsApp.");
                
                const link = document.createElement('a');
                link.download = 'Aptitude_Result.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
                
                setTimeout(() => {
                    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
                    window.open(whatsappUrl, '_blank');
                }, 1500);
            }
        });
    } catch (error) {
        console.error("Error sharing image:", error);
        alert("An error occurred while sharing the image.");
    }
}