const projetos = [
  {
    name: "Cooperação tecnico e não-técnico na construção Civíl, usando BIM em plataforma Web",
    stack: "NodeJS, Python, MongoDB, VueJs",
    local: "USP - Grupo de Pesquisa Nomads",
    period: "Agosto de 2019 - Agosto de 2021",
  },
  {
    name: "Desenvolvimento Web FullStack",
    stack: "NodeJS, Python, MongoDB, ReactJs",
    local: "Baduk",
    period: "Dezembro 2020 - Maio de 2021",
  },
  {
    name: "Estágio em Engenharia de Software",
    stack: "Python, GCP, MySQL, FastApi, FalconApi",
    local: "QITech",
    period: "Junho de 2021 - Junho de 2022",
  },
];

const Projetos = () => {
  return (
    <div style={{ backgroundColor: "#7991BD", color: "#FEFEFE" }}>
      {projetos.map((currentProj,key) => {
        return (
          <ul style={{ padding: "1em" }} key={key}>
            <li>{currentProj.name}</li>
            <li>{currentProj.stack}</li>
            <li>{currentProj.local}</li>
            <li>{currentProj.period}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Projetos;
