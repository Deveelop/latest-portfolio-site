import './Header.css'

const Header = () => {
  return (
    <header className='items'>
      <a id="Logo" href="#" aria-label="Logo, go to homepage" >dvee</a>
      <div>
      <button type="button" aria-label="open content menu" aria-controls="contact-menu" aria-expanded='false' className="menu-toggle">Menu</button>
      <nav id="contact-menu" aria-label="contact-menu">
        <ul>
            <li>My Works</li>
            <li>My Resume</li>
        </ul>
        
        <div>
            <span>Say Hello</span>
        </div>
        <ul>
            <li>vicsonabuka@gmail.com</li>
            <li>+2348065032361</li>
        </ul>
        <ul className="socialmedia-icons">
            <li></li>
        </ul>

      </nav>
</div>
    </header>
  )
}

export default Header
