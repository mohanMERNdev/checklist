async function fetchChecklistResults() {
    try {
      const response = await fetch("https://checklist-cbu0.onrender.com/evaluate");
      const results = await response.json();
  
      const container = document.getElementById("checklist-container");
      results.forEach((result) => {
        const div = document.createElement("div");
        div.className = `checklist-item ${result.status.toLowerCase()}`;
        div.innerHTML = `
          <h3>${result.rule}</h3>
          <p>${result.description}</p>
          <strong>Status: ${result.status}</strong>
        `;
        container.appendChild(div);
      });
    } catch (error) {
      console.error("Error fetching checklist results:", error.message);
    }
  }
  

  fetchChecklistResults();
  
