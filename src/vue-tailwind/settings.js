import {
  TInput,
  TCard,
  TButton,
  TInputGroup,
  TRadio,
  TSelect,
  TTextarea,
  TCheckbox,
  TAlert
} from "vue-tailwind/dist/components";

const settings = {
  "t-input": {
        component: TInput,
        props: {
        fixedClasses:"text-md bg-transprent text-gray-800 border-0 focus:ring-0 bg-white rounded-md ",
        classes: "",
        variants: {
            error  :"text-red-300",
            success:"text-white bg-green-600 hover:bg-green-500 focus:border-green-700 active:bg-green-700 text-sm font-medium border border-transparent py-2 rounded-md",
        }
    } //t-input
  },
  "t-input-group":{
        component:TInputGroup,
        props:{
            fixedClasses:{
                wrapper: 'mb-1',
                label: 'block text-left',
                body: '',
                feedback: ' text-sm text-sm hidden',
                description: 'block text-gray-400 text-sm text-left'
            },
            classes:{
                wrapper: '',
                label: 'block',
                body: '',
                feedback: ' text-sm text-sm',
                description: 'text-gray-400 text-sm'
            },
            variants:{
                danger: {
                    label: 'text-red-500',
                    feedback: 'text-red-500'
                },
                success: {
                    label: 'text-green-500',
                    feedback: 'text-green-500'
                }
            }
        }
  },//t-input-group
    "t-card": {
      component: TCard,
       props:{
          fixedClasses: {
          wrapper: "",
          body:'',
          header: "",
          footer: "",
         },
         classes:{
            wrapper: "shadow-primary bg-purple-300",
            body:'bg-gray-300',
            header: "bg-green-300 text-gray-700",
            footer: "bg-red-200  border-gray-500",
         },
         variants: {
            danger: {
                wrapper:'border border-red-300',
                body:'bg-red-300',
                header: "bg-red-300 text-white",
                footer: "pt-4 border-t border-red-300"
            }
          }//variants
       }
    },//t-card
    't-button':{
        component:TButton,
        props:{
            fixedClasses: 'font-bold text-white p-4 px-8',
            classes:'',
            variants:{
                secondary:'',
                primary:'',
                success:'',
                danger:''
            }
        }
    },//t-button
    't-radio':{
        component:TRadio,
        props:{
            fixedClasses:'text-blue-500 transition duration-100 ease-in-out border-gray-300 shadow-sm focus:border-blue-500  focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
            classes:'text-blue-500 border-gray-300',
            variants:{
                error:'',
                success:''
            }
        }
    },//t-radio
    't-select': {
        component:TSelect,
        props: {
            fixedClasses: 'block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
            classes: 'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
            variants: {
                error: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
                success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900'
            }
        }
    },//t-select
    't-textarea': {
        component:TTextarea,
        props:{
            fixedClasses: 'block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
            classes: 'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
            variants: {
                danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
                success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900'
            }
        }
    },// t-teaxtarea
    't-checkbox': {
        component: TCheckbox,
        props: {
          fixedClasses: 'transition duration-100 ease-in-out rounded shadow-sm focus:border-blue-500 focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed bg-red-300',
          classes: 'text-blue-500 border-gray-300 p-4',
          variants: {
            error: 'text-red-500 border-red-300',
            success: 'text-green-500 border-green-300'
          }
        }
      },//t-checkbox
      't-alert': {
        component: TAlert,
        props: {
          fixedClasses: {
            wrapper: 'relative flex items-center p-4 border-l-4  rounded shadow-sm',
            body: 'flex-grow',
            close: 'absolute relative flex items-center justify-center ml-4 flex-shrink-0 w-6 h-6 transition duration-100 ease-in-out rounded  focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
            closeIcon: 'fill-current h-4 w-4'
          },
          classes: {
            wrapper: 'bg-blue-50 border-blue-500',
            body: 'text-blue-700',
            close: 'text-blue-500 hover:bg-blue-200'
          },
          variants: {
            danger: {
              wrapper: 'bg-red-50 border-red-500',
              body: 'text-red-700',
              close: 'text-red-500 hover:bg-red-200'
            },
            success: {
              wrapper: 'bg-green-50 border-green-500',
              body: 'text-green-700',
              close: 'text-green-500 hover:bg-green-200'
            }
          }
        }
      }





}//settings const




export default settings;