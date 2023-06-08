import React from 'react'

export default function MainCon() {
  return (
    <>
      <div className="main-container">
        <h1 className='main-heading'>You currently have 3 requests</h1>
          <div className="container-one">
           <div className='flex space-x-6 mt-7 w-auto mx-7'>
              <div className=''>
                 <h1 className='headi'>St Judes Hospital</h1>
                  <span className='para1 -mt'>Sarasota.FL. 33178</span>
               </div>
               <div className='vl'></div>
              <div className='timediv'>
                 <div className='box1 -mt-3'>
                 <h1 className='headi'>10 &nbsp; &nbsp;  - </h1>
                 <span className='para1'>October</span>
                 </div>
                  <div className='box2 -mt-3'>
                 <h1 className='headi'> &nbsp; 7</h1>
                 <span className='para1'> &nbsp; September</span>
                  </div>
               </div>
               <div className='vl'></div>
              <div>
                 <h1 className='headi'>20 Rooms</h1>
                 <p className='para1'>10 Single, 10 Double</p>
               </div>
            </div>
            <div className='oval'>
              <button className='button2 button01 text-left '><p className='mx-3'>Recieved</p></button>
              <button className='button2 button02'>Pending</button>
              <button className='button2 button03'>Compeleted</button>
            </div>
          </div>
        <div className="container-second">
         <div className="">
           <div className='flex space-x-6  mt-8 mx-10'>
              <div className=''>
                 <h1 className='headi'>St Judes Hospital</h1>
                  <span className='para1 -mt'>Sarasota.FL. 33178</span>
               </div>
               <div className='vl'></div>
              <div className='timediv'>
                 <div className='box1 -mt-3'>
                 <h1 className='headi'>10 &nbsp; &nbsp;  - </h1>
                 <span className='para1'>October</span>
                 </div>
                  <div className='box2 -mt-3'>
                 <h1 className='headi'> &nbsp; 7</h1>
                 <span className='para1'> &nbsp; September</span>
                  </div>
               </div>
               <div className='vl'></div>
              <div>
                 <h1 className='headi'>20 Rooms</h1>
                 <p className='para1'>10 Single, 10 Double</p>
               </div>
            </div>
            <div className='w-3/4'>
              <button className=' button04 text-left mt-3 '><p className='mx-4'>COMPLETED</p></button>
            </div>
          </div>
          <div className='2box'>
            <div className='mainbox'>
              
              <div className='maindiv'>

              <div className='divv1'>
                <div className='imgdiv'>
                  <img src='Vector 1.png' alt='Holiday Inn' className='center'></img>
                  <h1 className='text-center holiday1'>Holiday Inn</h1>
                </div>
                <div className='divv01'>
                  <div className="">
                   <div>
                    <h1 className='text-center miles'>1.5 miles away from job location.</h1>
                    </div> 

                    <div className="flex justify-around">
                      <div className='mt-3'>
                        <h1 className='textdiv'>Singles:$120</h1>
                        <h1 className='textdiv'>Double:$145</h1>
                      </div>
                      <div>
                        <button className='btnbook'>Book Now</button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              <div className='divv2'>
                <div className='imgdiv'>
                  <img src='Vector 1.png' alt='Holiday Inn' className='center'></img>
                  <h1 className='text-center holiday1'>Holiday Inn</h1>
                  </div>
                  <div className='divv01'>
                  <div className="">
                   <div>
                    <h1 className='text-center miles'>1.5 miles away from job location.</h1>
                    </div> 

                    <div className="flex justify-around">
                      <div className='mt-3'>
                        <h1 className='textdiv'>Singles:$120</h1>
                        <h1 className='textdiv'>Double:$145</h1>
                      </div>
                      <div>
                        <button className='btnbook'>Book Now</button>
                      </div>
                    </div>

                  </div>

                </div>
                </div>

              <div className='divv3'>
              <div className='imgdiv'>
                <img src='Vector 1.png' alt='Holiday Inn' className='center'></img>
                <h1 className='text-center holiday1'>Holiday Inn</h1>
                </div>
                <div className='divv01'>
                  <div className="">
                   <div>
                    <h1 className='text-center miles'>1.5 miles away from job location.</h1>
                    </div> 

                    <div className="flex justify-around">
                      <div className='mt-3'>
                        <h1 className='textdiv'>Singles:$120</h1>
                        <h1 className='textdiv'>Double:$145</h1>
                      </div>
                      <div>
                        <button className='btnbook'>Book Now</button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              </div>
            
            
            </div>

          </div>
          <div>
                <button className='but1'>Rare Find</button>
              </div>

        </div>
        
        </div> 
    </>
  )
}
