const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        color: "#fff",
        height: "98vh",
        display: "flex",
        padding: "0 2.5em",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "end",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url('../src/assets/hero_bg.jpg')`,
        transform: "scaleX(-1)",
      }}
    >
      <div
        style={{
          //   background: "Red",
          width: "fit-content",
          //   maxWidth: "60vw",
          //   marginTop: "5rem",
          transform: "scaleX(-1)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem" }}>
          Explore our vibrant community of photo enthusiasts
        </h1>
        <p style={{ margin: "1em 0", fontSize: "1.3em" }}>
          Discover the Beauty of Photography
        </p>
        <button className="btn" id="join_btn">
          Join today
        </button>
      </div>
    </div>
  );
};

export default Hero;
