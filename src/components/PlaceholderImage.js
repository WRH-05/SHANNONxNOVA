function PlaceholderImage({ width = 300, height = 200, text = "Placeholder Image" }) {
  return (
    <div
      style={{
        width: typeof width === "string" ? width : `${width}px`,
        height: typeof height === "string" ? height : `${height}px`,
        backgroundColor: "#1c1c1e",
        border: "1px solid #aee4ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#aee4ff",
        fontFamily: "Cinzel, serif",
        textAlign: "center",
        padding: "10px",
        boxShadow: "0 0 10px rgba(174, 228, 255, 0.3)",
      }}
    >
      {text}
    </div>
  )
}

export default PlaceholderImage

