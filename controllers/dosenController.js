const express = require("express");
const router = express.Router();
const { connectionMahasiswa } = require("../models/db");

// GET /dosen
router.get("/", (req, res) => {
  connectionMahasiswa.query("SELECT * FROM dosen", (error, results) => {
    if (error) {
      console.error("Error fetching dosen:", error);
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.json(results);  
    }
  });
});

// GET /dosen/:nip
router.get("/:nidn", (req, res) => {
  const dosenNidn = req.params.nidn;
  connectionDosen.query(
    "SELECT * FROM dosen WHERE nidn=?",
    [dosenNidn],
    (error, results) => {
      if (error) {
        console.error("Error fetching dosen", error);
        res.status(500).json({ message: "Internal Server Error" });
      } else if (results.length === 0) {
        res.status(404).json({ message: "dosen not found" });
      } else {
        res.json(results[0]);
      }
    }
  );
});

// PUT /dosen/:nip
router.put("/:nidn", (req, res) => {
  const dosenNidn = req.params.nidn;
  const { nama, gender, prodi, alamat } = req.body;
  connectionDosen.query(
    "UPDATE dosen SET nama = ?, gender = ?, prodi = ?, alamat = ? WHERE nidn= ?",
    [nama, gender, prodi, alamat, dosenNidn],
    (error) => {
      if (error) {
        console.error("Error updating dosen:", error);
        res.status(500).json({ message: "Internal Server Error" });
      } else {
        res.json("Updating dosen successfully");
      }
    }
  );
});

// POST /dosen
router.post("/", (req, res) => {
  const { nidn, nama, gender, prodi, alamat } = req.body;
  connectionDosen.query(
    "INSERT INTO dosen (nidn, nama, gender, prodi, alamat) VALUES (?, ?, ?, ?, ?)",
    [nidn, nama, gender, prodi, alamat],
    (error) => {
      if (error) {
        console.error("Error adding dosen:", error);
        res.status(500).json({ message: "Internal Server Error" });
      } else {
        res.json("Adding dosen successfully");
      }
    }
  );
});

// DELETE /dosen/:nip
router.delete("/:nidn", (req, res) => {
  const dosenNidn = req.params.nidn;
  connectionDosen.query(
    "DELETE FROM dosen WHERE nidn = ?",
    [dosenNidn],
    (error) => {
      if (error) {
        console.error("Error deleting dosen:", error);
        res.status(500).json({ message: "Internal Server Error" });
      } else {
        res.json("Deleting dosen successfully");
      }
    }
  );
});

module.exports = router;
