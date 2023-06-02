import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Css/Foteer.css"
import {Link} from "react-router-dom";


const Foteer = () => {
  return (

    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
    <MDBContainer className='pt-4'>
      <section className='mb-4'>
        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          href='https://www.facebook.com/luchi.azalot/'
          role='button'
          target='_blank'
        >
          <MDBIcon fab className='fab fa-facebook-f' />
        </MDBBtn>
        
        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          href='https://twitter.com/LuchitoAzalot'
          role='button'
          target='_blank'
        >
          <MDBIcon fab className='fa-twitter' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"          
          href='https://www.instagram.com/luciano.azalot/?theme=dark'
          role='button'
          target='_blank'
        >
          <MDBIcon fab className='fa-instagram' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          href='https://www.linkedin.com/in/luciano-azalot-00a6b3249/'
          role='button'
          target='_blank'
        >
          <MDBIcon fab className='fa-linkedin' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"  
          href='https://github.com/Luchoo2010'
          role='button'
          target='_blank'
        >
          <MDBIcon fab className='fa-github' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2020 Copyright: 
      <Link className='text-dark' to='https://www.instagram.com/luciano.azalot/?theme=dark'>
        GORILA TECH
      </Link>
    </div>
  </MDBFooter>

  )
}

export default Foteer