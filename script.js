document.getElementById('hear-about').addEventListener('change', function () {
    const additionalDetails = document.getElementById('additional-details');
    
    if (this.value === 'Magic!' || this.value === 'Other...') {
      additionalDetails.classList.remove('hidden');
    } else {
      additionalDetails.classList.add('hidden');
    }
  });
  