export default function RuHGartenhelferWebsite() {
  const services = [
    {
      title: "Rasenmähen",
      description:
        "Sauberer Schnitt für gepflegte Rasenflächen – zuverlässig, ordentlich und termingerecht.",
      image: "/images/rasenmaehen.jpg",
    },
    {
      title: "Heckenschnitt",
      description:
        "Professioneller Rückschnitt für Hecken und Sträucher mit sauberem Gesamtbild.",
      image: "/images/heckenschnitt.jpg",
    },
    {
      title: "Steinreinigung",
      description:
        "Gründliche Reinigung von Einfahrten, Terrassen und Wegen inklusive Einsanden und Versiegeln.",
      image: "/images/steinreinigung.jpg",
    },
    {
      title: "Entsorgung",
      description:
        "Fachgerechte Entsorgung von Grünschnitt und Gartenabfällen.",
      image: "/images/entsorgung.jpg",
    },
  ];

  const reasons = [
    "Saubere Arbeit und faire Preise",
    "Zuverlässige Terminabsprachen",
    "Persönlicher Kontakt per Telefon oder WhatsApp",
    "Individuelle Angebote für Privatkunden",
    "Schnelle Rückmeldung auf Anfragen",
    "Unverbindliche Angebote mit klarer Preisübersicht",
  ];

  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#fafaf9",
    color: "#1c1917",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  };

  const sectionTitle = {
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    color: "#047857",
    marginBottom: "12px",
  };

  const h2Style = {
    fontSize: "42px",
    fontWeight: "900",
    margin: 0,
    lineHeight: 1.15,
  };

  return (
    <div style={pageStyle}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          borderBottom: "1px solid rgba(214,211,209,0.8)",
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "16px",
            paddingBottom: "16px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "999px",
                overflow: "hidden",
                border: "4px solid #facc15",
                backgroundColor: "#065f46",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 900,
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src="/logo.png"
                alt="RuH – Gartenhelfer Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div>
              <div style={{ fontSize: "22px", fontWeight: 800 }}>
                RuH – Gartenhelfer
              </div>
              <div style={{ fontSize: "14px", color: "#78716c" }}>
                Rund ums Haus · Saubere Arbeit zum fairen Preis
              </div>
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            <a href="#leistungen" style={{ color: "#1c1917", textDecoration: "none" }}>
              Leistungen
            </a>
            <a href="#warum" style={{ color: "#1c1917", textDecoration: "none" }}>
              Warum wir
            </a>
            <a href="#anfrage" style={{ color: "#1c1917", textDecoration: "none" }}>
              Anfrage
            </a>
            <a href="#kontakt" style={{ color: "#1c1917", textDecoration: "none" }}>
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg, #0f3d2e 0%, #14532d 40%, #1f7a4c 100%)",
          color: "white",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "56px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "10px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.2)",
                backgroundColor: "rgba(255,255,255,0.1)",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Professionelle Gartenpflege für Privatkunden
            </div>

            <h1
              style={{
                fontSize: "64px",
                fontWeight: 900,
                lineHeight: 1.05,
                marginTop: "20px",
                marginBottom: "0",
              }}
            >
              RuH – Gartenhelfer
            </h1>

            <p
              style={{
                marginTop: "20px",
                maxWidth: "620px",
                fontSize: "22px",
                lineHeight: 1.7,
                color: "#ecfdf5",
              }}
            >
              Ihr zuverlässiger Ansprechpartner für Rasenmähen,
              Heckenschnitt, Steinreinigung und Entsorgung – sauber,
              freundlich und fair.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginTop: "32px",
              }}
            >
              <a
                href="#anfrage"
                style={{
                  backgroundColor: "#facc15",
                  color: "#1c1917",
                  textDecoration: "none",
                  padding: "14px 22px",
                  borderRadius: "18px",
                  fontWeight: 700,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                }}
              >
                Jetzt Anfrage senden
              </a>

              <a
                href="https://wa.me/4915567224764"
                target="_blank"
                rel="noreferrer"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                  textDecoration: "none",
                  padding: "14px 22px",
                  borderRadius: "18px",
                  fontWeight: 700,
                }}
              >
                WhatsApp starten
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "16px",
                marginTop: "36px",
              }}
            >
              {[
                ["4", "Kernleistungen"],
                ["fair", "Preisgestaltung"],
                ["direkt", "per WhatsApp erreichbar"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    padding: "16px",
                    borderRadius: "18px",
                  }}
                >
                  <div style={{ fontSize: "28px", fontWeight: 900 }}>{value}</div>
                  <div style={{ marginTop: "6px", fontSize: "14px", color: "#ecfdf5" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gap: "20px" }}>
            <div
              style={{
                borderRadius: "32px",
                padding: "20px",
                backgroundColor: "rgba(255,255,255,0.1)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              }}
            >
              <div
                style={{
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  borderRadius: "24px",
                }}
              >
                <img
                  src="/images/hero-gartenpflege.jpg"
                  alt="Gartenpflege von RuH – Gartenhelfer"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  color: "#1c1917",
                  padding: "20px",
                  borderRadius: "28px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "#047857",
                  }}
                >
                  Kontakt
                </div>
                <div style={{ marginTop: "12px", fontSize: "20px", fontWeight: 700 }}>
                  +49 1556 / 7224764
                </div>
                <div style={{ marginTop: "4px", color: "#57534e" }}>
                  Telefon & WhatsApp
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  color: "#1c1917",
                  padding: "20px",
                  borderRadius: "28px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "#047857",
                  }}
                >
                  E-Mail
                </div>
                <div
                  style={{
                    marginTop: "12px",
                    fontSize: "20px",
                    fontWeight: 700,
                    wordBreak: "break-word",
                  }}
                >
                  ruhgartenhelfer@gmail.com
                </div>
                <div style={{ marginTop: "4px", color: "#57534e" }}>
                  Anfragen & Angebote
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" style={{ padding: "80px 0" }}>
        <div style={containerStyle}>
          <div style={{ maxWidth: "700px" }}>
            <div style={sectionTitle}>Leistungen</div>
            <h2 style={h2Style}>Unsere Dienstleistungen</h2>
            <p
              style={{
                marginTop: "16px",
                fontSize: "20px",
                lineHeight: 1.7,
                color: "#57534e",
              }}
            >
              Rund ums Haus übernehmen wir die wichtigsten Garten- und
              Außenarbeiten zuverlässig und ordentlich.
            </p>
          </div>

          <div
            style={{
              marginTop: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "28px",
            }}
          >
            {services.map((service) => (
              <article
                key={service.title}
                style={{
                  overflow: "hidden",
                  borderRadius: "32px",
                  border: "1px solid #e7e5e4",
                  backgroundColor: "white",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    aspectRatio: "4 / 3",
                    overflow: "hidden",
                    backgroundColor: "#f5f5f4",
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "28px", fontWeight: 900, margin: 0 }}>
                    {service.title}
                  </h3>
                  <p
                    style={{
                      marginTop: "14px",
                      lineHeight: 1.7,
                      color: "#57534e",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="warum" style={{ backgroundColor: "#f5f5f4", padding: "80px 0" }}>
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            <div style={sectionTitle}>Warum wir</div>
            <h2 style={h2Style}>
              Darum entscheiden sich Kunden für RuH – Gartenhelfer
            </h2>
            <p
              style={{
                marginTop: "20px",
                fontSize: "20px",
                lineHeight: 1.7,
                color: "#57534e",
                maxWidth: "800px",
              }}
            >
              Wir stehen für saubere Arbeit, faire Preise und einen direkten,
              freundlichen Kontakt. Unser Ziel ist ein gepflegter Außenbereich
              ohne Stress für Sie.
            </p>

            <div
              style={{
                marginTop: "32px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {reasons.map((reason) => (
                <div
                  key={reason}
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "white",
                    padding: "20px",
                    boxShadow: "0 6px 14px rgba(0,0,0,0.05)",
                  }}
                >
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        minWidth: "28px",
                        height: "28px",
                        borderRadius: "999px",
                        backgroundColor: "#047857",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </div>
                    <div style={{ fontWeight: 500 }}>{reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderRadius: "32px",
              backgroundColor: "white",
              padding: "32px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <div style={sectionTitle}>Kurz gesagt</div>
            <blockquote
              style={{
                fontSize: "38px",
                fontWeight: 900,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              „Zuverlässige Gartenpflege, saubere Arbeit und faire Preise – bei
              uns bekommen Sie Qualität, auf die Sie sich verlassen können.“
            </blockquote>

            <div
              style={{
                marginTop: "28px",
                borderRadius: "20px",
                backgroundColor: "#ecfdf5",
                padding: "20px",
                color: "#065f46",
              }}
            >
              Wir erstellen Ihnen gerne ein unverbindliches Angebot mit klarer
              Preisübersicht.
            </div>
          </div>
        </div>
      </section>

      <section id="anfrage" style={{ padding: "80px 0" }}>
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
          }}
        >
          <div>
            <div style={sectionTitle}>Anfrage senden</div>
            <h2 style={h2Style}>Schnell und einfach Kontakt aufnehmen</h2>
            <p
              style={{
                marginTop: "20px",
                fontSize: "20px",
                lineHeight: 1.7,
                color: "#57534e",
              }}
            >
              Nutzen Sie das Formular, um uns Ihre Anfrage direkt zu senden.
              Bitte geben Sie Ihre Kontaktdaten und Ihr Anliegen an.
            </p>

            <div
              style={{
                marginTop: "28px",
                borderRadius: "28px",
                backgroundColor: "#f5f5f4",
                padding: "24px",
              }}
            >
              <div style={{ fontWeight: 700, color: "#1c1917" }}>
                Tipp für schnellere Angebote
              </div>
              <div style={{ marginTop: "8px", lineHeight: 1.7, color: "#57534e" }}>
                Beschreiben Sie kurz die gewünschte Leistung und nennen Sie,
                wenn möglich, Größe oder Umfang der Arbeit.
              </div>
            </div>
          </div>

          <form
            action="https://formspree.io/f/DEINE_FORM_ID"
            method="POST"
            style={{
              borderRadius: "32px",
              border: "1px solid #e7e5e4",
              backgroundColor: "white",
              padding: "32px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#44403c",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ihr Name"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>E-Mail</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="ihre@email.de"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Telefon</label>
                <input
                  type="text"
                  name="telefon"
                  placeholder="Ihre Telefonnummer"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Dienstleistung</label>
                <select name="dienstleistung" style={inputStyle}>
                  <option>Bitte wählen</option>
                  <option>Rasenmähen</option>
                  <option>Heckenschnitt</option>
                  <option>Steinreinigung</option>
                  <option>Entsorgung</option>
                  <option>Sonstiges</option>
                </select>
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle}>Nachricht</label>
                <textarea
                  name="nachricht"
                  rows={6}
                  required
                  placeholder="Beschreiben Sie hier Ihr Anliegen"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                marginTop: "24px",
                borderRadius: "18px",
                backgroundColor: "#065f46",
                color: "white",
                border: "none",
                padding: "14px 22px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
              }}
            >
              Anfrage absenden
            </button>
          </form>
        </div>
      </section>

      <section
        id="kontakt"
        style={{ backgroundColor: "#022c22", color: "white", padding: "64px 0" }}
      >
        <div
          style={{
            ...containerStyle,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "#86efac",
              }}
            >
              Kontakt
            </div>
            <h2 style={{ fontSize: "40px", fontWeight: 900, marginTop: "12px", marginBottom: 0 }}>
              RuH – Gartenhelfer
            </h2>
            <p
              style={{
                marginTop: "16px",
                maxWidth: "700px",
                fontSize: "20px",
                lineHeight: 1.7,
                color: "#ecfdf5",
              }}
            >
              Für Fragen, Angebote und Terminabsprachen erreichen Sie uns
              direkt per Telefon, WhatsApp oder E-Mail.
            </p>
          </div>

          <div
            style={{
              borderRadius: "32px",
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "rgba(255,255,255,0.05)",
              padding: "32px",
            }}
          >
            <div style={{ display: "grid", gap: "16px", fontSize: "20px" }}>
              <div>
                <strong>Unternehmen:</strong> RuH – Gartenhelfer
              </div>
              <div>
                <strong>Telefon / WhatsApp:</strong> +49 1556 / 7224764
              </div>
              <div>
                <strong>E-Mail:</strong> ruhgartenhelfer@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/4915567224764"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          zIndex: 50,
          backgroundColor: "#047857",
          color: "white",
          textDecoration: "none",
          padding: "14px 20px",
          borderRadius: "999px",
          fontWeight: 700,
          boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
        }}
      >
        WhatsApp
      </a>

      <footer
        style={{
          borderTop: "1px solid #064e3b",
          backgroundColor: "#022c22",
          color: "#d1fae5",
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "12px",
            paddingTop: "24px",
            paddingBottom: "24px",
            fontSize: "14px",
          }}
        >
          <div>© {new Date().getFullYear()} RuH – Gartenhelfer</div>
          <div>Rasenmähen · Heckenschnitt · Steinreinigung · Entsorgung</div>
        </div>
      </footer>
    </div>
  );
}

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontSize: "14px",
  fontWeight: 700,
  color: "#44403c",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "18px",
  border: "1px solid #d6d3d1",
  fontSize: "16px",
  boxSizing: "border-box",
};
