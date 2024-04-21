
import React ,{useState} from 'react'

export default function (props) {
  
  const [text, settext] = useState('Enter the Text');
  const handleUpClick =() => {
    
    settext(text.toUpperCase())
  }
  const handleClearClick =() => {
    
    settext('')
  }
  const handleLoClick =() => {
    
    settext(text.toLowerCase())
  }
  // const handleOnChange = () => {
  //   console.log('Changed');
    
  // }

  
  return (
    <>
      <div className="container">
      <h1> {props.myheading} </h1>
    < div className="mb-3">
  
        <textarea type = "text" className="form-control" id="exampleFormControlTextarea1" rows="8"  value= {text}></textarea>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>

    </div>
    
    <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>


  </div>
  <div className="container my-3">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words, {text.length} characteres</p>
    <p>{0.008 * text.split(" ").length}Minutes</p>
    <h3>Preview</h3>
    <p>{text}</p>
  </div>
  </>
  )
}
