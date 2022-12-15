const contatoInfo = [
  {
    name: "Github : otorugo",
    link: "https://github.com/otorugo",
  },
  {
    name: "Email : victorsilva698@gmail.com",
    link: "mailto:victorsilva698@gmail.com",
  },
];

const Contato = () => {
  return (
    <div style={{ backgroundColor: "#7991BD", color: "#FEFEFE" }}>
      {contatoInfo.map((currentCont,key) => {
        return (
          <ul style={{ padding: "1em" }} key={key}>
              <a href={currentCont.link}>{currentCont.name}</a>
          </ul>
        );
      })}
    </div>
  );
};

export default Contato;
