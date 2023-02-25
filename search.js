const searchAdvice = async (searchText) => {
  const url = `https://api.adviceslip.com/advice/search/${searchText}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    ShowAdvice(data.slips[0]);
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("search-btn").addEventListener("click", () => {
  const searchText = document.getElementById("search-filed").value;
  searchAdvice(searchText);
});
