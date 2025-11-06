// App.jsx
import React from "react";

export default function App() {
  const texto = `
  Gabi "meu amor" quero te dizer que você vem se tornando alguém importante pra mim através de uma amizade que começou de uma live de tiktok e nós não tínhamos um contato, até q começamos a ter após a treta com detona e foi através de conversas + conversas e brincadeiras, fui vendo como você é, fui vendo que você é linda, brincalhona, legal, sorriso lindo, mãe, uma pessoa especial sério msm e foi com nossa aproximação que realmente fui sentindo algo por você, e até aceitou pela minha deficiência em um dos olhos, e até que chegamos a esse ponto, sei que você já teve decepção amorosa, mais quero te mostrar que quero te fazer sentir especial, te mostrar pode ser realmente amada e seu filho tbm, quero mostrar que não serei só +1 na vida de vocês, quero realmente ser amado e amar vocês, sei q a distancia pequena está nos separando por enquanto, mais quero realmente está com vocês, irei fazer de tudo por vocês e não ser aqueles cara que no começo é mil maravilhas e com o tempo muda, quero um futuro e ter minha família, quero ter vocês em minha vida, a distância pequena dessa não é nada pra mim ainda mais se estiver nos separando, me dê a chance de ser o amor da sua vida, quero arrancar todas suas dores e carregar pra mim só pra não te ver carregando, quero poder arrancar seus sorrisos todos os dias, quero secar suas lágrimas quando estiver chorando, Gabi quero te chamar de meu amor, chamar levi de meu garoto, tenho muita coisa pra te dizer e uma delas é....

  Você aceita namorar cmg Gabi? Dividir uma vida a 3 Eu, Você e Levi

  Estou pronto pra assumir a responsabilidade!!
    `;

  const video1 = "VbfpW0pbvaU";
  const video2 = "dT2owtxkU8k";

  return (
    <div style={styles.container}>
      {/* Players invisíveis do YouTube */}
      <iframe
        width="0"
        height="0"
        src={`https://www.youtube.com/embed/${video1}?autoplay=1&loop=1&playlist=${video1}`}
        frameBorder="0"
        allow="autoplay"
        title="Musica1"
      />
      <iframe
        width="0"
        height="0"
        src={`https://www.youtube.com/embed/${video2}?autoplay=1&loop=1&playlist=${video2}`}
        frameBorder="0"
        allow="autoplay"
        title="Musica2"
      />

      <div style={styles.card}>
        <h1 style={styles.titulo}>Para minha Gabi ❤️</h1>
        <p style={styles.texto}>{texto}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #ffe6e6, #ffb3b3)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
  },
  card: {
    maxWidth: "800px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
  titulo: {
    textAlign: "center",
    color: "#b30000",
    marginBottom: "20px",
  },
  texto: {
    lineHeight: "1.6",
    color: "#330000",
    whiteSpace: "pre-line",
    fontSize: "18px",
  },
};
