import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div>


                <div class="bg-gray-200 flex justify-center items-center h-screen" >
                    <div class="bg-green-600 bg-opacity-50 w-3/12 h-4/6 p-1 rounded-lg">
                        <h2 class="font-bold text-center">LUMBINI ICT CAMPUS</h2>
                        <p class="text-center text-sm ">Gaindakot-4,Nawalpur</p>
                        <div class="bg-purple-400 font-bold text-center rounded-lg" >Student Identity card</div>
                        <div>
                            <div class="w-28 m-auto mt-5  "><img class="rounded-full border-4 border-gray-600 border-opacity-50" src="image/college.JPG" alt="" /></div>
                            <div class="text-center w-1/2 bg-purple-500  bg-opacity-40 m-auto my-1 rounded-lg font-bold"> <h2>Aakash Kandel</h2> </div>

                        </div  >

                        <div class="px-3" >
                            <div>Level: <span class="mx-2 ">Bchelore</span></div>
                            <div>Faculty: <span class="mx-2" >BCA</span></div>
                            <div>Guardian: <span class="mx-2">Toya Nath Kandel</span></div>
                            <div>Contact: <span class="mx-2" >9805449777</span></div>
                            <div>Address: <span class="mx-2" >Devchuli-12,Nawalpur</span></div>
                            <div class="flex justify-end text-sm font-semibold mt-4" >Signature</div>
                        </div>
                        <div class="flex text-sm justify-between bg-red-100 mt-2 rounded-lg px-1 font-semibold ">
                            <div>Issued on:<span>01/01/2020</span> </div>
                            <div>Expired on:<span>01/01/2020</span> </div>
                        </div>
                        <button class="bg-blue-600 font-semibold rounded mt-4 px-2 text-white " >Download card</button>

                    </div>

                </div>







            </div>
        )
    }
}
