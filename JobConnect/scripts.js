// script.js

const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

// Load jobs on main page
if (document.getElementById('job-list')) {
    const jobList = document.getElementById('job-list');
    jobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('card', 'mb-3');
        jobItem.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${job.title}</h5>
                <p class="card-text">Location: ${job.location}</p>
                <p class="card-text">Salary: ${job.salary}</p>
            </div>
        `;
        jobList.appendChild(jobItem);
    });
}

// Registration form handling
if (document.getElementById('registration-form')) {
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful!');
        this.reset();
    });
}

// Job listings search
if (document.getElementById('search')) {
    document.getElementById('search').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredJobs = jobs.filter(job => 
            job.title.toLowerCase().includes(query) ||
            job.location.toLowerCase().includes(query)
        );
        displayJobs(filteredJobs);
    });
}

// Add job handling in admin
if (document.getElementById('job-form')) {
    document.getElementById('job-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('jobTitle').value;
        const location = document.getElementById('jobLocation').value;
        const salary = document.getElementById('jobSalary').value;

        jobs.push({ title, location, salary });
        localStorage.setItem('jobs', JSON.stringify(jobs));

        alert('Job added successfully!');
        this.reset();
        displayJobs(jobs);
    });
}

// Function to display jobs
function displayJobs(jobsToDisplay) {
    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = ''; // Clear existing listings
    jobsToDisplay.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('card', 'mb-3');
        jobItem.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${job.title}</h5>
                <p class="card-text">Location: ${job.location}</p>
                <p class="card-text">Salary: ${job.salary}</p>
            </div>
        `;
        jobListings.appendChild(jobItem);
    });
}

// Display current jobs in admin panel
if (document.getElementById('current-jobs')) {
    displayJobs(jobs);
}
