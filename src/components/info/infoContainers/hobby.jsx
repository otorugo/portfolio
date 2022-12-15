const hobbyInfo = [
  {
    name: "Instagram : otorugo, onde posto os covers curtos",
    link: "https://www.instagram.com/otorugo/",
  },
  {
    name: "Youtube : meu canal do youtube onde costumava postar as músicas completas",
    link: "https://www.youtube.com/@victorsilva698",
  },
];

const Hobby = () => {
  return (
    <div style={{ backgroundColor: "#7991BD", color: "#FEFEFE" }}>
      {hobbyInfo.map((currentHobby,key) => {
        return (
          <ul style={{ padding: "1em" }} key={key}>
              <a href={currentHobby.link}>{currentHobby.name}</a>
          </ul>
        );
      })}
    </div>
  );
};

export default Hobby;
