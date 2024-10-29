document.getElementById("checkButton").addEventListener("click", function() {
    const word1 = document.getElementById("word1").value.trim();
    const word2 = document.getElementById("word2").value.trim();
    const resultDiv = document.getElementById("result");

    resultDiv.textContent = '';

    // validation
    if (!word1 || !word2) {
        resultDiv.textContent = 'Please enter words.';
        resultDiv.style.color = 'red';
        return;
    }
    
    const normalizedWord1 = word1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    const normalizedWord2 = word2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');


      if (normalizedWord1 === normalizedWord2) {
        resultDiv.textContent = `"${word1}" and "${word2}" are anagrams!`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `"${word1}" and "${word2}" are not anagrams.`;
        resultDiv.style.color = 'red';
    }
});