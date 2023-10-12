import Styles from "./header.module.css"


const Header=()=>{
    return (
        <nav className={Styles.navbar}>
        <h1>RimRubber</h1>
        <div>
            <ul className="flex">
                <li className={Styles.navItem}>AboutUs</li>
                <li className={Styles.navItem}>AboutUs</li>
                <li className={Styles.navItem}>AboutUs</li>
                <li className={Styles.navItem}>AboutUs</li>

            </ul>

        </div>
        
        

        </nav>
    )
}

export default Header