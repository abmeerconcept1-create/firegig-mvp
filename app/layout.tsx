export const metadata = {
  title: "FIREGIG MVP",
  description: "Earn money by completing simple tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial",
          background: "#0f172a",
          color: "white",
        }}
      >
        <div style={{ padding: 15, borderBottom: "1px solid gray" }}>
          <h3>🔥 FIREGIG</h3>
        </div>

        {children}
      </body>
    </html>
  );
          }
