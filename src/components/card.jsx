const BodyCard = () => {
  return (
    <>
      <div className="card" style={{}}>
        <img
          src="https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="card_img"
          style={{ width: "100%", height: "60%" }}
        />
        <div style={{ padding: "1em" }}>
          <h2 style={{ fontSize: "1.5rem" }}>Share your photos</h2>
          <p
            style={{
              wordBreak: "break-all",
              fontSize: "1rem",
              margin: "1em 0",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            molestiaddds, lestias, dolorum, voluptatum, quibusdam quod natus et
            quae perspiciatis aperiam voluptatem quos.
          </p>
          <button className="btn" id="learn_more">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};
export default BodyCard;
