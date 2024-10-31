d3.csv("data.csv")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error loading the CSV file:", error);
  });
