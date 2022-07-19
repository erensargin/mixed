import './topbar.css'

export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-pinterest-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem' >Home</li>
                    <li className='topListItem' >About</li>
                    <li className='topListItem' >Contaact</li>
                    <li className='topListItem' >Write</li>
                    <li className='topListItem' >Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img className='topImg' src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
