import React, { useState } from "react";


const DiscussionPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState("");
  const [isListening, setIsListening] = useState(false);

  const fileInputRef = React.useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date();
      const heure = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages([...messages, { text: newMessage, heure }]);
      setNewMessage("");
    }
  };

  const handlePublishArticle = () => {
    if (newArticle.trim()) {
      setArticles([...articles, newArticle]);
      setNewArticle("");
    }
  };

  const handleEmojiClick = () => {
    setNewMessage(newMessage + "😊");
  };

  const handleAttachmentClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      alert(`Fichier sélectionné : ${e.target.files[0].name}`);
    }
  };

  const handleMicroClick = () => {
    // Vérifie si l'API est disponible
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("La reconnaissance vocale n'est pas supportée par ce navigateur.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "fr-FR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setNewMessage((prev) => prev + transcript);
    };

    recognition.onerror = (event) => {
      alert("Erreur de reconnaissance vocale : " + event.error);
    };
  };

  const styles = {
    container: {
      backgroundColor: "#181c24",
      padding: "2rem",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      position: "relative", // important pour le positionnement du pseudo-élément
      overflow: "hidden",
    },
    section: {
      background: "#232b3b", // section sombre
      padding: "1rem",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      flex: 1,
      color: "#fff",
    },
    layout: {
      display: "flex",
      gap: "2rem",
    },
    discussionSection: {
      display: "flex",
      flexDirection: "column",
      height: "500px",
      background: "#232b3b",
      borderRadius: "8px",
      position: "relative",
    },
    messageList: {
      flex: 1,
      overflowY: "auto",
      marginBottom: "1rem",
      paddingRight: "4px",
    },
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none",
          opacity: 0.03, // opacité plus faible
        }}
      >
        <svg width="480" height="240" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="280" height="160" fill="#f4f4f4"/>
          <circle cx="50" cy="80" r="30" fill="#3498db"/>
          <circle cx="140" cy="80" r="30" fill="#2ecc71"/>
          <circle cx="230" cy="80" r="30" fill="#f1c40f"/>
          <text x="50" y="85" fontSize="18" fill="white" fontFamily="Arial" textAnchor="middle">L</text>
          <text x="140" y="85" fontSize="18" fill="white" fontFamily="Arial" textAnchor="middle">I</text>
          <text x="230" y="85" fontSize="18" fill="white" fontFamily="Arial" textAnchor="middle">R</text>
          <text x="140" y="135" fontSize="24" fontWeight="bold" fill="#333" fontFamily="Arial" textAnchor="middle">LIRIT</text>
        </svg>
      </div>      {/* Filigrane SVG LIRIT */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          userSelect: "none",
          opacity: 0.08, // faible opacité
        }}
      >
        <svg width="480" height="240" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="280" height="160" fill="#f4f4f4"/>
          <circle cx="50" cy="80" r="30" fill="#3498db"/>
          <circle cx="140" cy="80" r="30" fill="#2ecc71"/>
          <circle cx="230" cy="80" r="30" fill="#f1c40f"/>
          <text x="50" y="85" fontSize="18" fill="white" fontFamily="Arial" textAnchor="middle">L</text>
          <text x="140" y="85" fontSize="18" fill="white" fontFamily="Arial" textAnchor="middle">I</text>
          <text x="230" y="85" fontSize="18" fill="white" fontFamily="Arial" textAnchor="middle">R</text>
          <text x="140" y="135" fontSize="24" fontWeight="bold" fill="#333" fontFamily="Arial" textAnchor="middle">LIRIT</text>
        </svg>
      </div>
      {/* Le reste de ton contenu */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 style={{ color: "#2c3e50", marginBottom: "1rem" }}>
          Page de discussion et de publication
        </h1>

        <div style={styles.layout}>
          {/* Section Discussion */}
          <section style={{ ...styles.section, ...styles.discussionSection, position: "relative", overflow: "hidden" }}>
  {/* SVG en fond du bloc discussion */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 0,
      pointerEvents: "none",
      userSelect: "none",
      opacity: 0.5, // opacité plus faible
    }}
  >
    <svg width="480" height="240" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#f4f4f4"/>
      <circle cx="50" cy="80" r="30" fill="#3498db"/>
      <circle cx="140" cy="80" r="30" fill="#2ecc71"/>
      <circle cx="230" cy="80" r="30" fill="#f1c40f"/>
      <text x="50" y="85" fontSize="18" fill="white" fontFamily="Arial" textAnchor="middle">L</text>
      <text x="140" y="85" fontSize="18" fill="white" fontFamily="Arial" textAnchor="middle">I</text>
      <text x="230" y="85" fontSize="18" fill="white" fontFamily="Arial" textAnchor="middle">R</text>
      <text x="140" y="135" fontSize="24" fontWeight="bold" fill="#333" fontFamily="Arial" textAnchor="middle">LIRIT</text>
    </svg>
  </div>
  {/* Le reste du contenu discussion */}
  <h2>Discussion</h2>
  <div style={styles.messageList}>
    <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
      {messages.map((message, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "0.5rem",
          }}
        >
          <div
            style={{
              background: "#2a3142",
              color: "#fff",
              borderRadius: "16px",
              padding: "0.7rem 1.2rem",
              maxWidth: "70%",
              wordBreak: "break-word",
              boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
            }}
          >
            {message.text}
            <span style={{ fontSize: "0.8rem", color: "#bbb", marginLeft: "0.5rem" }}>
              {message.heure}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
  <div style={{ marginTop: "auto" }}>
    <div
  style={{
    display: "flex",
    alignItems: "center",
    background: "#222b3a",
    borderRadius: "24px",
    padding: "8px 16px",
    marginTop: "1rem",
    boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
    border: "1px solid #2a3142",
  }}
>
  <span
    style={{ fontSize: "1.5rem", color: "#bbb", cursor: "pointer", marginRight: 8 }}
    onClick={handleEmojiClick}
    title="Emoji"
  >😊</span>
  <span
    style={{ fontSize: "1.3rem", color: "#bbb", cursor: "pointer", marginRight: 8 }}
    onClick={handleAttachmentClick}
    title="Joindre un fichier"
  >📎</span>
  <input
    type="file"
    style={{ display: "none" }}
    ref={fileInputRef}
    onChange={handleFileChange}
  />
  <input
    type="text"
    placeholder="Taper un message"
    value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
    style={{
      flex: 1,
      background: "transparent",
      border: "none",
      outline: "none",
      color: "#fff",
      fontSize: "1rem",
      padding: "8px",
    }}
    onKeyDown={(e) => {
      if (e.key === "Enter") handleSendMessage();
    }}
  />
  <span
    onClick={handleSendMessage}
    style={{
      fontSize: "1.3rem",
      color: "#2ecc71",
      cursor: "pointer",
      marginLeft: 8,
      marginRight: 8,
    }}
    title="Envoyer"
  >
    📨
  </span>
  <span
    style={{
      fontSize: "1.3rem",
      color: isListening ? "#2ecc71" : "#bbb",
      cursor: "pointer"
    }}
    onClick={handleMicroClick}
    title="Micro"
  >🎤</span>
  {isListening && (
    <span style={{ color: "#2ecc71", marginLeft: 8, fontWeight: "bold" }}>
      🎙️ En écoute...
    </span>
  )}
</div>
  </div>
</section>

          {/* Section Publications */}
          <section style={styles.section}>
            <h2>Publier un article</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {articles.map((article, index) => (
                <li
                  key={index}
                  style={{
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {article}
                </li>
              ))}
            </ul>
            <textarea
              placeholder="Écrivez un article..."
              value={newArticle}
              onChange={(e) => setNewArticle(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                resize: "vertical",
              }}
            />
            <button
              onClick={handlePublishArticle}
              style={{
                marginTop: "0.5rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#2ecc71",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Publier
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;
