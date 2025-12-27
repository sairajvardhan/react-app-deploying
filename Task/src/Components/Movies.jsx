function Movies() {
  const movies = [
    { img: "/Images/rc11.jpg", name: "Peddi", year: 2026, color: "orangered" },
    { img: "/Images/rc10.jpg", name: "Game Changer", year: 2025, color: "goldenrod" },
    { img: "/Images/rc1.jpg", name: "RRR", year: 2022, color: "orange" },
    { img: "/Images/rc4.jpg", name: "Vinaya Vidheya Rama", year: 2019, color: "green" },
    { img: "/Images/rc6.jpg", name: "Rangasthalam", year: 2018, color: "brown" },
    { img: "/Images/rc3.jpg", name: "Dhruva", year: 2016, color: "red" },
    { img: "/Images/rc7.jpg", name: "Bruce Lee", year: 2015, color: "crimson" },
    { img: "/Images/rc8.jpg", name: "Govindudu Andarivadele", year: 2014, color: "teal" },
    { img: "/Images/rc5.jpg", name: "Nayak", year: 2013, color: "purple" },
    { img: "/Images/rc12.jpg", name: "Racha", year: 2012, color: "blue" },
    { img: "/Images/rc9.jpg", name: "Orange", year: 2010, color: "darkorange" },
    { img: "/Images/rc2.jpg", name: "Magadheera", year: 2009, color: "darkblue" },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: "linear-gradient(to right, #89f7fe, #66a6ff)",
        padding: "20px",
        minHeight: "100vh"
      }}
    >
      <h2 style={{ color: "darkred" }}>🎬 Ram Charan Movie Gallery 🎥</h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {movies.map((m, i) => (
          <div key={i} style={{ margin: "15px", background: "white", padding: "10px", borderRadius: "10px" }}>
            <img src={m.img} alt={m.name} width="200" height="250" />
            <h3 style={{ color: m.color }}>{m.name}</h3>
            <p style={{ color: "gray" }}>{m.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
