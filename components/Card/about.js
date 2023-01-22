export default function Card ({
    name="none",
    position="none",
    tel="none",
    email="none",
    colourCard="none",
    colourInfo="none",
    font="0",
    fontColour="white",
    image="icon/personTwo.png"
}) {
    return (
        <div style={{
            backgroundColor: colourCard, 
            fontSize: font,
            color: fontColour,
            border: "2px solid",
            display: "flex",
            alignItems:"center",
            borderRadius: "20px",
            width: "450px",
            padding: "20px",
            margin: "20px",
            fontWeight: "700"
        }}>
            <div style={{
                marginRight: "40px",
                marginLeft: "10px"
            }}>
                {
                    name === "Leon Scott Kennedy" ? <img src={"icon/leon.webp"} />:
                    name === "Jill Valentine" ? <img src={'icon/jill.webp'} />:
                    name === "Claire Redfield" ? <img src={'icon/claire.webp'}/>:
                    <img src={image}/>
                }
            </div>
            <div style={{
                backgroundColor: colourInfo,
                borderRadius: "20px",
                boxShadow: "8px 8px #2B4570",
                padding: "20px",
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                width: "180px"
            }}>
                <div style={{
                    padding: "10px",
                    width: "100%",
                    backgroundColor: "#2B4570",
                    color: "#EFCA08",
                    textAlign: "center",
                    borderRadius: "10px"
                }}>
                    {name}
                </div>
                <div style={{
                    padding: "10px",
                    textAlign: "left",
                    width: "100%"
                }}>
                    {position}
                </div>
                <div style={{
                    padding: "10px",
                    textAlign: "left",
                    width: "100%"
                }}>
                    {tel}
                </div>
                <div style={{
                    padding: "10px",
                    textAlign: "left",
                    width: "100%"
                }}>
                    {email}
                </div>
            </div>   
        </div>
    )
}