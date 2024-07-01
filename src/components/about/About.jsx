import "./about.css";
import MyImg from "../../img/myimg.png";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={MyImg}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         
        </p>
        <p className="a-desc">
        Hello! I'm Vaishali Garg, an aspiring software developer currently studying Computer Science Engineering at Chandigarh Group of Colleges, Landran. I am passionate about web and Android development, with a strong interest in full-stack development and problem-solving. I enjoy delving into new technologies and leveraging them to create impactful solutions. Let's connect and explore how we can innovate together!
        </p>
      
      </div>
    </div>
  );
};

export default About;