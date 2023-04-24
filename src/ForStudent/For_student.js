import React from 'react'
// import { connect } from 'react-redux';
import '../ForCompany/For_company'
import Jobternship from '../Asset/Jobternship.png'

const For_company = () => {

  const alert_submission =()=>{
    alert('Submitted Successfully');
  }
  return (
    <div className='form_for_company'>

      <div className="nav_form">
        <img src={Jobternship} alt="logo" />
        <h1>Jobternship</h1>
      </div>
      <form action="submit" >
        <div className="row1 row_blocks">
          <div className="form_blocks">
            <label htmlFor="comp_name">Name&#42;</label>
            <input type="text" id='comp_name' required />
          </div>
          <div className="form_blocks">
            <label htmlFor="representative_name">Email&#42;</label>
            <input type="text" id='representative_name' required />
          </div>
          <div className="form_blocks">
            <label htmlFor="contact_num">Mobile No.&#42;</label>
            <input type="text" id='contact_num' required />
          </div>
        </div>
        <div className="row2 row_blocks">
          <div className="form_blocks">
            <label htmlFor="Intern_title">Skills&#42;</label>
            <input type="text" id='Intern_title' placeholder='Strong' required />
          </div>
          <div className="form_blocks inter_begin">
            <label htmlFor="duration_months"></label>
            <input type="text" id='duration_months' placeholder='Intermediate' required />
          </div>
          <div className="form_blocks inter_begin">
            <label htmlFor="start_month"></label>
            <input type="text" id='start_month'  placeholder='Beginner' required />
          </div>
        </div>
        <div className="row3 row_blocks">
          <div className="form_blocks">
            <label htmlFor="mandatory_skills">Top 3 Skills&#42;</label>
            <input type="text" id='mandatory_skills' placeholder='Digital marketing, graphic designing etc' required />
          </div>
        </div>
        <div className="row4 row_blocks">
          <div className="form_blocks">
            <label htmlFor="start_month">Interested Profile&#42;</label>
            <input type="text" id='start_month' placeholder='Developer , Data Analyst, BDA etc.' required />
          </div>
        </div>
        <div className="row5 row_blocks">
          <div className="form_blocks row5_block">
            <label htmlFor="about_intern">Any Experience/previous project&#42;</label>
            <input type="text" id='start_month' placeholder='Yes/No' required />
          </div>
        </div>
        <div className="row6 row_blocks">
          <p className="if_yes">If yes, then&#42;</p>
          <div className="row6_blocks">
            <input type="text" id='start_month'className='input_row6' placeholder='Project Detail' required />
            <input type="text" id='start_month'className='input_row6' placeholder='Github link' required />
            <p className="or">Or</p>
            <p className="certi">Certificate</p>
            <input type="file" name="upload_btn" id="upload_btn" />
            <label htmlFor="upload_btn" className='label_upload_btn'>Upload</label>
          </div>
          <div className="row6_blocks">
            <input type="text" id='start_month'className='input_row6' placeholder='Project Detail' required />
            <input type="text" id='start_month'className='input_row6' placeholder='Github link' required />
            <p className="or">Or</p>
            <p className="certi">Certificate</p>
            <input type="file" name="upload_btn" id="upload_btn" />
            <label htmlFor="upload_btn" className='label_upload_btn'>Upload</label>
          </div>
          <div className="row6_blocks">
            <input type="text" id='start_month'className='input_row6' placeholder='Project Detail' required />
            <input type="text" id='start_month'className='input_row6' placeholder='Github link' required />
            <p className="or">Or</p>
            <p className="certi">Certificate</p>
            <input type="file" name="upload_btn" id="upload_btn" />
            <label htmlFor="upload_btn" className='label_upload_btn'>Upload</label>
          </div>
        </div>
        <div className="row5 row_blocks">
          <button type="submit" className='submit_btn' onClick={alert_submission}>Submit</button>
          <button type="reset" className='clear_btn'>Clear all</button>
        </div>
      </form>
    </div>
  )
}

export default For_company;