import React, { useState }  from "react"
import axios from "axios";

import Layout from "../components/layout"
const MyForm = () => {

    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/{unique-endpoint-generated-on-step-1}",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
        <Layout>

    <div >
         <div style={{ textAlign: 'center' }} className="col-md-8 mt-5">
            <h3>Comments, Questions, Concerns? Lost a disc?</h3>
            <form onSubmit={handleOnSubmit}>
              <input type="email" name="email" placeholder="Your Email"/>
              <input type="text" name="name" placeholder="Your Name"/>
              <br/>
              <input style={{ width: '340px', height: '60px' }}  type="text" name="message" placeholder="Your Message"/>
              <br/>
              <button type="submit">Send</button>
          </form>
        </div>
        <br></br>
        <div style={{ textAlign: 'center' }}>
          Connect with us on <a href="https://www.facebook.com/groups/newhanoverdgc/">Facebook!</a> or <a href="https://www.instagram.com/newhanoverdiscgolfclub/">Instagram!</a>
        </div>
    </div>

        </Layout> )
  }

  export default MyForm;
