
import './NewLetter.css';

const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email id'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewLetter;