function addQuestion() {
    let q = document.getElementById("questionText").value;
    let options = [
      document.getElementById("opt1").value,
      document.getElementById("opt2").value,
      document.getElementById("opt3").value,
      document.getElementById("opt4").value
    ];
    let correct = parseInt(document.getElementById("correct").value) - 1;
  
    let allQuestions = JSON.parse(localStorage.getItem("questions")) || [];
    allQuestions.push({ q: q, o: options, a: correct });
    localStorage.setItem("questions", JSON.stringify(allQuestions));
  
    alert("✅ Question added");
  }
  
  function saveName() {
    let name = document.getElementById("companyName").value;
    localStorage.setItem("brandName", name);
    alert("✅ Brand name saved");
  }
  
  function savePrice() {
    let price = document.getElementById("price").value;
    localStorage.setItem("certificatePrice", price);
    alert("✅ Price updated");
  }
  
  document.getElementById("logoUpload").addEventListener("change", function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      localStorage.setItem("logoImage", event.target.result);
      document.getElementById("logoStatus").innerText = "✅ Logo uploaded";
    };
    reader.readAsDataURL(file);
  });
  
  window.onload = () => {
    let paid = JSON.parse(localStorage.getItem("paidUsers")) || [];
    let list = document.getElementById("paidList");
    list.innerHTML = paid.map(u => `<li>${u.name} - ${u.email}</li>`).join("");
  };
  