document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('cmdInput');
    const outputElement = document.getElementById('terminalOutput');
    const fullText = "net.core --initialize --mode=active";
    let index = 0;

    function type() {
        if (index < fullText.length) {
            inputElement.textContent += fullText.charAt(index);
            index++;
            setTimeout(type, 100); 
        } else {
         
            setTimeout(showOutput, 500);
        }
    }

    function showOutput() {
        outputElement.classList.remove('hidden');
        outputElement.innerHTML = `
            > CORE_SYSTEM: v3.1.2 [OK]<br>
            > NET_STACK: Enabled<br>
            > ENVIRONMENT: judge22.net.production<br>
            > SECURITY: SSH_ACTIVE<br>
            > STATUS: READY_FOR_CONTRIBUTION
        `;
    }

   
    setTimeout(type, 1000); 
});