// Candidate Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const candidateCards = document.querySelectorAll('.candidate-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const position = btn.dataset.position;
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            candidateCards.forEach(card => {
                if (position === 'all' || card.dataset.position === position) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// View Manifesto
function viewManifesto(candidateId) {
    alert(`Viewing manifesto for ${candidateId}. This would open a detailed view.`);
}

// Verification Form
const verificationForm = document.getElementById('verificationForm');
if (verificationForm) {
    verificationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentId = document.getElementById('studentId').value;
        const fullName = document.getElementById('fullName').value;
        
        if (studentId && fullName) {
            alert(`Welcome ${fullName}!\nStudent ID: ${studentId}\n\nVerification successful. Redirecting to ballot...`);
            // Redirect to ballot page
            setTimeout(() => {
                window.location.href = 'ballot.html';
            }, 2000);
        }
    });
}
