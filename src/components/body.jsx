const Body = () => {
  return (
    <div
      className="sub-hero"
      style={{
        background: "white",
        // widows: "100vw",
        padding: "  2em 2.5em",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        // justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "1.5em" }}>
        Snap photos and share like never before
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "1rem",
          textAlign: "justify",
        }}
      >
        <BodyCard></BodyCard>
        <BodyCard></BodyCard>
        <BodyCard></BodyCard>
        <BodyCard></BodyCard>
      </div>
    </div>
  );
};
export default Body;

const BodyCard = () => {
  return (
    <>
      <div
        className="card"
        style={{
          minWidth: "320px",
          width: "43%",
          padding: "1em",
          borderRadius: "5px",
          border: "0.1px solid var(--primary-color)",
          boxShadow: "3px 4px 10px rgba(24, 160, 251, 0.2)",
        }}
      >
        <h2 style={{ fontSize: "1.5rem" }}>Share your photos</h2>
        <p style={{ overflow: "hidden", fontSize: "1rem", margin: "0.5rem 0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          molestias, lestias, dolorum, voluptatum, quibusdam quod natus et quae
          perspiciatis aperiam voluptatem quos.
        </p>
        <button className="btn" id="learn_more">
          Learn more
        </button>
      </div>
    </>
  );
};
