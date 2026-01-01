import "./Form.css";
function Form() {
  return (
    <form>
      <h2 className="title">Form in React</h2>

      <label>First Name*</label>
      <input type="text" />

      <label>Last Name*</label>
      <input type="text" />

      <label>Enter Email*</label>
      <input type="email" />

      <label>Contact*</label>
      <input type="text" />

      
      <label>Gender*</label>
      <div>
        <input type="radio" name="gender" /> Male
        <input type="radio" name="gender" /> Female
        <input type="radio" name="gender" /> Other
      </div>

      
      <label>Your best Subject</label>
      <div>
        <input type="checkbox" /> English
        <input type="checkbox" /> Maths
        <input type="checkbox" /> Physics
      </div>

      
      <label>Upload Resume*</label>
      <input type="file" />

      {/* URL */}
      <label>Enter URL*</label>
      <input type="url" />

      {/* Dropdown */}
      <label>Select your choice</label>
      <select>
        <option>Select your Ans</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      {/* About */}
      <label>About</label>
      <textarea rows="4" placeholder="About yourself"></textarea>

      <br /><br />

      <button type="reset" className="reset-btn">Reset</button>
      <button type="submit"className="submit-btn">Submit</button>
    </form>
  );
}

export default Form;