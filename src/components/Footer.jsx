
function Footer() {
    let current_year = new Date().getFullYear()
    return (
        <footer>
            <p>Keeper Inc. &copy; {current_year}</p>
        </footer>
    )

}

export default Footer
