// components/ContentBlock.tsx
export default function ContentBlock({ children, style = {}, ...props }) {
    return (
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem 2rem",
          boxSizing: "border-box",
          ...style,
        }}
        {...props}
      >
        <div style={{ width: "70%", maxWidth: "1000px" }}>
          {children}
        </div>
      </div>
    );
  }
  