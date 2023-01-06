export function Button({ onClick, label, disabled }) {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        style={{ 
          fontWeight: "bold",
          fontSize: 20, 
          borderRadius: 5, 
          background: "rgb(31, 31, 189)", 
          color: "rgb(201, 201, 247)",
          padding: 10,
        }}
      >
        {label}
      </button>
    </div>
  );
}
