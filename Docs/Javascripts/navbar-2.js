const navbar = document.getElementById("navbar")

navbar.innerHTML = `

   <div id="bgNav" class="bg-white z-50 fixed w-full top-0">
    <div class="flex items-center justify-between max-w-7xl w-full mx-auto p-5">
        <a class="" href="./index.html">
            <img src="https://capitaldoo.com/trading-platform/metatrader5/images/Man_Utd_x_Doo_Prime_desktop.png"
                class="md:h-12 h-8" alt="">
        </a>
        <ul class=" items-center justify-center gap-8 lg:flex hidden ">
            <li> <a href="./index.html" class="hover:text-indigo-600 transition-all duration-500">
                    Home</a></li>
            <li class="flex group cursor-pointer items-center gap-2 relative "> Market <i
                    class="fa-solid fa-caret-down group-hover:rotate-180 transition-all duration-300"></i>
                <div class="absolute fadeIn group-hover:block  pt-5 top-5 left-0 hidden w-60">
                    <div class="text-[#1d1d1d] overflow-hidden border border-[#1d1d1d] w-full rounded-lg bg-white z-40">
                        <ul>
                            <li><a href="./securities.html"
                                    class="px-5 py-2 block pt-5  hover:text-indigo-600 transition-all duration-500 ">
                                    Securities </a></li>
                            <li><a href="./futures.html"
                                    class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    Futures </a></li>
                            <li><a href="./forex.html"
                                    class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    Forex </a></li>
                            <li><a href="./precious-metal.html"
                                    class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    Precious Metal </a></li>
                            <li><a href="./commodities.html"
                                    class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    Commodities </a></li>
                            <li><a href="./stock-indices.html"
                                    class="px-5 py-2 pb-5   hover:text-indigo-600 transition-all duration-500 block">
                                    Stock Indices </a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="flex group cursor-pointer items-center gap-2 relative "> Tools <i
                    class="fa-solid fa-caret-down group-hover:rotate-180 transition-all duration-300"></i>
                <div class="absolute fadeIn group-hover:block  pt-5 top-5 left-0 hidden w-60">
                    <div class="text-[#1d1d1d] overflow-hidden border border-[#1d1d1d] w-full rounded-lg bg-white z-40">
                        <ul>
                            <li><a href="./vps.html"
                                    class="px-5 py-2 block pt-5 hover:text-indigo-600 transition-all duration-500 ">
                                    vps </a></li>
                            <li><a href="./mt4-vs-mt5.html"
                                    class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    Mt4 vs Mt5 </a></li>
                                    <li><a href="./metatrader4.html"
                                    class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    Metatrader 4 </a></li>
                                    <li><a href="./metatrader5.html"
                                            class="px-5 py-2 block pb-5 hover:text-indigo-600 transition-all duration-500 ">
                                            Metatrader 5 </a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="flex group cursor-pointer items-center gap-2 relative "> Trading <i
                    class="fa-solid fa-caret-down group-hover:rotate-180 transition-all duration-300"></i>
                <div class="absolute fadeIn group-hover:block  pt-5 top-5 left-0 hidden w-60">
                    <div class="text-[#1d1d1d] overflow-hidden border border-[#1d1d1d] w-full rounded-lg bg-white z-40">
                        <ul>
                            <li><a href="./pricing.html"
                                    class="px-5 py-2 block pt-5 hover:text-indigo-600 transition-all duration-500 ">
                                    Pricing-model </a></li>
                            <li><a href="./technology.html"
                                    class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    Technology </a></li>
                            <li><a href="./account.html"
                                    class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    Account </a></li>
                            <li><a href="./funding.html"
                                    class="px-5 py-2 pb-5   hover:text-indigo-600 transition-all duration-500 block">
                                    Funding </a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="flex group cursor-pointer items-center gap-2 relative "> partnership <i
                    class="fa-solid fa-caret-down group-hover:rotate-180 transition-all duration-300"></i>
                <div class="absolute fadeIn group-hover:block  pt-5 top-5 left-0 hidden w-60">
                    <div class="text-[#1d1d1d] overflow-hidden border border-[#1d1d1d] w-full rounded-lg bg-white z-40">
                        <ul>
                            <li><a href="./affiliates.html"
                                    class="px-5 py-2 pt-5   hover:text-indigo-600 transition-all duration-500 block">
                                    Affiliates </a></li>
                            <li><a href="./ibs.html"
                                    class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    IBS </a></li>
                            <li><a href="./compliance.html"
                                    class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    Compliance </a></li>
                            <li><a href="./csr.html"
                                    class="px-5 pb-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    CSR </a></li>
                        </ul>
                    </div>
                </div>
            </li>

            <li class="flex group cursor-pointer items-center gap-2 relative "> About Us <i
                    class="fa-solid fa-caret-down group-hover:rotate-180 transition-all duration-300"></i>
                <div class="absolute fadeIn group-hover:block  pt-5 top-5 left-0 hidden w-72">
                    <div class="text-[#1d1d1d] overflow-hidden border border-[#1d1d1d] w-full rounded-lg bg-white z-40">
                        <ul>
                            <li><a href="./contactUs.html"
                                    class="px-5 py-2 pt-5   hover:text-indigo-600 transition-all duration-500 block">
                                    Contact Us </a></li>
                            <li><a href="./about-us.html"
                                    class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    Our Story </a></li>
                            <li><a href="#" class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    Risk Disclosure </a></li>
                            <li><a href="#" class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                    Coporate Social Responsibilty </a></li>
                        </ul>
                    </div>
                </div>
            </li>

        </ul>
        <button
            class="px-10 p-2.5 rounded-lg border-2 text-white  lg:block hidden bg-indigo-600 border-indigo-600 font-medium transition-all duration-500 hover:bg-transparent hover:text-indigo-600">Login</button>
        <i class="fa-solid fa-bars text-2xl cursor-pointer lg:hidden" id="openNav"></i>
    </div>
</div>

<div style="width: 0;" id="resNav"
    class="fixed transition-all duration-500 overflow-hidden h-screen top-0 left-0 bg-white z-50">
    <div class="">
        <div class="flex p-5 items-center justify-between">
            <a href="./index.html">
                <img src="https://capitaldoo.com/trading-platform/metatrader5/images/Man_Utd_x_Doo_Prime_desktop.png"
                    class="h-9" alt="logo">
            </a>
            <i id="closeNav" class="fa-solid fa-x text-xl"></i>
        </div>

        <div class="mt-8 text-nowrap px-5 w-full flex flex-col gap-10 justify-between h-[80vh] overflow-auto">
            <ul class="  flex-col gap-8 flex ">
                <li class="bg-white " x-data="accordion(1)">
                    <h2 @click="handleClick()"
                        class="flex flex-row justify-between items-center font-medium  cursor-pointer">
                        <span>Market</span>
                        <i :class="handleRotate()" class="fa-solid fa-angle-down transition-all duration-500"></i>
                    </h2>
                    <div x-ref="tab" :style="handleToggle()"
                        class="overflow-hidden max-h-0 duration-500 transition-all">
                        <div
                            class="text-[#1d1d1d] overflow-hidden border border-[#1d1d1d] w-full rounded-lg bg-white mt-5">
                            <ul>
                                <li><a href="./securities.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        securities </a></li>
                                <li><a href="./futures.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Futures </a></li>
                                <li><a href="./commodities.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        commodities </a></li>
                                <li><a href="./forex.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Forex </a></li>
                                <li><a href="./precious-metal.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Precious Metal </a></li>
                                <li><a href="./commodities.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Commodities </a></li>
                                <li><a href="./stock-indices.html"
                                        class="px-5 py-2    hover:text-indigo-600 transition-all duration-500 block">
                                        Stock Indices </a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="bg-white " x-data="accordion(2)">
                    <h2 @click="handleClick()"
                        class="flex flex-row justify-between items-center font-medium  cursor-pointer">
                        <span>Tools</span>
                        <i :class="handleRotate()" class="fa-solid fa-angle-down transition-all duration-500"></i>
                    </h2>
                    <div x-ref="tab" :style="handleToggle()"
                        class="overflow-hidden max-h-0 duration-500 transition-all">
                        <div
                            class="text-[#1d1d1d] overflow-hidden border border-[#1d1d1d] w-full rounded-lg bg-white mt-5">
                            <ul>
                                <li><a href="./vps.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        vps </a></li>
                                <li><a href="./mt4-vs-mt5.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Mt4-vs-mt5 </a></li>
                                <li><a href="./metatrader5.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Metatrader 5 </a></li>
                                <li><a href="./metatrader4.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Metatrader 4 </a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="bg-white " x-data="accordion(3)">
                    <h2 @click="handleClick()"
                        class="flex flex-row justify-between items-center font-medium  cursor-pointer">
                        <span>Trading</span>
                        <i :class="handleRotate()" class="fa-solid fa-angle-down transition-all duration-500"></i>
                    </h2>
                    <div x-ref="tab" :style="handleToggle()"
                        class="overflow-hidden max-h-0 duration-500 transition-all">
                        <div
                            class="text-[#1d1d1d] overflow-hidden border border-[#1d1d1d] w-full rounded-lg bg-white mt-5">
                            <ul>
                                <li><a href="./pricing.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Pricing-model </a></li>
                                <li><a href="./technology.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Technology </a></li>
                                <li><a href="./account.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Account </a></li>
                                <li><a href="./funding.html"
                                        class="px-5 py-2   hover:text-indigo-600 transition-all duration-500 block">
                                        Funding </a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="bg-white " x-data="accordion(4)">
                    <h2 @click="handleClick()"
                        class="flex flex-row justify-between items-center font-medium  cursor-pointer">
                        <span>Partnership</span>
                        <i :class="handleRotate()" class="fa-solid fa-angle-down transition-all duration-500"></i>
                    </h2>
                    <div x-ref="tab" :style="handleToggle()"
                        class="overflow-hidden max-h-0 duration-500 transition-all">
                        <div
                            class="text-[#1d1d1d] overflow-hidden border border-[#1d1d1d] w-full rounded-lg bg-white mt-5">
                            <ul>
                                <li><a href="./affiliates.html"
                                        class="px-5 py-2   hover:text-indigo-600 transition-all duration-500 block">
                                        Affiliates </a></li>
                                <li><a href="./ibs.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        IBS </a></li>
                                <li><a href="./compliance.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Compliance </a></li>
                                <li><a href="./csr.html"
                                        class="px-5  py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        CSR </a></li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li class="bg-white " x-data="accordion(4)">
                    <h2 @click="handleClick()"
                        class="flex flex-row justify-between items-center font-medium  cursor-pointer">
                        <span>About Us</span>
                        <i :class="handleRotate()" class="fa-solid fa-angle-down transition-all duration-500"></i>
                    </h2>
                    <div x-ref="tab" :style="handleToggle()"
                        class="overflow-hidden max-h-0 duration-500 transition-all">
                        <div
                            class="text-[#1d1d1d] overflow-hidden border border-[#1d1d1d] w-full rounded-lg bg-white mt-5">
                            <ul>
                                <li><a href="./contactUs.html"
                                        class="px-5 py-2   hover:text-indigo-600 transition-all duration-500 block">
                                        Contact Us </a></li>
                                <li><a href="./about-us.html"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Our Story </a></li>
                                <li><a href="#"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Risk Disclosure </a></li>
                                <li><a href="#"
                                        class="px-5 py-2 block  hover:text-indigo-600 transition-all duration-500 ">
                                        Coporate Social Responsibilty </a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li> <a href="./compliance.html" class="hover:text-indigo-600 transition-all duration-500">
                        Compliance</a></li>
                <li> <a href="./csr.html" class="hover:text-indigo-600 transition-all duration-500"> Csr</a></li>
            </ul>

            <button
                class="px-10 p-2.5 rounded-lg border-2 text-white bg-indigo-600 border-indigo-600 font-medium transition-all duration-500 hover:bg-transparent hover:text-indigo-600">Login</button>
        </div>

    </div>
</div>
`

const closeNav = document.getElementById("closeNav")
const openNav = document.getElementById("openNav")
const resNav = document.getElementById("resNav")

openNav.addEventListener('click', () => {
    resNav.style.width = "100%"
})
closeNav.addEventListener('click', () => {
    resNav.style.width = "0%"
})


// document.addEventListener("DOMContentLoaded", function () {
//     const bgNav = document.getElementById("bgNav");

//     if (!bgNav) {
//         console.error("bgNav element not found!");
//         return;
//     }

//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 40) {
//             bgNav.classList.add("bg-black", "transition-colors", "duration-300");
//         } else {
//             bgNav.classList.remove("bg-black");
//         }
//     });
// });

