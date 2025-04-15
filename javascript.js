// Initialize an array to store submissions
const submissions = [];

// Select HTML elements
const htmlForm = document.getElementById("html5ValidationForm");
const jsForm = document.getElementById("jsValidationForm");
const output = document.getElementById("output");

// Add event listener for HTML5 form submission
htmlForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default behavior

  // Gather form data
  const formData = new FormData(htmlForm);
  const Data = Object.fromEntries(formData.entries());
  console.log(Data); // Log the data to the console

  // Store submission and display results
  submissions.push(Data);
  alert("HTML5 Form successfully submitted!");
  displaySubmissions();
  htmlForm.reset();
});

// Add event listener for JavaScript form submission
jsForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default behavior

  // Perform custom JavaScript validation
  const username = document.getElementById("js-username");
  const usernameError = document.getElementById("username-error");

  if (username.value.length < 5) {
    usernameError.textContent = "Username must be at least 5 characters.";
    username.style.borderColor = "red";
  } else {
    usernameError.textContent = "";
    username.style.borderColor = "green";

    // Gather and store data
    const Data = { username: username.value };
    submissions.push(Data);

    console.log(Data); // Log the data to the console
    alert("JavaScript Form successfully submitted!");
    displaySubmissions();
    jsForm.reset();
  }
});

// Function to display submissions
function displaySubmissions() {
  output.innerHTML = ""; // Clear previous output

  submissions.forEach((submission, index) => {
    const submissionDiv = document.createElement("div");
    submissionDiv.innerHTML = `
            <strong>Submission #${index + 1}</strong><br>
            Username: ${submission.username || "N/A"}<br>
            Email: ${submission.email || "N/A"}<br>
            Password: ${submission.password || "N/A"}<br>
            Age: ${submission.age || "N/A"}<br>
            <hr>
        `;
    output.appendChild(submissionDiv);
  });
}
