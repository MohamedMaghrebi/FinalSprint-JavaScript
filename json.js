console.log("Hello, this is the script file!");

fetch('MM.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(record => {
            console.log('Name:', record.name); // Display the 'name' key-value pair
        });
        formatAndDisplayData(data);
    })
    .catch(error => console.error('Error fetching data:', error));

function formatData(record) {
    return `Name: ${record.name}, Age: ${record.age}, Email: ${record.email}, phone: ${record.phone}`;
}

function formatAddress(record) {
    return `City: ${record.address.city}, postal Code: ${record.address.postalCode}`;
}

function formatMaritalStatus(record) {
    return `Marital Status: ${record.isMarried ? 'Married' : 'Single'}`;
}

function formatAndDisplayData(data) {
    const displayElement = document.getElementById('dataDisplay');
    
    data.forEach(record => {
        const recordElement = document.createElement('p');
        recordElement.textContent = `${formatData(record)}, ${formatAddress(record)}, ${formatMaritalStatus(record)}`;
        displayElement.appendChild(recordElement);
        
        console.log(formatData(record));
        console.log(formatAddress(record));
        console.log(formatMaritalStatus(record));
    });
}
