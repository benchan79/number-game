export function Input ({value, onChange}) {
  return (
    <div>
      <input
        value={value} 
        onChange={onChange}
        style={{fontSize:20, borderRadius:5, }}
      />
    </div>
  )
}