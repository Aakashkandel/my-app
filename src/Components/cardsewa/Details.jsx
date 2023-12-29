import React, { Component } from 'react'

export default class Details extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <div>

        <div className="bg-gradient-to-r from-indigo-300 to-purple-400 h-96 w-1/2 m-auto rounded-lg">
          <h2 className="text-xl text-center font-semibold">Enter your details</h2>
          <div>
            <form className="grid grid-cols-2  w-11/12 my-2   m-auto" onSubmit={this.props.register} >
              <div className="bg-yellow-500  bg-opacity-20 w-10/12 p-1 m-1 rounded-lg">
                <div>
                  <label > Please Enter your collage Name?</label>
                </div>
                <div>
                  <input className="outline-none rounded-lg w-full px-2 text-sm py-1" placeholder="ex.lumbini ict campus" type="text" name="collage_name" />
                </div>
              </div>

              <div className="bg-yellow-500 bg-opacity-20 w-10/12 p-1 m-1 rounded-lg">
                <div>
                  <label > Collage Address?</label>
                </div>
                <div>
                  <input className="outline-none rounded-lg w-full px-2 text-sm py-1" type="text"
                    placeholder="Ex.Devchuli-12,Nawalpur" name="collage_address" />
                </div>
              </div>

              <div className="bg-yellow-500 bg-opacity-20 w-10/12 p-1 m-1 rounded-lg">
                <div>
                  <label > University name?</label>
                </div>
                <div>
                  <input className="outline-none rounded-lg w-full px-2 text-sm py-1"
                    placeholder="ex.Tribhuwan University" type="text" name="university_name" />
                </div>
              </div>

              <div className="bg-yellow-500 bg-opacity-20 w-10/12 p-1 m-1 rounded-lg">
                <div>
                  <label > Your Name?</label>
                </div>
                <div>
                  <input className="outline-none rounded-lg w-full px-2 text-sm py-1" placeholder="ex.Jhon poudel"
                    type="text" name="person_name" />
                </div>
              </div>
              <div className="bg-yellow-500 bg-opacity-20 w-10/12 p-1 m-1 rounded-lg">
                <div>
                  <label > Upload your image</label>
                </div>
                <div>
                  <input className="outline-none rounded-lg w-full px-2 text-sm py-1" placeholder="ex.Jhon poudel"
                    type="file" name="image" />
                </div>
              </div>

              <div className="bg-yellow-500 bg-opacity-20 w-10/12 p-1 m-1 rounded-lg">
                <div>
                  <label > which faculty?</label>
                </div>
                <div>
                  <input className="outline-none rounded-lg w-full px-2 text-sm py-1" type="text" placeholder="ex.BCA"
                    name="faculty" />
                </div>
              </div>

              <div className="bg-yellow-500 bg-opacity-20 w-10/12 p-1 m-1 rounded-lg">
                <div>
                  <label > Your Guardiant Name?</label>
                </div>
                <div>
                  <input className="outline-none rounded-lg w-full px-2 text-sm py-1" type="text"
                    placeholder="ex.somnath adhikari" name="guardient_name" />
                </div>
              </div>

              <div className="bg-yellow-500 bg-opacity-20 w-10/12 p-1 m-1 rounded-lg">
                <div>
                  <label > Your contact no.?</label>
                </div>
                <div>
                  <input className="outline-none rounded-lg w-full px-2 text-sm py-1" type="text"
                    placeholder="9834588345" name="phone" />
                </div>
              </div>
              <div className="bg-yellow-500 bg-opacity-20 w-10/12 p-1 m-1 rounded-lg">
                <div>
                  <label> Your Address?</label>
                </div>
                <div>
                  <input className="outline-none rounded-lg w-full px-2 text-sm py-1" type="text" name="person_address" placeholder="ex.devchuli-12,Nawalpur" />
                </div>

              </div>


           
            <div className=" flex justify-center my-1">
              <input className="bg-green-600 text-white font-semibold py-1 px-2 rounded-lg my-3" type="submit" name="submit" onClick={this.props.switch} value="submit"  />

            </div>
            </form>
          </div>
        </div>


      </div>
    )
  }
}
