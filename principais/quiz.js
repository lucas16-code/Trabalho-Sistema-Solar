document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const clearButton = document.getElementById('botao-limpar'); 

    function clearQuiz() {
        const questionBlocks = document.querySelectorAll('.bloco-pergunta');
        
        questionBlocks.forEach(block => {
            block.classList.remove('correto', 'incorreto', 'respondida');
            block.querySelector('.mensagem-feedback').textContent = '';
            
            block.querySelectorAll('input[type="radio"]').forEach(input => {
                input.disabled = false;
                input.checked = false;
            });

            block.querySelectorAll('label').forEach(label => {
                label.style.fontWeight = 'normal';
                label.style.color = '#f0f0f0';
                label.style.backgroundColor = 'transparent'; 
            });
        });
    }

    clearButton.addEventListener('click', clearQuiz);

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            
            const questionBlock = this.closest('.bloco-pergunta');
            
            if (questionBlock.classList.contains('respondida')) {
                return;
            }

            const correctAnswer = questionBlock.getAttribute('data-correct-answer');
            const userAnswer = this.value;
            const feedbackMessage = questionBlock.querySelector('.mensagem-feedback');
            
            questionBlock.classList.remove('correto', 'incorreto');
            
            if (userAnswer === correctAnswer) {
                questionBlock.classList.add('correto');
                feedbackMessage.textContent = '✅ Resposta correta! Continua assim.';
            } else {
                questionBlock.classList.add('incorreto');
                feedbackMessage.textContent = '❌ Resposta errada. Tente outra vez!';
            }

            questionBlock.classList.add('respondida');
            questionBlock.querySelectorAll('input[type="radio"]').forEach(input => {
                input.disabled = true;
                
                if (userAnswer !== correctAnswer && input.value === correctAnswer) {
                    input.closest('label').style.fontWeight = 'bold';
                    input.closest('label').style.color = '#27ae60'; 
                    input.closest('label').style.backgroundColor = '#d4edda'; 
                }
            });
            
            if (userAnswer !== correctAnswer) {
                this.closest('label').style.backgroundColor = '#f8d7da'; 
            }
        });
    });
});