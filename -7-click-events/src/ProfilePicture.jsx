function ProfilePicture() {
    const imageUrl = './src/assets/pythagoras.jpg'

    const handleClick = (e) => {
        e.target.style.opacity = e.target.style.opacity == 0 ? 1: 0;
    }

    return (<>
        <img src={imageUrl} width={300} onClick={handleClick}/>
    </>)
}
export default ProfilePicture