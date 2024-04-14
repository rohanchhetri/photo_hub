const Body = () => {
  return (
    <div className="sub_section">
      <p style={{ fontSize: "1.5em", marginBottom: "1.5em" }}>
        Snap photos and share like never before
      </p>
      <div className="items">
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
      <div className="card" style={{}}>
        <h2 style={{ fontSize: "1.5rem" }}>Share your photos</h2>
        <p style={{ overflow: "hidden", fontSize: "1rem", margin: "1.5rem 0" }}>
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
