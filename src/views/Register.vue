<template>
    <section class="md:bg-main-bg3 bg-cover w-full h-100">
        <main class="h-100 w-full flex justify-center items-center border">
        <TCard :classes="{
            body:'bg-white py-6 px-6',
            wrapper:'w-full mx-2 md:w-3/4 md:shadow-md rounded-2xl overflow-hidden my-7 md:my-10 min-h-70',
            header:''
            }">
            <template v-solt:header>
               <div class="py-2 px-4 text-left mb-7">
                   <p class="text-purple-500 uppercase text-3xl sm:text-3xl md:text-3xl md:font-bold mb-2">Register in sKwila &#128509; &#10024;</p>
                   <p class="text-lg  text-gray-400 block w-full md:w-3/4">Easy Way to your dream </p>
               </div> 
            </template>
            <template v-solt:body>
                <div class="flex flex-wrap justify-between">
                    <TInputgroup label="Email"  class=" w-full md:w-5/12"  :classes="{label:'text-gray-400 text-sm md:text-lg block text-left'}">
                                <TInput type="email" placeholder="email" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300"/>
                    </TInputgroup>
                     <TInputgroup label="Username"  class=" w-full md:w-5/12"  :classes="{label:'text-gray-400 text-sm md:text-lg block text-left'}">
                                <TInput type="text" placeholder="@username" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300"/>
                    </TInputgroup>
                    <TInputgroup label="Nom"  class=" w-full md:w-5/12" :classes="{label:'text-gray-400 text-sm md:text-lg block text-left'}">
                            <TInput type="text"  placeholder="Nom" classes="focus:outline-none focus:ring-1
                            focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300"/>
                    </TInputgroup>

                    <TInputgroup label="Prénom"  class=" w-full md:w-5/12" :classes="{label:'text-gray-400 text-sm md:text-lg block text-left'}">
                            <TInput type="text" placeholder="Prénom" classes="focus:outline-none focus:ring-1
                            focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300"/>
                    </TInputgroup>

                    <TInputgroup label="Civilite"  class="w-full md:w-5/12" :classes="{label:'text-gray-400 text-sm md:text-lg block text-left'}">
                        <div class="px-4 p-2 flex justify-around focus:shadow-md border border-gray-300 rounded ">
                            <label class="">
                                <t-radio name="options" value="a" checked />
                                <span class="ml-2 text-sm">Male</span>
                            </label>
                            <label class="">
                                <t-radio name="options" value="b" />
                                <span class="ml-2 text-sm">Femmale</span>
                            </label>
                        </div>
                    </TInputgroup>

                    <TInputgroup label="Tél"  class=" w-full md:w-5/12" :classes="{label:'text-gray-400 text-sm md:text-lg block text-left'}">
                            <TInput type="tel" placeholder="+(212)000 000 000" classes="focus:outline-none focus:ring-1
                            focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300"/>
                    </TInputgroup>

                     <TInputgroup label="Password"  class=" w-full md:w-5/12" :classes="{label:'text-gray-400 text-sm md:text-lg block text-left'}">
                            <TInput type="password" placeholder="*************"  maxlength="35" classes="focus:outline-none focus:ring-1
                            focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300"/>
                    </TInputgroup>
                    <TInputgroup label="Confirme Password"  class=" w-full md:w-5/12" :classes="{label:'text-gray-400 text-sm md:text-lg block text-left'}">
                            <TInput type="password" placeholder="*************" classes="focus:outline-none focus:ring-1
                            focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300"/>
                    </TInputgroup>
                </div>
            </template>
             <template v-solt:footer>
               <div class="py-2  text-xl text-blue-500 mt-7 ">
                    <t-button classes="bg-purple-500 text-white text-md  block  rounded py-2 px-7 mx-auto w-full focus:outline-none focus:ring focus:border-purple-300">Login</t-button>
               </div> 
               <div class="w-full py-5 flex items-center justify-center text-lg">
                   <span class="block">
                        Already have an account?  <router-link to="/login">  <p class="inline-block text-purple-500"> &nbsp;&nbsp; Sign in instead</p></router-link>
                   </span>
               </div>
            </template>
        </TCard>
     </main>
    </section>
</template>

<script>
import TCard from 'vue-tailwind/dist/t-card';
import TInputgroup from 'vue-tailwind/dist/t-input-group';
import TInput from 'vue-tailwind/dist/t-input';
import TButton from 'vue-tailwind/dist/t-button';

export default {
    name:'Register' ,
    components:{
        TInput,
        TInputgroup,
        TButton,
        TCard
    },
}
</script>
<style scoped>

</style>