import BodyCard from "./card";
import Form from "./form";
const Body = () => {
  return (
    <>
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
      <Form></Form>
      <div className="testimonial_section">
        <div className="testimonial_content">
          <p style={{ fontSize: "1.5em" }}>You&apos;re in good compnay</p>
          <p
            style={{
              padding: "2em 0",
              textAlign: "left",
              wordBreak: "break-all",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            illo quis tenetur voluptate obcaecati nam.
          </p>
          <div className="testimonial_image">
            <img src="../src/assets/img3.jpeg" alt="" />
            <img src="../src/assets/img3.jpeg" alt="" />
            <img src="../src/assets/img3.jpeg" alt="" />
            <img src="../src/assets/img3.jpeg" alt="" />
            <img src="../src/assets/img3.jpeg" alt="" />
            <img src="../src/assets/img3.jpeg" alt="" />
          </div>
        </div>
        <div
          className="testimonial_content"
          style={{ border: "1px solid black" }}
        >
          <img src="../src/assets/sub_hero.jpg" alt="" width={"100%"} />
          <div
            style={{
              padding: "1em",
              textAlign: "center",
              wordBreak: "break-word",
            }}
          >
            <b>John Doe</b>
            <p style={{ padding: "0.5em 0" }}>Photographer</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              quidem nemo similique qui? Molestiae veritatis earum fugiat.
              Eligendi, nulla nam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
