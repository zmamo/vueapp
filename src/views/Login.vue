<template>
    <section class="md:bg-main-bg3 bg-cover w-full h-100">
        <main class="h-screen w-full flex justify-center items-center ">
        <TCard :classes="{
            body:'bg-white py-6',
            wrapper:'w-full sm:w-3/4  lg:w-1/3  md:shadow-md rounded-2xl overflow-hidden min-h-3/4 mx-2 sm:mx-4',
            header:''
            }">
            <template v-solt:header>
               <div class="py-2 px-4 text-left mb-7">
                   <p class="text-purple-500 uppercase text-3xl sm:text-3xl md:text-3xl md:font-bold mb-2">Welcome to sKwila &#128508; &#128304;</p>
                   <p class="text-lg  text-gray-400 block w-full md:w-3/4">Please sign-in to your account and start the adventure</p>
               </div> 
            </template>
            <template v-solt:body>
                <TInputgroup label="Email" class=" w-full px-4 mb-7 rounded"
                               :classes="{
                                label:'text-gray-400 block text-sm  text-left'   
                           }"
                    >
                                <TInput type="email" placeholder="exemple@exemple.com" tabindex="1"         classes="font-thin focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500 "/>
                </TInputgroup>
                <TInputgroup label="Password"  class=" w-full px-4 relative"
                                :classes="{
                                label:'text-gray-400 block text-sm  text-left'   
                           }"
                    >
                                <TInput :type="!isVisible?  'password': 'text'" v-model="password" placeholder="Password" classes="font-thin focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500 " maxlength="35"/>
                                <span @click="isVisible = !isVisible" class="absolute top-1/2 right-0 text-purple-500 px-2 cursor-pointer w-10" style="right: 5% ">
                                    <i v-if="!isVisible" class="fas fa-eye-slash"></i>
                                    <i v-if="isVisible" class="fas fa-eye"></i>
                                </span>
                </TInputgroup>
                <div class="w-full p-4  text-purple-500 text-right cursor-pointer flex justify-between">
                    <label class="flex items-center cursor-pointer">
                        <TInput type="checkbox" name="remember-me" value="remember-me" fixedClasses="text-orange-600 border border-red-500" :classes="{
                        default:'border-purple-300 rounded-md shadow-sm transition duration-100 ease-in-out       h-5 w-5  transform focus:border-0 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50  focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed'
                        }"/>
                       <span> &nbsp;Remmber Me</span>
                    </label>
                    <p>Forgot Password?</p>
                </div>
            </template>
            <template v-solt:footer>
               <div class="py-2 px-4 text-xl text-blue-500 ">
                    <TButton classes="bg-purple-500 text-white text-md  block  rounded py-2 px-7 mx-auto w-full focus:outline-none focus:ring focus:border-purple-300">Login</TButton>
               </div> 
               <div class="w-full py-5 flex items-center justify-center text-lg">
                   <span class="block">
                        New on our platform? <router-link to="/register">  <p class="inline-block text-purple-500"> &nbsp;&nbsp; Creat an account</p></router-link>
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
// import TCheckbox from 'vue-tailwind/dist/t-checkbox';


export default {
    name:'Login',
    components:{
        TCard,
        TInputgroup,
        TInput,
        TButton,
        // TCheckbox
    },
    data(){
        return{
            isVisible:false,
            password:""
        }
    }
}
</script>
<style scoped>
.chois-label:before{
    content:'';
    position: absolute;
    width: 6rem;
    height: 1px;
    top: 0.6rem;
    left: 3rem;
    background-color: #000;
}
.chois-label:after{
    content:'';
    position: absolute;
    width: 6rem;
    height: 1px;
    top: 0.6rem;
    right: 3rem;
    background-color: #000;

}
</style>