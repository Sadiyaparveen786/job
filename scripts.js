function handlePositionChange() {
    const position = document.getElementById('position').value;
    const relevantExperienceField = document.getElementById('relevantExperienceField');
    const portfolioUrlField = document.getElementById('portfolioUrlField');
    const managementExperienceField = document.getElementById('managementExperienceField');
    
    relevantExperienceField.classList.add('hidden');
    portfolioUrlField.classList.add('hidden');
    managementExperienceField.classList.add('hidden');
    
    if (position === 'Developer' || position === 'Designer') {
        relevantExperienceField.classList.remove('hidden');
    }
    if (position === 'Designer') {
        portfolioUrlField.classList.remove('hidden');
    }
    if (position === 'Manager') {
        managementExperienceField.classList.remove('hidden');
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('jobApplicationForm');
    
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const position = form.position.value;
    const relevantExperience = form.relevantExperience.value;
    const portfolioUrl = form.portfolioUrl.value;
    const managementExperience = form.managementExperience.value;
    const additionalSkills = Array.from(form.additionalSkills)
        .filter(skill => skill.checked)
        .map(skill => skill.value)
        .join(', ');
    const preferredInterviewTime = form.preferredInterviewTime.value;
    
    if (additionalSkills.length === 0) {
        alert('Please select at least one additional skill.');
        return false;
    }
    
    const summaryContent = `
        Full Name: ${fullName}<br>
        Email: ${email}<br>
        Phone Number: ${phoneNumber}<br>
        Applying for Position: ${position}<br>
        ${position === 'Developer' || position === 'Designer' ? `Relevant Experience: ${relevantExperience} years<br>` : ''}
        ${position === 'Designer' ? `Portfolio URL: ${portfolioUrl}<br>` : ''}
        ${position === 'Manager' ? `Management Experience: ${managementExperience}<br>` : ''}
        Additional Skills: ${additionalSkills}<br>
        Preferred Interview Time: ${new Date(preferredInterviewTime).toLocaleString()}
    `;
    
    document.getElementById('summaryContent').innerHTML = summaryContent;
    document.getElementById('formSummary').classList.remove('hidden');
    
    return false;
}
