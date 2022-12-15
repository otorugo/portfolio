import profilePhoto from "./torugo.png";
import './style.css'



const ProfileStyle = {
  general: {
    display: "flex",
    padding : "1em",
  },
  img: {
  },
  textDiv: {
    textAlign: "center",
  },
  textDivH1 : {
    fontWeight : 'bold',
    fontSize : '1.2em'
  }
};

const Profile = () => {
  return (
    <div className="profile">
      <img src={profilePhoto} alt="profile_torugo" />
      <div style={ProfileStyle.textDiv}>
        <h1 style={ProfileStyle.textDivH1}>Quem sou eu ?</h1>
        <p>Olá, eu sou o Victor Hugo!!</p>
        <p>Sou Desenvolvedor de Software com Experiencia em Python e Node</p>
      </div>
    </div>
  );
};

export default Profile;
