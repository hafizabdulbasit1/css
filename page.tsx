
import Link from "next/link"
import Image from "next/image"


export default function Head() {
    return (

        <div className="">
            <nav className="px-3 py-3  bg-purple-900 text-white flex justify-between" >
                <span className="text-xl flex items-center font-bold">Consistency</span>
                <ul className="flex px-20 py-4 justify-end"  >
                    <li className="px-5 cursor-progress hover:bg-fuchsia-100 hover:text-purple-600 rounded-2xl font-bold"><Link href="about">home</Link></li>
                    <li className="px-5 cursor-progres hover:bg-fuchsia-100 hover:text-purple-600 rounded-2xl font-bold"   ><Link href="career">about</Link></li>
                    <li className="px-5 cursor-progress  hover:bg-fuchsia-100 hover:text-purple-600 rounded-2xl font-bold"><Link href="/">career</Link></li>
                </ul>
            </nav>

            <main className="bg-fuchsia-100 flex justify-around">
                <div className="main bg-red-100 h-96 py-80 pt-44">
                    <div className="text-7xl ">
                        This is low the model..
                    </div>
                    <p > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus architecto, eos accusamus earum<br /> omnis veniam deleniti, quaerat placeat perspiciatis quae suscipit vel.
                    </p>
                    <div className="buttons">
                        <button className="bg-red-600 px-3 py-2  rounded-2xl cursor-progress  hover:bg-purple-300 text-white hover:text-purple-900 mx-2 " >say wow!</button>
                        <button className="bg-red-600 px-3 py-2  rounded-2xl cursor-progress  hover:bg-purple-300 text-white hover:text-purple-900 mx-2 my-3"> or say how!</button>
                    </div>

                </div>
                <div className="flex items-center">
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSg7AylNfalLhVHtzAvnSMVsJDnqQaCkMFyQ&s" alt="dasd" /> */}
                </div>
            </main>

            <section className="bg-purple-600   text-white py-16" >
                <h2 className="flex justify-center text-black font-bold py-2">About my Website</h2>
                <p className="px-7 py-9 pt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique harum ipsam temporibus error itaque corporis neque, animi quibusdam voluptates provident voluptatum delectus aut cum molestias eligendi quisquam, eaque exercitationem, omnis autem! Quod recusandae quisquam eveniet facilis consequatur quia, maxime incidunt iure perspiciatis illum minima perferendis in ad deserunt consequuntur.</p>
         
            
            </section>
            <footer className="bg-slate-950 text-white ">
                <div className="flex justify-around">
                <div>
                    <h3 className="font-bold">company</h3>
                    <ul>
                    <li>About us more</li>
                    <li>pur goals</li>
                    <li> services</li>
                    </ul>
                </div>
                <div>
                    <h3  className="font-bold">Get help to us</h3>
                    <ul>
                    <li>contact us</li>
                    <li>020 40400404</li>
                    <li> www.cyber.com</li>
                    </ul>
                </div>
                <div>
                    <h3  className="font-bold">Adress of company</h3>
                    <ul>
                    <li>Pakistan</li>
                    <li>karachi</li>
                    <li> PECHS</li>
                    </ul>
                </div>
            </div>

                <div >
                
                <p className="text-center font-extrabold">  @ All RIGHT RESERVESD to hafizabdulbasitt1@gmail.com</p>
                </div>
            </footer>
        </div>
    )
}