const mahasiswaNim = "004017";
const updateData = {
  nama: "Rudi",
  gender: "L",
  prodi: "TE",
  alamat: "Cinagen",
};

// PUT request
fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateData),
})
  .then((response) => response.json())
  .then((data) => console.log("PUT Result:", data))
  .catch((error) => console.error("PUT Error:", error));

// POST request
fetch("http://localhost:3000/mahasiswa", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateData),
})
  .then((response) => response.json())
  .then((data) => console.log("POST Result:", data))
  .catch((error) => console.error("POST Error:", error));

// DELETE request
fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log("DELETE Result:", data))
  .catch((error) => console.error("DELETE Error:", error));
