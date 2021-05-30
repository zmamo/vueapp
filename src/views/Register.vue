<!-- S'inscrire  -->
<template>
    <section class="md:bg-main-bg3 bg-cover w-full h-100 min-h-screen">
         <main class="h-100 w-full flex justify-center items-center" roll="form">
                <t-card :classes="{
                body:' bg-white md:py-6',
                wrapper:'w-full mx-2 md:w-3/4 md:shadow-md rounded-2xl overflow-hidden mb-7 mt-10 md:my-10 min-h-70',
                header:''
            }">
                 <template v-solt:header>
                   <div class="py-2 px-4 text-left mb-7">
                       <p class="text-purple-500 uppercase text-3xl sm:text-3xl md:text-3xl md:font-bold mb-2">Register in sKwila &#128509; &#10024;</p>
                       <p class="text-lg  text-gray-400 block w-full md:w-3/4">Easy Way to your dream </p>
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

                    <!-- Start fields 1-->
                    <tab-content 
                        title="Compte" 
                        icon="fas fa-user-alt"
                        :ref="compte"
                    >
                        <div class="flex flex-wrap justify-between">

                            <!-- Email -->
                            <t-input-group label="Email"  class=" w-full md:w-5/12 mb-4"  :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="email" placeholder="email" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500" v-model="user.email"/>
                            </t-input-group>

                            <!-- CIN -->
                          <!--   <t-input-group label="CIN"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                            <t-input type="text" placeholder="CIN" classes="focus:outline-none focus:ring-1
                            focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500" v-model="user.cin"/>
                            </t-input-group> -->

                            <!-- Nom -->
                            <t-input-group label="Nom"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                            <t-input type="text" placeholder="Nom" classes="focus:outline-none focus:ring-1
                            focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500" v-model="user.nom"/>
                            </t-input-group>

                            <!-- Prenom -->
                            <t-input-group label="Prénom"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="text" placeholder="Prénom" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500" v-model="user.prenom"/>
                            </t-input-group>

                            <!-- Sexe -->
                            <t-input-group label="Civilite"  class="w-full md:w-5/12 mb-4 " :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <div class="px-4 p-2 flex justify-start text-gray-400">

                                    <label class="mr-2 md:mr-5">
                                        <t-radio name="civilite" value="masculin" wrapped  :fixedClasses="{
                                        label:'text-red-400',
                                        input: 'transition  duration-200 ease-in-out shadow-sm focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed w-5 h-5',
                                        inputWrapper: 'items-center leading-none',
                                        wrapper: 'w-full items-center'
                                    }" v-model="user.sexe"/>
                                        <span class="ml-2 text-lg">Masculin </span>
                                    </label>
                                    <label class="mr-2 md:mr-5">
                                        <t-radio name="civilite" value="femelle" wrapped  :fixedClasses="{
                                        label:'text-red-400',
                                        input: 'transition  duration-200 ease-in-out shadow-sm focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed w-5 h-5',
                                        inputWrapper: 'items-center leading-none',
                                        wrapper: 'w-full items-center'
                                    }" v-model="user.sexe"/>
                                        <span class="ml-2 text-lg">Femelle</span>
                                    </label>
                                </div>
                            </t-input-group>

                            <!-- Tel -->
                            <t-input-group label="Tel"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="tel" placeholder="+2126000000" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500" v-model="user.tel"/>
                            </t-input-group>

                            <!-- Mot de Pass -->
                             <t-input-group label="Mot de passe"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="text" placeholder="Mot de passe" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500" v-model="user.password"/>
                            </t-input-group>

                            <!-- Confirmer le Mot de Pass -->
                            <t-input-group label="Confirmer le Mote de passe"  class=" w-full md:w-5/12 mb-4" :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="text" placeholder="Confirmer le Mote de passe" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500"/>
                            </t-input-group>
                            
                        </div>
                    </tab-content>
                    <!-- End fields 1-->

                    <!-- Start fields 2-->
                    <tab-content 
                        title="Personnelles" 
                        icon="fas fa-user-graduate"
                        :ref="personnelles"
                        >
                        <div class="flex  flex-wrap justify-between">

                            <!-- formation -->
                             <t-input-group label="Choisir use formation"  class=" w-full md:w-5/12 mb-4 overflow-hidden" :classes="{label:'text-gray-400 text-sm  block text-left'}">

                                <t-select placeholder="Les formations" wrapped :options="['WebMaster','Marketing Digitale','Etude d\'Entrepreneuriat','Création de contenu publicitaire sur les réseaux sociaux']" 
                                :classes="{
                                  input:'focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-3 w-full     focus:shadow-md border border-gray-300 rounded-md ',
                                  wrapper: 'relative ',
                                  arrowWrapper: 'bg-white pointer-events-none absolute inset-y-0 right-0 flex items-center px-2',
                                  arrow: 'fill-current h-4 w-4'                             
                                }" v-model="user.formation"/> 
                            </t-input-group>

                            <!-- type formation -->
                            <t-input-group label="Type"  class="w-full md:w-5/12 mb-4 " :classes="{label:'text-gray-400 text-sm  block text-left'}">

                                <div class="px-4 p-2 flex justify-start focus:shadow-md text-gray-400">
                                    <label class=" mr-2 md:mr-5">
                                        <t-radio name="typeFormation" value="presentielle" wrapped  :fixedClasses="{
                                        label:'text-red-400',
                                        input: 'transition  duration-200 ease-in-out shadow-sm focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed w-5 h-5 ',
                                        inputWrapper: 'items-center leading-none',
                                        wrapper: 'w-full items-center'
                                    }" v-model="user.typeFormation"/>
                                        <span class="ml-2 text-lg">Présentielle</span>
                                    </label>

                                    <label class=" mr-2 md:mr-5">
                                        <t-radio name="typeFormation" value="distance" wrapped  :fixedClasses="{
                                        label:'text-red-400',
                                        input: 'transition  duration-200 ease-in-out shadow-sm focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed w-5 h-5',
                                        inputWrapper: 'items-center leading-none',
                                        wrapper: 'w-full items-center'
                                    }" v-model="user.typeFormation"/>
                                        <span class="ml-2 text-lg">A distance </span>
                                    </label>

                                    <label class=" mr-2 md:mr-5">
                                        <t-radio name="user.typeFormation" value="mixte" wrapped  
                                        :fixedClasses="{
                                        label:'text-red-400',
                                        input: 'transition  duration-200 ease-in-out shadow-sm focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed w-5 h-5',
                                        inputWrapper: 'items-center leading-none',
                                        wrapper: 'w-full items-center'
                                    }" v-model="user.typeFormation"/>
                                        <span class="ml-2 text-lg">Mixte </span>
                                    </label>
                                </div>

                            </t-input-group>


                           <!-- <t-input-group label="Avez-vous un ordinateur?"  class="w-full md:w-5/12 mb-4 " :classes="{label:'text-gray-400 text-sm  block text-left'}">

                                <div class="px-4 p-2 flex justify-start text-gray-400">
                                    <label class=" mr-2 md:mr-5">
                                        <t-radio name="ordinateur" value="oui" wrapped  :fixedClasses="{
                                        label:'text-red-400',
                                        input: 'transition  duration-200 ease-in-out shadow-sm focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed w-5 h-5',
                                        inputWrapper: 'items-center leading-none',
                                        wrapper: 'w-full items-center'
                                    }"/>
                                        <span class="ml-2 text-lg">Oui</span>
                                    </label>

                                    <label class=" mr-2 md:mr-5">
                                        <t-radio name="ordinateur" value="non" wrapped  :fixedClasses="{
                                        label:'text-red-400',
                                        input: 'transition  duration-200 ease-in-out shadow-sm focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed w-5 h-5',
                                        inputWrapper: 'items-center leading-none',
                                        wrapper: 'w-full items-center'
                                    }"/>
                                        <span class="ml-2 text-lg">Non</span>
                                    </label>
                                </div>

                            </t-input-group>

                            <t-input-group label="Type d'ordinateur ?"  class="w-full md:w-5/12 mb-4 " :classes="{label:'text-gray-400 text-sm  block text-left'}">

                                <div class="px-4 p-2 flex justify-start text-gray-400">
                                    <label class=" mr-2 md:mr-5">
                                        <t-radio name="typeordinateur" value="laptop" wrapped  :fixedClasses="{
                                        label:'text-red-400',
                                        input: 'transition  duration-200 ease-in-out shadow-sm focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed w-5 h-5',
                                        inputWrapper: 'items-center leading-none',
                                        wrapper: 'w-full items-center'
                                    }"/>
                                        <span class="ml-2 text-lg">PC portable</span>
                                    </label>

                                    <label class=" mr-2 md:mr-5">
                                        <t-radio name="typeordinateur" value="desktop" wrapped  :fixedClasses="{
                                        label:'text-red-400',
                                        input: 'transition  duration-200 ease-in-out shadow-sm focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed w-5 h-5',
                                        inputWrapper: 'items-center leading-none',
                                        wrapper: 'w-full items-center'
                                    }"/>
                                        <span class="ml-2 text-lg">Ordinateur </span>
                                    </label>

                                </div>

                            </t-input-group> -->

                            <t-input-group label="Niveau"  class=" w-full md:w-5/12 mb-4 overflow-hidden" 
                            :classes="{label:'text-gray-400 text-sm  block text-left'}">

                                <t-select placeholder="Niveau" wrapped :options="['Bac','Bac+2','Bac+3','Niveau Bac','Autre']" 
                                :classes="{
                                  input:'focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-3 w-full     focus:shadow-md border border-gray-300 rounded-md ',
                                  wrapper: 'relative ',
                                  arrowWrapper: 'bg-white pointer-events-none absolute inset-y-0 right-0 flex items-center px-2',
                                  arrow: 'fill-current h-4 w-4'                             
                                }" v-model="user.niveau"/> 
                            </t-input-group>

                             <t-input-group label="Ville"  class=" w-full md:w-5/12 mb-4" 
                                :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-input type="text" placeholder="Ville" classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500" v-model="user.ville"/>
                            </t-input-group>

                        </div>
                    </tab-content>
                    <!-- End fields 2-->

                    <!-- Strat field 3 -->
                    <tab-content
                        title="Formation" 
                        icon="fas fa-user-alt"
                        :ref="formation"
                    >
                        <h1>Table  for formation date </h1>
                    </tab-content>
                    <!-- End field 3 -->

                    <!-- Start field 4 -->
                    <tab-content
                        title="Envoyer" 
                        icon="fas fa-paper-plane"
                        :ref="envoyer"
                    >
                        <t-input-group label="Motivation"  class=" w-full mb-4 h-30"  :classes="{label:'text-gray-400 text-sm  block text-left'}">
                                <t-textarea placholder="Enter your motivation ... " classes="focus:outline-none focus:ring-1 focus:ring-green-200 px-4 p-2 w-full focus:shadow-md border border-gray-300 rounded-md text-gray-500 " maxlenght="500" style="resize: none;height: 9rem" v-model="user.motivation"/>
                            </t-input-group>
                    </tab-content>
                    <!-- End field 4 -->

                </form-wizard>
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


export default {
    name:'Register' ,

    components:{
        FormWizard,
        TabContent,
        TInput,
        TInputGroup,
        TCard,
        TRadio,
        TSelect,
        TTextarea
    },
    data(){
        return{
            user:{
                email:'',
                cin:'',
                nom:'',
                prenom:'',
                sexe:'',
                tel:'',
                password:'',

                formation:'',
                typeFormation:'',
                niveau:'',
                ville:'',

                disponibilites:{

                    lundi:   {matin:false,apre_midi:false,soir:false},
                    mardi:   {matin:false,apre_midi:false,soir:false},
                    mercredi:{matin:false,apre_midi:false,soir:false},
                    jeudi:   {matin:false,apre_midi:false,soir:false},
                    vendredi:{matin:false,apre_midi:false,soir:false},
                    samedi:  {matin:false,apre_midi:false,soir:false},
                    dimanche:{matin:false,apre_midi:false,soir:false},
                },
                motivation:''
            }
        }
    },
    methods:{
        onComplete(){
            alert('done');
            console.log(this.user)
        }
    }
}
</script>
<style scoped>

</style>