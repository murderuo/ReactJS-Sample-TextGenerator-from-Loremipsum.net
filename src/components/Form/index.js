function Form({ data,checkboxes, paragraphHandleChange, checkboxesHandleChange,result }) {
  return (
    <div className="main-container">
    <div className="container">
      <h2> ReactJS Sample TextGenerator <br /> from Loremipsum.net</h2> 
      <div className="input">
        <div className="label">
          <label htmlFor="">The number of paragraphs to generate:</label>
        </div>
        <div className="inputbox">
          <input
            type="number"
            name="size"
            min={0}
            value={data.size}
            onChange={paragraphHandleChange}
          />
        </div>
      </div>
      <div className="parag-size">
        <div className="parag-size-label">
          <label htmlFor="">Paragraph size</label>
        </div>
        <div className="parag-size-select">
          <select value={data.length} onChange={paragraphHandleChange} name="length">
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
            <option value="verylong">Very long</option>
          </select>
        </div>
      </div>
      <div className="parag-options">
        <div className="parag-options-1">
          <label htmlFor="">
            <input
              type="checkbox"
              name="decorate"
              value={checkboxes.decorate}
              onChange={checkboxesHandleChange}
            />
            Add Decorate:
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="link"
              value={checkboxes.link}
              onChange={checkboxesHandleChange}
            />
            Add Links:
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="ul"
              value={checkboxes.ul}
              onChange={checkboxesHandleChange}
            />
            Add unordered lists:
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="ol"
              value={checkboxes.ol}
              onChange={checkboxesHandleChange}
            />
            Add numbered lists:
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="dl"
              value={checkboxes.dl}
              onChange={checkboxesHandleChange}
            />
            Add description lists:
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="bq"
              value={checkboxes.bq}
              onChange={checkboxesHandleChange}
            />
            Add blockquotes:
          </label>
        </div>
        <div className="parag-options-2">
          <label htmlFor="">
            <input
              type="checkbox"
              name="code"
              value={checkboxes.code}
              onChange={checkboxesHandleChange}
            />
            Add code samples
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="headers"
              value={checkboxes.headers}
              onChange={checkboxesHandleChange}
            />
            Add headers
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="allcaps"
              value={checkboxes.allcaps}
              onChange={checkboxesHandleChange}
            />
            Use ALL CAPS
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="prude"
              value={checkboxes.prude}
              onChange={checkboxesHandleChange}
            />
            Prude version
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="plaintext"
              value={checkboxes.plaintext}
              onChange={checkboxesHandleChange}
            />
            Return plain text, no HTML
          </label>
        </div>
      </div>
      <div className="textarea">
        <textarea cols="100" rows="30" value={result} readOnly={true}>
  
        </textarea>
      </div>
    </div>
  </div>
  );
}

export default Form;
