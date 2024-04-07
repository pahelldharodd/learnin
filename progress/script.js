// Function to load JSON data
function loadData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Populate task list
            const taskList = document.getElementById('tasks');
            taskList.innerHTML = ''; // Clear previous content
            data.tasks.forEach(task => {
                const listItem = document.createElement('li');
                listItem.textContent = task.name + (task.completed ? ' (Completed)' : ' (Incomplete)');
                taskList.appendChild(listItem);
            });

            // Draw engagement graph
            const engagementData = data.engagement;
            const canvas = document.getElementById('engagementChart');
            const ctx = canvas.getContext('2d');
            const width = canvas.width;
            const height = canvas.height;
            const barWidth = width / engagementData.length;
            const maxValue = Math.max(...engagementData);
            const barSpacing = 10;
            
            ctx.clearRect(0, 0, width, height); // Clear previous graph
            engagementData.forEach((value, index) => {
                const barHeight = (value / maxValue) * height;
                const x = index * (barWidth + barSpacing);
                const y = height - barHeight;
                ctx.fillStyle = 'blue';
                ctx.fillRect(x, y, barWidth, barHeight);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
}

// Initially load data when the page is loaded
loadData();
