const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        color: "#fff",
        height: "98vh",
        display: "flex",
        padding: "0 2em",
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
          width: "80vw",
          transform: "scaleX(-1)",
          wordBreak: "break-all",
        }}
      >
        <h1 style={{ fontSize: "2.5rem" }}>
          The largest community of photo enthusiasts
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
