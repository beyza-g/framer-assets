export default function Home() {
    return (
      <div style={{ padding: 40 }}>
        <h1>Video Demo</h1>
        <video
          src="/billyboba.webm"
          controls
          autoPlay
          loop
          muted
          style={{ width: "100%", maxWidth: 600 }}
        />
      </div>
    )
  }
  