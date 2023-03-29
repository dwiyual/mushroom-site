function NavBar() {
    return (
        <nav id="NavBar" style={{
            backgroundImage:`gradient(to right, hex#60362a, hex#1c1718)`,
        }}>
            <image>Logo Here</image>
            <div id="NavLinks" style={{
                display:`flex`,
                justifyContent:`flex-end`,
                marginLeft:`36rem`,
                marginRight:`0`,
                textDecoration:`none`,
                
            }}>
                <ul><a href='#Home'>Home</a></ul>
                <ul><a href='#GrowKit'>Grow Kit</a></ul>
                <ul><a href='#Blog'>Blog</a></ul>
                <ul><a href='#Contact'>Contact us</a></ul>
            </div>
        </nav>
    )

}


export default NavBar;