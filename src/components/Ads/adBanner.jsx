function adBanner() {
  return <div style={adStyle}>Ad space</div>;
}

const adStyle = {
  position: "fixed",
  bottom: 20,
  left: "50%",
  transform: "translateX(-50%)",
  width: 320,
  height: 50,
  border: "2px dashed #2f2f2f",
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255,255,255,0.4)",
  fontSize: 14,
};
export default adBanner;
