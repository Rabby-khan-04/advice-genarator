const loadAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    ShowAdvice(data.slip);
  } catch (error) {
    console.log(error);
  }
};

const ShowAdvice = (adviceData) => {
  const { advice, id } = adviceData;
  document.getElementById("advice-id").innerText = "#" + id;
  document.getElementById("advice").innerText = `"${advice}"`;
};

document.getElementById("dice").addEventListener("click", () => {
  loadAdvice();
});

loadAdvice();
