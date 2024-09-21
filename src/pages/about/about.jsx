import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./about.css";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <h1>Want to know more about us?</h1>
      <div className="about">
        <div className="about-container">
          <div className="about-right">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              illum ut, deleniti delectus hic consectetur quibusdam vero ducimus
              obcaecati, praesentium, vel rem quae! Voluptas reprehenderit
              fugiat distinctio aspernatur numquam mollitia.
            </p>
          </div>
          <div className="about-left">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
              quidem quisquam repellat atque, exercitationem deleniti sed?
              Dolorum ab eos laudantium quos? A enim sed tenetur natus aperiam
              error quam illo!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>

    // <div>
    //   <h1>Want to know more about us?</h1>
    //   <div className="about">
    //     <div className="about-container">
    //       <div className="about-left">
    //         <h2>Lorem ipsum dolor sit amet.</h2>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
    //           saepe esse officia est non itaque dolor tempora sit dolores
    //           libero.
    //         </p>
    //       </div>
    //       <div className="about-right">
    //         <h2>Lorem ipsum dolor sit amet.</h2>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
    //           magni, fugit illum voluptatem possimus ex unde blanditiis nam
    //           minus eum.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default AboutPage;
