<!-- nous rejoindre -->
<template>
    <section class="w-full h-100  md:bg-main-bg3 bg-cover ">
           <main class="h-100 w-full flex justify-center items-center">
                <t-card :classes="{
                body:' bg-white md:py-6',
                wrapper:'w-full mx-2 md:w-3/4 md:shadow-md rounded-2xl overflow-hidden mb-7 mt-10 md:my-10 min-h-70',
                header:''
            }">
                <template v-solt:header>
                   <div class="py-2 px-4 text-left mb-1 md:ml-8">
                       <p class="text-purple-500 uppercase text-3xl sm:text-3xl md:text-3xl md:font-bold mb-2">Rejoindre sKwila</p>
                       <p class="text-lg  text-gray-400 block w-full md:w-3/4">Rejoigner notre équipe, nous serons heureux do votre adhésion &#9997;</p>
                   </div> 
                </template>
                <form-wizard @on-complete="onComplete"
                    title=""
                    subtitle=""
                    back-button-text="Précédent"
                    next-button-text="Suivant"
                    finish-button-text="Fin"
                    color='#8b5cf6'
                    errorColor='#8b0000'
                >
                    <tab-content 
                        title="Personal détails" 
                        icon="fas fa-user-alt"
                        :ref="personaldetails"
                        
                    >
                        <div class="flex flex-wrap justify-between">

                            <t-input-group label="Civilite"  class="w-full md:w-5/12 mb-4 " :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <div class="px-4 p-2 flex justify-around focus:shadow-md">
                                    <label class="">
                                        <t-radio name="options" value="a" label="Male" wrapped :fixedClasses="{
                                      input:'text-purple-500 transition duration-100 ease-in-out border-purple-400  w-5 h-5 shadow-sm  focus:ring-1 focus:ring-purple-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
                                      label:'ml-1 text-md checked:text-purple-500 font-custom font-thin'
                                          }"/>
                                    </label>
                                    <label class="">
                                        <t-radio name="options" value="b" wrapped label="Femmale" :fixedClasses="{
                                      input:'text-purple-500 transition duration-100 ease-in-out border-purple-400  w-5 h-5 shadow-sm  focus:ring-1 focus:ring-purple-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
                                      label:'ml-1 text-md text-purple-500 font-custom font-thin'
                                          }" />
                                    </label>
                                </div>
                            </t-input-group>
                            <t-input-group label="Email"  class=" w-full md:w-5/12 mb-4"  :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="email" placeholder="email" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500"/>
                            </t-input-group>

                            <t-input-group label="Nom"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                            <t-input type="text" placeholder="Nom" classes="focus:outline-none focus:ring-1
                            focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500"/>
                            </t-input-group>

                            <t-input-group label="Prénom"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="text" placeholder="Prénom" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500"/>
                            </t-input-group>
                            
                            <t-input-group label="Tel"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="tel" placeholder="+2126000000" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500"/>
                            </t-input-group>
                            <t-input-group label="Fix"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="tel" placeholder="+2125000000" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500"/>
                            </t-input-group>
                             <t-input-group label="Adress"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="text" placeholder="Adress" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500"/>
                            </t-input-group>
                             <t-input-group label="Ville"  class=" w-full md:w-5/12 mb-4 overflow-hidden" :classes="{label:'text-gray-400 text-sm  block text-left'}">

                                <t-select placeholder="Ville" wrapped :options="['Agadir','CasaBlanca','Rabat']" 
                                :classes="{
                                  input:'focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-3 w-full     focus:shadow-md border border-gray-300 rounded-md ',
                                  wrapper: 'relative ',
                                  arrowWrapper: 'bg-white pointer-events-none absolute inset-y-0 right-0 flex items-center px-2',
                                  arrow: 'fill-current h-4 w-4'                             
                                }"/>
                            </t-input-group>
                        </div>
                    </tab-content><!--first tab-->

                    <tab-content 
                        title="Information professionnelle" 
                        icon="fas fa-user-tie"
                        :ref="personaldetails"
                        >
                        <div class="flex flex-wrap justify-between">
                            <t-input-group label="Post"  class=" w-full md:w-5/12 mb-4 text-gray-300 focus:text-gray-500 overflow-hidden" :classes="{label:'text-gray-400 text-sm  block text-left'}">

                                <t-select placeholder="Post" wrapped :options="['Stage','Emploi','Etudei']" :classes="{
                                  input:'focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-3 w-full focus:shadow-md border border-gray-300 rounded-md ',
                                  wrapper: 'relative ',
                                  arrowWrapper: 'bg-white w-5 h-1/2 my-auto  pointer-events-none absolute inset-y-0 right-1 flex items-center px-1 ',
                                  arrow: 'fill-current h-100 w-4'

                                }"/>
                            </t-input-group>
                            <t-input-group label="Fichier"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <TButton classes="px-4 overflow-hidden p-1 w-full bg-purple-400 text-lg text-white relative focus:outline-none rounded-md ">
                                    Telecharger votre CV
                                <t-input type="file" placeholder="exemple" title="Telecharger votre CV" classes="focus:outline-none absolute  w-full focus:shadow-md border opacity-0 top-0 left-0"/> 
                               <span class="absolute bottom-0 left-0 w-1/2 h-1 bg-green-100">
                                 <!-- this span for showing the status of upload :)  -->
                               </span> 
                                </TButton>
                            </t-input-group>

                            <t-input-group label="Exemple"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="text" placeholder="exemple" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500"/>
                            </t-input-group>

                            <t-input-group label="Exemple"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="text" placeholder="exemple" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500"/>
                            </t-input-group>
                            <t-input-group label="Motivation"  class=" w-full mb-4 h-30"  :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-textarea placholder="Enter your motivation ... " classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500 " maxlenght="500" style="resize: none;height: 9rem"/>
                            </t-input-group>
                        </div>
                    </tab-content><!--second tab-->
                </form-wizard>
               
               <!-- <template v-slot:footer>

                    <div class="">
                        <t-input value="Hello World wsaap !" classes="bg-transprent"/>
                        <t-button classes="bg-blue-500 text-white font-bold block m-4 rounded py-2 px-7">Submit</t-button>
                    </div>
               </template> -->
            </t-card>            
           </main>
    </section>
</template>


<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import TCard from 'vue-tailwind/dist/t-card';
import TInputGroup from 'vue-tailwind/dist/t-input-group';
import TInput from 'vue-tailwind/dist/t-input';
import TRadio from 'vue-tailwind/dist/t-radio'
import TSelect from 'vue-tailwind/dist/t-select'
import TTextarea from 'vue-tailwind/dist/t-textarea'
// import TAlert from 'vue-tailwind/dist/t-alert'
import TButton from 'vue-tailwind/dist/t-button'
export default {
    name:'JoinUs',
    components: {
          FormWizard,
          TabContent,
          TCard,
          TInputGroup,
          TInput,
          TRadio,
          TSelect,
          TTextarea,
          // TAlert,
          TButton
    },
    methods: {
      onComplete(){
         return  this.$router.push('/login');
      },
      validatFirstTabe(){
        //   this.$refs.personalInfo.validate()
          return true;
      }
  },
  
    data(){
        return{
            
    }
    }
}
</script>